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
  DocumentTextIcon,
  EyeIcon,
  ArrowTrendingUpIcon,
  BuildingLibraryIcon,
  ScaleIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';

export default function EstatePlanning() {
  const [activeSection, setActiveSection] = useState('what-is-estate-planning');
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
      id: 'what-is-estate-planning', 
      title: 'What is Estate Planning?', 
      icon: InformationCircleIcon, 
      emoji: '🏛️', 
      duration: '3 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'core-components', 
      title: 'Core Components', 
      icon: BuildingLibraryIcon, 
      emoji: '📋', 
      duration: '8 min read',
      difficulty: 'Intermediate'
    },
    { 
      id: 'estate-planning-checklist', 
      title: 'Estate Planning Checklist', 
      icon: CheckCircleIcon, 
      emoji: '✅', 
      duration: '4 min read',
      difficulty: 'All Levels'
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
      id: 'when-to-start', 
      title: 'When to Start', 
      icon: ClockIcon, 
      emoji: '⏰', 
      duration: '2 min read',
      difficulty: 'Beginner'
    },
    { 
      id: 'action-steps', 
      title: 'Action Steps', 
      icon: TrophyIcon, 
      emoji: '🎯', 
      duration: '4 min read',
      difficulty: 'All Levels'
    },
    { 
      id: 'excel-checklist', 
      title: 'Excel Checklist Template', 
      icon: DocumentTextIcon, 
      emoji: '📊', 
      duration: '5 min read',
      difficulty: 'Advanced'
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-purple-500 to-indigo-600"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-8">
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">🏛️ Estate Planning – Complete Action Plan (2025)</h1>
              <p className="text-purple-100">Complete Guide • 7 Sections • 2025 Updated • All Levels</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/learn/wealth-tracking"
                className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
              >
                Previous: Wealth Tracking
                <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
              </Link>
              <Link
                to="/learn"
                className="flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
              >
                Back to Learn Hub
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
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-8 main-content">
            {/* What is Estate Planning Section */}
            {activeSection === 'what-is-estate-planning' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl">
                      <InformationCircleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What is Estate Planning?</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 3 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('what-is-estate-planning')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('what-is-estate-planning') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('what-is-estate-planning') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('what-is-estate-planning')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('what-is-estate-planning')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-xl mb-8 border border-purple-200 dark:border-purple-700">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🏛️ Complete Definition</h3>
                    <p className="text-purple-700 dark:text-purple-300 leading-relaxed mb-4">
                      Estate Planning is the process of managing and distributing your wealth, assets, and responsibilities during your life and after your death in a structured, legally valid, and tax-efficient way.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <CheckCircleIcon className="w-5 h-5 mr-2 text-purple-500" />
                        Estate Planning Ensures
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            benefit: "Assets go to the right people",
                            description: "As per your wishes, not court decisions",
                            icon: "👥"
                          },
                          {
                            benefit: "Taxes & legal hassles are minimized",
                            description: "Proper structuring reduces costs and delays",
                            icon: "💰"
                          },
                          {
                            benefit: "Dependents are financially secure",
                            description: "Children, spouse, parents protected",
                            icon: "🛡️"
                          },
                          {
                            benefit: "Smooth transfer of assets",
                            description: "Business, properties, investments transferred seamlessly",
                            icon: "🔄"
                          }
                        ].map((item, index) => (
                          <div key={index} className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700">
                            <div className="flex items-start space-x-3">
                              <div className="text-2xl">{item.icon}</div>
                              <div>
                                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">{item.benefit}</h4>
                                <p className="text-purple-700 dark:text-purple-300 text-sm">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                      <BuildingLibraryIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Core Components of Estate Planning</h2>
                      <p className="text-gray-600 dark:text-gray-400">Components • 8 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('core-components')} className={`p-2 rounded-full transition-colors ${bookmarks.has('core-components') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('core-components') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('core-components')} className={`p-2 rounded-full transition-colors ${completedSections.has('core-components') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-8">
                    {[
                      {
                        component: "✅ 1. Will Drafting",
                        description: "A legal document stating who inherits what after your death",
                        steps: [
                          "List all assets (bank accounts, properties, investments, businesses, digital assets)",
                          "Decide beneficiaries & distribution ratios",
                          "Appoint an executor (person who ensures your Will is executed)",
                          "Get it registered with the local registrar for stronger legal validity"
                        ],
                        protip: "Update Will every 5–7 years or after major life changes (marriage, kids, new assets)",
                        color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700",
                        icon: "📜"
                      },
                      {
                        component: "✅ 2. Trust Formation",
                        description: "A legal entity that holds & manages assets on behalf of beneficiaries (for High-Net-Worth Individuals or Complex Assets)",
                        steps: [
                          "Living Trust (Revocable): Can be changed during lifetime",
                          "Irrevocable Trust: Cannot be altered once made (used for asset protection & tax saving)",
                          "Benefits: Avoids probate (court process), maintains privacy, protects wealth from creditors"
                        ],
                        protip: "Trusts are especially useful for assets above ₹1 crore or complex family structures",
                        color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700",
                        icon: "🏦"
                      },
                      {
                        component: "✅ 3. Power of Attorney (POA)",
                        description: "Legal authorization for someone to act on your behalf",
                        steps: [
                          "General POA: Allows someone to act on your behalf for financial & legal matters",
                          "Medical POA / Living Will: Specifies healthcare decisions if you are incapacitated",
                          "Must be notarized and registered for legal validity"
                        ],
                        protip: "Choose someone trustworthy and younger than you as your POA",
                        color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700",
                        icon: "📝"
                      },
                      {
                        component: "✅ 4. Beneficiary Designations",
                        description: "Nominate beneficiaries for all financial accounts and policies",
                        steps: [
                          "Bank accounts, EPF, PPF, insurance, mutual funds allow beneficiary nomination",
                          "Must be updated regularly to avoid disputes",
                          "Nomination gives custody, not ownership (Will determines ownership)"
                        ],
                        protip: "Update nominations after marriage, divorce, birth of children, or death of nominees",
                        color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700",
                        icon: "💳"
                      },
                      {
                        component: "✅ 5. Guardianship Planning",
                        description: "Nominate legal guardian for minor children",
                        steps: [
                          "If you have minor children, nominate a legal guardian who will take care of them",
                          "Can be included in Will",
                          "Consider financial capability and values alignment of guardian"
                        ],
                        protip: "Discuss with potential guardians before nominating them",
                        color: "bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-700",
                        icon: "👶"
                      },
                      {
                        component: "✅ 6. Tax & Legal Structuring",
                        description: "Optimize tax implications and legal structure",
                        steps: [
                          "Use tools like HUF (Hindu Undivided Family), gifting, trusts, and joint ownership",
                          "In India, inheritance is not taxed directly, but capital gains apply when heirs sell inherited assets",
                          "Plan for succession in case of family business"
                        ],
                        protip: "Consult CA and lawyer for complex estates or business succession",
                        color: "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-700",
                        icon: "⚖️"
                      }
                    ].map((item, index) => (
                      <div key={index} className={`p-6 rounded-xl border ${item.color}`}>
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="text-3xl">{item.icon}</div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.component}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                          </div>
                        </div>
                        <div className="space-y-3 mb-4">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">Steps:</h4>
                          <ul className="space-y-2">
                            {item.steps.map((step, idx) => (
                              <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                                <CheckCircleIcon className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg">
                          <p className="text-sm text-yellow-800 dark:text-yellow-200">
                            <strong>Pro tip:</strong> {item.protip}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('what-is-estate-planning')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: What is Estate Planning
                    </button>
                    <button onClick={() => navigateToSection('estate-planning-checklist')} className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      Next: Estate Planning Checklist<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Estate Planning Checklist Section */}
            {activeSection === 'estate-planning-checklist' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl">
                      <CheckCircleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Estate Planning Checklist (2025)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Checklist • 4 min read • All Levels</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('estate-planning-checklist')} className={`p-2 rounded-full transition-colors ${bookmarks.has('estate-planning-checklist') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('estate-planning-checklist') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('estate-planning-checklist')} className={`p-2 rounded-full transition-colors ${completedSections.has('estate-planning-checklist') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">✅ Complete Estate Planning Checklist</h3>
                    <p className="text-green-700 dark:text-green-300">
                      Use this comprehensive checklist to ensure all aspects of your estate planning are covered.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        task: "Make a complete list of assets",
                        details: "Physical, financial, digital, liabilities",
                        priority: "High",
                        timeframe: "1-2 weeks"
                      },
                      {
                        task: "Draft & register a Will",
                        details: "Legal document with asset distribution",
                        priority: "High",
                        timeframe: "1 month"
                      },
                      {
                        task: "Create a Trust (if applicable)",
                        details: "For high-value estate or multiple heirs",
                        priority: "Medium",
                        timeframe: "2-3 months"
                      },
                      {
                        task: "Assign nominees for all accounts",
                        details: "Bank, insurance, investments, EPF, PPF",
                        priority: "High",
                        timeframe: "2 weeks"
                      },
                      {
                        task: "Set up Power of Attorney",
                        details: "Financial & medical POA",
                        priority: "High",
                        timeframe: "2 weeks"
                      },
                      {
                        task: "Decide on guardianship",
                        details: "If minor children are involved",
                        priority: "High",
                        timeframe: "1 week"
                      },
                      {
                        task: "Plan for business succession",
                        details: "If you own a family business",
                        priority: "Medium",
                        timeframe: "3-6 months"
                      },
                      {
                        task: "Review estate plan regularly",
                        details: "Every 5 years or after major life events",
                        priority: "Medium",
                        timeframe: "Ongoing"
                      }
                    ].map((item, index) => (
                      <div key={index} className="p-6 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 shadow-sm">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg">✅ {item.task}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.priority === 'High' 
                              ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200'
                          }`}>
                            {item.priority}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{item.details}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                            <ClockIcon className="h-3 w-3 mr-1" />
                            {item.timeframe}
                          </span>
                          <div className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('core-components')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Core Components
                    </button>
                    <button onClick={() => navigateToSection('common-mistakes')} className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      Next: Common Mistakes<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
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
                    <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl">
                      <ExclamationTriangleIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Common Mistakes People Make</h2>
                      <p className="text-gray-600 dark:text-gray-400">Pitfalls • 3 min read • All Levels</p>
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
                        mistake: "Not making a Will",
                        impact: "70%+ Indians die without one → family disputes",
                        consequence: "Court decides asset distribution, lengthy legal battles",
                        solution: "Draft a Will immediately, even if assets are small"
                      },
                      {
                        mistake: "Thinking nomination = inheritance",
                        impact: "Nominees get custody, not ownership rights",
                        consequence: "Legal heirs can claim assets, leading to disputes",
                        solution: "Use Will to specify ownership, nomination for custody"
                      },
                      {
                        mistake: "Not updating Will/nominations",
                        impact: "After marriage, children, or divorce",
                        consequence: "Wrong people may inherit, ex-spouse gets assets",
                        solution: "Review and update every 5 years or after life events"
                      },
                      {
                        mistake: "Ignoring digital assets",
                        impact: "Crypto, online accounts, domains not covered",
                        consequence: "Digital wealth becomes inaccessible forever",
                        solution: "Include digital assets in Will, share access details securely"
                      },
                      {
                        mistake: "Overlooking cross-border laws",
                        impact: "If assets are abroad or NRI status",
                        consequence: "Complex legal issues, double taxation",
                        solution: "Consult international estate planning experts"
                      }
                    ].map((item, index) => (
                      <div key={index} className="p-6 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                        <div className="flex items-start space-x-4">
                          <div className="text-2xl">❌</div>
                          <div className="flex-1">
                            <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">{item.mistake}</h4>
                            <div className="space-y-3">
                              <div className="p-3 bg-red-100 dark:bg-red-800/30 rounded-lg">
                                <p className="text-sm text-red-800 dark:text-red-200">
                                  <strong>Impact:</strong> {item.impact}
                                </p>
                              </div>
                              <div className="p-3 bg-orange-100 dark:bg-orange-800/30 rounded-lg">
                                <p className="text-sm text-orange-800 dark:text-orange-200">
                                  <strong>Consequence:</strong> {item.consequence}
                                </p>
                              </div>
                              <div className="p-3 bg-green-100 dark:bg-green-800/30 rounded-lg">
                                <p className="text-sm text-green-800 dark:text-green-200">
                                  <strong>Solution:</strong> {item.solution}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('estate-planning-checklist')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Checklist
                    </button>
                    <button onClick={() => navigateToSection('when-to-start')} className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      Next: When to Start<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
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
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl">
                      <ClockIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">When to Start Estate Planning</h2>
                      <p className="text-gray-600 dark:text-gray-400">Timing • 2 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('when-to-start')} className={`p-2 rounded-full transition-colors ${bookmarks.has('when-to-start') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('when-to-start') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('when-to-start')} className={`p-2 rounded-full transition-colors ${completedSections.has('when-to-start') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-8">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">⏰ The Right Time is NOW</h3>
                    <p className="text-orange-700 dark:text-orange-300 text-lg">
                      <strong>As soon as you have assets + dependents.</strong>
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        age: "25 years old",
                        scenario: "Just started working, has savings & parents as dependents",
                        planning: "Basic estate planning (at least a Will + nominees)",
                        assets: "₹2-5L savings, EPF, insurance",
                        urgency: "Medium"
                      },
                      {
                        age: "30 years old",
                        scenario: "Married, buying home, planning children",
                        planning: "Comprehensive Will, POA, guardianship planning",
                        assets: "₹10-25L assets, home loan, investments",
                        urgency: "High"
                      },
                      {
                        age: "35+ years old",
                        scenario: "Children, significant assets, business interests",
                        planning: "Will, Trust, business succession, tax planning",
                        assets: "₹50L+ assets, business, properties",
                        urgency: "Critical"
                      }
                    ].map((item, index) => (
                      <div key={index} className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100">{item.age}</h4>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            item.urgency === 'Critical' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200' :
                            item.urgency === 'High' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200' :
                            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200'
                          }`}>
                            {item.urgency} Priority
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Scenario:</h5>
                            <p className="text-sm text-blue-700 dark:text-blue-300">{item.scenario}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Planning Needed:</h5>
                            <p className="text-sm text-blue-700 dark:text-blue-300">{item.planning}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Typical Assets:</h5>
                            <p className="text-sm text-blue-700 dark:text-blue-300">{item.assets}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mt-8">
                    <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center">
                      <LightBulbIcon className="w-5 h-5 mr-2" />
                      💡 Key Insight
                    </h4>
                    <p className="text-green-700 dark:text-green-300">
                      <strong>"The best time to plant a tree was 20 years ago. The second best time is now."</strong> The same applies to estate planning. Don't wait for a "perfect" time or significant wealth. Start with basics and build complexity as your assets grow.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('common-mistakes')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Common Mistakes
                    </button>
                    <button onClick={() => navigateToSection('action-steps')} className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      Next: Action Steps<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
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
                    <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl">
                      <TrophyIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Action Steps for You (2025)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Implementation • 4 min read • All Levels</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('action-steps')} className={`p-2 rounded-full transition-colors ${bookmarks.has('action-steps') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('action-steps') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('action-steps')} className={`p-2 rounded-full transition-colors ${completedSections.has('action-steps') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="space-y-8">
                    {[
                      {
                        phase: "📁 Short-term (0–6 months)",
                        actions: [
                          "Draft a Will with asset distribution and executor appointment",
                          "Update nominees for all bank accounts, insurance, EPF, PPF, investments",
                          "Make comprehensive asset list (physical, financial, digital, liabilities)"
                        ],
                        priority: "Critical",
                        cost: "₹5,000-15,000",
                        color: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700"
                      },
                      {
                        phase: "📁 Medium-term (6–24 months)",
                        actions: [
                          "Consider Trusts for high-value estates or complex family structures",
                          "Set up Power of Attorney (financial & medical)",
                          "Plan insurance-based estate protection (term life insurance)",
                          "Business succession planning if applicable"
                        ],
                        priority: "Important",
                        cost: "₹15,000-50,000",
                        color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700"
                      },
                      {
                        phase: "📁 Long-term (2–5 years)",
                        actions: [
                          "Review estate plan regularly (every 5 years or after major life events)",
                          "Restructure based on wealth/business growth",
                          "Tax optimization through HUF, gifting, joint ownership",
                          "International estate planning if assets abroad"
                        ],
                        priority: "Maintenance",
                        cost: "₹10,000-25,000 annually",
                        color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                      }
                    ].map((phase, index) => (
                      <div key={index} className={`p-6 rounded-xl border ${phase.color}`}>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{phase.phase}</h3>
                          <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              phase.priority === 'Critical' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200' :
                              phase.priority === 'Important' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200' :
                              'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
                            }`}>
                              {phase.priority}
                            </span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{phase.cost}</span>
                          </div>
                        </div>
                        <ul className="space-y-3">
                          {phase.actions.map((action, idx) => (
                            <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                              <CheckCircleIcon className="h-5 w-5 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mt-8">
                    <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
                      <UserIcon className="w-5 h-5 mr-2" />
                      👥 Professional Help Needed
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Lawyer (for Will & Trust):</h5>
                        <p className="text-sm text-blue-700 dark:text-blue-300">₹5,000-25,000 depending on complexity</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">CA (for Tax Planning):</h5>
                        <p className="text-sm text-blue-700 dark:text-blue-300">₹10,000-50,000 for comprehensive planning</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('when-to-start')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: When to Start
                    </button>
                    <button onClick={() => navigateToSection('excel-checklist')} className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      Next: Excel Checklist<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Excel Checklist Section */}
            {activeSection === 'excel-checklist' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <DocumentTextIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ready-to-Use Estate Planning Checklist (2025)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Template • 5 min read • Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => toggleBookmark('excel-checklist')} className={`p-2 rounded-full transition-colors ${bookmarks.has('excel-checklist') ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'}`}>
                      {bookmarks.has('excel-checklist') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => markSectionComplete('excel-checklist')} className={`p-2 rounded-full transition-colors ${completedSections.has('excel-checklist') ? 'text-green-500 bg-green-100 dark:bg-green-900/30' : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'}`}>
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">📊 Complete Estate Planning Checklist Template</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">
                      Download our comprehensive Excel/Google Sheets template where you can list assets, nominees, Will/Trust status, and update regularly.
                    </p>
                    <div className="flex items-center space-x-4">
                      <a 
                        href="#" 
                        className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                      >
                        Download Excel Template
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                      </a>
                      <a 
                        href="#" 
                        className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                      >
                        Google Sheets Version
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">📝 Template Sheets Structure</h3>
                      <div className="space-y-4">
                        {[
                          {
                            sheet: "Asset Inventory",
                            purpose: "Complete list of all assets with current values",
                            columns: "Asset Type, Description, Current Value, Location, Nominee, Last Updated",
                            updates: "Update quarterly or after major purchases"
                          },
                          {
                            sheet: "Liabilities Tracker",
                            purpose: "All loans, debts, and financial obligations",
                            columns: "Liability Type, Lender, Outstanding Amount, EMI, Maturity Date, Guarantor",
                            updates: "Update monthly with EMI payments"
                          },
                          {
                            sheet: "Nominees & Beneficiaries",
                            purpose: "Track all nominations and beneficiary designations",
                            columns: "Account/Policy, Institution, Nominee Name, Relationship, Date Updated, Status",
                            updates: "Review annually or after life events"
                          },
                          {
                            sheet: "Legal Documents",
                            purpose: "Status of Will, Trust, POA, and other legal documents",
                            columns: "Document Type, Status, Date Created, Lawyer Details, Location, Next Review",
                            updates: "Update after any legal document changes"
                          },
                          {
                            sheet: "Digital Assets",
                            purpose: "Online accounts, crypto, domains, and digital properties",
                            columns: "Platform, Account Details, Estimated Value, Access Method, Backup Location",
                            updates: "Update when adding new digital assets"
                          },
                          {
                            sheet: "Action Items",
                            purpose: "Track pending estate planning tasks and deadlines",
                            columns: "Task, Priority, Due Date, Status, Professional Required, Cost Estimate",
                            updates: "Review monthly and update task status"
                          }
                        ].map((item, index) => (
                          <div key={index} className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-bold text-blue-900 dark:text-blue-100">{item.sheet}</h4>
                              <span className="text-xs bg-blue-100 dark:bg-blue-800/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                                Sheet {index + 1}
                              </span>
                            </div>
                            <p className="text-blue-700 dark:text-blue-300 text-sm mb-3">{item.purpose}</p>
                            <div className="space-y-2">
                              <div>
                                <span className="text-xs font-medium text-blue-800 dark:text-blue-200">Columns: </span>
                                <span className="text-xs text-blue-600 dark:text-blue-400">{item.columns}</span>
                              </div>
                              <div>
                                <span className="text-xs font-medium text-blue-800 dark:text-blue-200">Updates: </span>
                                <span className="text-xs text-blue-600 dark:text-blue-400">{item.updates}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">📊 Template Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            feature: "Auto-Calculations",
                            description: "Automatic net worth calculation and completion percentages",
                            formula: "=SUM(Assets)-SUM(Liabilities)"
                          },
                          {
                            feature: "Status Tracking",
                            description: "Visual indicators for completed vs pending tasks",
                            formula: "Conditional formatting with color codes"
                          },
                          {
                            feature: "Reminder System",
                            description: "Highlights overdue reviews and upcoming deadlines",
                            formula: "=IF(TODAY()>Review_Date,\"OVERDUE\",\"OK\")"
                          },
                          {
                            feature: "Progress Dashboard",
                            description: "Visual charts showing estate planning completion",
                            formula: "Auto-generated pie charts and progress bars"
                          },
                          {
                            feature: "Document Links",
                            description: "Hyperlinks to digital copies of important documents",
                            formula: "HYPERLINK function for easy access"
                          },
                          {
                            feature: "Backup Checklist",
                            description: "Ensures all important information is documented",
                            formula: "Validation rules and mandatory field checks"
                          }
                        ].map((item, index) => (
                          <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.feature}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{item.description}</p>
                            <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg">
                              <code className="text-xs text-gray-800 dark:text-gray-200">{item.formula}</code>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => navigateToSection('action-steps')} className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      <ArrowLeftIcon className="h-4 w-4 mr-2" />Previous: Action Steps
                    </button>
                    <Link to="/learn" className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      <span className="mr-2">🏠</span>
                      Back to Learn Hub<ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
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
              className="bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      Estate Planning Tools
                    </h3>
                    <p className="text-purple-100">Plan and protect your legacy with our specialized tools</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Retirement Goal', path: '/calculators/retirement-goal', icon: '🏖️', desc: 'Plan retirement corpus' },
                    { name: 'Goal Planner', path: '/calculators/budget-goal-planner', icon: '🎯', desc: 'Set financial goals' },
                    { name: 'Term Insurance', path: '/calculators/term-life-insurance', icon: '🛡️', desc: 'Calculate coverage needed' },
                    { name: 'Net Worth Tracker', path: '/calculators/net-worth-tracker', icon: '💰', desc: 'Track total wealth' }
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