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
  BuildingOfficeIcon,
  PresentationChartLineIcon,
  DocumentTextIcon,
  ScaleIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  MapIcon,
  CurrencyDollarIcon,
  BuildingLibraryIcon,
  DocumentCurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';
import { getNextPillar, getPreviousPillar } from '../../data/learningData';

export default function GovernmentFinance() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedCards, setExpandedCards] = useState({});
  const [activeTab, setActiveTab] = useState({});
  const [bookmarks, setBookmarks] = useState(new Set());
  const [readMore, setReadMore] = useState({});
  const [showQuickNav, setShowQuickNav] = useState(false);
  const [completedSections, setCompletedSections] = useState(new Set());
  const [readingProgress, setReadingProgress] = useState(0);

  // Get navigation data
  const currentPillarId = 5; // Tax & Government Finance is pillar 5
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
      title: 'Introduction to Government Finance', 
      icon: AcademicCapIcon, 
      emoji: '🏛️', 
      level: 'foundation',
      duration: '10 min read',
      difficulty: 'Beginner',
      description: 'Understanding public finance, fiscal policy, and government economics'
    },
    { 
      id: 'public-budgeting', 
      title: 'Public Budgeting & Fiscal Policy', 
      icon: DocumentTextIcon, 
      emoji: '📊', 
      level: 'foundation',
      duration: '15 min read',
      difficulty: 'Beginner',
      description: 'Government budgets, revenue sources, and expenditure planning'
    },
    { 
      id: 'taxation-system', 
      title: 'Taxation System & Revenue', 
      icon: DocumentCurrencyDollarIcon, 
      emoji: '💰', 
      level: 'foundation',
      duration: '18 min read',
      difficulty: 'Intermediate',
      description: 'Tax structure, GST, income tax, and government revenue streams'
    },
    { 
      id: 'government-schemes', 
      title: 'Government Schemes & Benefits', 
      icon: HeartIcon, 
      emoji: '🎯', 
      level: 'intermediate',
      duration: '16 min read',
      difficulty: 'Intermediate',
      description: 'Social security, subsidies, and welfare programs'
    },
    // Intermediate Level
    { 
      id: 'public-debt', 
      title: 'Public Debt Management', 
      icon: ScaleIcon, 
      emoji: '⚖️', 
      level: 'intermediate',
      duration: '14 min read',
      difficulty: 'Intermediate',
      description: 'Government borrowing, sovereign bonds, and debt sustainability'
    },
    { 
      id: 'monetary-policy', 
      title: 'Monetary Policy & RBI', 
      icon: BuildingLibraryIcon, 
      emoji: '🏦', 
      level: 'intermediate',
      duration: '20 min read',
      difficulty: 'Intermediate',
      description: 'Central banking, interest rates, and monetary control'
    },
    { 
      id: 'infrastructure-finance', 
      title: 'Infrastructure & Development Finance', 
      icon: BuildingOfficeIcon, 
      emoji: '🏗️', 
      level: 'advanced',
      duration: '18 min read',
      difficulty: 'Advanced',
      description: 'Public-private partnerships and infrastructure funding'
    },
    { 
      id: 'financial-regulation', 
      title: 'Financial Regulation & Oversight', 
      icon: ShieldCheckIcon, 
      emoji: '🛡️', 
      level: 'advanced',
      duration: '16 min read',
      difficulty: 'Advanced',
      description: 'SEBI, RBI regulations, and financial market oversight'
    },
    // Advanced Level
    { 
      id: 'economic-indicators', 
      title: 'Economic Indicators & Analysis', 
      icon: ChartBarIcon, 
      emoji: '📈', 
      level: 'advanced',
      duration: '14 min read',
      difficulty: 'Advanced',
      description: 'GDP, inflation, employment, and economic measurement'
    },
    { 
      id: 'digital-governance', 
      title: 'Digital Governance & Fintech Policy', 
      icon: CpuChipIcon, 
      emoji: '💻', 
      level: 'advanced',
      duration: '12 min read',
      difficulty: 'Advanced',
      description: 'Digital India, UPI policy, and fintech regulations'
    },
    { 
      id: 'international-relations', 
      title: 'International Financial Relations', 
      icon: GlobeAltIcon, 
      emoji: '🌍', 
      level: 'advanced',
      duration: '16 min read',
      difficulty: 'Advanced',
      description: 'Trade agreements, foreign investment, and global cooperation'
    },
    // Conclusion
    { 
      id: 'conclusion', 
      title: 'Conclusion & Citizen Impact', 
      icon: CheckCircleIcon, 
      emoji: '⭐', 
      level: 'resources',
      duration: '8 min read',
      difficulty: 'All Levels',
      description: 'How government finance affects personal and business decisions'
    }
  ];

  const stats = [
    { label: 'Completion Rate', value: '85%', icon: TrophyIcon },
    { label: 'Average Rating', value: '4.5', icon: StarIcon },
    { label: 'Active Learners', value: '12K+', icon: UserGroupIcon },
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
      description: 'Banking systems and payments'
    },
    { 
      name: 'International Finance', 
      path: '/learn/international-finance', 
      icon: '🌍',
      description: 'Global financial markets'
    },
    { 
      name: 'Corporate Finance', 
      path: '/learn/corporate-finance', 
      icon: '🏢',
      description: 'Business financial management'
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-red-500 to-orange-600"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-orange-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link 
            to="/learn"
            className="inline-flex items-center text-red-200 hover:text-white transition-colors group mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Learn
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Tax & Government Finance</h1>
              <p className="text-red-100">Pillar 5 of 8 • Tax & Government Finance • 12 Sections • 2025 Updated</p>
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
                <BuildingLibraryIcon className="h-8 w-8" />
              </div>
            </div>
          </div>
          
          {/* Mobile Next Button */}
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
                <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-1 rounded-full">
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
                          ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-l-4 border-red-500 shadow-md' 
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        isActive ? 'bg-red-200 dark:bg-red-800' : 'bg-gray-100 dark:bg-gray-600'
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
                      className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200"
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
                    <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl">
                      <AcademicCapIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introduction to Government Finance</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 10 min read • Beginner</p>
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
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl mb-8 border border-red-200 dark:border-red-700">
                    <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3 flex items-center">
                      <LightBulbIcon className="h-6 w-6 mr-2" />
                      What is Government Finance?
                    </h3>
                    <p className="text-red-800 dark:text-red-200 leading-relaxed">
                      Government finance, also known as public finance, deals with how governments at all levels (central, state, and local) manage their financial resources. It encompasses revenue generation through taxes and other sources, budget allocation, public expenditure, debt management, and economic policy implementation to serve public welfare and economic stability.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Revenue Generation</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">Tax collection, GST, customs duties, and non-tax revenues like divestment and spectrum auctions.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Public Expenditure</h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">Infrastructure development, social welfare, defense, education, and healthcare spending.</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Economic Policy</h4>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">Fiscal policy, monetary policy coordination, and economic stabilization measures.</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-6">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">India's Public Finance (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Budget Size</h4>
                        <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                          <li>• ₹48+ lakh crore Union Budget</li>
                          <li>• ₹11+ lakh crore tax revenue</li>
                          <li>• 3.4% fiscal deficit target</li>
                          <li>• ₹10+ lakh crore capital expenditure</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Key Priorities</h4>
                        <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                          <li>• Infrastructure development</li>
                          <li>• Digital India initiatives</li>
                          <li>• Green energy transition</li>
                          <li>• Social welfare programs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">🎯 Key Takeaway</h4>
                    <p className="text-red-700 dark:text-red-300">
                      Government finance directly impacts every citizen through taxes, public services, and economic policies. Understanding how public finances work helps you make informed decisions about investments, career choices, and civic participation while leveraging government schemes and benefits.
                    </p>
                  </div>
                  
                  <div className="flex justify-end items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('public-budgeting')}
                      className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Next: Public Budgeting & Fiscal Policy
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Public Budgeting Section */}
            {activeSection === 'public-budgeting' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl"><DocumentTextIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Public Budgeting & Fiscal Policy</h2><p className="text-gray-600 dark:text-gray-400">Foundation • 15 min read • Beginner</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('public-budgeting')} className={`p-2 rounded-full transition-colors ${bookmarks.has('public-budgeting') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('public-budgeting') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('public-budgeting')} className={`p-2 rounded-full transition-colors ${completedSections.has('public-budgeting') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Public budgeting is the process by which governments plan their revenues and expenditures for a fiscal year. It reflects policy priorities, allocates resources, and serves as a tool for economic management and accountability.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Budget Components</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Revenue Budget</h4><p className="text-sm text-blue-600 dark:text-blue-400">Tax and non-tax revenues, current receipts</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Capital Budget</h4><p className="text-sm text-blue-600 dark:text-blue-400">Capital receipts, loans, asset creation</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Expenditure</h4><p className="text-sm text-blue-600 dark:text-blue-400">Revenue and capital expenditure allocation</p></div>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Budget 2025 Highlights</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Total Outlay</h4><p className="text-sm text-green-600 dark:text-green-400">₹48.21 lakh crore (16.9% of GDP)</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Fiscal Deficit</h4><p className="text-sm text-green-600 dark:text-green-400">3.4% of GDP target</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Capital Expenditure</h4><p className="text-sm text-green-600 dark:text-green-400">₹11.11 lakh crore infrastructure focus</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Fiscal Policy Tools</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Expansionary Policy</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Increase government spending</li><li>• Reduce taxes</li><li>• Stimulate economic growth</li><li>• Counter recession</li></ul></div>
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Contractionary Policy</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Reduce government spending</li><li>• Increase taxes</li><li>• Control inflation</li><li>• Reduce fiscal deficit</li></ul></div>
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Neutral Policy</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Balanced budget approach</li><li>• Maintain status quo</li><li>• Stable economic conditions</li><li>• Long-term sustainability</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">Government budgets reflect policy priorities and economic strategy. Understanding budget allocations helps predict policy directions, investment opportunities, and economic trends that affect personal and business finances.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('introduction')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Introduction</button>
                    <button onClick={() => navigateToSection('taxation-system')} className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Next: Taxation System<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Taxation System Section */}
            {activeSection === 'taxation-system' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl"><DocumentCurrencyDollarIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Taxation System & Revenue</h2><p className="text-gray-600 dark:text-gray-400">Foundation • 18 min read • Intermediate</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('taxation-system')} className={`p-2 rounded-full transition-colors ${bookmarks.has('taxation-system') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('taxation-system') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('taxation-system')} className={`p-2 rounded-full transition-colors ${completedSections.has('taxation-system') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">India's taxation system is the primary source of government revenue, funding public services and infrastructure. Understanding the tax structure helps in financial planning and compliance while maximizing legitimate tax benefits.</p>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-3">Direct Taxes</h3>
                      <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                        <li>• <strong>Income Tax:</strong> Individual and corporate income</li>
                        <li>• <strong>Capital Gains Tax:</strong> Investment profits (10-20%)</li>
                        <li>• <strong>Securities Transaction Tax:</strong> Stock trading</li>
                        <li>• <strong>Dividend Distribution Tax:</strong> Company dividends</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3">Indirect Taxes</h3>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                        <li>• <strong>GST:</strong> Goods and Services Tax (5-28%)</li>
                        <li>• <strong>Customs Duty:</strong> Import/export taxes</li>
                        <li>• <strong>Excise Duty:</strong> Manufacturing taxes</li>
                        <li>• <strong>State Taxes:</strong> VAT, stamp duty, registration</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-3">Tax Rates (2025)</h3>
                      <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-2">
                        <li>• <strong>Income Tax:</strong> 0-30% (new regime)</li>
                        <li>• <strong>Corporate Tax:</strong> 25-30%</li>
                        <li>• <strong>GST:</strong> 0-28% (weighted avg 11.6%)</li>
                        <li>• <strong>LTCG:</strong> 10-20% (equity/debt)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-6">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">Tax Revenue Composition (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Central Government</h4><ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1"><li>• Income Tax: 35% of tax revenue</li><li>• Corporate Tax: 30% of tax revenue</li><li>• GST (Central): 20% of tax revenue</li><li>• Customs & Excise: 15% of tax revenue</li></ul></div>
                      <div><h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">State Governments</h4><ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1"><li>• GST (State): 40% of state tax revenue</li><li>• Stamp Duty: 25% of state tax revenue</li><li>• Vehicle Tax: 15% of state tax revenue</li><li>• Excise on Liquor: 20% of state tax revenue</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">Understanding the tax system helps optimize your financial planning through legitimate tax-saving investments, proper compliance, and strategic timing of transactions. Stay updated on tax law changes and utilize available deductions and exemptions.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('public-budgeting')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Public Budgeting</button>
                    <button onClick={() => navigateToSection('government-schemes')} className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Next: Government Schemes<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Government Schemes Section */}
            {activeSection === 'government-schemes' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl"><HeartIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Government Schemes & Benefits</h2><p className="text-gray-600 dark:text-gray-400">Intermediate • 16 min read • Intermediate</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('government-schemes')} className={`p-2 rounded-full transition-colors ${bookmarks.has('government-schemes') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('government-schemes') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('government-schemes')} className={`p-2 rounded-full transition-colors ${completedSections.has('government-schemes') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Government schemes provide financial support, subsidies, and benefits to citizens across various sectors. Understanding available schemes helps maximize benefits and plan finances effectively.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-700">
                      <h3 className="text-xl font-bold text-pink-800 dark:text-pink-200 mb-4">Social Security Schemes</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-1">PM-KISAN</h4><p className="text-sm text-pink-600 dark:text-pink-400">₹6,000/year for farmers</p></div>

                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-1">MGNREGA</h4><p className="text-sm text-pink-600 dark:text-pink-400">100 days guaranteed employment</p></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">Government schemes provide financial support and benefits. Stay informed about eligibility criteria and application processes to maximize benefits for your financial planning.</p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('taxation-system')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Taxation System</button>
                    <button onClick={() => navigateToSection('public-debt')} className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Next: Public Debt Management<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Conclusion & Citizen Impact</h2>
                      <p className="text-gray-600 dark:text-gray-400">Resources • 8 min read • All Levels</p>
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
                    Government finance directly impacts every citizen through taxes, public services, and economic policies. Understanding how public finances work helps you make informed decisions about investments, career choices, and civic participation while leveraging government schemes and benefits.
                  </p>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">🎯 Key Takeaway</h4>
                    <p className="text-red-700 dark:text-red-300">
                      Government finance affects your personal financial decisions through tax policies, interest rates, and economic stability. Stay informed about budget announcements, policy changes, and government schemes that can benefit your financial planning.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Link
                      to="/learn"
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                      Back to Learn Hub
                    </Link>
                    <div className="flex items-center space-x-4">
                      <Link
                        to="/calculators"
                        className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        Explore Calculators
                      </Link>
                      {nextPillar && (
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Next Pillar:</span>
                          <Link
                            to={nextPillar.path}
                            className="flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                          >
                            <span className="mr-2">{nextPillar.icon}</span>
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
              className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden mb-8"
            >
              <div className="relative z-10">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">🎉 Congratulations! You've completed Tax & Government Finance</h3>
                  <p className="text-red-100 mb-6">Ready to continue your financial learning journey?</p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {previousPillar && (
                      <div className="text-center">
                        <p className="text-sm text-red-200 mb-2">Previous Pillar:</p>
                        <Link
                          to={previousPillar.path}
                          className="inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors border border-white/30"
                        >
                          <ArrowLeftIcon className="h-4 w-4 mr-2" />
                          {previousPillar.title}
                        </Link>
                      </div>
                    )}
                    
                    {nextPillar && (
                      <div className="text-center">
                        <p className="text-sm text-red-200 mb-2">Next Pillar:</p>
                        <Link
                          to={nextPillar.path}
                          className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                          <span className="text-2xl mr-3">{nextPillar.icon}</span>
                          <div className="text-left">
                            <div className="text-lg">{nextPillar.title}</div>
                            <div className="text-sm opacity-75">Pillar {currentPillarId + 1} of 8</div>
                          </div>
                          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-3" />
                        </Link>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <p className="text-sm text-red-200 mb-2">Or explore:</p>
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

            {/* Public Debt Section */}
            {activeSection === 'public-debt' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl"><ScaleIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Public Debt Management</h2><p className="text-gray-600 dark:text-gray-400">Intermediate • 14 min read • Intermediate</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('public-debt')} className={`p-2 rounded-full transition-colors ${bookmarks.has('public-debt') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('public-debt') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('public-debt')} className={`p-2 rounded-full transition-colors ${completedSections.has('public-debt') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Public debt represents government borrowings to finance expenditure beyond current revenues. Effective debt management ensures fiscal sustainability while funding essential public investments and economic stability.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">India's Debt Profile (2025)</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Total Debt</h4><p className="text-sm text-orange-600 dark:text-orange-400">₹155+ lakh crore (57% of GDP)</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Central Debt</h4><p className="text-sm text-orange-600 dark:text-orange-400">₹155+ lakh crore (57% of GDP)</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Interest Payments</h4><p className="text-sm text-orange-600 dark:text-orange-400">₹11+ lakh crore (40% of revenue)</p></div>
                      </div>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">Debt Instruments</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Government Securities</h4><p className="text-sm text-red-600 dark:text-red-400">G-Secs, T-Bills (6.5-7.5% yields)</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">State Development Loans</h4><p className="text-sm text-red-600 dark:text-red-400">SDLs for state governments</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">External Debt</h4><p className="text-sm text-red-600 dark:text-red-400">$620+ billion (19% of GDP)</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Debt Sustainability Metrics</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Debt-to-GDP Ratio</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Current: 57% (2025)</li><li>• Target: Below 60%</li><li>• Sustainable level for India</li><li>• Gradual reduction path</li></ul></div>
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Interest Coverage</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Interest/Revenue: 40%</li><li>• Manageable but high</li><li>• Need revenue growth</li><li>• Expenditure efficiency</li></ul></div>
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Maturity Profile</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Average maturity: 11+ years</li><li>• Reduced rollover risk</li><li>• Balanced issuance calendar</li><li>• Market development focus</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-orange-700 dark:text-orange-300 text-sm">Government debt levels affect interest rates, inflation, and investment opportunities. Monitor debt sustainability indicators and consider government securities as safe investment options with predictable returns in your portfolio.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('government-schemes')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Government Schemes</button>
                    <button onClick={() => navigateToSection('monetary-policy')} className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Next: Monetary Policy<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Monetary Policy Section */}
            {activeSection === 'monetary-policy' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl"><BuildingLibraryIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Monetary Policy & RBI</h2><p className="text-gray-600 dark:text-gray-400">Intermediate • 20 min read • Intermediate</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('monetary-policy')} className={`p-2 rounded-full transition-colors ${bookmarks.has('monetary-policy') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('monetary-policy') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('monetary-policy')} className={`p-2 rounded-full transition-colors ${completedSections.has('monetary-policy') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">The Reserve Bank of India (RBI) implements monetary policy to maintain price stability, support economic growth, and ensure financial system stability. Understanding RBI policies helps predict interest rate trends and investment opportunities.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">RBI Policy Tools</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Repo Rate</h4><p className="text-sm text-blue-600 dark:text-blue-400">6.50% (2025) - key policy rate</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Reverse Repo Rate</h4><p className="text-sm text-blue-600 dark:text-blue-400">3.35% - excess liquidity absorption</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">CRR</h4><p className="text-sm text-blue-600 dark:text-blue-400">4.50% - cash reserve ratio</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">SLR</h4><p className="text-sm text-blue-600 dark:text-blue-400">18% - statutory liquidity ratio</p></div>
                      </div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Current Policy Stance (2025)</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Inflation Target</h4><p className="text-sm text-purple-600 dark:text-purple-400">4% (+/- 2%) CPI inflation</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Growth Support</h4><p className="text-sm text-purple-600 dark:text-purple-400">Accommodative stance for recovery</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibent text-purple-700 dark:text-purple-300 mb-1">Financial Stability</h4><p className="text-sm text-purple-600 dark:text-purple-400">Banking sector health focus</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Impact on Personal Finance</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div><h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Interest Rates</h4><ul className="text-sm text-green-600 dark:text-green-400 space-y-1"><li>• Loan EMIs affected</li><li>• FD rates follow repo rate</li><li>• Bond prices inverse relation</li><li>• Savings account rates</li></ul></div>
                      <div><h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Investment Strategy</h4><ul className="text-sm text-green-600 dark:text-green-400 space-y-1"><li>• Rate cycle timing</li><li>• Duration risk in bonds</li><li>• Equity sector rotation</li><li>• Real estate impact</li></ul></div>
                      <div><h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Economic Indicators</h4><ul className="text-sm text-green-600 dark:text-green-400 space-y-1"><li>• Inflation expectations</li><li>• Currency stability</li><li>• Credit growth trends</li><li>• Liquidity conditions</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">RBI policy decisions directly impact interest rates, inflation, and investment returns. Follow MPC meetings, understand policy transmission, and adjust your financial strategy based on monetary policy cycles and economic conditions.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('public-debt')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Public Debt</button>
                    <button onClick={() => navigateToSection('infrastructure-finance')} className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Next: Infrastructure Finance<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Infrastructure Finance Section */}
            {activeSection === 'infrastructure-finance' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl"><BuildingOfficeIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Infrastructure & Development Finance</h2><p className="text-gray-600 dark:text-gray-400">Advanced • 18 min read • Advanced</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('infrastructure-finance')} className={`p-2 rounded-full transition-colors ${bookmarks.has('infrastructure-finance') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('infrastructure-finance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('infrastructure-finance')} className={`p-2 rounded-full transition-colors ${completedSections.has('infrastructure-finance') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Infrastructure development requires massive capital investments that governments often cannot fund alone. Public-private partnerships, development finance institutions, and innovative funding mechanisms bridge this gap while creating investment opportunities.</p>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-3">Infrastructure Sectors</h3>
                      <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
                        <li>• <strong>Transport:</strong> Roads, railways, airports, ports</li>
                        <li>• <strong>Energy:</strong> Power generation, transmission, renewables</li>
                        <li>• <strong>Digital:</strong> Telecom, broadband, data centers</li>
                        <li>• <strong>Urban:</strong> Water, sanitation, smart cities</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3">Funding Sources (2025)</h3>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                        <li>• <strong>Budget Allocation:</strong> ₹11+ lakh crore capex</li>
                        <li>• <strong>PPP Projects:</strong> Private sector participation</li>
                        <li>• <strong>Infrastructure Bonds:</strong> Tax-free bonds</li>
                        <li>• <strong>InvITs/REITs:</strong> Infrastructure investment trusts</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-3">Investment Opportunities</h3>
                      <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-2">
                        <li>• <strong>Infrastructure Funds:</strong> Mutual fund schemes</li>
                        <li>• <strong>InvIT Units:</strong> Direct infrastructure exposure</li>
                        <li>• <strong>Infra Stocks:</strong> L&T, IRB Infra, Adani Ports</li>
                        <li>• <strong>Green Bonds:</strong> Sustainable infrastructure</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Major Infrastructure Initiatives (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">National Infrastructure Pipeline</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• ₹111 lakh crore investment (2020-25)</li><li>• 6,835 projects across sectors</li><li>• Focus on sustainable development</li><li>• Job creation and economic growth</li></ul></div>
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Key Programs</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Bharatmala: Highway development</li><li>• Sagarmala: Port modernization</li><li>• Digital India: Broadband connectivity</li><li>• Smart Cities: Urban infrastructure</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">Infrastructure development creates long-term investment opportunities with stable returns. Consider infrastructure funds, InvITs, and related stocks for portfolio diversification. Government capex focus provides sectoral growth opportunities.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('monetary-policy')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Monetary Policy</button>
                    <button onClick={() => navigateToSection('financial-regulation')} className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Next: Financial Regulation<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Financial Regulation Section */}
            {activeSection === 'financial-regulation' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl"><ShieldCheckIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Financial Regulation & Oversight</h2><p className="text-gray-600 dark:text-gray-400">Advanced • 16 min read • Advanced</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('financial-regulation')} className={`p-2 rounded-full transition-colors ${bookmarks.has('financial-regulation') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('financial-regulation') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('financial-regulation')} className={`p-2 rounded-full transition-colors ${completedSections.has('financial-regulation') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Financial regulation ensures market integrity, protects investors, and maintains systemic stability. Understanding regulatory frameworks helps navigate compliance requirements and investment risks while leveraging regulatory changes for opportunities.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">Key Regulators</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">RBI</h4><p className="text-sm text-red-600 dark:text-red-400">Banking, payments, monetary policy</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">SEBI</h4><p className="text-sm text-red-600 dark:text-red-400">Securities markets, mutual funds, IPOs</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">IRDAI</h4><p className="text-sm text-red-600 dark:text-red-400">Insurance sector regulation</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">PFRDA</h4><p className="text-sm text-red-600 dark:text-red-400">Pension funds and NPS</p></div>
                      </div>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-700">
                      <h3 className="text-xl font-bold text-pink-800 dark:text-pink-200 mb-4">Recent Regulatory Changes (2025)</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-1">Digital Lending</h4><p className="text-sm text-pink-600 dark:text-pink-400">RBI guidelines for fintech lending</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-1">ESG Disclosure</h4><p className="text-sm text-pink-600 dark:text-pink-400">SEBI sustainability reporting norms</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-1">Crypto Regulation</h4><p className="text-sm text-pink-600 dark:text-pink-400">Taxation and compliance framework</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-1">Account Aggregator</h4><p className="text-sm text-pink-600 dark:text-pink-400">Data sharing and consent framework</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Investor Protection Measures</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Deposit Insurance</h4><ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1"><li>• DICGC coverage: ₹5 lakh</li><li>• Bank deposit protection</li><li>• Cooperative bank coverage</li><li>• Claim settlement process</li></ul></div>
                      <div><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Investor Grievance</h4><ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1"><li>• SEBI SCORES portal</li><li>• Ombudsman schemes</li><li>• Investor education programs</li><li>• Dispute resolution mechanisms</li></ul></div>
                      <div><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Market Surveillance</h4><ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1"><li>• Real-time monitoring</li><li>• Insider trading detection</li><li>• Market manipulation prevention</li><li>• Algorithmic trading oversight</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">Stay updated on regulatory changes as they create investment opportunities and compliance requirements. Use regulated platforms, understand investor protection mechanisms, and leverage regulatory sandboxes for fintech innovations.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('infrastructure-finance')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Infrastructure Finance</button>
                    <button onClick={() => navigateToSection('conclusion')} className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Next: Conclusion<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Economic Indicators Section */}
            {activeSection === 'economic-indicators' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl"><ChartBarIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Economic Indicators & Analysis</h2><p className="text-gray-600 dark:text-gray-400">Advanced • 14 min read • Advanced</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('economic-indicators')} className={`p-2 rounded-full transition-colors ${bookmarks.has('economic-indicators') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('economic-indicators') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('economic-indicators')} className={`p-2 rounded-full transition-colors ${completedSections.has('economic-indicators') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Economic indicators are statistical measures that provide insights into the health and direction of an economy. Understanding these metrics helps predict market trends, investment opportunities, and policy changes that affect personal and business finances.</p>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-3">Growth Indicators</h3>
                      <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-2">
                        <li>• <strong>GDP Growth:</strong> 6.7% (FY25 estimate)</li>
                        <li>• <strong>Industrial Production:</strong> IIP monthly data</li>
                        <li>• <strong>Manufacturing PMI:</strong> 50+ expansion zone</li>
                        <li>• <strong>Services PMI:</strong> Economic activity gauge</li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700">
                      <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-200 mb-3">Price Indicators</h3>
                      <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-2">
                        <li>• <strong>CPI Inflation:</strong> 4.85% (Dec 2024)</li>
                        <li>• <strong>WPI Inflation:</strong> Wholesale price trends</li>
                        <li>• <strong>Core Inflation:</strong> Excluding food & fuel</li>
                        <li>• <strong>Food Inflation:</strong> Agricultural price impact</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3">Employment Indicators</h3>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                        <li>• <strong>Unemployment Rate:</strong> 3.2% (urban)</li>
                        <li>• <strong>Labour Force Participation:</strong> 42.9%</li>
                        <li>• <strong>Job Creation:</strong> Formal sector growth</li>
                        <li>• <strong>Skill Development:</strong> Training programs impact</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Key Economic Metrics (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Macroeconomic Indicators</h4><ul className="text-sm text-green-600 dark:text-green-400 space-y-1"><li>• GDP: $4.1 trillion (nominal)</li><li>• Per Capita Income: ₹2.1 lakh</li><li>• Current Account Deficit: 1.2% of GDP</li><li>• Forex Reserves: $650+ billion</li></ul></div>
                      <div><h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Financial Market Indicators</h4><ul className="text-sm text-green-600 dark:text-green-400 space-y-1"><li>• Sensex: 75,000+ levels</li><li>• Bank Credit Growth: 15%+</li><li>• Corporate Earnings Growth: 12%</li><li>• FII/DII Investment Flows</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Investment Decision Framework</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Leading Indicators</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Business confidence surveys</li><li>• Consumer sentiment index</li><li>• Credit growth trends</li><li>• Capital goods production</li></ul></div>
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Coincident Indicators</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Industrial production</li><li>• Employment levels</li><li>• Retail sales data</li><li>• Tax collections</li></ul></div>
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Lagging Indicators</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Unemployment rate</li><li>• Corporate profits</li><li>• Inflation trends</li><li>• Interest rate changes</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">Economic indicators help predict market cycles and investment opportunities. Track key metrics regularly, understand their interrelationships, and use them to time your investment decisions and adjust portfolio allocation based on economic trends.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('financial-regulation')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Financial Regulation</button>
                    <button onClick={() => navigateToSection('digital-governance')} className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Next: Digital Governance<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Digital Governance Section */}
            {activeSection === 'digital-governance' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl"><CpuChipIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Digital Governance & Fintech Policy</h2><p className="text-gray-600 dark:text-gray-400">Advanced • 12 min read • Advanced</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('digital-governance')} className={`p-2 rounded-full transition-colors ${bookmarks.has('digital-governance') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('digital-governance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('digital-governance')} className={`p-2 rounded-full transition-colors ${completedSections.has('digital-governance') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Digital governance encompasses government policies and frameworks for digital transformation, fintech regulation, and technology adoption in public services. Understanding these policies helps navigate the evolving digital financial landscape and leverage emerging opportunities.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-700">
                      <h3 className="text-xl font-bold text-cyan-800 dark:text-cyan-200 mb-4">Digital India Initiatives</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-1">UPI Ecosystem</h4><p className="text-sm text-cyan-600 dark:text-cyan-400">12+ billion monthly transactions</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-1">Digital Identity</h4><p className="text-sm text-cyan-600 dark:text-cyan-400">Aadhaar-based authentication</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-1">Account Aggregator</h4><p className="text-sm text-cyan-600 dark:text-cyan-400">Consent-based data sharing</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-1">ONDC</h4><p className="text-sm text-cyan-600 dark:text-cyan-400">Open network for digital commerce</p></div>
                      </div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Fintech Regulatory Framework</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Regulatory Sandbox</h4><p className="text-sm text-blue-600 dark:text-blue-400">Innovation testing environment</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Digital Lending Guidelines</h4><p className="text-sm text-blue-600 dark:text-blue-400">RBI norms for online lending</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">CBDC Pilot</h4><p className="text-sm text-blue-600 dark:text-blue-400">Digital rupee trials</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Data Protection</h4><p className="text-sm text-blue-600 dark:text-blue-400">Privacy and security norms</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Digital Financial Services (2025)</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div><h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Payment Systems</h4><ul className="text-sm text-green-600 dark:text-green-400 space-y-1"><li>• UPI: 12+ billion transactions/month</li><li>• Digital wallets: 50+ crore users</li><li>• BBPS: Bill payment platform</li><li>• FASTag: Electronic toll collection</li></ul></div>
                      <div><h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Digital Banking</h4><ul className="text-sm text-green-600 dark:text-green-400 space-y-1"><li>• Neo-banks: Digital-first approach</li><li>• API banking: Open banking</li><li>• Video KYC: Remote onboarding</li><li>• AI/ML: Risk assessment</li></ul></div>
                      <div><h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Investment Platforms</h4><ul className="text-sm text-green-600 dark:text-green-400 space-y-1"><li>• Robo-advisors: Automated investing</li><li>• Digital gold: Online precious metals</li><li>• Micro-investing: Small ticket sizes</li><li>• Social trading: Community investing</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Emerging Technologies & Policy</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Blockchain & Crypto</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Cryptocurrency taxation (30% + 1% TDS)</li><li>• Blockchain use cases in government</li><li>• Smart contracts for public services</li><li>• Digital asset regulation framework</li></ul></div>
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">AI & Data Analytics</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• AI governance framework</li><li>• Data localization requirements</li><li>• Algorithmic accountability</li><li>• Ethical AI guidelines</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-cyan-800 dark:text-cyan-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-cyan-700 dark:text-cyan-300 text-sm">Digital governance shapes the future of financial services. Stay updated on policy changes, leverage digital platforms for better financial access, and understand regulatory compliance for fintech investments and digital asset participation.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('economic-indicators')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Economic Indicators</button>
                    <button onClick={() => navigateToSection('international-relations')} className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Next: International Relations<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* International Relations Section */}
            {activeSection === 'international-relations' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl"><GlobeAltIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">International Financial Relations</h2><p className="text-gray-600 dark:text-gray-400">Advanced • 16 min read • Advanced</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('international-relations')} className={`p-2 rounded-full transition-colors ${bookmarks.has('international-relations') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('international-relations') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('international-relations')} className={`p-2 rounded-full transition-colors ${completedSections.has('international-relations') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">India's international financial relations encompass trade agreements, foreign investment policies, multilateral cooperation, and global economic partnerships. Understanding these relationships helps assess currency risks, investment opportunities, and policy impacts on domestic markets.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-700">
                      <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">Trade & Investment</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-1">FDI Inflows</h4><p className="text-sm text-emerald-600 dark:text-emerald-400">$80+ billion annually</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-1">Trade Volume</h4><p className="text-sm text-emerald-600 dark:text-emerald-400">$750+ billion merchandise trade</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-1">Services Export</h4><p className="text-sm text-emerald-600 dark:text-emerald-400">$320+ billion IT & services</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-1">Remittances</h4><p className="text-sm text-emerald-600 dark:text-emerald-400">$110+ billion from diaspora</p></div>
                      </div>
                    </div>
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">Multilateral Cooperation</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">G20 Presidency</h4><p className="text-sm text-teal-600 dark:text-teal-400">Global economic leadership role</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">BRICS Partnership</h4><p className="text-sm text-teal-600 dark:text-teal-400">Alternative financial architecture</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">IMF & World Bank</h4><p className="text-sm text-teal-600 dark:text-teal-400">Bretton Woods institutions</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">ADB & AIIB</h4><p className="text-sm text-teal-600 dark:text-teal-400">Asian development finance</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Currency & Exchange Rate Policy</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Rupee Management</h4><ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1"><li>• Managed float regime</li><li>• RBI intervention in forex markets</li><li>• Capital flow management</li><li>• External sector stability</li></ul></div>
                      <div><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Trade Finance</h4><ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1"><li>• Export credit guarantee</li><li>• Import financing schemes</li><li>• Trade settlement in rupees</li><li>• Bilateral payment agreements</li></ul></div>
                      <div><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Investment Flows</h4><ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1"><li>• FPI regulations and limits</li><li>• ODI (Overseas Direct Investment)</li><li>• Liberalized remittance scheme</li><li>• Capital account convertibility</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Global Financial Integration (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Market Access</h4><ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1"><li>• MSCI Emerging Market inclusion</li><li>• Bond index inclusions (JP Morgan)</li><li>• Masala bonds in international markets</li><li>• GIFT City as financial hub</li></ul></div>
                      <div><h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Regulatory Cooperation</h4><ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1"><li>• Cross-border regulatory frameworks</li><li>• Tax information exchange agreements</li><li>• Anti-money laundering cooperation</li><li>• Fintech regulatory sandboxes</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-emerald-800 dark:text-emerald-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-emerald-700 dark:text-emerald-300 text-sm">International financial relations affect currency stability, investment flows, and market access. Monitor global developments, understand currency risks in investments, and leverage international diversification opportunities while staying compliant with regulations.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('digital-governance')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Digital Governance</button>
                    <button onClick={() => navigateToSection('conclusion')} className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Next: Conclusion<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Conclusion & Citizen Impact</h2>
                      <p className="text-gray-600 dark:text-gray-400">Resources • 8 min read • All Levels</p>
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
                    Government finance shapes the economic environment in which we live, work, and invest. Understanding public finance helps you navigate tax obligations, leverage government schemes, and make informed decisions about your financial future in the context of broader economic policies.
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🎓 Congratulations! Learning Journey Complete</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">
                      You've completed all 8 pillars of financial literacy! You now have comprehensive knowledge spanning personal finance, investments, banking, insurance, corporate finance, alternative finance, international finance, and government finance.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">What You've Learned</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• Personal financial management</li>
                          <li>• Investment strategies and markets</li>
                          <li>• Banking and payment systems</li>
                          <li>• Risk management and insurance</li>
                          <li>• Business finance principles</li>
                          <li>• Fintech and innovation</li>
                          <li>• Global financial markets</li>
                          <li>• Public finance and policy</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Next Steps</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• Apply knowledge with our calculators</li>
                          <li>• Stay updated with financial news</li>
                          <li>• Continue learning advanced topics</li>
                          <li>• Share knowledge with others</li>
                          <li>• Implement your financial plan</li>
                          <li>• Monitor and adjust strategies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2 text-xl">🎯 Final Message</h4>
                    <p className="text-red-700 dark:text-red-300 leading-relaxed">
                      Financial literacy is a lifelong journey. The knowledge you've gained here provides a strong foundation, but markets evolve, regulations change, and new opportunities emerge. Stay curious, keep learning, and remember that the best investment you can make is in your own financial education.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    {previousPillar && (
                      <Link
                        to={previousPillar.path}
                        className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        <ArrowLeftIcon className="h-4 w-4 mr-2" />
                        Previous: {previousPillar.title}
                      </Link>
                    )}
                    <div className="flex items-center space-x-4">
                      <Link
                        to="/learn"
                        className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        Back to Learn Hub
                      </Link>
                      {nextPillar && (
                        <Link
                          to={nextPillar.path}
                          className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                          Next: {nextPillar.title}
                          <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                        </Link>
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
              className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden mb-8"
            >
              <div className="relative z-10">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">🎉 Congratulations! You've completed Tax & Government Finance</h3>
                  <p className="text-red-100 mb-6">Ready to continue your financial learning journey?</p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {previousPillar && (
                      <div className="text-center">
                        <p className="text-sm text-red-200 mb-2">Previous Pillar:</p>
                        <Link
                          to={previousPillar.path}
                          className="inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors border border-white/30"
                        >
                          <ArrowLeftIcon className="h-4 w-4 mr-2" />
                          {previousPillar.title}
                        </Link>
                      </div>
                    )}
                    
                    {nextPillar && (
                      <div className="text-center">
                        <p className="text-sm text-red-200 mb-2">Next Pillar:</p>
                        <Link
                          to={nextPillar.path}
                          className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                          <span className="text-2xl mr-3">{nextPillar.icon}</span>
                          <div className="text-left">
                            <div className="text-lg">{nextPillar.title}</div>
                            <div className="text-sm opacity-75">Pillar {nextPillar.id} of 8</div>
                          </div>
                          <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-3" />
                        </Link>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <p className="text-sm text-red-200 mb-2">Or explore:</p>
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
              className="bg-gradient-to-r from-red-500 via-orange-600 to-yellow-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      Government Finance Tools
                    </h3>
                    <p className="text-red-100">Understand public finance impact on your decisions</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Tax Calculator', path: '/calculators/income-tax', icon: '💰', desc: 'Calculate your tax liability' },
                    { name: 'GST Calculator', path: '/calculators/gst', icon: '📊', desc: 'GST impact analysis' },
                    { name: 'Government Schemes', path: '/calculators/government-schemes', icon: '🎯', desc: 'Eligible schemes finder' },
                    { name: 'Economic Indicators', path: '/calculators/economic-indicators', icon: '📈', desc: 'Track economic health' }
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
                        <p className="text-xs text-red-100 opacity-90">{tool.desc}</p>
                        <div className="mt-2 flex items-center text-xs text-red-200">
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