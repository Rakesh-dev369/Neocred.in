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
  CloudIcon,
  DocumentTextIcon,
  ScaleIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';

export default function InsuranceRiskManagement() {
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
      title: 'Introduction to Insurance & Risk Management', 
      icon: ShieldCheckIcon, 
      emoji: '🛡️', 
      level: 'foundation',
      duration: '8 min read',
      difficulty: 'Beginner',
      description: 'Understanding protection against financial losses and uncertainties'
    },
    { 
      id: 'core-components', 
      title: 'Core Components of Insurance & Risk Management', 
      icon: ChartBarIcon, 
      emoji: '🎯', 
      level: 'foundation',
      duration: '12 min read',
      difficulty: 'Beginner',
      description: 'Essential elements of risk protection and insurance systems'
    },
    { 
      id: 'types-insurance', 
      title: 'Types of Insurance', 
      icon: DocumentTextIcon, 
      emoji: '📋', 
      level: 'foundation',
      duration: '18 min read',
      difficulty: 'Beginner',
      description: 'Comprehensive coverage options for different risks'
    },
    { 
      id: 'risk-management', 
      title: 'Risk Management Principles', 
      icon: ScaleIcon, 
      emoji: '⚖️', 
      level: 'foundation',
      duration: '15 min read',
      difficulty: 'Beginner',
      description: 'Systematic approach to identifying and managing risks'
    },
    // Intermediate Level
    { 
      id: 'underwriting-pricing', 
      title: 'Insurance Underwriting and Pricing', 
      icon: CurrencyRupeeIcon, 
      emoji: '💰', 
      level: 'intermediate',
      duration: '16 min read',
      difficulty: 'Intermediate',
      description: 'How insurers assess risk and determine premiums'
    },
    { 
      id: 'claims-management', 
      title: 'Claims Management and Settlement', 
      icon: CogIcon, 
      emoji: '⚙️', 
      level: 'intermediate',
      duration: '14 min read',
      difficulty: 'Intermediate',
      description: 'Process of filing and settling insurance claims'
    },
    { 
      id: 'regulatory-framework', 
      title: 'Regulatory Framework', 
      icon: BuildingLibraryIcon, 
      emoji: '🏛️', 
      level: 'intermediate',
      duration: '16 min read',
      difficulty: 'Intermediate',
      description: 'Insurance regulation and consumer protection'
    },
    // Advanced Level
    { 
      id: 'modern-trends', 
      title: 'Modern Trends in Insurance & Risk Management', 
      icon: SparklesIcon, 
      emoji: '🚀', 
      level: 'advanced',
      duration: '20 min read',
      difficulty: 'Advanced',
      description: 'Digital transformation and emerging technologies'
    },
    { 
      id: 'challenges', 
      title: 'Challenges in Insurance & Risk Management', 
      icon: ExclamationTriangleIcon, 
      emoji: '⚠️', 
      level: 'advanced',
      duration: '14 min read',
      difficulty: 'Advanced',
      description: 'Current challenges and future solutions'
    },
    // Advanced Level (continued)
    { 
      id: 'global-perspectives', 
      title: 'Global Perspectives in Insurance', 
      icon: GlobeAltIcon, 
      emoji: '🌍', 
      level: 'advanced',
      duration: '16 min read',
      difficulty: 'Advanced',
      description: 'International insurance markets and global trends'
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
      description: 'Key insights and future of insurance & risk management'
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
      name: 'Personal Finance', 
      path: '/learn/personal-finance', 
      icon: '💰',
      description: 'Individual financial management'
    },
    { 
      name: 'Banking & Payments', 
      path: '/learn/banking-payments', 
      icon: '🏦',
      description: 'Financial infrastructure and payments'
    },
    { 
      name: 'Investments & Capital Markets', 
      path: '/learn/investments', 
      icon: '📈',
      description: 'Investment strategies and markets'
    },
    { 
      name: 'Government & Public Finance', 
      path: '/learn/government-finance', 
      icon: '🏛️',
      description: 'Public policy and government schemes'
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Insurance & Risk Management</h1>
              <p className="text-blue-100">Pillar 3 of 8 • Financial Protection • 11 Sections • 2025 Updated</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/learn/investments"
                className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
              >
                Next: Investments & Capital Markets
                <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
              </Link>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <ShieldCheckIcon className="h-8 w-8" />
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
                      <ShieldCheckIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introduction to Insurance & Risk Management</h2>
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
                      What is Insurance & Risk Management?
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                      Insurance and risk management involve protecting individuals, businesses, and organizations against financial losses arising from unforeseen events. Insurance transfers risk from the insured to insurers in exchange for a premium, while risk management identifies, assesses, and mitigates potential threats. Together, they ensure financial stability, security, and continuity in personal, corporate, and societal contexts.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h4 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center">
                        <TrophyIcon className="h-5 w-5 mr-2" />
                        Why Insurance & Risk Management Matter
                      </h4>
                      <ul className="space-y-3 text-green-700 dark:text-green-300">
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Financial Protection:</strong> Safeguards against unexpected losses and expenses</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Peace of Mind:</strong> Reduces anxiety about potential financial disasters</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Business Continuity:</strong> Ensures operations can continue after setbacks</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Economic Stability:</strong> Contributes to overall financial system resilience</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-4 flex items-center">
                        <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                        Indian Insurance Context (2025)
                      </h4>
                      <ul className="space-y-3 text-orange-700 dark:text-orange-300">
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-orange-500" />
                          <span><strong>Market Size:</strong> ₹8+ lakh crore insurance industry</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-orange-500" />
                          <span><strong>Penetration:</strong> 4.2% of GDP (global average: 7.4%)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-orange-500" />
                          <span><strong>Growth Rate:</strong> 15-20% annual growth in digital insurance</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-orange-500" />
                          <span><strong>Opportunity:</strong> 1.4 billion population, growing middle class</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300">
                      Insurance and risk management are not just financial products—they're essential tools for building resilience and security. In an uncertain world, they provide the foundation for confident decision-making, enabling individuals and businesses to pursue opportunities while protecting against potential losses.
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Core Components of Insurance & Risk Management</h2>
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
                    The insurance and risk management ecosystem consists of interconnected components that work together to identify, assess, and mitigate risks while providing financial protection. Understanding these core elements is essential for effective risk management and insurance planning.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🔍 Risk Identification & Assessment</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Financial Risks</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Market volatility, credit defaults, liquidity shortages</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Operational Risks</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">System failures, human errors, process breakdowns</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Strategic Risks</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Business model changes, competitive threats, regulatory shifts</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Hazard Risks</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Natural disasters, accidents, theft, health issues</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">📜 Insurance Products</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Life Insurance</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Term, whole life, endowment, ULIPs for life protection</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Health Insurance</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Medical expenses, critical illness, hospitalization coverage</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Property & Casualty</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Home, auto, business property protection</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Liability Coverage</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Professional indemnity, public liability, D&O insurance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">💰 Underwriting & Premiums</h3>
                      <ul className="space-y-2 text-purple-700 dark:text-purple-300">
                        <li>• Risk assessment and evaluation</li>
                        <li>• Premium calculation methods</li>
                        <li>• Policy terms and conditions</li>
                        <li>• Coverage limits and deductibles</li>
                        <li>• Renewal and modification processes</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">⚙️ Claims & Settlement</h3>
                      <ul className="space-y-2 text-orange-700 dark:text-orange-300">
                        <li>• Claim notification procedures</li>
                        <li>• Documentation requirements</li>
                        <li>• Investigation and assessment</li>
                        <li>• Settlement and payment process</li>
                        <li>• Dispute resolution mechanisms</li>
                      </ul>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">🏦 Regulatory Oversight</h3>
                      <ul className="space-y-2 text-teal-700 dark:text-teal-300">
                        <li>• Licensing and supervision</li>
                        <li>• Solvency and capital requirements</li>
                        <li>• Consumer protection measures</li>
                        <li>• Market conduct regulation</li>
                        <li>• Compliance monitoring</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Risk Mitigation Strategies</h3>
                    <p className="text-yellow-700 dark:text-yellow-300 mb-4">Combining insurance with proactive measures to reduce losses and enhance protection.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Prevention Strategies</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Safety protocols and training programs</li>
                          <li>• Security systems and monitoring</li>
                          <li>• Regular maintenance and inspections</li>
                          <li>• Health and wellness programs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Transfer Mechanisms</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Insurance policies and coverage</li>
                          <li>• Contractual risk transfer</li>
                          <li>• Hedging and derivatives</li>
                          <li>• Captive insurance arrangements</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300">
                      These six core components work together as an integrated risk management system. Effective risk identification leads to appropriate insurance products, proper underwriting ensures fair pricing, efficient claims handling builds trust, regulatory oversight maintains stability, and mitigation strategies reduce overall risk exposure.
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
                      onClick={() => navigateToSection('types-insurance')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Types of Insurance
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Types of Insurance Section */}
            {activeSection === 'types-insurance' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="types-insurance"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <DocumentTextIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Types of Insurance</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 18 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('types-insurance')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('types-insurance') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('types-insurance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('types-insurance')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('types-insurance')
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
                    Insurance products are designed to protect against specific types of risks and losses. Understanding different insurance categories helps in selecting appropriate coverage for comprehensive financial protection across personal and business needs.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">👨‍👩‍👧‍👦 Life Insurance</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Protects against loss of life and provides financial security to beneficiaries.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Term Insurance</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Coverage:</strong> Pure life protection without investment</li>
                          <li>• <strong>Premium:</strong> ₹15,000-25,000 annually for ₹1 crore cover</li>
                          <li>• <strong>Term:</strong> 10-40 years or up to age 75-80</li>
                          <li>• <strong>Benefits:</strong> High coverage at low cost</li>
                          <li>• <strong>Riders:</strong> Accidental death, disability, critical illness</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Whole Life Insurance</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Coverage:</strong> Lifelong protection with savings component</li>
                          <li>• <strong>Premium:</strong> Higher than term, builds cash value</li>
                          <li>• <strong>Returns:</strong> 4-6% guaranteed returns</li>
                          <li>• <strong>Liquidity:</strong> Loan facility against policy</li>
                          <li>• <strong>Maturity:</strong> Sum assured + bonuses</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Endowment Plans</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Dual Benefit:</strong> Life cover + guaranteed maturity</li>
                          <li>• <strong>Term:</strong> 10-35 years fixed period</li>
                          <li>• <strong>Returns:</strong> 5-7% assured returns</li>
                          <li>• <strong>Tax Benefits:</strong> Section 80C and 10(10D)</li>
                          <li>• <strong>Suitability:</strong> Conservative investors</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">ULIPs (Unit Linked)</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Investment:</strong> Market-linked returns</li>
                          <li>• <strong>Flexibility:</strong> Switch between funds</li>
                          <li>• <strong>Returns:</strong> 8-15% potential (market dependent)</li>
                          <li>• <strong>Lock-in:</strong> 5 years minimum</li>
                          <li>• <strong>Charges:</strong> Premium allocation, fund management</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🏥 Health Insurance</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">Covers medical expenses and provides financial protection against healthcare costs.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Individual Health Plans</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• Coverage: ₹5-50 lakh sum insured</li>
                          <li>• Premium: ₹5,000-25,000 annually</li>
                          <li>• Features: Cashless treatment</li>
                          <li>• Network: 10,000+ hospitals</li>
                          <li>• Waiting: 2-4 years for pre-existing</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Family Floater Plans</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• Coverage: Shared sum insured</li>
                          <li>• Members: Spouse, children, parents</li>
                          <li>• Cost: Lower than individual plans</li>
                          <li>• Flexibility: Any member can use full sum</li>
                          <li>• Limitation: One claim affects all</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Critical Illness Plans</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• Coverage: 30+ critical illnesses</li>
                          <li>• Payout: Lump sum on diagnosis</li>
                          <li>• Amount: ₹10-50 lakh coverage</li>
                          <li>• Usage: Treatment, income replacement</li>
                          <li>• Survival: 30-day survival period</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🏠 Property & Casualty Insurance</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Home Insurance</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Structure coverage against fire, earthquake</li>
                            <li>• Contents protection for furniture, electronics</li>
                            <li>• Premium: 0.1-0.5% of property value</li>
                            <li>• Additional: Theft, burglary, natural disasters</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Motor Insurance</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Third-party: Mandatory by law</li>
                            <li>• Comprehensive: Own damage + third-party</li>
                            <li>• Premium: 2-5% of vehicle value</li>
                            <li>• Add-ons: Zero depreciation, engine protection</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">⚖️ Liability Insurance</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Professional Indemnity</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Covers professional negligence claims</li>
                            <li>• Essential for doctors, lawyers, consultants</li>
                            <li>• Coverage: ₹25 lakh to ₹10 crore</li>
                            <li>• Includes legal defense costs</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Public Liability</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Third-party injury or property damage</li>
                            <li>• Business premises liability</li>
                            <li>• Product liability coverage</li>
                            <li>• Coverage: ₹50 lakh to ₹25 crore</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Specialized Insurance Products</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Travel Insurance</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Medical emergencies abroad</li>
                          <li>• Trip cancellation/interruption</li>
                          <li>• Baggage loss protection</li>
                          <li>• Premium: ₹500-2,000 per trip</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Cyber Insurance</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Data breach protection</li>
                          <li>• Cyber attack recovery costs</li>
                          <li>• Business interruption</li>
                          <li>• Growing demand in digital age</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Crop Insurance</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• Weather-related crop losses</li>
                          <li>• Government-subsidized schemes</li>
                          <li>• PMFBY (Pradhan Mantri Fasal Bima)</li>
                          <li>• Essential for farmers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      Different insurance types serve specific protection needs. Life insurance secures family's future, health insurance covers medical costs, property insurance protects assets, and liability insurance covers legal obligations. Choose coverage based on your risk profile and financial situation.
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
                      onClick={() => navigateToSection('risk-management')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Risk Management Principles
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Risk Management Principles Section */}
            {activeSection === 'risk-management' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="risk-management"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                      <ScaleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Risk Management Principles</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 15 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('risk-management')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('risk-management') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('risk-management') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('risk-management')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('risk-management')
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
                    Risk management is a systematic approach to identifying, assessing, and controlling threats to an organization's capital and earnings. These principles provide a framework for making informed decisions about risk exposure and protection strategies.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">The Risk Management Process</h3>
                    <div className="grid md:grid-cols-5 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-600 dark:text-blue-300 font-bold">1</span>
                        </div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Identify</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">Detect potential risks</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-600 dark:text-blue-300 font-bold">2</span>
                        </div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Assess</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">Measure impact & probability</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-600 dark:text-blue-300 font-bold">3</span>
                        </div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Control</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">Mitigate or transfer risks</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-600 dark:text-blue-300 font-bold">4</span>
                        </div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Finance</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">Fund potential losses</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-600 dark:text-blue-300 font-bold">5</span>
                        </div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Monitor</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">Review & update strategies</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🔍 Risk Identification</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Systematic process of detecting potential risks that could affect personal or organizational assets.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Risk Categories</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• <strong>Pure Risks:</strong> Only loss possible (fire, theft, death)</li>
                            <li>• <strong>Speculative Risks:</strong> Gain or loss possible (investments)</li>
                            <li>• <strong>Fundamental Risks:</strong> Affect many (inflation, war)</li>
                            <li>• <strong>Particular Risks:</strong> Affect individuals (accidents)</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Identification Methods</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Risk registers and checklists</li>
                            <li>• Expert consultations and surveys</li>
                            <li>• Historical data analysis</li>
                            <li>• Scenario planning and stress testing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">📊 Risk Assessment & Quantification</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-4">Measuring the likelihood and financial impact of identified risks.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Probability Assessment</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• <strong>High:</strong> &gt;50% chance of occurrence</li>
                            <li>• <strong>Medium:</strong> 10-50% probability</li>
                            <li>• <strong>Low:</strong> &lt;10% likelihood</li>
                            <li>• Based on historical data and expert judgment</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Impact Measurement</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• <strong>Financial:</strong> Direct monetary losses</li>
                            <li>• <strong>Operational:</strong> Business disruption costs</li>
                            <li>• <strong>Reputational:</strong> Brand value impact</li>
                            <li>• <strong>Regulatory:</strong> Compliance penalties</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Risk Mitigation & Control Strategies</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">Four primary approaches to managing identified risks.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">1. Risk Avoidance</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Eliminating the risk by not engaging in the activity.</p>
                          <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Not investing in high-risk ventures</li>
                            <li>• Avoiding dangerous activities</li>
                            <li>• Not entering risky markets</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">2. Risk Reduction</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Implementing measures to reduce probability or impact.</p>
                          <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Safety training and protocols</li>
                            <li>• Security systems and monitoring</li>
                            <li>• Diversification strategies</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">3. Risk Transfer</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Shifting risk to another party through contracts or insurance.</p>
                          <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Insurance policies</li>
                            <li>• Contractual agreements</li>
                            <li>• Hedging instruments</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">4. Risk Retention</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Accepting the risk and preparing to handle potential losses.</p>
                          <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• Self-insurance funds</li>
                            <li>• Emergency reserves</li>
                            <li>• Captive insurance companies</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">💰 Risk Financing</h3>
                      <p className="text-teal-700 dark:text-teal-300 mb-4">Determining how to fund potential losses and recovery efforts.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Pre-Loss Financing</h4>
                          <ul className="text-sm text-teal-600 dark:text-teal-400 space-y-1">
                            <li>• Insurance premiums</li>
                            <li>• Reserve funds</li>
                            <li>• Contingency planning</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Post-Loss Financing</h4>
                          <ul className="text-sm text-teal-600 dark:text-teal-400 space-y-1">
                            <li>• Emergency loans</li>
                            <li>• Asset liquidation</li>
                            <li>• Government assistance</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                      <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">🔄 Monitoring & Review</h3>
                      <p className="text-yellow-700 dark:text-yellow-300 mb-4">Continuous tracking and updating of risk management strategies.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Regular Reviews</h4>
                          <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                            <li>• Annual risk assessments</li>
                            <li>• Policy renewals and updates</li>
                            <li>• Coverage adequacy checks</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Trigger Events</h4>
                          <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                            <li>• Major life changes</li>
                            <li>• Business expansion</li>
                            <li>• Regulatory changes</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-indigo-700 dark:text-indigo-300 text-sm">
                      Effective risk management follows a systematic process: identify risks, assess their impact, choose appropriate control strategies, secure financing, and continuously monitor. The goal is not to eliminate all risks but to manage them cost-effectively while achieving objectives.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('types-insurance')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Types of Insurance
                    </button>
                    <button
                      onClick={() => navigateToSection('underwriting-pricing')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Underwriting & Pricing
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Underwriting and Pricing Section */}
            {activeSection === 'underwriting-pricing' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="underwriting-pricing"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                      <CurrencyRupeeIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Insurance Underwriting and Pricing</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 16 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('underwriting-pricing')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('underwriting-pricing') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('underwriting-pricing') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('underwriting-pricing')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('underwriting-pricing')
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
                    Underwriting is the process by which insurers evaluate risks to determine coverage eligibility and premium pricing. This critical function ensures that insurance companies can maintain profitability while providing fair and adequate coverage to policyholders.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">The Underwriting Process</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Systematic evaluation of risk factors to make informed coverage and pricing decisions.</p>
                    
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">1. Application Review</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Personal information verification</li>
                          <li>• Coverage amount requested</li>
                          <li>• Previous insurance history</li>
                          <li>• Financial information</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">2. Risk Assessment</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Medical examinations</li>
                          <li>• Lifestyle evaluation</li>
                          <li>• Occupation analysis</li>
                          <li>• Credit score review</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">3. Decision Making</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Accept at standard rates</li>
                          <li>• Accept with conditions</li>
                          <li>• Decline coverage</li>
                          <li>• Request additional information</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">4. Policy Issuance</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Premium calculation</li>
                          <li>• Policy terms finalization</li>
                          <li>• Documentation preparation</li>
                          <li>• Coverage activation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">📊 Factors Affecting Premiums</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Personal Factors</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• <strong>Age:</strong> Higher age = higher premiums (life/health)</li>
                            <li>• <strong>Gender:</strong> Statistical risk differences</li>
                            <li>• <strong>Health Status:</strong> Medical conditions impact rates</li>
                            <li>• <strong>Lifestyle:</strong> Smoking, drinking, dangerous hobbies</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Financial Factors</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• <strong>Income Level:</strong> Determines coverage eligibility</li>
                            <li>• <strong>Credit Score:</strong> Indicates financial responsibility</li>
                            <li>• <strong>Coverage Amount:</strong> Higher coverage = higher premiums</li>
                            <li>• <strong>Deductibles:</strong> Higher deductible = lower premium</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🔄 Risk Pooling Concept</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-4">Insurance works by spreading risk across many policyholders to reduce individual financial impact.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">How It Works</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Many people pay small premiums to create a large fund that covers the few who experience losses</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Law of Large Numbers</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">With more policyholders, actual losses become more predictable and closer to expected losses</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Risk Classification</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Similar risks are grouped together to ensure fair pricing for all participants</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Actuarial Science in Insurance</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">Using statistical models and mathematical techniques to predict risk and calculate premiums.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Mortality Tables</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Life expectancy data by age/gender</li>
                          <li>• Death probability calculations</li>
                          <li>• Premium rate determination</li>
                          <li>• Reserve requirement planning</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Morbidity Data</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Disease incidence rates</li>
                          <li>• Treatment cost analysis</li>
                          <li>• Recovery time statistics</li>
                          <li>• Health insurance pricing</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Predictive Modeling</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Machine learning algorithms</li>
                          <li>• Big data analytics</li>
                          <li>• Risk scoring models</li>
                          <li>• Dynamic pricing systems</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">💰 Premium Calculation Methods</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Pure Premium</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Expected losses + Claims adjustment expenses</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Loading Factors</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Administrative costs + Profit margin + Contingency reserves</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Final Premium</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Pure Premium + Loading + Taxes and regulatory charges</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                      <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">📊 Premium Examples (2025 India)</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Term Life Insurance</h4>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">₹1 Cr cover: ₹15,000-25,000/year (30-year-old male)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Health Insurance</h4>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">₹10L family cover: ₹12,000-20,000/year</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Car Insurance</h4>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">Comprehensive: 2-4% of vehicle IDV annually</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      Underwriting ensures fair pricing by matching premiums to risk levels. Factors like age, health, lifestyle, and coverage amount directly impact premiums. Understanding this process helps in making informed insurance decisions and managing costs effectively.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('risk-management')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Risk Management Principles
                    </button>
                    <button
                      onClick={() => navigateToSection('claims-management')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Claims Management
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Claims Management Section */}
            {activeSection === 'claims-management' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="claims-management"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl">
                      <CogIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Claims Management and Settlement</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 14 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('claims-management')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('claims-management') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('claims-management') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('claims-management')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('claims-management')
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
                    Claims management is the process of handling insurance claims from notification to settlement. Efficient claims processing builds customer trust, ensures fair compensation, and maintains the insurer's financial stability through proper investigation and fraud prevention.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Claims Process Workflow</h3>
                    <div className="grid md:grid-cols-5 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-600 dark:text-blue-300 font-bold">1</span>
                        </div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Notification</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">Report incident immediately</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-600 dark:text-blue-300 font-bold">2</span>
                        </div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Documentation</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">Submit required papers</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-600 dark:text-blue-300 font-bold">3</span>
                        </div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Investigation</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">Verify claim details</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-600 dark:text-blue-300 font-bold">4</span>
                        </div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Assessment</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">Determine liability & amount</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-600 dark:text-blue-300 font-bold">5</span>
                        </div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Settlement</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">Process payment</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">📝 Documentation Requirements</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Life Insurance Claims</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Death certificate (original)</li>
                            <li>• Policy document</li>
                            <li>• Claim form (duly filled)</li>
                            <li>• Medical records/post-mortem report</li>
                            <li>• Beneficiary identification proof</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Health Insurance Claims</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Hospital bills and receipts</li>
                            <li>• Discharge summary</li>
                            <li>• Diagnostic reports</li>
                            <li>• Doctor's prescription</li>
                            <li>• Pre-authorization (if applicable)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🔍 Investigation Process</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Verification Steps</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Policy validity check</li>
                            <li>• Premium payment status</li>
                            <li>• Cause of loss verification</li>
                            <li>• Coverage applicability</li>
                            <li>• Exclusion clause review</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Investigation Timeline</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• <strong>Simple claims:</strong> 7-15 days</li>
                            <li>• <strong>Complex claims:</strong> 30-90 days</li>
                            <li>• <strong>Fraud suspected:</strong> 6+ months</li>
                            <li>• <strong>Legal disputes:</strong> 1-3 years</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-8">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">Fraud Prevention & Detection</h3>
                    <p className="text-red-700 dark:text-red-300 mb-4">Insurance fraud costs the industry billions annually. Advanced detection methods help protect honest policyholders.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Common Fraud Types</h4>
                        <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                          <li>• Staged accidents</li>
                          <li>• Inflated medical bills</li>
                          <li>• False death claims</li>
                          <li>• Property damage exaggeration</li>
                          <li>• Premium fraud</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Detection Methods</h4>
                        <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                          <li>• Data analytics and AI</li>
                          <li>• Pattern recognition</li>
                          <li>• Cross-referencing databases</li>
                          <li>• Field investigations</li>
                          <li>• Medical examinations</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Prevention Measures</h4>
                        <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                          <li>• Thorough underwriting</li>
                          <li>• Regular policy audits</li>
                          <li>• Customer education</li>
                          <li>• Whistleblower programs</li>
                          <li>• Industry collaboration</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">⚖️ Dispute Resolution</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Internal Grievance</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Customer service and grievance officers within insurance company</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Insurance Ombudsman</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Free, independent dispute resolution for claims up to ₹30 lakh</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Consumer Courts</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Legal recourse for unresolved disputes and compensation</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Arbitration</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Alternative dispute resolution for complex commercial cases</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">🚀 Customer Experience Enhancement</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Digital Claims</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Mobile apps, online portals, and AI chatbots for claim filing</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Cashless Services</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Direct settlement with hospitals and service providers</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Real-time Tracking</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">SMS updates and online status monitoring</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Quick Settlement</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Express processing for small and routine claims</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Claims Settlement Statistics (India 2025)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Settlement Ratios</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Life Insurance:</strong> 98.5% claims settled</li>
                          <li>• <strong>Health Insurance:</strong> 95.2% settlement ratio</li>
                          <li>• <strong>Motor Insurance:</strong> 92.8% claims approved</li>
                          <li>• <strong>Average Settlement Time:</strong> 15-30 days</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Claim Amounts</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Life Claims:</strong> ₹2.5 lakh average payout</li>
                          <li>• <strong>Health Claims:</strong> ₹55,000 average cost</li>
                          <li>• <strong>Motor Claims:</strong> ₹35,000 average settlement</li>
                          <li>• <strong>Total Payouts:</strong> ₹1.8 lakh crore annually</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-teal-700 dark:text-teal-300 text-sm">
                      Efficient claims management builds customer trust and ensures fair compensation. Prompt settlement, transparent processes, and fraud prevention are essential for maintaining the integrity of the insurance system. Digital technologies are transforming the claims experience for better customer satisfaction.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('underwriting-pricing')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Underwriting & Pricing
                    </button>
                    <button
                      onClick={() => navigateToSection('regulatory-framework')}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next: Regulatory Framework
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Regulatory Framework Section */}
            {activeSection === 'regulatory-framework' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="regulatory-framework"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl">
                      <BuildingLibraryIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Regulatory Framework</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 16 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('regulatory-framework')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('regulatory-framework') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('regulatory-framework') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('regulatory-framework')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('regulatory-framework')
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
                    Insurance regulation ensures market stability, consumer protection, and fair business practices. Regulatory frameworks vary globally but share common objectives of maintaining solvency, preventing fraud, and ensuring adequate coverage for policyholders.
                  </p>
                  
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-8">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">Global Insurance Regulators</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">International Bodies</h4>
                        <ul className="text-sm text-red-600 dark:text-red-400 space-y-2">
                          <li>• <strong>IAIS:</strong> International Association of Insurance Supervisors</li>
                          <li>• <strong>Solvency II (EU):</strong> Risk-based capital requirements</li>
                          <li>• <strong>NAIC (USA):</strong> National Association of Insurance Commissioners</li>
                          <li>• <strong>FSB:</strong> Financial Stability Board coordination</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">Regional Examples</h4>
                        <ul className="text-sm text-red-600 dark:text-red-400 space-y-2">
                          <li>• <strong>FCA/PRA (UK):</strong> Conduct and prudential regulation</li>
                          <li>• <strong>BaFin (Germany):</strong> Federal financial supervisory authority</li>
                          <li>• <strong>APRA (Australia):</strong> Prudential regulation authority</li>
                          <li>• <strong>CEIOPS (EU):</strong> European insurance supervisors</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🇮🇳 Indian Insurance Regulators</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">IRDAI (Primary Regulator)</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Insurance Regulatory & Development Authority</li>
                            <li>• Licensing and supervision of insurers</li>
                            <li>• Product approval and pricing regulation</li>
                            <li>• Consumer protection and grievance redressal</li>
                            <li>• Market development and innovation</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Supporting Bodies</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• <strong>RBI:</strong> Bancassurance regulation</li>
                            <li>• <strong>SEBI:</strong> ULIP and investment regulations</li>
                            <li>• <strong>MCA:</strong> Corporate governance oversight</li>
                            <li>• <strong>Competition Commission:</strong> Anti-trust enforcement</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">📜 Compliance Requirements</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Solvency & Capital</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Minimum capital requirements</li>
                            <li>• Solvency margin maintenance</li>
                            <li>• Risk-based capital adequacy</li>
                            <li>• Investment guidelines compliance</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Reporting & Disclosure</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Quarterly financial statements</li>
                            <li>• Annual regulatory returns</li>
                            <li>• Actuarial valuations</li>
                            <li>• Public disclosure requirements</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Consumer Protection Measures</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">Comprehensive safeguards to protect policyholders' interests and ensure fair treatment.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Standard Policy Terms</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Standardized policy wordings</li>
                          <li>• Clear terms and conditions</li>
                          <li>• Simplified language requirements</li>
                          <li>• Mandatory disclosures</li>
                          <li>• Cooling-off period (15 days)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Grievance Redressal</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Internal grievance mechanisms</li>
                          <li>• Insurance Ombudsman system</li>
                          <li>• IRDAI grievance portal</li>
                          <li>• Consumer court access</li>
                          <li>• Time-bound resolution</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Market Conduct</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Anti-discrimination policies</li>
                          <li>• Fair pricing practices</li>
                          <li>• Mis-selling prevention</li>
                          <li>• Agent training requirements</li>
                          <li>• Regular market surveillance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">📊 Solvency Requirements</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Life Insurers</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Minimum ₹100 crore paid-up capital, 150% solvency margin</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">General Insurers</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Minimum ₹100 crore capital, risk-based solvency requirements</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Health Insurers</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Specialized capital norms, medical loss ratio compliance</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Reinsurers</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Higher capital requirements, global risk exposure limits</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">⚖️ Regulatory Actions</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Supervisory Measures</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Regular inspections, risk assessments, corrective actions</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Penalties</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Monetary fines, business restrictions, license suspension</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Market Exit</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">License cancellation, portfolio transfer, liquidation</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Rehabilitation</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Capital infusion, management changes, business restructuring</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Recent Regulatory Developments (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Digital Transformation</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Sandbox Regulations:</strong> Fintech innovation testing</li>
                          <li>• <strong>Digital KYC:</strong> Video-based customer verification</li>
                          <li>• <strong>AI Guidelines:</strong> Algorithmic underwriting standards</li>
                          <li>• <strong>Cyber Security:</strong> Enhanced data protection norms</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Market Reforms</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Composite Licenses:</strong> Life + General insurance</li>
                          <li>• <strong>Foreign Investment:</strong> 74% FDI limit increase</li>
                          <li>• <strong>Bancassurance:</strong> Enhanced distribution norms</li>
                          <li>• <strong>Microinsurance:</strong> Simplified products and processes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Regulatory frameworks ensure insurance market stability and consumer protection. IRDAI's comprehensive oversight includes solvency requirements, consumer safeguards, and market conduct supervision. Recent digital transformation initiatives are modernizing the regulatory approach while maintaining prudential standards.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('claims-management')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Claims Management
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
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl">
                      <SparklesIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Modern Trends in Insurance & Risk Management</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 20 min read • Advanced</p>
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
                    The insurance industry is undergoing rapid transformation driven by digital technologies, changing customer expectations, and emerging risks. These modern trends are reshaping how insurance products are designed, distributed, and serviced.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">📱 Digital Insurance & Insurtech</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">Technology is revolutionizing every aspect of the insurance value chain.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Online Policy Issuance</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Instant Policies:</strong> 5-minute policy purchase</li>
                          <li>• <strong>Digital KYC:</strong> Video verification, e-signatures</li>
                          <li>• <strong>Paperless Process:</strong> End-to-end digital journey</li>
                          <li>• <strong>Mobile Apps:</strong> Policy management on smartphones</li>
                          <li>• <strong>API Integration:</strong> Embedded insurance in other platforms</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">AI-Based Underwriting</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Machine Learning:</strong> Automated risk assessment</li>
                          <li>• <strong>Alternative Data:</strong> Social media, IoT, behavioral data</li>
                          <li>• <strong>Real-time Decisions:</strong> Instant approval/rejection</li>
                          <li>• <strong>Dynamic Pricing:</strong> Personalized premium calculation</li>
                          <li>• <strong>Predictive Analytics:</strong> Future risk modeling</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Mobile Claims Processing</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Photo Claims:</strong> Damage assessment via images</li>
                          <li>• <strong>AI Chatbots:</strong> 24/7 claim assistance</li>
                          <li>• <strong>GPS Tracking:</strong> Automatic accident detection</li>
                          <li>• <strong>Digital Surveys:</strong> Remote damage inspection</li>
                          <li>• <strong>Instant Settlements:</strong> Small claims automation</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Blockchain Applications</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• <strong>Smart Contracts:</strong> Automated claim payouts</li>
                          <li>• <strong>Fraud Prevention:</strong> Immutable transaction records</li>
                          <li>• <strong>Reinsurance:</strong> Transparent risk sharing</li>
                          <li>• <strong>Identity Verification:</strong> Secure customer data</li>
                          <li>• <strong>Parametric Insurance:</strong> Trigger-based payments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🏃 Behavioral Insurance</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Usage-based and lifestyle-linked premiums that reward good behavior.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Health Insurance</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Fitness tracker integration</li>
                            <li>• Step count and activity rewards</li>
                            <li>• Health screening discounts</li>
                            <li>• Wellness program participation</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Motor Insurance</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Telematics-based pricing</li>
                            <li>• Safe driving score rewards</li>
                            <li>• Mileage-based premiums</li>
                            <li>• Real-time driving feedback</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">⚡ Parametric Insurance</h3>
                      <p className="text-orange-700 dark:text-orange-300 mb-4">Automatic payouts based on pre-defined triggers without traditional claims process.</p>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Weather Insurance</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Rainfall index triggers</li>
                            <li>• Temperature-based payouts</li>
                            <li>• Drought protection for farmers</li>
                            <li>• Satellite data verification</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Natural Disasters</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Earthquake magnitude triggers</li>
                            <li>• Flood level measurements</li>
                            <li>• Hurricane wind speed data</li>
                            <li>• Instant payout mechanisms</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Cyber & Emerging Risk Insurance</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">New insurance products addressing modern digital and technological risks.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Cyber Insurance</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Data breach protection</li>
                          <li>• Ransomware coverage</li>
                          <li>• Business interruption</li>
                          <li>• Cyber extortion</li>
                          <li>• Regulatory fines</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Digital Assets</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Cryptocurrency theft</li>
                          <li>• NFT protection</li>
                          <li>• Digital wallet security</li>
                          <li>• Smart contract failures</li>
                          <li>• Exchange hacks</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Supply Chain Risks</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Supplier disruptions</li>
                          <li>• Logistics interruptions</li>
                          <li>• Trade war impacts</li>
                          <li>• Pandemic-related losses</li>
                          <li>• ESG compliance risks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">📊 Data Analytics & AI</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Predictive Modeling</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Advanced algorithms for risk prediction and pricing optimization</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Fraud Detection</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Real-time pattern recognition and anomaly detection systems</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Customer Segmentation</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Personalized products and targeted marketing campaigns</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Claims Analytics</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Automated claim processing and settlement optimization</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                      <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">🌐 Ecosystem Partnerships</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Embedded Insurance</h4>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">Insurance integrated into e-commerce, travel, and fintech platforms</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Bancassurance 2.0</h4>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">Digital-first bank-insurance partnerships and cross-selling</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Insurtech Collaboration</h4>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">Traditional insurers partnering with technology startups</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">Platform Economy</h4>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">Multi-product digital platforms serving diverse customer needs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">Future Trends (2025-2030)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3">Technology Evolution</h4>
                        <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-2">
                          <li>• <strong>Quantum Computing:</strong> Advanced risk modeling capabilities</li>
                          <li>• <strong>5G Networks:</strong> Real-time IoT data for dynamic pricing</li>
                          <li>• <strong>Augmented Reality:</strong> Virtual damage assessment and training</li>
                          <li>• <strong>Voice AI:</strong> Conversational insurance interfaces</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-3">Market Evolution</h4>
                        <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-2">
                          <li>• <strong>Micro-insurance:</strong> Affordable coverage for low-income segments</li>
                          <li>• <strong>On-demand Insurance:</strong> Flexible, short-term coverage</li>
                          <li>• <strong>Climate Insurance:</strong> Comprehensive climate risk protection</li>
                          <li>• <strong>Space Insurance:</strong> Coverage for commercial space activities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-pink-800 dark:text-pink-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-pink-700 dark:text-pink-300 text-sm">
                      Modern insurance trends are driven by digital transformation, changing customer expectations, and emerging risks. AI, IoT, blockchain, and data analytics are reshaping the industry, making insurance more personalized, efficient, and accessible while addressing new-age risks like cyber threats and climate change.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('regulatory-framework')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Regulatory Framework
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Challenges in Insurance & Risk Management</h2>
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
                    The insurance and risk management industry faces numerous challenges in the modern era, from rising claim costs and climate change impacts to regulatory complexities and technological disruptions. Understanding these challenges is crucial for developing effective solutions.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">📈 Rising Medical & Climate Claims</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Healthcare Cost Inflation</h4>
                          <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                            <li>• Medical inflation: 12-15% annually in India</li>
                            <li>• Advanced treatment costs rising</li>
                            <li>• Lifestyle diseases increasing</li>
                            <li>• Aging population healthcare needs</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Climate Change Impact</h4>
                          <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                            <li>• Extreme weather events frequency</li>
                            <li>• Flood and cyclone damages</li>
                            <li>• Agricultural losses increasing</li>
                            <li>• Property insurance claims surge</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🏞️ Low Penetration in Rural Areas</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Accessibility Challenges</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Limited branch network in rural areas</li>
                            <li>• Poor digital infrastructure</li>
                            <li>• Language and literacy barriers</li>
                            <li>• Lack of awareness about insurance</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Affordability Issues</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• High premium costs relative to income</li>
                            <li>• Irregular income patterns</li>
                            <li>• Preference for informal savings</li>
                            <li>• Limited product customization</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Mis-selling & Financial Literacy</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">Inadequate understanding of insurance products leads to poor purchasing decisions and customer dissatisfaction.</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Common Mis-selling</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• ULIPs sold as fixed deposits</li>
                          <li>• Hidden charges not disclosed</li>
                          <li>• Inappropriate product recommendations</li>
                          <li>• Exaggerated return projections</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Literacy Gaps</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Complex policy terms</li>
                          <li>• Poor understanding of exclusions</li>
                          <li>• Inadequate needs assessment</li>
                          <li>• Lack of comparison shopping</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Solutions</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Simplified product designs</li>
                          <li>• Enhanced agent training</li>
                          <li>• Digital education platforms</li>
                          <li>• Regulatory oversight strengthening</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">⚖️ Regulatory Compliance</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Multi-jurisdictional Challenges</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Different regulations across states and countries for global insurers</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Evolving Regulations</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Frequent regulatory changes requiring system and process updates</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Compliance Costs</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">High costs of regulatory compliance and reporting requirements</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🔒 Fraud & Cyber Risks</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Insurance Fraud</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Estimated ₹45,000 crore annual fraud losses in Indian insurance</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Cyber Threats</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">Data breaches, ransomware attacks on insurance companies</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Operational Risks</h4>
                          <p className="text-sm text-green-600 dark:text-green-400">System failures, process breakdowns, human errors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Balancing Affordability & Coverage</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Affordability Challenges</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Premium Pressure:</strong> Customers seeking lower premiums</li>
                          <li>• <strong>Competition:</strong> Price wars affecting profitability</li>
                          <li>• <strong>Economic Slowdown:</strong> Reduced spending on insurance</li>
                          <li>• <strong>Regulatory Caps:</strong> Limits on premium increases</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Coverage Adequacy</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Under-insurance:</strong> Insufficient coverage amounts</li>
                          <li>• <strong>Coverage Gaps:</strong> Exclusions and limitations</li>
                          <li>• <strong>Product Complexity:</strong> Difficult to understand terms</li>
                          <li>• <strong>Claim Rejections:</strong> Coverage disputes and denials</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Insurance challenges require multi-faceted solutions combining technology, regulation, education, and innovation. Success depends on addressing affordability while maintaining adequate coverage, improving financial literacy, preventing fraud, and adapting to climate and demographic changes.
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Global Perspectives in Insurance</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 16 min read • Advanced</p>
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
                    Insurance markets vary significantly across countries, reflecting different economic structures, regulatory approaches, and cultural factors. Understanding global perspectives helps in appreciating diverse insurance ecosystems and their impact on international business and personal finance.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🇺🇸 Developed Markets</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">United States</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Largest insurance market globally ($1.4 trillion)</li>
                            <li>• Employer-sponsored health insurance dominance</li>
                            <li>• State-based regulation system</li>
                            <li>• Advanced life insurance and annuity products</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">European Union</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Solvency II regulatory framework</li>
                            <li>• Universal healthcare systems</li>
                            <li>• Strong social insurance programs</li>
                            <li>• Cross-border insurance services</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🌏 Emerging Markets</h3>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">China</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Second largest insurance market</li>
                            <li>• Rapid digitalization and fintech integration</li>
                            <li>• Government-backed social insurance expansion</li>
                            <li>• Belt and Road Initiative insurance coverage</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">India</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• Low penetration, high growth potential</li>
                            <li>• Ayushman Bharat universal health coverage</li>
                            <li>• Digital-first insurance distribution</li>
                            <li>• Microinsurance for rural populations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Regional Insurance Innovations</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Africa</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Mobile money integration (M-Pesa)</li>
                          <li>• Index-based crop insurance</li>
                          <li>• Microinsurance for informal sector</li>
                          <li>• Blockchain for claims processing</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Latin America</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Bancassurance model dominance</li>
                          <li>• Catastrophe risk pooling</li>
                          <li>• Remittance-linked insurance</li>
                          <li>• Climate risk coverage expansion</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Asia-Pacific</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Takaful (Islamic insurance) growth</li>
                          <li>• Natural disaster coverage focus</li>
                          <li>• Digital health platforms</li>
                          <li>• Cross-border travel insurance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🌍 Cross-Border Insurance Challenges</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Regulatory Differences</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Varying solvency requirements, licensing rules, and consumer protection standards</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Currency Risk</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Exchange rate fluctuations affecting premiums and claims settlements</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Cultural Barriers</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">Different risk perceptions and insurance acceptance levels</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">🔗 International Cooperation</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">IAIS Standards</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">International Association of Insurance Supervisors global frameworks</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Reinsurance Networks</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Global risk sharing through international reinsurance markets</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Trade Agreements</h4>
                          <p className="text-sm text-teal-600 dark:text-teal-400">Bilateral and multilateral agreements facilitating insurance services</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Global Insurance Statistics (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Market Size by Region</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>North America:</strong> $2.1 trillion (40% of global market)</li>
                          <li>• <strong>Europe:</strong> $1.6 trillion (30% of global market)</li>
                          <li>• <strong>Asia-Pacific:</strong> $1.3 trillion (25% of global market)</li>
                          <li>• <strong>Others:</strong> $0.3 trillion (5% of global market)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Growth Trends</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Emerging Markets:</strong> 8-12% annual growth</li>
                          <li>• <strong>Developed Markets:</strong> 2-4% annual growth</li>
                          <li>• <strong>Digital Insurance:</strong> 25-30% growth globally</li>
                          <li>• <strong>Climate Insurance:</strong> 40-50% growth in vulnerable regions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Global insurance markets reflect diverse economic, regulatory, and cultural contexts. While developed markets focus on sophisticated products and digital transformation, emerging markets prioritize financial inclusion and basic protection. International cooperation and standardization are essential for addressing global risks and facilitating cross-border insurance services.
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
                    Insurance and risk management are essential for financial protection, economic stability, and long-term planning. By combining robust risk assessment, suitable insurance coverage, and proactive mitigation strategies, individuals and organizations can safeguard assets, manage uncertainties, and ensure resilience against unforeseen events.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Key Insights from Insurance & Risk Management Journey</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Foundational Understanding</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• Risk management follows a systematic 5-step process</li>
                          <li>• Insurance transfers risk from individuals to insurers</li>
                          <li>• Different insurance types serve specific protection needs</li>
                          <li>• Underwriting ensures fair pricing based on risk assessment</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Modern Evolution</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                          <li>• Digital transformation is reshaping the industry</li>
                          <li>• AI and data analytics enable personalized products</li>
                          <li>• Emerging risks require innovative coverage solutions</li>
                          <li>• Regulatory frameworks ensure consumer protection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Future of Insurance & Risk Management (2025-2030)</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Technology Integration</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>AI Underwriting:</strong> Instant risk assessment and pricing</li>
                          <li>• <strong>IoT Integration:</strong> Real-time risk monitoring and prevention</li>
                          <li>• <strong>Blockchain Claims:</strong> Automated and transparent settlements</li>
                          <li>• <strong>Predictive Analytics:</strong> Proactive risk management</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Product Innovation</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>Parametric Insurance:</strong> Weather and catastrophe coverage</li>
                          <li>• <strong>Micro-insurance:</strong> Affordable protection for masses</li>
                          <li>• <strong>Cyber Insurance:</strong> Comprehensive digital risk coverage</li>
                          <li>• <strong>Climate Insurance:</strong> Environmental risk protection</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Market Expansion</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                          <li>• <strong>Rural Penetration:</strong> Mobile-first distribution models</li>
                          <li>• <strong>Embedded Insurance:</strong> Integrated into digital platforms</li>
                          <li>• <strong>Global Reach:</strong> Cross-border risk management</li>
                          <li>• <strong>ESG Integration:</strong> Sustainable insurance practices</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-8">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">Action Plan for Insurance & Risk Management Mastery</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">For Individuals</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                          <li>• Assess personal and family risk exposure comprehensively</li>
                          <li>• Choose appropriate insurance coverage based on life stage</li>
                          <li>• Review and update policies annually or after major life events</li>
                          <li>• Maintain emergency funds alongside insurance coverage</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">For Businesses</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                          <li>• Implement comprehensive enterprise risk management</li>
                          <li>• Invest in cyber security and digital risk protection</li>
                          <li>• Develop business continuity and disaster recovery plans</li>
                          <li>• Leverage insurtech solutions for efficiency and cost reduction</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">For Professionals</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                          <li>• Develop expertise in emerging risks and digital insurance</li>
                          <li>• Understand regulatory requirements and compliance frameworks</li>
                          <li>• Build skills in data analytics and customer experience</li>
                          <li>• Stay updated with global insurance trends and innovations</li>
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
                          <li>• IRDAI guidelines and regulations for Indian insurance</li>
                          <li>• Insurance Institute of India educational programs</li>
                          <li>• Global insurance industry reports and research</li>
                          <li>• Risk management professional certifications</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Tools & Platforms</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-2">
                          <li>• NeoCred insurance calculators and comparison tools</li>
                          <li>• Risk assessment and management software</li>
                          <li>• Insurance aggregator platforms</li>
                          <li>• Professional development and training resources</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-l-4 border-green-400 p-6 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2 text-xl">🎯 Final Message</h4>
                    <p className="text-green-700 dark:text-green-300 leading-relaxed">
                      Insurance and risk management are essential pillars of financial security and economic stability. By combining robust risk assessment, suitable insurance coverage, and proactive mitigation strategies, individuals and organizations can safeguard assets, manage uncertainties, and ensure resilience against unforeseen events. Innovations in digital technology, data analytics, and insurtech are transforming the sector, making insurance more accessible, efficient, and customer-centric globally.
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
                          to="/learn/investments"
                          className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          <span className="mr-2">📈</span>
                          Investments & Capital Markets
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
                      Insurance & Risk Management Tools
                    </h3>
                    <p className="text-blue-100">Calculate premiums, coverage needs, and risk assessments</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Life Insurance Calculator', path: '/calculators/life-insurance', icon: '👨‍👩‍👧‍👦', desc: 'Calculate coverage needs' },
                    { name: 'Health Insurance', path: '/calculators/health-insurance', icon: '🏥', desc: 'Medical coverage planning' },
                    { name: 'Term Insurance', path: '/calculators/term-insurance', icon: '🛡️', desc: 'Pure protection plans' },
                    { name: 'Vehicle Insurance', path: '/calculators/vehicle-insurance', icon: '🚗', desc: 'Auto insurance quotes' },
                    { name: 'Home Insurance', path: '/calculators/home-insurance', icon: '🏠', desc: 'Property protection' },
                    { name: 'Travel Insurance', path: '/calculators/travel-insurance', icon: '✈️', desc: 'Trip coverage' },
                    { name: 'Risk Assessment', path: '/tools/risk-assessment', icon: '📊', desc: 'Evaluate risk profile' },
                    { name: 'Premium Comparison', path: '/tools/insurance-comparison', icon: '⚖️', desc: 'Compare policies' }
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