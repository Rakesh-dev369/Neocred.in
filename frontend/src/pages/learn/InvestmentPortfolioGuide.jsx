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
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import { 
  BookmarkIcon as BookmarkSolid,
  CheckCircleIcon as CheckCircleSolid,
  StarIcon as StarSolid
} from '@heroicons/react/24/solid';

export default function InvestmentPortfolioGuide() {
  const [activeSection, setActiveSection] = useState('step-1-fd-rd');
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
      id: 'step-1-fd-rd', 
      title: 'Step 1: FD & RD (Foundation)', 
      icon: BanknotesIcon, 
      emoji: '🏦', 
      duration: '8 min read',
      difficulty: 'Beginner',
      step: 1
    },
    { 
      id: 'step-2-mutual-funds', 
      title: 'Step 2: Mutual Funds', 
      icon: ArrowTrendingUpIcon, 
      emoji: '📈', 
      duration: '12 min read',
      difficulty: 'Beginner',
      step: 2
    },
    { 
      id: 'step-3-equity', 
      title: 'Step 3: Equity (Stocks/Shares)', 
      icon: ChartBarIcon, 
      emoji: '📊', 
      duration: '15 min read',
      difficulty: 'Intermediate',
      step: 3
    },
    { 
      id: 'step-4-real-estate', 
      title: 'Step 4: Real Estate & REITs', 
      icon: BuildingOfficeIcon, 
      emoji: '🏢', 
      duration: '8 min read',
      difficulty: 'Intermediate',
      step: 4
    },
    { 
      id: 'step-5-alternatives', 
      title: 'Step 5: Alternative Investments', 
      icon: StarIcon, 
      emoji: '💼', 
      duration: '7 min read',
      difficulty: 'Advanced',
      step: 5
    },
    { 
      id: 'step-6-commodities', 
      title: 'Step 6: Commodities (Gold, Silver)', 
      icon: SparklesIcon, 
      emoji: '🪙', 
      duration: '6 min read',
      difficulty: 'Intermediate',
      step: 6
    },
    { 
      id: 'step-7-global', 
      title: 'Step 7: Global Investments', 
      icon: GlobeAltIcon, 
      emoji: '🌍', 
      duration: '8 min read',
      difficulty: 'Advanced',
      step: 7
    },
    { 
      id: 'step-8-portfolio', 
      title: 'Step 8: Age-Wise Portfolio Blueprint', 
      icon: TrophyIcon, 
      emoji: '📊', 
      duration: '10 min read',
      difficulty: 'Advanced',
      step: 8
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
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">📈 Investments & Portfolio Building (Step-by-Step Ladder)</h1>
              <p className="text-blue-100">Complete Guide • 8 Steps • 2025 Updated • Beginner to Advanced</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/learn/bonds-complete-guide"
                className="flex items-center px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded text-white transition-colors text-sm"
              >
                Previous: Bonds Guide
                <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5 ml-1" />
              </Link>
              <Link
                to="/learn/credit-score-debt-management"
                className="flex items-center px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded text-white transition-colors text-sm"
              >
                Next: Credit & Debt Guide
                <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5 ml-1" />
              </Link>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <ArrowTrendingUpIcon className="h-8 w-8" />
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
                  Investment Ladder
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
                        <span className="text-sm font-bold">#{section.step}</span>
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
            {/* Step 1: FD & RD Section */}
            {activeSection === 'step-1-fd-rd' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl">
                      <BanknotesIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Step 1: FD & RD (Foundation of Investments)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Foundation • 8 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('step-1-fd-rd')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('step-1-fd-rd') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('step-1-fd-rd') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('step-1-fd-rd')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('step-1-fd-rd')
                          ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                          : 'text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
                      }`}
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none dark:prose-invert">
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-xl mb-8 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🔹 What They Are</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Fixed Deposit (FD)</h4>
                        <p className="text-blue-700 dark:text-blue-300 text-sm">A lump-sum investment made with a bank/NBFC for a fixed tenure at a fixed interest rate. The money stays locked until maturity (with some early withdrawal penalties).</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Recurring Deposit (RD)</h4>
                        <p className="text-blue-700 dark:text-blue-300 text-sm">A disciplined savings tool where you deposit a fixed amount monthly for a fixed tenure and earn interest like FD.</p>
                      </div>
                    </div>
                    <p className="text-blue-700 dark:text-blue-300 mt-4 font-medium">👉 Both are low-risk, guaranteed-return instruments — great for building trust in financial products.</p>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🔹 Why They Are Important</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <ul className="text-green-700 dark:text-green-300 space-y-2">
                          <li>• <strong>Safety:</strong> Backed by banks/NBFCs (with deposit insurance up to ₹5 lakh in India by DICGC)</li>
                          <li>• <strong>Stability:</strong> Returns are guaranteed regardless of market ups and downs</li>
                          <li>• <strong>Liquidity:</strong> Premature withdrawal is allowed (with penalty)</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="text-green-700 dark:text-green-300 space-y-2">
                          <li>• <strong>Beginner-friendly:</strong> Simple to understand — no market tracking needed</li>
                          <li>• <strong>Goal-linking:</strong> RD helps in saving monthly for short-term goals like gadgets, trips, or small emergency corpus</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">🔹 How to Start (Implementation)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">✅ For FD:</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• Choose a bank/NBFC with competitive FD rates</li>
                          <li>• Decide tenure (short: 6 months–1 year, medium: 3 years, long: 5–10 years)</li>
                          <li>• Deposit lump sum and select payout type:</li>
                          <li className="ml-4">- <strong>Cumulative FD</strong> – Interest compounds, paid at maturity</li>
                          <li className="ml-4">- <strong>Non-cumulative FD</strong> – Monthly/quarterly interest payout (for regular income)</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">✅ For RD:</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-2">
                          <li>• Decide monthly contribution amount (e.g., ₹1,000–₹5,000)</li>
                          <li>• Fix tenure (1–10 years)</li>
                          <li>• Start auto-debit from savings account for disciplined savings</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🔹 Types of FD/RD in India</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Regular FD/RD</h4>
                          <p className="text-xs text-purple-600 dark:text-purple-400">Standard product</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Tax-saving FD</h4>
                          <p className="text-xs text-purple-600 dark:text-purple-400">5-year lock-in, eligible for Section 80C deduction (up to ₹1.5L)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Senior Citizen FD</h4>
                          <p className="text-xs text-purple-600 dark:text-purple-400">Higher interest rates (0.25–0.75% more)</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Flexi FD</h4>
                          <p className="text-xs text-purple-600 dark:text-purple-400">Linked to savings account, allows flexibility in deposit/withdrawal</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-sm">NRE/NRO FD</h4>
                          <p className="text-xs text-purple-600 dark:text-purple-400">For NRIs (repatriable/non-repatriable)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-6">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🔹 Returns & Risks</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Returns: 6%–8%</h4>
                        <p className="text-sm text-orange-600 dark:text-orange-400">(varies by bank & tenure)</p>
                        <div className="mt-3 p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                          <p className="text-sm text-orange-700 dark:text-orange-300">👉 <strong>Example:</strong> ₹1,00,000 in a 5-year FD @ 7% grows to ~₹1,40,000</p>
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Risk: Low</h4>
                        <p className="text-sm text-orange-600 dark:text-orange-400">(only inflation risk → returns may not beat inflation)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">🔹 Age-wise Planning</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">Students/Young (18–25)</h4>
                          <p className="text-xs text-indigo-600 dark:text-indigo-400">Use RD for building a habit of saving. FD for emergency buffer.</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">Salaried (25–40)</h4>
                          <p className="text-xs text-indigo-600 dark:text-indigo-400">Use RD for short-term goals (vacation, gadgets). FD for safety allocation (10–20% of portfolio).</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">Mid-career (40–50)</h4>
                          <p className="text-xs text-indigo-600 dark:text-indigo-400">FD/RD as a balance against risky investments.</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">Retirees/Senior Citizens</h4>
                          <p className="text-xs text-indigo-600 dark:text-indigo-400">FD with monthly payout for stable income.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-6">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">🔹 Common Mistakes to Avoid</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-red-700 dark:text-red-300 space-y-2">
                        <li>❌ Putting all savings in FD (low returns, inflation eats value)</li>
                        <li>❌ Not comparing FD rates between banks/NBFCs</li>
                      </ul>
                      <ul className="text-red-700 dark:text-red-300 space-y-2">
                        <li>❌ Breaking FD frequently (losing interest)</li>
                        <li>❌ Ignoring tax on FD interest (added to income, taxable as per slab)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2 text-xl">🔹 Action Plan for Beginners</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-green-700 dark:text-green-300 space-y-2">
                        <li>• Open 1 RD today (₹1,000–₹5,000/month)</li>
                        <li>• Open 1 FD (₹50,000–₹1,00,000 if possible)</li>
                      </ul>
                      <ul className="text-green-700 dark:text-green-300 space-y-2">
                        <li>• Link them to short-term goals (vacation, buying a laptop, etc.)</li>
                        <li>• Use FD as first step → then slowly diversify into Mutual Funds</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-end items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('step-2-mutual-funds')}
                      className="flex items-center px-8 py-4 bg-blue-600 text-white text-base rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            {/* Step 2: Mutual Funds Section */}
            {activeSection === 'step-2-mutual-funds' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                      <ArrowTrendingUpIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Step 2: Mutual Funds</h2>
                      <p className="text-gray-600 dark:text-gray-400">Growth • 12 min read • Beginner</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('step-2-mutual-funds')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('step-2-mutual-funds') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('step-2-mutual-funds') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('step-2-mutual-funds')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('step-2-mutual-funds')
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
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">1. What are Mutual Funds?</h3>
                    <div className="space-y-3">
                      <p className="text-blue-700 dark:text-blue-300">A Mutual Fund (MF) pools money from multiple investors and invests it into securities such as stocks, bonds, money market instruments, or other assets.</p>
                      <ul className="text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Managed by a professional fund manager</li>
                        <li>• Each investor owns units of the fund, which represent their share of the investments</li>
                        <li>• In India, regulated by SEBI (Securities and Exchange Board of India)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">2. Why Mutual Funds? (Benefits)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-green-700 dark:text-green-300 space-y-2">
                        <li>• <strong>Diversification</strong> → Reduces risk by spreading money across multiple securities</li>
                        <li>• <strong>Professional management</strong> → Experts handle stock-picking and strategy</li>
                        <li>• <strong>Low entry barrier</strong> → Start with as little as ₹500 (SIP)</li>
                      </ul>
                      <ul className="text-green-700 dark:text-green-300 space-y-2">
                        <li>• <strong>Liquidity</strong> → Easy to buy/sell (except closed-ended funds)</li>
                        <li>• <strong>Variety</strong> → Equity, debt, hybrid, international funds available</li>
                        <li>• <strong>Tax-efficient options</strong> → ELSS mutual funds give tax benefits under Section 80C</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">3. How to Invest in Mutual Funds?</h3>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Choose mode</h4>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">Direct (via AMC websites) or Regular (via distributors/brokers)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Complete KYC</h4>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">PAN, Aadhaar, bank details required</p>
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Select type of plan & Investment method</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-2"><strong>Plan Types:</strong></p>
                            <ul className="text-xs text-yellow-600 dark:text-yellow-400 space-y-1">
                              <li>• Direct Plan (low cost, higher returns)</li>
                              <li>• Regular Plan (broker commission, slightly lower returns)</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-2"><strong>Investment Methods:</strong></p>
                            <ul className="text-xs text-yellow-600 dark:text-yellow-400 space-y-1">
                              <li>• SIP (Systematic Investment Plan): Small fixed amounts monthly</li>
                              <li>• Lumpsum: One-time large investment</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">4. Types of Mutual Funds (by category in India)</h3>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">By Asset Class</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• <strong>Equity Funds</strong> → Stocks (high risk, high return)</li>
                            <li>• <strong>Debt Funds</strong> → Bonds, treasury bills (low-medium risk)</li>
                            <li>• <strong>Hybrid Funds</strong> → Mix of equity & debt</li>
                          </ul>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• <strong>Commodity Funds</strong> → Gold ETFs, silver, etc.</li>
                            <li>• <strong>International Funds</strong> → Invest in global markets</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">By Market Cap (Equity Focused)</h4>
                        <div className="grid md:grid-cols-3 gap-3">
                          <div className="text-center">
                            <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Large-cap</p>
                            <p className="text-xs text-purple-500 dark:text-purple-500">Stable, lower risk (blue-chip)</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Mid-cap</p>
                            <p className="text-xs text-purple-500 dark:text-purple-500">Balanced growth & risk</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Small-cap</p>
                            <p className="text-xs text-purple-500 dark:text-purple-500">High growth, high risk</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">By Investment Strategy</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• <strong>Index Funds/ETFs</strong> → Track an index like Nifty 50</li>
                            <li>• <strong>Sectoral Funds</strong> → Focus on sectors (IT, Pharma, Banking)</li>
                          </ul>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• <strong>Thematic Funds</strong> → Invest based on a theme (ESG, consumption, infra)</li>
                            <li>• <strong>Fund of Funds (FoF)</strong> → Invest in other funds</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700 mb-6">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">5. Returns from Mutual Funds</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Expected Returns</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• <strong>Equity funds:</strong> 12–15% CAGR over long-term</li>
                          <li>• <strong>Debt funds:</strong> 6–8% CAGR</li>
                          <li>• <strong>Hybrid funds:</strong> 8–10% CAGR</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Taxation</h4>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• <strong>Equity MF:</strong> LTCG (&gt;1 yr, above ₹1 lakh taxed at 10%)</li>
                          <li>• <strong>Debt MF:</strong> LTCG (&gt;3 yrs, 20% with indexation)</li>
                          <li>• <strong>Dividends:</strong> taxed as per investor's income slab</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-6">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">6. Risks in Mutual Funds</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-red-700 dark:text-red-300 space-y-2">
                        <li>• <strong>Market risk</strong> (value fluctuates with stock/bond market)</li>
                        <li>• <strong>Credit risk</strong> (issuer defaults in debt funds)</li>
                        <li>• <strong>Liquidity risk</strong> (some funds lock money)</li>
                      </ul>
                      <ul className="text-red-700 dark:text-red-300 space-y-2">
                        <li>• <strong>Concentration risk</strong> (sectoral/thematic funds)</li>
                        <li>• <strong>Fund manager risk</strong> (decision-making errors)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">7. Age-Based Mutual Fund Strategy</h3>
                    <div className="space-y-3">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">20s–30s (Young earners)</h4>
                          <p className="text-xs text-indigo-600 dark:text-indigo-400">High equity exposure (70–80%), start SIP early</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">30s–40s (Family responsibilities)</h4>
                          <p className="text-xs text-indigo-600 dark:text-indigo-400">Balanced approach (50–60% equity, rest in debt/hybrid)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">40s–50s (Wealth growth + risk management)</h4>
                          <p className="text-xs text-indigo-600 dark:text-indigo-400">More hybrid funds, reduce small-cap exposure</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">50+ (Near retirement)</h4>
                          <p className="text-xs text-indigo-600 dark:text-indigo-400">Debt funds, balanced funds, minimal equity</p>
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">Retired</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">Focus on debt funds, SWP (Systematic Withdrawal Plan) for regular income</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2 text-xl">8. Action Plan (How YOU should act now)</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <ul className="text-green-700 dark:text-green-300 space-y-2">
                          <li>✅ <strong>Step 1:</strong> Complete KYC → PAN, Aadhaar, Bank details</li>
                          <li>✅ <strong>Step 2:</strong> Start with SIP (₹500–₹2,000/month) in a large-cap index fund (safe entry)</li>
                          <li>✅ <strong>Step 3:</strong> As income grows → Add mid-cap and hybrid funds</li>
                          <li>✅ <strong>Step 4:</strong> Review portfolio every 6 months–1 year</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="text-green-700 dark:text-green-300 space-y-2">
                          <li>✅ <strong>Step 5:</strong> Avoid chasing past returns; look at consistency and fund manager track record</li>
                          <li>✅ <strong>Step 6:</strong> Use ELSS mutual funds for both wealth creation and tax-saving</li>
                          <li>✅ <strong>Step 7:</strong> At retirement, shift lumpsum into debt + SWP for regular income</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('step-1-fd-rd')}
                      className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                    >
                      <ArrowLeftIcon className="h-5 w-5 mr-2" />
                      Previous
                    </button>
                    <button
                      onClick={() => navigateToSection('step-3-equity')}
                      className="flex items-center px-8 py-4 bg-blue-600 text-white text-base rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            {/* Step 3: Equity Section */}
            {activeSection === 'step-3-equity' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <ChartBarIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Step 3: Equity (Stocks / Shares)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Growth • 15 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('step-3-equity')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('step-3-equity') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('step-3-equity') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('step-3-equity')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('step-3-equity')
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
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">1. What it is</h3>
                    <div className="space-y-3">
                      <p className="text-purple-700 dark:text-purple-300">Equity (stocks) represent ownership in a company.</p>
                      <ul className="text-purple-700 dark:text-purple-300 space-y-1">
                        <li>• When you buy a share, you own a small portion of that company</li>
                        <li>• Your wealth grows if the company grows → share price increases or dividends are given</li>
                        <li>• Equities are traded in stock markets like NSE and BSE in India</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">2. Why Invest in Equity</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-green-700 dark:text-green-300 space-y-2">
                        <li>• <strong>Wealth creation:</strong> Historically, equities have given higher long-term returns (10–15% CAGR) compared to FD, RD, or bonds</li>
                        <li>• <strong>Beats inflation:</strong> Stocks grow with the economy, protecting purchasing power</li>
                      </ul>
                      <ul className="text-green-700 dark:text-green-300 space-y-2">
                        <li>• <strong>Ownership:</strong> Unlike debt, you own a part of the business</li>
                        <li>• <strong>Liquidity:</strong> Can be bought and sold easily on exchanges</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">3. How to Invest</h3>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">Setup & Research</h4>
                        <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• <strong>Demat & Trading Account:</strong> Open with a broker (Zerodha, Groww, Upstox, etc.)</li>
                          <li>• <strong>Research:</strong> Study companies' financials, industry, and growth potential</li>
                        </ul>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Methods</h4>
                          <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                            <li>• Direct equity → buy shares of companies</li>
                            <li>• Indirect equity → via mutual funds or ETFs</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Investment strategies</h4>
                          <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                            <li>• SIP in stocks or ETFs (monthly buying)</li>
                            <li>• Lump sum in undervalued opportunities</li>
                            <li>• Diversify across industries and market caps</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">4. Types of Equity</h3>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Based on Market Cap</h4>
                        <div className="grid md:grid-cols-3 gap-3">
                          <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                            <h5 className="font-medium text-blue-600 dark:text-blue-400">Large Cap</h5>
                            <p className="text-xs text-blue-500 dark:text-blue-500">Big stable companies (e.g., Reliance, HDFC Bank). Lower risk.</p>
                          </div>
                          <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                            <h5 className="font-medium text-blue-600 dark:text-blue-400">Mid Cap</h5>
                            <p className="text-xs text-blue-500 dark:text-blue-500">Medium-sized companies. Balanced growth & risk.</p>
                          </div>
                          <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                            <h5 className="font-medium text-blue-600 dark:text-blue-400">Small Cap</h5>
                            <p className="text-xs text-blue-500 dark:text-blue-500">High growth potential but risky.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Based on Sector</h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">IT, Banking, Pharma, FMCG, Auto, Infra, etc.</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Based on Style</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• <strong>Growth stocks</strong> → Companies reinvesting for growth (e.g., tech)</li>
                            <li>• <strong>Value stocks</strong> → Undervalued, trading below intrinsic value</li>
                            <li>• <strong>Dividend stocks</strong> → Regular income through dividend payout</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-6">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">5. Risks</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-red-700 dark:text-red-300 space-y-2">
                        <li>• <strong>Volatility risk</strong> → Prices fluctuate daily</li>
                        <li>• <strong>Business risk</strong> → Company performance may decline</li>
                        <li>• <strong>Market risk</strong> → Economic downturn affects all stocks</li>
                      </ul>
                      <ul className="text-red-700 dark:text-red-300 space-y-2">
                        <li>• <strong>Liquidity risk</strong> → Small caps may be hard to sell quickly</li>
                        <li>• <strong>Emotional risk</strong> → Fear & greed lead to wrong decisions</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">6. Age-Based Approach</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">20s–30s (Young)</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">High allocation (60–80%) in equities for long-term compounding</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">40s–50s (Middle age)</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">Balanced (40–60%) with some shift to debt/bonds for stability</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">60+ (Retirement)</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">Minimal (10–20%) in equities, mostly dividend-paying stable stocks</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2 text-xl">7. Action Plan</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <ul className="text-green-700 dark:text-green-300 space-y-2">
                          <li>✅ Open Demat + Trading account with a trusted broker</li>
                          <li>✅ Start with large-cap or ETFs if beginner</li>
                          <li>✅ Gradually explore mid-cap & small-cap for higher returns</li>
                          <li>✅ Practice SIP in equities to avoid timing the market</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="text-green-700 dark:text-green-300 space-y-2">
                          <li>✅ Use fundamental analysis (company financials, P/E, ROE) and technical analysis (charts, trends) for decisions</li>
                          <li>✅ Track your portfolio monthly but avoid daily panic</li>
                          <li>✅ Stick to long-term horizon (5–10+ years)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">📌 Example for beginner (age 25):</h5>
                      <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                        <li>• 60% in large-cap stocks (Infosys, Reliance, HDFC Bank)</li>
                        <li>• 25% in mid-cap growth stocks</li>
                        <li>• 15% in small-cap for higher risk/reward</li>
                        <li>• SIP ₹5,000–₹10,000/month in equities or index ETFs</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('step-2-mutual-funds')}
                      className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                    >
                      <ArrowLeftIcon className="h-5 w-5 mr-2" />
                      Previous
                    </button>
                    <button
                      onClick={() => navigateToSection('step-4-real-estate')}
                      className="flex items-center px-8 py-4 bg-blue-600 text-white text-base rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            {/* Step 4: Real Estate & REITs Section */}
            {activeSection === 'step-4-real-estate' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
                      <BuildingOfficeIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Step 4: Real Estate & REITs 🏢</h2>
                      <p className="text-gray-600 dark:text-gray-400">Diversification • 8 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('step-4-real-estate')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('step-4-real-estate') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('step-4-real-estate') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('step-4-real-estate')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('step-4-real-estate')
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
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">🔹 What?</h3>
                    <div className="space-y-3">
                      <p className="text-orange-700 dark:text-orange-300"><strong>Real Estate Investment:</strong> Buying land, residential, or commercial properties.</p>
                      <p className="text-orange-700 dark:text-orange-300"><strong>REITs (Real Estate Investment Trusts):</strong> Listed companies that pool money from investors to own/manage income-generating real estate (like malls, offices, warehouses).</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🔹 Why Invest?</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 text-sm mb-1">Tangible asset</h4>
                        <p className="text-xs text-green-600 dark:text-green-400">+ inflation hedge</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 text-sm mb-1">Rental income</h4>
                        <p className="text-xs text-green-600 dark:text-green-400">+ capital appreciation</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 text-sm mb-1">REITs provide</h4>
                        <p className="text-xs text-green-600 dark:text-green-400">liquidity + diversification without buying property directly</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">🔹 How to Invest?</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Physical Real Estate</h4>
                        <p className="text-sm text-yellow-600 dark:text-yellow-400">Buy property → rent it → capital appreciation over time</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">REITs</h4>
                        <p className="text-sm text-yellow-600 dark:text-yellow-400">Buy units via stock exchanges (minimum ₹10,000–₹15,000)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🔹 Types:</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Residential</h4>
                        <p className="text-xs text-purple-600 dark:text-purple-400">Flats, plots</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Commercial</h4>
                        <p className="text-xs text-purple-600 dark:text-purple-400">Offices, shops, warehouses</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-sm">REITs</h4>
                        <p className="text-xs text-purple-600 dark:text-purple-400">Office REITs (Embassy, Mindspace), Retail REITs (shopping malls), Industrial REITs (warehouses, logistics)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🔹 Returns:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Real Estate</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400">6–12% rental yield + 8–12% capital growth (long-term)</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">REITs</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400">6–8% dividend yield + price appreciation</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-6">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">🔹 Risks:</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 text-sm">Illiquidity</h4>
                        <p className="text-xs text-red-600 dark:text-red-400">(difficult to sell property quickly)</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 text-sm">Market cycles</h4>
                        <p className="text-xs text-red-600 dark:text-red-400">(real estate crashes)</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 text-sm">REITs depend on</h4>
                        <p className="text-xs text-red-600 dark:text-red-400">occupancy rates, interest rates</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">🔹 Age-Based Role:</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">20s–30s</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">Prefer REITs (liquid, low entry)</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">40s–50s</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">Mix of REITs + 1 property (for stability + rental income)</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">50+</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">Rental income + REIT dividends for retirement cash flow</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2 text-xl">🔹 Action Plan:</h4>
                    <ul className="text-green-700 dark:text-green-300 space-y-2">
                      <li>• Start with REITs (small ticket size, listed)</li>
                      <li>• If cash flow stable → move into physical property</li>
                      <li>• Use real estate for long-term diversification & inflation hedge</li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('step-3-equity')}
                      className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                    >
                      <ArrowLeftIcon className="h-5 w-5 mr-2" />
                      Previous
                    </button>
                    <button
                      onClick={() => navigateToSection('step-5-alternatives')}
                      className="flex items-center px-8 py-4 bg-blue-600 text-white text-base rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            {/* Step 5: Alternative Investments Section */}
            {activeSection === 'step-5-alternatives' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                      <StarIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Step 5: Alternative Investments (AIFs, PMS, Hedge Funds) 💼</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 7 min read • Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('step-5-alternatives')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('step-5-alternatives') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('step-5-alternatives') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('step-5-alternatives')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('step-5-alternatives')
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
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">🔹 What?</h3>
                    <div className="space-y-3">
                      <p className="text-indigo-700 dark:text-indigo-300"><strong>AIF (Alternative Investment Fund):</strong> Pooled investment in private equity, venture capital, hedge funds.</p>
                      <p className="text-indigo-700 dark:text-indigo-300"><strong>PMS (Portfolio Management Services):</strong> Customized equity portfolio managed by professionals.</p>
                      <p className="text-indigo-700 dark:text-indigo-300"><strong>Hedge Funds:</strong> Aggressive strategies (shorting, derivatives, leverage).</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🔹 Why Invest?</h3>
                      <ul className="text-green-700 dark:text-green-300 space-y-2">
                        <li>• Diversification beyond traditional markets</li>
                        <li>• Higher alpha (returns above stock market)</li>
                        <li>• Access to startups, private companies, global opportunities</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700">
                      <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">🔹 How to Invest?</h3>
                      <ul className="text-yellow-700 dark:text-yellow-300 space-y-2">
                        <li>• <strong>AIF:</strong> Minimum ₹1 crore (SEBI rule)</li>
                        <li>• <strong>PMS:</strong> Minimum ₹50 lakh</li>
                        <li>• <strong>Hedge Funds:</strong> Institutional / HNI investors</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 mb-6">
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">🔹 Types of AIF:</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Category I</h4>
                        <p className="text-xs text-purple-600 dark:text-purple-400">Venture capital, angel funds, social impact</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Category II</h4>
                        <p className="text-xs text-purple-600 dark:text-purple-400">Private equity, debt funds</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 text-sm">Category III</h4>
                        <p className="text-xs text-purple-600 dark:text-purple-400">Hedge funds, derivatives</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🔹 Returns:</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">PMS</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">12–20% annually (market-linked)</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">AIF</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">15–25% (higher risk)</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Hedge Funds</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">20–30% (high risk, not guaranteed)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-6">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">🔹 Risks:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-red-700 dark:text-red-300 space-y-2">
                        <li>• High entry barrier (not for beginners)</li>
                        <li>• Liquidity issues (lock-in)</li>
                      </ul>
                      <ul className="text-red-700 dark:text-red-300 space-y-2">
                        <li>• Manager dependency</li>
                        <li>• Complex structures</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">🔹 Age-Based Role:</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">20s–30s</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">Avoid unless very high net worth</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">40s–50s</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">Small allocation (5–10%) for diversification</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">50+</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">Avoid risky AIFs, stick to safer PMS with large caps</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2 text-xl">🔹 Action Plan:</h4>
                    <ul className="text-green-700 dark:text-green-300 space-y-2">
                      <li>• Only if HNI (₹1Cr+ investable)</li>
                      <li>• Diversify into 1–2 funds with strong track record</li>
                      <li>• Keep exposure limited (≤10% of portfolio)</li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('step-4-real-estate')}
                      className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                    >
                      <ArrowLeftIcon className="h-5 w-5 mr-2" />
                      Previous
                    </button>
                    <button
                      onClick={() => navigateToSection('step-6-commodities')}
                      className="flex items-center px-8 py-4 bg-blue-600 text-white text-base rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 6: Commodities Section */}
            {activeSection === 'step-6-commodities' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl">
                      <SparklesIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Step 6: Commodities (Gold, Silver, Oil, Others) 🪙</h2>
                      <p className="text-gray-600 dark:text-gray-400">Diversification • 6 min read • Intermediate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('step-6-commodities')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('step-6-commodities') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('step-6-commodities') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('step-6-commodities')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('step-6-commodities')
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
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">🔹 What?</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">Investments in precious metals (gold, silver), energy (oil, gas), or agricultural commodities (wheat, sugar).</p>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🔹 Why Invest?</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 text-sm">Hedge against inflation</h4>
                        <p className="text-xs text-green-600 dark:text-green-400">currency devaluation, and stock market crashes</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 text-sm">Diversification</h4>
                        <p className="text-xs text-green-600 dark:text-green-400">Different asset class</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 text-sm">Global asset exposure</h4>
                        <p className="text-xs text-green-600 dark:text-green-400">International markets</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">🔹 How to Invest?</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 text-sm">Gold</h4>
                          <p className="text-xs text-yellow-600 dark:text-yellow-400">ETFs, Sovereign Gold Bonds (SGBs), Digital Gold</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 text-sm">Silver</h4>
                          <p className="text-xs text-yellow-600 dark:text-yellow-400">ETFs, physical silver</p>
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 text-sm">Oil/Energy</h4>
                        <p className="text-xs text-yellow-600 dark:text-yellow-400">Commodity futures, ETFs (international)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🔹 Returns:</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Gold</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">6–10% long-term CAGR (India)</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Silver</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">More volatile (10–15%)</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Oil</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">Very volatile (linked to global politics)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-6">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">🔹 Risks:</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 text-sm">High volatility</h4>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 text-sm">No regular income</h4>
                        <p className="text-xs text-red-600 dark:text-red-400">(except SGB interest 2.5%)</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 text-sm">Storage & liquidity issues</h4>
                        <p className="text-xs text-red-600 dark:text-red-400">for physical assets</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">🔹 Age-Based Role:</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">20s–30s</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">5–10% allocation in gold ETFs/SGBs</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">40s–50s</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">10–15% for wealth preservation</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">50+</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">Gold bonds for safety + 2.5% interest</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2 text-xl">🔹 Action Plan:</h4>
                    <ul className="text-green-700 dark:text-green-300 space-y-2">
                      <li>• Use SGBs for long-term (safe + govt-backed)</li>
                      <li>• Keep 5–10% of portfolio in commodities as hedge</li>
                      <li>• Avoid overexposure (non-productive asset)</li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('step-5-alternatives')}
                      className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                    >
                      <ArrowLeftIcon className="h-5 w-5 mr-2" />
                      Previous
                    </button>
                    <button
                      onClick={() => navigateToSection('step-7-global')}
                      className="flex items-center px-8 py-4 bg-blue-600 text-white text-base rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            {/* Step 7: Global Investments Section */}
            {activeSection === 'step-7-global' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl">
                      <GlobeAltIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Step 7: Global Investments 🌍 (Stocks, ETFs, Startups, Crypto)</h2>
                      <p className="text-gray-600 dark:text-gray-400">Advanced • 8 min read • Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('step-7-global')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('step-7-global') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('step-7-global') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('step-7-global')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('step-7-global')
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
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🔹 What?</h3>
                    <p className="text-green-700 dark:text-green-300">Investing outside India in US/UK/Asia stocks, ETFs, startups, or cryptocurrencies.</p>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🔹 Why Invest?</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-green-700 dark:text-green-300 space-y-2">
                        <li>• Global diversification (don't depend only on India)</li>
                        <li>• Access to global companies (Apple, Google, Tesla)</li>
                      </ul>
                      <ul className="text-green-700 dark:text-green-300 space-y-2">
                        <li>• Hedge against INR depreciation</li>
                        <li>• Exposure to developed markets</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-700 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">🔹 How to Invest?</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 text-sm">US Stocks/ETFs</h4>
                          <p className="text-xs text-yellow-600 dark:text-yellow-400">Via platforms like Vested, INDmoney, Groww Global</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 text-sm">International Mutual Funds</h4>
                          <p className="text-xs text-yellow-600 dark:text-yellow-400">Motilal Oswal Nasdaq 100, Franklin US Opportunities</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 text-sm">Crypto</h4>
                          <p className="text-xs text-yellow-600 dark:text-yellow-400">Bitcoin, Ethereum (high risk)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 text-sm">Startups/Angel Investing</h4>
                          <p className="text-xs text-yellow-600 dark:text-yellow-400">Platforms like AngelList, Tyke</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🔹 Returns:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">US Stocks</h4>
                          <p className="text-xs text-blue-600 dark:text-blue-400">10–15% CAGR</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Nasdaq ETFs</h4>
                          <p className="text-xs text-blue-600 dark:text-blue-400">15–20%</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Crypto</h4>
                          <p className="text-xs text-blue-600 dark:text-blue-400">50%+ (but extreme volatility)</p>
                        </div>
                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">Startups</h4>
                          <p className="text-xs text-blue-600 dark:text-blue-400">0x–100x (lottery-like)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 mb-6">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">🔹 Risks:</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 text-sm">Currency fluctuations</h4>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 text-sm">Global market crashes</h4>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <h4 className="font-semibold text-red-700 dark:text-red-300 text-sm">High volatility</h4>
                        <p className="text-xs text-red-600 dark:text-red-400">in crypto/startups</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">🔹 Age-Based Role:</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">20s–30s</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">High-risk → Global ETFs + small crypto</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">40s–50s</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">Focus on stable international ETFs + blue-chip US stocks</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">50+</h4>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">Minimal exposure, max 5%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 rounded-lg mb-6">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2 text-xl">🔹 Action Plan:</h4>
                    <ul className="text-green-700 dark:text-green-300 space-y-2">
                      <li>• Start with International ETFs (low risk)</li>
                      <li>• Add 5–10% crypto exposure only if high risk appetite</li>
                      <li>• Consider angel/startup investing only after strong portfolio base</li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('step-6-commodities')}
                      className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                    >
                      <ArrowLeftIcon className="h-5 w-5 mr-2" />
                      Previous
                    </button>
                    <button
                      onClick={() => navigateToSection('step-8-portfolio')}
                      className="flex items-center px-8 py-4 bg-blue-600 text-white text-base rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Next
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 8: Age-Wise Portfolio Blueprint Section */}
            {activeSection === 'step-8-portfolio' && (
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
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Step 8: 📊 Age-Wise Portfolio Blueprint</h2>
                      <p className="text-gray-600 dark:text-gray-400">Master Level • 10 min read • Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleBookmark('step-8-portfolio')}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarks.has('step-8-portfolio') 
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarks.has('step-8-portfolio') ? <BookmarkSolid className="h-5 w-5" /> : <BookmarkIcon className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={() => markSectionComplete('step-8-portfolio')}
                      className={`p-2 rounded-full transition-colors ${
                        completedSections.has('step-8-portfolio')
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
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">🏆 Complete Age-Based Investment Strategy</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">
                      Here's how to allocate your investments across different asset classes based on your age and life stage for optimal risk-return balance.
                    </p>
                  </div>
                  
                  <div className="space-y-8">
                    {/* 20s Portfolio */}
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">👶 20s: "Foundation & Aggressive Growth"</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Risk Profile</h4>
                          <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• <strong>Risk Appetite:</strong> High (long time horizon, can absorb volatility)</li>
                            <li>• <strong>Focus:</strong> Building habits, equities & mutual funds for compounding</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Allocation Strategy</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-green-600 dark:text-green-400">Equity (Direct + MF):</span>
                              <span className="font-bold text-green-700 dark:text-green-300">55%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-green-600 dark:text-green-400">Bonds/Debt:</span>
                              <span className="font-bold text-green-700 dark:text-green-300">5%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-green-600 dark:text-green-400">FD/RD:</span>
                              <span className="font-bold text-green-700 dark:text-green-300">5%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-green-600 dark:text-green-400">REITs:</span>
                              <span className="font-bold text-green-700 dark:text-green-300">5%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-green-600 dark:text-green-400">Gold/Alternatives:</span>
                              <span className="font-bold text-green-700 dark:text-green-300">10%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-green-600 dark:text-green-400">Emergency Fund:</span>
                              <span className="font-bold text-green-700 dark:text-green-300">20%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <p className="text-sm text-green-700 dark:text-green-300">
                          <strong>✅ Why:</strong> Focus on growth + compounding while still keeping liquidity for career changes or studies.
                        </p>
                      </div>
                    </div>

                    {/* 30s Portfolio */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">👨💼 30s: "Growth with Stability"</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Risk Profile</h4>
                          <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• <strong>Risk Appetite:</strong> Moderate-High</li>
                            <li>• <strong>Focus:</strong> Family, career stability, early home planning</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Allocation Strategy</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-blue-600 dark:text-blue-400">Equity:</span>
                              <span className="font-bold text-blue-700 dark:text-blue-300">45%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-blue-600 dark:text-blue-400">Bonds/Debt:</span>
                              <span className="font-bold text-blue-700 dark:text-blue-300">15%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-blue-600 dark:text-blue-400">FD/RD:</span>
                              <span className="font-bold text-blue-700 dark:text-blue-300">5%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-blue-600 dark:text-blue-400">REITs:</span>
                              <span className="font-bold text-blue-700 dark:text-blue-300">10%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-blue-600 dark:text-blue-400">AIFs:</span>
                              <span className="font-bold text-blue-700 dark:text-blue-300">5%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-blue-600 dark:text-blue-400">Gold/Alternatives:</span>
                              <span className="font-bold text-blue-700 dark:text-blue-300">10%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-blue-600 dark:text-blue-400">Emergency Fund:</span>
                              <span className="font-bold text-blue-700 dark:text-blue-300">10%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          <strong>✅ Why:</strong> Still equity heavy, but increasing debt & real estate exposure for balance.
                        </p>
                      </div>
                    </div>

                    {/* 40s Portfolio */}
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700">
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">👨👩👧 40s: "Balanced Growth + Wealth Protection"</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Risk Profile</h4>
                          <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                            <li>• <strong>Risk Appetite:</strong> Moderate</li>
                            <li>• <strong>Focus:</strong> Children's education, home loan payoff, business expansion</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">Allocation Strategy</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-purple-600 dark:text-purple-400">Equity:</span>
                              <span className="font-bold text-purple-700 dark:text-purple-300">35%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-purple-600 dark:text-purple-400">Bonds/Debt:</span>
                              <span className="font-bold text-purple-700 dark:text-purple-300">25%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-purple-600 dark:text-purple-400">FD/RD:</span>
                              <span className="font-bold text-purple-700 dark:text-purple-300">5%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-purple-600 dark:text-purple-400">REITs:</span>
                              <span className="font-bold text-purple-700 dark:text-purple-300">10%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-purple-600 dark:text-purple-400">AIFs:</span>
                              <span className="font-bold text-purple-700 dark:text-purple-300">10%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-purple-600 dark:text-purple-400">Gold/Alternatives:</span>
                              <span className="font-bold text-purple-700 dark:text-purple-300">10%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-purple-600 dark:text-purple-400">Emergency Fund:</span>
                              <span className="font-bold text-purple-700 dark:text-purple-300">5%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <p className="text-sm text-purple-700 dark:text-purple-300">
                          <strong>✅ Why:</strong> Reduce volatility exposure, secure predictable income, but still grow.
                        </p>
                      </div>
                    </div>

                    {/* 50s Portfolio */}
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700">
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">👴 50s: "Capital Preservation + Income"</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Risk Profile</h4>
                          <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• <strong>Risk Appetite:</strong> Low-Moderate</li>
                            <li>• <strong>Focus:</strong> Retirement corpus, medical security, zero debt</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-3">Allocation Strategy</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-orange-600 dark:text-orange-400">Equity:</span>
                              <span className="font-bold text-orange-700 dark:text-orange-300">25%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-orange-600 dark:text-orange-400">Bonds/Debt:</span>
                              <span className="font-bold text-orange-700 dark:text-orange-300">35%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-orange-600 dark:text-orange-400">FD/RD:</span>
                              <span className="font-bold text-orange-700 dark:text-orange-300">10%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-orange-600 dark:text-orange-400">REITs:</span>
                              <span className="font-bold text-orange-700 dark:text-orange-300">10%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-orange-600 dark:text-orange-400">AIFs:</span>
                              <span className="font-bold text-orange-700 dark:text-orange-300">5%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-orange-600 dark:text-orange-400">Gold/Alternatives:</span>
                              <span className="font-bold text-orange-700 dark:text-orange-300">10%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-orange-600 dark:text-orange-400">Emergency Fund:</span>
                              <span className="font-bold text-orange-700 dark:text-orange-300">5%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                        <p className="text-sm text-orange-700 dark:text-orange-300">
                          <strong>✅ Why:</strong> Protect corpus, generate stable income, prepare for medical expenses.
                        </p>
                      </div>
                    </div>

                    {/* 60s+ Portfolio */}
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                      <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">👴👵 60s+: "Safety & Guaranteed Income"</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">Risk Profile</h4>
                          <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                            <li>• <strong>Risk Appetite:</strong> Very Low</li>
                            <li>• <strong>Focus:</strong> Pension, medical, wealth transfer to heirs</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">Allocation Strategy</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-red-600 dark:text-red-400">Equity:</span>
                              <span className="font-bold text-red-700 dark:text-red-300">10%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-red-600 dark:text-red-400">Bonds/Debt:</span>
                              <span className="font-bold text-red-700 dark:text-red-300">45%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-red-600 dark:text-red-400">FD/RD:</span>
                              <span className="font-bold text-red-700 dark:text-red-300">20%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-red-600 dark:text-red-400">REITs:</span>
                              <span className="font-bold text-red-700 dark:text-red-300">5%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-red-600 dark:text-red-400">AIFs:</span>
                              <span className="font-bold text-red-700 dark:text-red-300">0%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-red-600 dark:text-red-400">Gold/Alternatives:</span>
                              <span className="font-bold text-red-700 dark:text-red-300">10%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-red-600 dark:text-red-400">Emergency Fund:</span>
                              <span className="font-bold text-red-700 dark:text-red-300">10%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                        <p className="text-sm text-red-700 dark:text-red-300">
                          <strong>✅ Why:</strong> Focus completely on safety, income, health, and legacy planning.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 mb-6 mt-8">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🔑 Key Observations</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="text-green-700 dark:text-green-300 space-y-2">
                        <li>• Equity starts highest in 20s (55%) → declines steadily by 60s (10%)</li>
                        <li>• Debt/Bonds increase with age to ensure stability and predictable returns</li>
                        <li>• Gold stays ~10% throughout as a hedge</li>
                      </ul>
                      <ul className="text-green-700 dark:text-green-300 space-y-2">
                        <li>• REITs are introduced in 30s for diversification</li>
                        <li>• AIFs only for HNIs in 30s–50s, avoided in retirement</li>
                        <li>• Emergency fund is always present (5–20%)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 rounded-lg mb-6">
                    <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2 text-xl">🎯 Final Takeaway</h4>
                    <p className="text-yellow-700 dark:text-yellow-300 text-lg leading-relaxed">
                      <strong>Just like climbing stairs, investments move from safe & simple → to risky but high-return options.</strong> Start at Step 1 and move gradually. Don't skip steps – master each level before advancing to the next. This systematic approach ensures you build wealth while managing risk appropriately for your age and life stage.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => navigateToSection('step-7-global')}
                      className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                    >
                      <ArrowLeftIcon className="h-5 w-5 mr-2" />
                      Previous
                    </button>
                    <div className="flex items-center space-x-2">
                      <Link
                        to="/learn"
                        className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                      >
                        Learn Hub
                      </Link>
                      <Link
                        to="/learn/credit-score-debt-management"
                        className="flex items-center px-8 py-4 bg-blue-600 text-white text-base rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Next Guide
                        <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
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
              className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CalculatorIcon className="h-6 w-6 mr-3" />
                      Investment Tools & Calculators
                    </h3>
                    <p className="text-blue-100">Calculate and plan your investment journey with our specialized tools</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'SIP Calculator', path: '/calculators/sip', icon: '📈', desc: 'Plan systematic investments' },
                    { name: 'Lumpsum Calculator', path: '/calculators/lumpsum', icon: '💰', desc: 'One-time investment planning' },
                    { name: 'Goal Planner', path: '/calculators/goal-based-investment', icon: '🎯', desc: 'Achieve financial goals' },
                    { name: 'FD Calculator', path: '/calculators/fd', icon: '🏦', desc: 'Compare FD returns' }
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