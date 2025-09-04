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
  CloudIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';

import { getNextPillar, getPreviousPillar } from '../../data/learningData';

export default function AlternativeFinance() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedCards, setExpandedCards] = useState({});
  const [activeTab, setActiveTab] = useState({});
  const [bookmarks, setBookmarks] = useState(new Set());
  const [readMore, setReadMore] = useState({});
  const [showQuickNav, setShowQuickNav] = useState(false);
  const [completedSections, setCompletedSections] = useState(new Set());
  const [readingProgress, setReadingProgress] = useState(0);

  // Get navigation data
  const currentPillarId = 7; // Alternative & Emerging Finance is pillar 7
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
      title: 'Introduction to Alternative Finance', 
      icon: AcademicCapIcon, 
      emoji: '🚀', 
      level: 'foundation',
      duration: '8 min read',
      difficulty: 'Beginner',
      description: 'Understanding fintech revolution and alternative financial services'
    },
    { 
      id: 'fintech-ecosystem', 
      title: 'Fintech Ecosystem Overview', 
      icon: CpuChipIcon, 
      emoji: '💻', 
      level: 'foundation',
      duration: '12 min read',
      difficulty: 'Beginner',
      description: 'Digital transformation of financial services and key players'
    },
    { 
      id: 'digital-payments', 
      title: 'Digital Payments & UPI Revolution', 
      icon: DevicePhoneMobileIcon, 
      emoji: '📱', 
      level: 'foundation',
      duration: '15 min read',
      difficulty: 'Beginner',
      description: 'Mobile payments, UPI, and cashless economy in India'
    },
    { 
      id: 'peer-to-peer', 
      title: 'Peer-to-Peer Lending', 
      icon: UserGroupIcon, 
      emoji: '🤝', 
      level: 'intermediate',
      duration: '14 min read',
      difficulty: 'Intermediate',
      description: 'P2P platforms, lending models, and risk assessment'
    },
    // Intermediate Level
    { 
      id: 'crowdfunding', 
      title: 'Crowdfunding & Alternative Funding', 
      icon: HeartIcon, 
      emoji: '💡', 
      level: 'intermediate',
      duration: '16 min read',
      difficulty: 'Intermediate',
      description: 'Equity crowdfunding, reward-based funding, and startup financing'
    },
    { 
      id: 'robo-advisors', 
      title: 'Robo-Advisors & Automated Investing', 
      icon: CpuChipIcon, 
      emoji: '🤖', 
      level: 'intermediate',
      duration: '12 min read',
      difficulty: 'Intermediate',
      description: 'Algorithm-based investment management and portfolio optimization'
    },
    { 
      id: 'cryptocurrency', 
      title: 'Cryptocurrency & Digital Assets', 
      icon: CurrencyRupeeIcon, 
      emoji: '₿', 
      level: 'advanced',
      duration: '20 min read',
      difficulty: 'Advanced',
      description: 'Bitcoin, blockchain technology, and crypto regulations in India'
    },
    { 
      id: 'defi', 
      title: 'Decentralized Finance (DeFi)', 
      icon: CloudIcon, 
      emoji: '🌐', 
      level: 'advanced',
      duration: '18 min read',
      difficulty: 'Advanced',
      description: 'Smart contracts, yield farming, and decentralized protocols'
    },
    // Advanced Level
    { 
      id: 'neobanking', 
      title: 'Neobanking & Digital-First Banking', 
      icon: BuildingOfficeIcon, 
      emoji: '🏦', 
      level: 'advanced',
      duration: '14 min read',
      difficulty: 'Advanced',
      description: 'Digital banks, challenger banks, and banking-as-a-service'
    },
    { 
      id: 'regtech-compliance', 
      title: 'RegTech & Compliance Innovation', 
      icon: ShieldCheckIcon, 
      emoji: '🛡️', 
      level: 'advanced',
      duration: '16 min read',
      difficulty: 'Advanced',
      description: 'Regulatory technology, KYC automation, and compliance solutions'
    },
    { 
      id: 'future-trends', 
      title: 'Future of Alternative Finance', 
      icon: RocketLaunchIcon, 
      emoji: '🔮', 
      level: 'advanced',
      duration: '12 min read',
      difficulty: 'Advanced',
      description: 'Emerging trends, AI in finance, and next-generation solutions'
    },
    // Conclusion
    { 
      id: 'conclusion', 
      title: 'Conclusion & Investment Strategies', 
      icon: CheckCircleIcon, 
      emoji: '⭐', 
      level: 'resources',
      duration: '10 min read',
      difficulty: 'All Levels',
      description: 'Key takeaways and how to leverage alternative finance'
    }
  ];

  const stats = [
    { label: 'Completion Rate', value: '89%', icon: TrophyIcon },
    { label: 'Average Rating', value: '4.7', icon: StarIcon },
    { label: 'Active Learners', value: '22K+', icon: UserGroupIcon },
    { label: 'Updated', value: '2025', icon: SparklesIcon }
  ];

  const relatedPillars = [
    { 
      name: 'Banking & Payments', 
      path: '/learn/banking-payments', 
      icon: '🏦',
      description: 'Traditional banking systems'
    },
    { 
      name: 'Investments & Capital Markets', 
      path: '/learn/investments', 
      icon: '📈',
      description: 'Investment strategies and markets'
    },
    { 
      name: 'Corporate Finance', 
      path: '/learn/corporate-finance', 
      icon: '🏢',
      description: 'Business financial management'
    },
    { 
      name: 'International Finance', 
      path: '/learn/international-finance', 
      icon: '🌍',
      description: 'Global financial markets'
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-600"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link 
            to="/learn"
            className="inline-flex items-center text-purple-200 hover:text-white transition-colors group mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Learn
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Alternative Finance</h1>
              <p className="text-purple-100">Pillar 7 of 8 • Fintech & Innovation • 12 Sections • 2025 Updated</p>
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
                <RocketLaunchIcon className="h-8 w-8" />
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
                <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-full">
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
                          ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-l-4 border-purple-500 shadow-md' 
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        isActive ? 'bg-purple-200 dark:bg-purple-800' : 'bg-gray-100 dark:bg-gray-600'
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
                      className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200"
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
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <AcademicCapIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introduction to Alternative Finance</h2>
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
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-8 border border-purple-200 dark:border-purple-700">
                    <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center">
                      <LightBulbIcon className="h-6 w-6 mr-2" />
                      What is Alternative Finance?
                    </h3>
                    <p className="text-purple-800 dark:text-purple-200 leading-relaxed">
                      Alternative finance refers to financial services and products that operate outside traditional banking systems. It encompasses fintech innovations, digital platforms, and technology-driven solutions that democratize access to financial services and create new ways of managing, investing, and transferring money.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Digital Disruption</h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">Technology transforming traditional financial services through mobile apps, AI, and blockchain innovations.</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Financial Inclusion</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">Bringing financial services to underserved populations through innovative delivery models and lower costs.</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">New Business Models</h4>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">Platform-based services, peer-to-peer models, and decentralized finance creating new opportunities.</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">India's Fintech Revolution (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Market Size</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• $150+ billion fintech market</li>
                          <li>• 10,000+ fintech startups</li>
                          <li>• 87% digital payment adoption</li>
                          <li>• 500M+ UPI users</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Key Drivers</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Smartphone penetration (750M+)</li>
                          <li>• Government digital initiatives</li>
                          <li>• Young demographic (65% under 35)</li>
                          <li>• Regulatory support (RBI sandbox)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300">
                      Alternative finance is reshaping the financial landscape by making services more accessible, affordable, and user-friendly. Understanding these innovations helps you leverage new opportunities while navigating the evolving financial ecosystem.
                    </p>
                  </div>
                  
                  <div className="flex justify-end items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('fintech-ecosystem')}
                      className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Next: Fintech Ecosystem Overview
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Fintech Ecosystem Section */}
            {activeSection === 'fintech-ecosystem' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl"><CpuChipIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Fintech Ecosystem Overview</h2><p className="text-gray-600 dark:text-gray-400">Foundation • 12 min read • Beginner</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('fintech-ecosystem')} className={`p-2 rounded-full transition-colors ${bookmarks.has('fintech-ecosystem') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('fintech-ecosystem') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('fintech-ecosystem')} className={`p-2 rounded-full transition-colors ${completedSections.has('fintech-ecosystem') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">The fintech ecosystem encompasses a diverse range of technology-driven financial services that are transforming how we bank, invest, pay, and manage money. Understanding this ecosystem helps identify opportunities and navigate the digital financial landscape.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Fintech Categories</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Payments</h4><p className="text-sm text-blue-600 dark:text-blue-400">UPI, digital wallets, payment gateways</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Lending</h4><p className="text-sm text-blue-600 dark:text-blue-400">P2P lending, digital loans, BNPL</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Wealth Management</h4><p className="text-sm text-blue-600 dark:text-blue-400">Robo-advisors, investment apps</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Insurance</h4><p className="text-sm text-blue-600 dark:text-blue-400">Insurtech, digital policies</p></div>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Key Players (2025)</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Unicorns</h4><p className="text-sm text-green-600 dark:text-green-400">Paytm, PhonePe, Razorpay, Zerodha</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Neobanks</h4><p className="text-sm text-green-600 dark:text-green-400">Jupiter, Fi, Niyo, Open</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Lending</h4><p className="text-sm text-green-600 dark:text-green-400">Lendingkart, Capital Float, Faircent</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Wealth Tech</h4><p className="text-sm text-green-600 dark:text-green-400">Groww, Upstox, ET Money, Kuvera</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Technology Enablers</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div><h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">APIs & Open Banking</h4><p className="text-sm text-purple-600 dark:text-purple-400">Account aggregation, payment initiation, data sharing</p></div>
                      <div><h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">AI & Machine Learning</h4><p className="text-sm text-purple-600 dark:text-purple-400">Credit scoring, fraud detection, personalization</p></div>
                      <div><h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Blockchain & DLT</h4><p className="text-sm text-purple-600 dark:text-purple-400">Smart contracts, digital identity, settlements</p></div>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">The fintech ecosystem is rapidly evolving with new players and technologies. Stay informed about emerging trends, regulatory changes, and new service offerings to leverage the best financial solutions for your needs.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('introduction')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Introduction</button>
                    <button onClick={() => navigateToSection('digital-payments')} className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Next: Digital Payments<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Digital Payments Section */}
            {activeSection === 'digital-payments' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl"><DevicePhoneMobileIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Digital Payments & UPI Revolution</h2><p className="text-gray-600 dark:text-gray-400">Foundation • 15 min read • Beginner</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('digital-payments')} className={`p-2 rounded-full transition-colors ${bookmarks.has('digital-payments') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('digital-payments') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('digital-payments')} className={`p-2 rounded-full transition-colors ${completedSections.has('digital-payments') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Digital payments have revolutionized financial transactions in India, with UPI leading the transformation. Understanding digital payment systems helps you choose the right payment methods and leverage the benefits of a cashless economy.</p>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">UPI Success Story (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div><h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Volume & Value</h4><ul className="text-sm text-green-600 dark:text-green-400 space-y-1"><li>• 12+ billion monthly transactions</li><li>• ₹18+ lakh crore monthly value</li><li>• 500+ million registered users</li><li>• 99.95% success rate</li></ul></div>
                      <div><h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Key Features</h4><ul className="text-sm text-green-600 dark:text-green-400 space-y-1"><li>• 24/7 instant transfers</li><li>• Zero transaction fees</li><li>• Interoperable across banks</li><li>• Multiple payment modes</li></ul></div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3">Digital Wallets</h3>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                        <li>• Paytm (350M+ users)</li>
                        <li>• PhonePe (450M+ users)</li>
                        <li>• Google Pay (150M+ users)</li>
                        <li>• Amazon Pay, Mobikwik</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-3">Payment Methods</h3>
                      <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                        <li>• QR Code scanning</li>
                        <li>• Mobile number transfer</li>
                        <li>• Virtual Payment Address</li>
                        <li>• Tap & Pay (NFC)</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-3">Security Features</h3>
                      <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                        <li>• Two-factor authentication</li>
                        <li>• Biometric verification</li>
                        <li>• Transaction limits</li>
                        <li>• Real-time fraud monitoring</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">Digital payments offer convenience, speed, and transparency. Choose payment apps based on your needs, ensure strong security practices, and take advantage of cashback and rewards programs while maintaining financial discipline.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('fintech-ecosystem')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Fintech Ecosystem</button>
                    <button onClick={() => navigateToSection('peer-to-peer')} className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Next: P2P Lending<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* P2P Lending Section */}
            {activeSection === 'peer-to-peer' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-green-600 rounded-xl"><UserGroupIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Peer-to-Peer Lending</h2><p className="text-gray-600 dark:text-gray-400">Intermediate • 14 min read • Intermediate</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('peer-to-peer')} className={`p-2 rounded-full transition-colors ${bookmarks.has('peer-to-peer') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('peer-to-peer') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('peer-to-peer')} className={`p-2 rounded-full transition-colors ${completedSections.has('peer-to-peer') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Peer-to-peer lending connects borrowers directly with lenders through digital platforms, bypassing traditional banks. This creates opportunities for higher returns for lenders and potentially lower rates for borrowers.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">How P2P Works</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">1. Registration</h4><p className="text-sm text-blue-600 dark:text-blue-400">KYC verification for lenders and borrowers</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">2. Credit Assessment</h4><p className="text-sm text-blue-600 dark:text-blue-400">AI-based scoring and risk evaluation</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">3. Matching</h4><p className="text-sm text-blue-600 dark:text-blue-400">Algorithm matches lenders with borrowers</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">4. Funding & Repayment</h4><p className="text-sm text-blue-600 dark:text-blue-400">Automated disbursement and collection</p></div>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Indian P2P Platforms (2025)</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Faircent</h4><p className="text-sm text-green-600 dark:text-green-400">12-36% returns, ₹1000 minimum investment</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">LenDenClub</h4><p className="text-sm text-green-600 dark:text-green-400">8-36% returns, diversified lending</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">i2iFunding</h4><p className="text-sm text-green-600 dark:text-green-400">15-36% returns, SME focus</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Liquiloans</h4><p className="text-sm text-green-600 dark:text-green-400">12-28% returns, auto-invest feature</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Risk Management & Returns</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Risk Factors</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Default risk (5-15% typical)</li><li>• No deposit insurance</li><li>• Platform risk</li><li>• Liquidity constraints</li><li>• Regulatory changes</li></ul></div>
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Mitigation Strategies</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Diversify across borrowers</li><li>• Start with small amounts</li><li>• Choose reputable platforms</li><li>• Understand credit grades</li><li>• Monitor portfolio regularly</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">P2P lending can offer attractive returns but comes with higher risks than traditional investments. Limit exposure to 5-10% of your portfolio, diversify across multiple loans, and choose RBI-registered platforms with good track records.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('digital-payments')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Digital Payments</button>
                    <button onClick={() => navigateToSection('crowdfunding')} className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Next: Crowdfunding<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Crowdfunding Section */}
            {activeSection === 'crowdfunding' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl"><HeartIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Crowdfunding & Alternative Funding</h2><p className="text-gray-600 dark:text-gray-400">Intermediate • 16 min read • Intermediate</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('crowdfunding')} className={`p-2 rounded-full transition-colors ${bookmarks.has('crowdfunding') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('crowdfunding') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('crowdfunding')} className={`p-2 rounded-full transition-colors ${completedSections.has('crowdfunding') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Crowdfunding democratizes access to capital by allowing entrepreneurs and creators to raise funds from a large number of people. It offers new investment opportunities and ways to support innovative projects.</p>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-700">
                      <h3 className="text-lg font-bold text-pink-800 dark:text-pink-200 mb-3">Reward-Based</h3>
                      <ul className="text-sm text-pink-600 dark:text-pink-400 space-y-2">
                        <li>• <strong>Kickstarter:</strong> Creative projects</li>
                        <li>• <strong>Indiegogo:</strong> Tech innovations</li>
                        <li>• <strong>Ketto:</strong> Social causes (India)</li>
                        <li>• <strong>Milaap:</strong> Personal fundraising</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-3">Equity Crowdfunding</h3>
                      <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-2">
                        <li>• <strong>AngelList:</strong> Startup investments</li>
                        <li>• <strong>SeedInvest:</strong> Accredited investors</li>
                        <li>• <strong>LetsVenture:</strong> Indian startups</li>
                        <li>• <strong>Tyke Invest:</strong> Retail participation</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3">Real Estate</h3>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                        <li>• <strong>Fundrise:</strong> REIT investments</li>
                        <li>• <strong>RealtyMogul:</strong> Commercial properties</li>
                        <li>• <strong>Strata:</strong> Fractional ownership</li>
                        <li>• <strong>PropertyShare:</strong> Indian real estate</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Investment Considerations (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Due Diligence</h4><ul className="text-sm text-green-600 dark:text-green-400 space-y-1"><li>• Business model viability</li><li>• Management team experience</li><li>• Market size and competition</li><li>• Financial projections</li><li>• Exit strategy potential</li></ul></div>
                      <div><h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Risk Factors</h4><ul className="text-sm text-green-600 dark:text-green-400 space-y-1"><li>• High failure rate (90%+ startups fail)</li><li>• Illiquid investments</li><li>• Limited investor protection</li><li>• Dilution in future rounds</li><li>• Platform dependency</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-pink-800 dark:text-pink-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-pink-700 dark:text-pink-300 text-sm">Crowdfunding offers access to early-stage investments but requires careful due diligence. Treat it as high-risk, high-reward investing. Diversify across multiple projects and only invest amounts you can afford to lose completely.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('peer-to-peer')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: P2P Lending</button>
                    <button onClick={() => navigateToSection('robo-advisors')} className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Next: Robo-Advisors<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Robo-Advisors Section */}
            {activeSection === 'robo-advisors' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl"><CpuChipIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Robo-Advisors & Automated Investing</h2><p className="text-gray-600 dark:text-gray-400">Intermediate • 12 min read • Intermediate</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('robo-advisors')} className={`p-2 rounded-full transition-colors ${bookmarks.has('robo-advisors') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('robo-advisors') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('robo-advisors')} className={`p-2 rounded-full transition-colors ${completedSections.has('robo-advisors') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Robo-advisors use algorithms and AI to provide automated investment management services. They offer professional portfolio management at lower costs, making sophisticated investment strategies accessible to retail investors.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700">
                      <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">How Robo-Advisors Work</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Risk Assessment</h4><p className="text-sm text-indigo-600 dark:text-indigo-400">Questionnaire determines risk tolerance</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Portfolio Creation</h4><p className="text-sm text-indigo-600 dark:text-indigo-400">Algorithm builds diversified portfolio</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Rebalancing</h4><p className="text-sm text-indigo-600 dark:text-indigo-400">Automatic portfolio rebalancing</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Tax Optimization</h4><p className="text-sm text-indigo-600 dark:text-indigo-400">Tax-loss harvesting strategies</p></div>
                      </div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Popular Robo-Advisors (2025)</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Kuvera</h4><p className="text-sm text-blue-600 dark:text-blue-400">Free mutual fund platform, goal-based investing</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">ET Money</h4><p className="text-sm text-blue-600 dark:text-blue-400">Genius portfolios, tax optimization</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Scripbox</h4><p className="text-sm text-blue-600 dark:text-blue-400">Curated fund selection, SIP automation</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Groww</h4><p className="text-sm text-blue-600 dark:text-blue-400">Smart SIP, portfolio recommendations</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Benefits vs Traditional Advisors</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Robo-Advisor Advantages</h4><ul className="text-sm text-green-600 dark:text-green-400 space-y-1"><li>• Lower fees (0.25-0.75% vs 1-2%)</li><li>• 24/7 availability</li><li>• Emotion-free investing</li><li>• Automatic rebalancing</li><li>• Lower minimum investment</li></ul></div>
                      <div><h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Human Advisor Benefits</h4><ul className="text-sm text-green-600 dark:text-green-400 space-y-1"><li>• Personalized advice</li><li>• Complex financial planning</li><li>• Behavioral coaching</li><li>• Tax planning expertise</li><li>• Estate planning guidance</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-indigo-700 dark:text-indigo-300 text-sm">Robo-advisors are excellent for passive, long-term investing with lower costs and automatic management. They work best for straightforward investment goals. Consider human advisors for complex financial situations or when you need personalized guidance.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('crowdfunding')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Crowdfunding</button>
                    <button onClick={() => navigateToSection('cryptocurrency')} className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Next: Cryptocurrency<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Cryptocurrency Section */}
            {activeSection === 'cryptocurrency' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl"><CurrencyRupeeIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Cryptocurrency & Digital Assets</h2><p className="text-gray-600 dark:text-gray-400">Advanced • 20 min read • Advanced</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('cryptocurrency')} className={`p-2 rounded-full transition-colors ${bookmarks.has('cryptocurrency') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('cryptocurrency') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('cryptocurrency')} className={`p-2 rounded-full transition-colors ${completedSections.has('cryptocurrency') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Cryptocurrency represents a new asset class built on blockchain technology. While offering potential returns and portfolio diversification, crypto investments require understanding of technology, regulations, and significant risk management.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">Major Cryptocurrencies (2025)</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Bitcoin (BTC)</h4><p className="text-sm text-orange-600 dark:text-orange-400">Digital gold, store of value, $1T+ market cap</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Ethereum (ETH)</h4><p className="text-sm text-orange-600 dark:text-orange-400">Smart contracts platform, DeFi ecosystem</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Stablecoins</h4><p className="text-sm text-orange-600 dark:text-orange-400">USDT, USDC - pegged to fiat currencies</p></div>
                      </div>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">Indian Crypto Landscape</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Regulation</h4><p className="text-sm text-red-600 dark:text-red-400">30% tax on gains, 1% TDS on transactions</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Exchanges</h4><p className="text-sm text-red-600 dark:text-red-400">WazirX, CoinDCX, Zebpay, Bitbns</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-red-700 dark:text-red-300 mb-1">Adoption</h4><p className="text-sm text-red-600 dark:text-red-400">15M+ users, growing institutional interest</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Investment Considerations</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Risks</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Extreme price volatility</li><li>• Regulatory uncertainty</li><li>• Technology risks</li><li>• Market manipulation</li><li>• Security breaches</li></ul></div>
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Best Practices</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Invest only what you can afford to lose</li><li>• Use reputable exchanges</li><li>• Enable two-factor authentication</li><li>• Consider hardware wallets</li><li>• Diversify across assets</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">Cryptocurrency is a high-risk, high-reward asset class. Limit exposure to 5-10% of your portfolio, understand the technology and regulations, and never invest more than you can afford to lose. Focus on established cryptocurrencies and reputable platforms.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('robo-advisors')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Robo-Advisors</button>
                    <button onClick={() => navigateToSection('defi')} className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Next: DeFi<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* DeFi Section */}
            {activeSection === 'defi' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl"><CloudIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Decentralized Finance (DeFi)</h2><p className="text-gray-600 dark:text-gray-400">Advanced • 18 min read • Advanced</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('defi')} className={`p-2 rounded-full transition-colors ${bookmarks.has('defi') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('defi') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('defi')} className={`p-2 rounded-full transition-colors ${completedSections.has('defi') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Decentralized Finance (DeFi) recreates traditional financial services using blockchain technology and smart contracts, eliminating intermediaries and enabling permissionless access to financial services globally.</p>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-700">
                      <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-200 mb-3">Core DeFi Services</h3>
                      <ul className="text-sm text-cyan-600 dark:text-cyan-400 space-y-2">
                        <li>• <strong>Lending:</strong> Aave, Compound</li>
                        <li>• <strong>DEX:</strong> Uniswap, SushiSwap</li>
                        <li>• <strong>Yield Farming:</strong> Yearn Finance</li>
                        <li>• <strong>Derivatives:</strong> dYdX, Synthetix</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3">Key Concepts</h3>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                        <li>• <strong>Smart Contracts:</strong> Automated execution</li>
                        <li>• <strong>Liquidity Pools:</strong> Decentralized trading</li>
                        <li>• <strong>Governance Tokens:</strong> Protocol voting</li>
                        <li>• <strong>Yield Farming:</strong> Earning rewards</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-3">Risks & Challenges</h3>
                      <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-2">
                        <li>• <strong>Smart Contract Risk:</strong> Code vulnerabilities</li>
                        <li>• <strong>Impermanent Loss:</strong> LP token risks</li>
                        <li>• <strong>Gas Fees:</strong> High transaction costs</li>
                        <li>• <strong>Regulatory Risk:</strong> Uncertain legal status</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">DeFi in India (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Current Status</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• No specific DeFi regulations</li><li>• Crypto taxation applies (30% + 1% TDS)</li><li>• Growing developer community</li><li>• Limited institutional adoption</li></ul></div>
                      <div><h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Participation Tips</h4><ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1"><li>• Start with small amounts</li><li>• Understand smart contract risks</li><li>• Use reputable protocols</li><li>• Keep track of transactions for tax</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-cyan-800 dark:text-cyan-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-cyan-700 dark:text-cyan-300 text-sm">DeFi offers innovative financial services but comes with significant technical and regulatory risks. Only participate with funds you can afford to lose, understand the protocols thoroughly, and stay updated on regulatory developments in India.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('cryptocurrency')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Cryptocurrency</button>
                    <button onClick={() => navigateToSection('neobanking')} className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Next: Neobanking<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Neobanking Section */}
            {activeSection === 'neobanking' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-green-600 rounded-xl"><BuildingOfficeIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Neobanking & Digital-First Banking</h2><p className="text-gray-600 dark:text-gray-400">Advanced • 14 min read • Advanced</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('neobanking')} className={`p-2 rounded-full transition-colors ${bookmarks.has('neobanking') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('neobanking') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('neobanking')} className={`p-2 rounded-full transition-colors ${completedSections.has('neobanking') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Neobanks are digital-first financial institutions that operate without physical branches, offering banking services through mobile apps and web platforms. They focus on user experience, technology, and specific customer segments.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">Indian Neobanks (2025)</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Jupiter</h4><p className="text-sm text-teal-600 dark:text-teal-400">Salary account, spending insights, rewards</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Fi Money</h4><p className="text-sm text-teal-600 dark:text-teal-400">Smart savings, automated investing</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Niyo</h4><p className="text-sm text-teal-600 dark:text-teal-400">Zero-fee banking, travel cards</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Open</h4><p className="text-sm text-teal-600 dark:text-teal-400">SME banking, business automation</p></div>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Key Features</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">User Experience</h4><p className="text-sm text-green-600 dark:text-green-400">Intuitive apps, instant onboarding</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Lower Costs</h4><p className="text-sm text-green-600 dark:text-green-400">Minimal fees, better rates</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Smart Features</h4><p className="text-sm text-green-600 dark:text-green-400">AI insights, automated savings</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Integration</h4><p className="text-sm text-green-600 dark:text-green-400">Seamless third-party services</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Neobank vs Traditional Bank</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Neobank Advantages</h4><ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1"><li>• 24/7 digital access</li><li>• Lower fees and better rates</li><li>• Faster account opening</li><li>• Modern user interface</li><li>• Integrated financial services</li></ul></div>
                      <div><h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Traditional Bank Benefits</h4><ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1"><li>• Physical branch network</li><li>• Established trust and reputation</li><li>• Comprehensive product range</li><li>• Human customer service</li><li>• Regulatory compliance history</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-teal-700 dark:text-teal-300 text-sm">Neobanks offer superior digital experience and lower costs but may lack comprehensive services. Consider them for specific needs like savings automation or business banking, while maintaining relationships with traditional banks for complex requirements.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('defi')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: DeFi</button>
                    <button onClick={() => navigateToSection('regtech-compliance')} className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Next: RegTech<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* RegTech Section */}
            {activeSection === 'regtech-compliance' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl"><ShieldCheckIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">RegTech & Compliance Innovation</h2><p className="text-gray-600 dark:text-gray-400">Advanced • 16 min read • Advanced</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('regtech-compliance')} className={`p-2 rounded-full transition-colors ${bookmarks.has('regtech-compliance') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('regtech-compliance') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('regtech-compliance')} className={`p-2 rounded-full transition-colors ${completedSections.has('regtech-compliance') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">RegTech (Regulatory Technology) uses technology to help financial institutions comply with regulations efficiently and cost-effectively. It automates compliance processes, reduces risks, and improves regulatory reporting.</p>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-lg font-bold text-red-800 dark:text-red-200 mb-3">KYC & Identity</h3>
                      <ul className="text-sm text-red-600 dark:text-red-400 space-y-2">
                        <li>• <strong>Digital KYC:</strong> Aadhaar-based verification</li>
                        <li>• <strong>Video KYC:</strong> Remote onboarding</li>
                        <li>• <strong>Biometric Auth:</strong> Fingerprint, face recognition</li>
                        <li>• <strong>Document AI:</strong> Automated verification</li>
                      </ul>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-700">
                      <h3 className="text-lg font-bold text-pink-800 dark:text-pink-200 mb-3">Risk & Compliance</h3>
                      <ul className="text-sm text-pink-600 dark:text-pink-400 space-y-2">
                        <li>• <strong>AML Monitoring:</strong> Transaction surveillance</li>
                        <li>• <strong>Fraud Detection:</strong> Real-time analysis</li>
                        <li>• <strong>Risk Scoring:</strong> ML-based assessment</li>
                        <li>• <strong>Regulatory Reporting:</strong> Automated submissions</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-3">Data & Analytics</h3>
                      <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-2">
                        <li>• <strong>Data Governance:</strong> Privacy compliance</li>
                        <li>• <strong>Audit Trails:</strong> Immutable records</li>
                        <li>• <strong>Stress Testing:</strong> Scenario analysis</li>
                        <li>• <strong>ESG Reporting:</strong> Sustainability metrics</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-6">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">Indian RegTech Landscape (2025)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Key Players</h4><ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1"><li>• Signzy - Digital KYC solutions</li><li>• Perfios - Financial data analytics</li><li>• Bureau - Identity verification</li><li>• Karza Technologies - Data intelligence</li><li>• IDfy - Background verification</li></ul></div>
                      <div><h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Regulatory Support</h4><ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1"><li>• RBI Regulatory Sandbox</li><li>• Digital India initiatives</li><li>• Account Aggregator framework</li><li>• Open Banking guidelines</li><li>• Data Protection Bill</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">RegTech is transforming compliance from a cost center to a competitive advantage. As regulations become more complex, technology-driven compliance solutions become essential for financial institutions and beneficial for consumers through better security and faster services.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('neobanking')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Neobanking</button>
                    <button onClick={() => navigateToSection('future-trends')} className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Next: Future Trends<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Future Trends Section */}
            {activeSection === 'future-trends' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl"><RocketLaunchIcon className="h-8 w-8 text-white" /></div>
                    <div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Future of Alternative Finance</h2><p className="text-gray-600 dark:text-gray-400">Advanced • 12 min read • Advanced</p></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('future-trends')} className={`p-2 rounded-full transition-colors ${bookmarks.has('future-trends') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>{bookmarks.has('future-trends') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}</button>
                    <button onClick={() => markSectionComplete('future-trends')} className={`p-2 rounded-full transition-colors ${completedSections.has('future-trends') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}><CheckCircleIcon className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="prose max-w-none dark:prose-invert">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">The future of alternative finance will be shaped by emerging technologies, changing consumer expectations, and evolving regulations. Understanding these trends helps prepare for the next wave of financial innovation.</p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700">
                      <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">Emerging Technologies</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">AI & Machine Learning</h4><p className="text-sm text-indigo-600 dark:text-indigo-400">Hyper-personalization, predictive analytics</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Quantum Computing</h4><p className="text-sm text-indigo-600 dark:text-indigo-400">Advanced cryptography, risk modeling</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">IoT & Edge Computing</h4><p className="text-sm text-indigo-600 dark:text-indigo-400">Real-time data, contextual services</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">5G & Connectivity</h4><p className="text-sm text-indigo-600 dark:text-indigo-400">Instant transactions, AR/VR banking</p></div>
                      </div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Future Trends (2025-2030)</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Embedded Finance</h4><p className="text-sm text-purple-600 dark:text-purple-400">Financial services in non-financial apps</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Central Bank Digital Currencies</h4><p className="text-sm text-purple-600 dark:text-purple-400">Digital Rupee adoption and integration</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Sustainable Finance</h4><p className="text-sm text-purple-600 dark:text-purple-400">ESG-focused products and green bonds</p></div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg"><h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Voice & Conversational Banking</h4><p className="text-sm text-purple-600 dark:text-purple-400">AI assistants, natural language processing</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">Preparing for the Future</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div><h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Stay Informed</h4><ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1"><li>• Follow fintech news</li><li>• Attend industry events</li><li>• Join fintech communities</li></ul></div>
                      <div><h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Adapt & Learn</h4><ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1"><li>• Embrace new technologies</li><li>• Develop digital skills</li><li>• Experiment with new services</li></ul></div>
                      <div><h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Invest Wisely</h4><ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1"><li>• Diversify across innovations</li><li>• Understand risks</li><li>• Start with small amounts</li></ul></div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🎯 Key Takeaway</h4>
                    <p className="text-indigo-700 dark:text-indigo-300 text-sm">The future of finance will be more personalized, automated, and integrated into daily life. Stay curious, embrace change gradually, and focus on solutions that genuinely improve your financial well-being rather than chasing every new trend.</p>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('regtech-compliance')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"><ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: RegTech</button>
                    <button onClick={() => navigateToSection('conclusion')} className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Next: Conclusion<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" /></button>
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Conclusion & Investment Strategies</h2>
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
                    Alternative finance represents the future of financial services, driven by technology, innovation, and changing consumer expectations. Understanding and leveraging these trends can provide significant advantages in personal and business finance.
                  </p>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2 text-xl">🎯 Final Message</h4>
                    <p className="text-purple-700 dark:text-purple-300 leading-relaxed">
                      The alternative finance revolution is just beginning. Stay informed, embrace innovation responsibly, and leverage these tools to achieve your financial goals. The future belongs to those who adapt and innovate.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Link
                      to="/learn"
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      Back to Learn Hub
                    </Link>
                    <div className="flex items-center space-x-4">
                      <Link
                        to="/calculators"
                        className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        Explore Calculators
                      </Link>
                      {nextPillar && (
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Next Pillar:</span>
                          <Link
                            to={nextPillar.path}
                            className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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
              className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden mb-8"
            >
              <div className="relative z-10">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">🎉 Congratulations! You've completed Alternative & Emerging Finance</h3>
                  <p className="text-purple-100 mb-6">Ready to continue your financial learning journey?</p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {previousPillar && (
                      <div className="text-center">
                        <p className="text-sm text-purple-200 mb-2">Previous Pillar:</p>
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
                        <p className="text-sm text-purple-200 mb-2">Next Pillar:</p>
                        <Link
                          to={nextPillar.path}
                          className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
                      <p className="text-sm text-purple-200 mb-2">Or explore:</p>
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
              className="bg-gradient-to-r from-purple-500 via-pink-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      Alternative Finance Tools
                    </h3>
                    <p className="text-purple-100">Explore fintech innovations and digital financial tools</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Crypto Calculator', path: '/calculators/crypto', icon: '₿', desc: 'Calculate crypto returns' },
                    { name: 'P2P Lending ROI', path: '/calculators/p2p-lending', icon: '🤝', desc: 'P2P investment returns' },
                    { name: 'Robo Advisor', path: '/calculators/robo-advisor', icon: '🤖', desc: 'Automated portfolio advice' },
                    { name: 'Fintech Comparison', path: '/calculators/fintech-compare', icon: '📱', desc: 'Compare fintech services' }
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
                        <p className="text-xs text-purple-100 opacity-90">{tool.desc}</p>
                        <div className="mt-2 flex items-center text-xs text-purple-200">
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