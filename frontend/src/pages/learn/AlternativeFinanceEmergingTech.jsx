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
  CogIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  ChartPieIcon,
  CubeIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  CpuChipIcon,
  CircleStackIcon,
  WalletIcon,
  LinkIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';

export default function AlternativeFinanceEmergingTech() {
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
    // Foundation Level
    { 
      id: 'introduction', 
      title: 'Introduction to Alternative Finance & Emerging Tech', 
      icon: RocketLaunchIcon, 
      emoji: '🚀', 
      level: 'foundation',
      duration: '8 min read',
      difficulty: 'Beginner',
      description: 'Innovative financial methods and emerging technologies'
    },
    { 
      id: 'core-components', 
      title: 'Core Components of Alternative Finance & Emerging Tech', 
      icon: CubeIcon, 
      emoji: '🎯', 
      level: 'foundation',
      duration: '12 min read',
      difficulty: 'Beginner',
      description: 'Essential elements of modern financial technology'
    },
    { 
      id: 'p2p-lending', 
      title: 'Peer-to-Peer Lending', 
      icon: LinkIcon, 
      emoji: '🔗', 
      level: 'foundation',
      duration: '10 min read',
      difficulty: 'Beginner',
      description: 'Direct lending through digital platforms'
    },
    { 
      id: 'crowdfunding', 
      title: 'Crowdfunding', 
      icon: UserGroupIcon, 
      emoji: '👥', 
      level: 'intermediate',
      duration: '12 min read',
      difficulty: 'Intermediate',
      description: 'Raising capital from multiple contributors'
    },
    { 
      id: 'digital-currencies', 
      title: 'Digital Currencies & Cryptocurrencies', 
      icon: CircleStackIcon, 
      emoji: '💎', 
      level: 'intermediate',
      duration: '16 min read',
      difficulty: 'Intermediate',
      description: 'Blockchain-based currencies and CBDCs'
    },
    { 
      id: 'defi', 
      title: 'Decentralized Finance (DeFi)', 
      icon: CpuChipIcon, 
      emoji: '⚡', 
      level: 'advanced',
      duration: '18 min read',
      difficulty: 'Advanced',
      description: 'Blockchain financial applications without intermediaries'
    },
    { 
      id: 'fintech-platforms', 
      title: 'Fintech Platforms & Emerging Payment Tech', 
      icon: DevicePhoneMobileIcon, 
      emoji: '📱', 
      level: 'intermediate',
      duration: '14 min read',
      difficulty: 'Intermediate',
      description: 'Digital banking, mobile wallets, and AI finance'
    },
    { 
      id: 'regulation', 
      title: 'Regulation and Oversight', 
      icon: ScaleIcon, 
      emoji: '⚖️', 
      level: 'intermediate',
      duration: '12 min read',
      difficulty: 'Intermediate',
      description: 'Regulatory frameworks and compliance requirements'
    },
    { 
      id: 'modern-trends', 
      title: 'Modern Trends in Alternative Finance & Emerging Tech', 
      icon: SparklesIcon, 
      emoji: '✨', 
      level: 'advanced',
      duration: '16 min read',
      difficulty: 'Advanced',
      description: 'Asset tokenization, embedded finance, and AI credit scoring'
    },
    { 
      id: 'challenges', 
      title: 'Challenges in Alternative Finance & Emerging Tech', 
      icon: ExclamationTriangleIcon, 
      emoji: '⚠️', 
      level: 'advanced',
      duration: '12 min read',
      difficulty: 'Advanced',
      description: 'Volatility, cybersecurity, and regulatory challenges'
    },
    { 
      id: 'conclusion', 
      title: 'Conclusion', 
      icon: CheckCircleIcon, 
      emoji: '⭐', 
      level: 'resources',
      duration: '8 min read',
      difficulty: 'All Levels',
      description: 'Future of alternative finance and emerging technologies'
    }
  ];

  const stats = [
    { label: 'Completion Rate', value: '96%', icon: TrophyIcon },
    { label: 'Average Rating', value: '4.8', icon: StarIcon },
    { label: 'Active Learners', value: '35K+', icon: UserGroupIcon },
    { label: 'Updated', value: '2025', icon: SparklesIcon }
  ];

  const relatedPillars = [
    { 
      name: 'Government & Public Finance', 
      path: '/learn/government-finance', 
      icon: '🏛️',
      description: 'Fiscal policy and public spending'
    },
    { 
      name: 'International Finance & Trade', 
      path: '/learn/international-finance', 
      icon: '🌍',
      description: 'Global finance and trade operations'
    },
    { 
      name: 'Corporate Finance & Business', 
      path: '/learn/corporate-finance', 
      icon: '🏢',
      description: 'Business finance and management'
    },
    { 
      name: 'Banking & Payments', 
      path: '/learn/banking-payments', 
      icon: '🏦',
      description: 'Traditional financial infrastructure'
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
    setTimeout(() => {
      const sectionElement = document.querySelector(`[data-section="${sectionId}"]`);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        const scrollTop = window.pageYOffset + rect.top - 100;
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });
      }
    }, 100);
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Alternative Finance & Emerging Tech</h1>
              <p className="text-purple-100">Pillar 3 of 8 • Innovation • 11 Sections • 2025 Updated</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/learn/international-finance"
                className="hidden md:flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors group"
              >
                <span className="mr-2">Next: International Finance</span>
                <ArrowTopRightOnSquareIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="hidden md:block">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <RocketLaunchIcon className="h-8 w-8" />
                </div>
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
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <RocketLaunchIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introduction to Alternative Finance & Emerging Tech</h2>
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
                      What is Alternative Finance & Emerging Tech?
                    </h3>
                    <p className="text-purple-800 dark:text-purple-200 leading-relaxed">
                      Alternative finance and emerging technologies represent innovative methods of raising capital, managing financial transactions, and delivering financial services outside traditional banking systems. This sector leverages technology such as blockchain, AI, and fintech platforms to provide peer-to-peer lending, crowdfunding, digital currencies, decentralized finance (DeFi), and other modern financial solutions. These innovations enhance financial inclusion, efficiency, and accessibility for individuals, businesses, and governments globally.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                        <TrophyIcon className="h-5 w-5 mr-2" />
                        Key Innovation Areas
                      </h4>
                      <ul className="space-y-3 text-blue-700 dark:text-blue-300">
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-blue-500" />
                          <span><strong>Blockchain Technology:</strong> Decentralized ledgers for secure transactions</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-blue-500" />
                          <span><strong>AI & Machine Learning:</strong> Automated financial services and risk assessment</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-blue-500" />
                          <span><strong>Digital Platforms:</strong> P2P lending, crowdfunding, and mobile payments</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircleIcon className="h-5 w-5 mt-0.5 text-blue-500" />
                          <span><strong>Smart Contracts:</strong> Automated execution of financial agreements</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h4 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center">
                        <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                        Indian Fintech Landscape (2025)
                      </h4>
                      <ul className="space-y-3 text-green-700 dark:text-green-300">
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>UPI Transactions:</strong> ₹200+ lakh crore annually</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Fintech Startups:</strong> 10,000+ companies valued at $150+ billion</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Digital Lending:</strong> ₹8+ lakh crore market size</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <InformationCircleIcon className="h-5 w-5 mt-0.5 text-green-500" />
                          <span><strong>Crypto Adoption:</strong> 100+ million users despite regulatory uncertainty</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Key Takeaway</h4>
                    <p className="text-purple-700 dark:text-purple-300">
                      Alternative finance and emerging technologies are revolutionizing the financial sector by providing innovative solutions that bypass traditional intermediaries. These technologies enhance financial inclusion, reduce costs, and improve accessibility while creating new opportunities and challenges for regulators, businesses, and consumers.
                    </p>
                  </div>
                  
                  <div className="flex justify-end items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('core-components')}
                      className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
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
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                      <CubeIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Core Components of Alternative Finance & Emerging Tech</h2>
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
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🔗 Peer-to-Peer (P2P) Lending</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Direct lending between individuals or businesses through digital platforms.</p>
                      <div className="space-y-2">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Benefits:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Lower rates, higher returns, faster approvals</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Platforms:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Faircent, Lendbox, LendingClub</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">👥 Crowdfunding</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Raising capital from multiple contributors via online platforms.</p>
                      <div className="space-y-2">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Types:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Reward, equity, debt-based funding</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Platforms:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Kickstarter, Ketto, Milaap</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">💸 Digital Currencies</h3>
                      <ul className="space-y-2 text-purple-700 dark:text-purple-300">
                        <li>• <strong>Cryptocurrencies:</strong> Bitcoin, Ethereum</li>
                        <li>• <strong>Stablecoins:</strong> USDT, USDC</li>
                        <li>• <strong>CBDCs:</strong> Digital Rupee</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">⚡ DeFi</h3>
                      <ul className="space-y-2 text-orange-700 dark:text-orange-300">
                        <li>• <strong>Lending:</strong> Compound, Aave</li>
                        <li>• <strong>DEXs:</strong> Uniswap, SushiSwap</li>
                        <li>• <strong>Yield Farming:</strong> Liquidity mining</li>
                      </ul>
                    </div>
                    
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700">
                      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-4">📱 Fintech Platforms</h3>
                      <ul className="space-y-2 text-teal-700 dark:text-teal-300">
                        <li>• <strong>Neobanks:</strong> Jupiter, Fi Money</li>
                        <li>• <strong>Wallets:</strong> Paytm, PhonePe</li>
                        <li>• <strong>Robo-advisors:</strong> Kuvera, ET Money</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('introduction')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Introduction
                    </button>
                    <button
                      onClick={() => navigateToSection('p2p-lending')}
                      className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Next: P2P Lending
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* P2P Lending Section */}
            {activeSection === 'p2p-lending' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="p2p-lending"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl">
                      <LinkIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Peer-to-Peer Lending</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 10 min read • Beginner</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">How P2P Lending Works</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">💰</div>
                        <h4 className="font-semibold mb-2">Borrower Applies</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Submit loan request with credit profile</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">🔍</div>
                        <h4 className="font-semibold mb-2">Platform Evaluates</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Risk assessment and credit scoring</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">🤝</div>
                        <h4 className="font-semibold mb-2">Investors Fund</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Multiple lenders contribute to loan</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Benefits</h3>
                      <ul className="space-y-3 text-blue-700 dark:text-blue-300">
                        <li>• <strong>Lower Interest Rates:</strong> 10-18% vs 24%+ traditional</li>
                        <li>• <strong>Higher Returns:</strong> 12-20% for lenders</li>
                        <li>• <strong>Faster Approvals:</strong> 24-48 hours processing</li>
                        <li>• <strong>Flexible Terms:</strong> Customized loan structures</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">Risks</h3>
                      <ul className="space-y-3 text-red-700 dark:text-red-300">
                        <li>• <strong>Credit Risk:</strong> Borrower defaults (3-8% NPA)</li>
                        <li>• <strong>Platform Risk:</strong> Company closure/fraud</li>
                        <li>• <strong>Liquidity Risk:</strong> Cannot exit early</li>
                        <li>• <strong>Regulatory Risk:</strong> Policy changes</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Popular P2P Platforms in India</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-yellow-700">Faircent:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">RBI registered, ₹500+ cr disbursed</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-yellow-700">Lendbox:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">SME focus, invoice discounting</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-yellow-700">LenDenClub:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Personal loans, 15%+ returns</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-yellow-700">12% Club:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Fixed 12% returns, secured loans</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('core-components')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Core Components
                    </button>
                    <button
                      onClick={() => navigateToSection('crowdfunding')}
                      className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Next: Crowdfunding
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Crowdfunding Section */}
            {activeSection === 'crowdfunding' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="crowdfunding"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
                      <UserGroupIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Crowdfunding</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 12 min read • Intermediate</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🎁 Reward-Based</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Contributors receive products or services in return.</p>
                      <div className="space-y-2">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Examples:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Kickstarter gadgets, creative projects</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Benefits:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Pre-orders, early access, exclusive items</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">💹 Equity-Based</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Investors gain ownership stakes in companies.</p>
                      <div className="space-y-2">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Platforms:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">AngelList, LetsVenture, EquityList</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Returns:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Dividends, capital appreciation</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">💰 Debt-Based</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">Contributors lend money for repayment with interest.</p>
                      <div className="space-y-2">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-purple-700">Similar to:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">P2P lending platforms</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-purple-700">Returns:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Fixed interest payments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-8">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Popular Crowdfunding Platforms</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Global Platforms</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Kickstarter:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">$7+ billion raised, creative projects</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Indiegogo:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Flexible funding, tech innovations</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Indian Platforms</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Ketto:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">₹500+ cr raised, social causes</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-yellow-700">Milaap:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Medical, education, rural projects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('p2p-lending')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: P2P Lending
                    </button>
                    <button
                      onClick={() => navigateToSection('digital-currencies')}
                      className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Next: Digital Currencies
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Digital Currencies Section */}
            {activeSection === 'digital-currencies' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="digital-currencies"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl">
                      <CircleStackIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Digital Currencies & Cryptocurrencies</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 16 min read • Intermediate</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">₿ Cryptocurrencies</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">Bitcoin (BTC):</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">First cryptocurrency, digital gold</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">Ethereum (ETH):</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Smart contracts, DeFi ecosystem</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">Altcoins:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">BNB, ADA, SOL, MATIC</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">💵 Stablecoins</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">USDT (Tether):</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">USD-pegged, highest volume</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">USDC:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Regulated, transparent reserves</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">DAI:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Decentralized, algorithmic</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🏦 CBDCs</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Digital Rupee:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">RBI pilot, retail & wholesale</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Digital Yuan:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">China's e-CNY, mass adoption</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Digital Euro:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">ECB development phase</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Crypto Ecosystem in India</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Major Exchanges</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">WazirX:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Largest Indian exchange, 15M+ users</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">CoinDCX:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Unicorn status, 13M+ users</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Regulatory Status</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Taxation:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">30% tax + 1% TDS on crypto gains</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-purple-700">Legal Status:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Not banned, but not legal tender</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('crowdfunding')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Crowdfunding
                    </button>
                    <button
                      onClick={() => navigateToSection('conclusion')}
                      className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Next: Conclusion
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* DeFi Section */}
            {activeSection === 'defi' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="defi"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                      <CpuChipIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Decentralized Finance (DeFi)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 18 min read • Advanced</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-8">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">What is DeFi?</h3>
                    <p className="text-indigo-700 dark:text-indigo-300 mb-4">Financial applications built on blockchain, eliminating intermediaries through smart contracts and decentralized protocols.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">🔗</div>
                        <h4 className="font-semibold mb-2">Decentralized</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">No central authority or intermediary</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">📊</div>
                        <h4 className="font-semibold mb-2">Transparent</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">All transactions on public blockchain</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">🌍</div>
                        <h4 className="font-semibold mb-2">Global Access</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">24/7 availability worldwide</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Key DeFi Components</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Lending Protocols:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Compound, Aave - earn interest on deposits</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">DEXs:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Uniswap, SushiSwap - decentralized trading</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Yield Farming:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Liquidity mining for high returns</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Stablecoins:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">DAI, USDC for price stability</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">DeFi Risks</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-red-700">Smart Contract Risk:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Code vulnerabilities and exploits</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-red-700">Impermanent Loss:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Liquidity provider losses</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-red-700">High Volatility:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Crypto market fluctuations</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-red-700">Regulatory Risk:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Uncertain legal framework</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Popular DeFi Protocols</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Lending</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Compound: $3B+ TVL</li>
                          <li>• Aave: Multi-chain lending</li>
                          <li>• MakerDAO: DAI stablecoin</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Trading</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Uniswap: AMM leader</li>
                          <li>• PancakeSwap: BSC DEX</li>
                          <li>• 1inch: DEX aggregator</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Yield</h4>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Yearn Finance: Yield optimization</li>
                          <li>• Curve: Stablecoin trading</li>
                          <li>• Convex: Curve boosting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('digital-currencies')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Digital Currencies
                    </button>
                    <button
                      onClick={() => navigateToSection('fintech-platforms')}
                      className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Next: Fintech Platforms
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Fintech Platforms Section */}
            {activeSection === 'fintech-platforms' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                data-section="fintech-platforms"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl">
                      <DevicePhoneMobileIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Fintech Platforms & Emerging Payment Tech</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 14 min read • Intermediate</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🏦 Neobanks</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Fully digital banks offering accounts, payments, and credit.</p>
                      <div className="space-y-2">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Jupiter:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Smart banking with insights</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Fi Money:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Federal Bank partnership</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Open:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">SME-focused neobank</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">📱 Mobile Wallets</h3>
                      <p className="text-green-700 dark:text-green-300 mb-4">Digital payment apps and UPI platforms.</p>
                      <div className="space-y-2">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Paytm:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">350M+ users, super app</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">PhonePe:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">450M+ users, Walmart-owned</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">Google Pay:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">150M+ users, UPI leader</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🤖 Robo-Advisors</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">AI-powered investment advice and portfolio management.</p>
                      <div className="space-y-2">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-purple-700">Kuvera:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Free mutual fund platform</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-purple-700">ET Money:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Goal-based investing</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-purple-700">Scripbox:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Automated portfolio management</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-8">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">Smart Contracts & AI in Finance</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Smart Contracts</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Insurance Claims:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Automated claim processing</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Trade Finance:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Letter of credit automation</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Escrow Services:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Trustless transactions</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">AI Applications</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Credit Scoring:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Alternative data analysis</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Fraud Detection:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Real-time transaction monitoring</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-3 rounded">
                            <strong className="text-orange-700">Chatbots:</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400">24/7 customer support</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('defi')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: DeFi
                    </button>
                    <button
                      onClick={() => navigateToSection('regulation')}
                      className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Next: Regulation
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
                      <ScaleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Regulation and Oversight</h2>
                      <p className="text-gray-600 dark:text-gray-400">Intermediate • 12 min read • Intermediate</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Global Regulators</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">FATF:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Financial Action Task Force - AML/CFT standards</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">BCBS:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Basel Committee - banking supervision</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">FSB:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Financial Stability Board - global coordination</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Indian Regulators</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">RBI:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Digital payments, fintech licensing, CBDC</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">SEBI:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Investment platforms, robo-advisors</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-green-700">IRDAI:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Insurance-linked technology</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-8">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Key Compliance Areas</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">KYC/AML Requirements</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Customer Due Diligence:</strong> Identity verification, risk assessment</li>
                          <li>• <strong>Transaction Monitoring:</strong> Suspicious activity reporting</li>
                          <li>• <strong>Record Keeping:</strong> 5-year transaction history</li>
                          <li>• <strong>Beneficial Ownership:</strong> Ultimate ownership disclosure</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Data Protection & Cybersecurity</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Data Localization:</strong> RBI data storage requirements</li>
                          <li>• <strong>Privacy Protection:</strong> GDPR, DPDP Act compliance</li>
                          <li>• <strong>Cyber Resilience:</strong> Security frameworks, incident response</li>
                          <li>• <strong>Audit Trails:</strong> Comprehensive logging and monitoring</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-6">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">Regulatory Challenges</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Innovation vs Regulation</h4>
                        <p className="text-sm text-red-600 dark:text-red-400">Rapid tech advancement outpacing regulatory frameworks</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Cross-Border Issues</h4>
                        <p className="text-sm text-red-600 dark:text-red-400">Jurisdictional conflicts in global platforms</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Consumer Protection</h4>
                        <p className="text-sm text-red-600 dark:text-red-400">Balancing innovation with user safety</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('fintech-platforms')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Fintech Platforms
                    </button>
                    <button
                      onClick={() => navigateToSection('modern-trends')}
                      className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
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
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl">
                      <SparklesIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Modern Trends in Alternative Finance & Emerging Tech</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 16 min read • Advanced</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🎨 Tokenization of Assets</h3>
                      <p className="text-purple-700 dark:text-purple-300 mb-4">Converting real-world assets into digital tokens for fractional ownership.</p>
                      <div className="space-y-2">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-purple-700">Real Estate:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Property tokens for ₹1L+ investments</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-purple-700">Art & Collectibles:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">NFTs and fractionalized ownership</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-purple-700">Equity Tokens:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Company shares as digital assets</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🔗 Embedded Finance</h3>
                      <p className="text-blue-700 dark:text-blue-300 mb-4">Integrating financial services into non-financial apps.</p>
                      <div className="space-y-2">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">E-commerce:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Buy now, pay later (BNPL) options</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Mobility Apps:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Uber, Ola integrated payments</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-blue-700">Social Platforms:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">WhatsApp Pay, Instagram Shopping</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🤖 AI-Powered Credit Scoring</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">Alternative data usage to assess borrower creditworthiness.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Data Sources</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• Mobile usage patterns</li>
                          <li>• Social media activity</li>
                          <li>• E-commerce behavior</li>
                          <li>• Utility bill payments</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Benefits</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• Financial inclusion</li>
                          <li>• Faster decisions</li>
                          <li>• Lower default rates</li>
                          <li>• Personalized pricing</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Players</h4>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• CRED: Credit card users</li>
                          <li>• Slice: Young professionals</li>
                          <li>• KreditBee: Instant loans</li>
                          <li>• MoneyTap: Credit lines</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-6">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">Cross-Border Payments & Remittances</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Traditional Challenges</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                          <li>• <strong>High Costs:</strong> 5-10% fees for remittances</li>
                          <li>• <strong>Slow Processing:</strong> 3-5 days settlement</li>
                          <li>• <strong>Limited Access:</strong> Banking infrastructure gaps</li>
                          <li>• <strong>Compliance:</strong> Complex regulatory requirements</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Fintech Solutions</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-2">
                          <li>• <strong>Wise (TransferWise):</strong> Mid-market rates</li>
                          <li>• <strong>Remitly:</strong> Mobile-first remittances</li>
                          <li>• <strong>Ripple:</strong> Blockchain-based settlements</li>
                          <li>• <strong>Stellar:</strong> Cross-border payment network</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('regulation')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Regulation
                    </button>
                    <button
                      onClick={() => navigateToSection('challenges')}
                      className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Challenges in Alternative Finance & Emerging Tech</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 12 min read • Advanced</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">📉 Volatility & Speculative Risks</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-red-700">Crypto Volatility:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Bitcoin 50%+ price swings in months</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-red-700">Market Manipulation:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Pump and dump schemes</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-red-700">Liquidity Risks:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Platform freezes, withdrawal limits</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🔒 Cybersecurity Threats</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">Exchange Hacks:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">$3B+ stolen in 2022 alone</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">Smart Contract Bugs:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">DeFi protocol exploits</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded">
                          <strong className="text-orange-700">Phishing Attacks:</strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Fake websites, social engineering</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">⚖️ Regulatory Uncertainty</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Policy Changes</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Sudden crypto bans</li>
                          <li>• Tax law modifications</li>
                          <li>• Licensing requirements</li>
                          <li>• Compliance costs</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Cross-Border Issues</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Jurisdictional conflicts</li>
                          <li>• Regulatory arbitrage</li>
                          <li>• Compliance complexity</li>
                          <li>• Legal uncertainties</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Innovation Impact</h4>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Stifled development</li>
                          <li>• Market exits</li>
                          <li>• Reduced investment</li>
                          <li>• Brain drain</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">📚 Limited Awareness & Trust</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">User Education Gaps</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Crypto Literacy:</strong> Only 15% understand blockchain basics</li>
                          <li>• <strong>Risk Awareness:</strong> Inadequate understanding of volatility</li>
                          <li>• <strong>Security Practices:</strong> Poor wallet and key management</li>
                          <li>• <strong>Scam Recognition:</strong> Falling for Ponzi schemes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Trust Barriers</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• <strong>Platform Reliability:</strong> Exchange failures, exit scams</li>
                          <li>• <strong>Technology Complexity:</strong> Intimidating user interfaces</li>
                          <li>• <strong>Regulatory Backing:</strong> Lack of government guarantees</li>
                          <li>• <strong>Media Coverage:</strong> Negative publicity focus</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('modern-trends')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Modern Trends
                    </button>
                    <button
                      onClick={() => navigateToSection('conclusion')}
                      className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Conclusion</h2>
                      <p className="text-gray-600 dark:text-gray-400">Resources • 8 min read • All Levels</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl mb-8 border border-purple-200 dark:border-purple-700">
                    <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-200 mb-4">🎯 Key Insights</h3>
                    <p className="text-lg text-purple-700 dark:text-purple-300 leading-relaxed">
                      Alternative finance and emerging technologies are transforming the financial ecosystem, enabling greater inclusion, efficiency, and innovation. From P2P lending and crowdfunding to blockchain, DeFi, and digital currencies, these tools offer new opportunities for individuals, businesses, and governments. While rapid technological adoption brings unprecedented benefits, robust regulation, risk management, and consumer awareness are essential to ensure safe, sustainable, and scalable growth in the sector.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-8">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Future of Alternative Finance</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Emerging Opportunities</h4>
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
                            <h5 className="font-semibold text-blue-700">Asset Tokenization</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Real estate, art, and equity as digital tokens</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-green-500">
                            <h5 className="font-semibold text-green-700">Embedded Finance</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Financial services in non-financial apps</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border-l-4 border-purple-500">
                            <h5 className="font-semibold text-purple-700">AI Credit Scoring</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Alternative data for creditworthiness</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Key Challenges</h4>
                        <div className="space-y-2">
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">⚠️</span>
                            <div>
                              <strong className="text-sm">Volatility</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Crypto market fluctuations and risks</p>
                            </div>
                          </div>
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">🔒</span>
                            <div>
                              <strong className="text-sm">Cybersecurity</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Hacking threats and platform security</p>
                            </div>
                          </div>
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">⚖️</span>
                            <div>
                              <strong className="text-sm">Regulation</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Evolving regulatory frameworks</p>
                            </div>
                          </div>
                          <div className="flex items-center bg-white dark:bg-gray-700 p-3 rounded">
                            <span className="text-2xl mr-3">📚</span>
                            <div>
                              <strong className="text-sm">Education</strong>
                              <p className="text-xs text-gray-600 dark:text-gray-400">User awareness and financial literacy</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-8 rounded-xl text-center border border-purple-200 dark:border-purple-700">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">🚀 Embrace the Future of Finance!</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                      Alternative finance and emerging technologies are reshaping how we save, invest, and transact. Stay informed and explore these innovations responsibly.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <div className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-purple-600">💱 Financial Innovation</span>
                      </div>
                      <div className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-pink-600">🌐 Global Access</span>
                      </div>
                      <div className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-indigo-600">🔒 Secure Future</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('challenges')}
                      className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />
                      Previous: Challenges
                    </button>
                    <Link
                      to="/learn/international-finance"
                      className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Next: International Finance
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                  
                  <div className="flex justify-center items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap gap-3 justify-center">
                      <Link
                        to="/learn/corporate-finance"
                        className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full font-medium transition-all duration-300 hover:scale-105"
                      >
                        🏢 Corporation
                      </Link>
                      
                      <Link
                        to="/learn/government-finance"
                        className="inline-flex items-center gap-2 px-6 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-full font-medium transition-all duration-300 hover:scale-105"
                      >
                        🏛️ Government
                      </Link>
                      
                      <Link
                        to="/learn/international-finance"
                        className="inline-flex items-center gap-2 px-6 py-2 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-full font-medium transition-all duration-300 hover:scale-105"
                      >
                        🌍 International
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
              className="bg-gradient-to-r from-purple-500 via-pink-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      Alternative Finance & Emerging Tech Tools
                    </h3>
                    <p className="text-purple-100">Explore fintech calculators, crypto tools, and investment platforms</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Crypto Calculator', path: '/calculators/crypto', icon: '💎', desc: 'Cryptocurrency returns' },
                    { name: 'P2P Lending ROI', path: '/calculators/p2p-lending', icon: '🔗', desc: 'Peer-to-peer returns' },
                    { name: 'Crowdfunding Goal', path: '/calculators/crowdfunding', icon: '👥', desc: 'Funding target planner' },
                    { name: 'DeFi Yield Calculator', path: '/calculators/defi-yield', icon: '⚡', desc: 'DeFi protocol returns' },
                    { name: 'Digital Wallet Tracker', path: '/calculators/wallet-tracker', icon: '📱', desc: 'Multi-wallet portfolio' },
                    { name: 'Staking Rewards', path: '/calculators/staking', icon: '🏆', desc: 'Crypto staking returns' },
                    { name: 'NFT Valuation', path: '/calculators/nft-value', icon: '🎨', desc: 'NFT price estimator' },
                    { name: 'Fintech ROI', path: '/calculators/fintech-roi', icon: '🚀', desc: 'Fintech investment returns' }
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