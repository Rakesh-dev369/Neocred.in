import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { 
  BookOpenIcon, 
  AcademicCapIcon, 
  TrophyIcon, 
  SparklesIcon,
  ArrowRightIcon,
  PlayIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  LightBulbIcon,
  FireIcon
} from '@heroicons/react/24/outline';
import SEOHead from '../components/SEO/SEOHead';
import AnimatedBackground from '../components/AnimatedBackground';
import PillarsGrid from '../components/learn/PillarsGrid';
import { PILLAR_DATA, POPULAR_TOPICS } from '../data/learningData';
import { safeJSONParse, safeJSONStringify, debounce } from '../utils/storageUtils';
import { useAnalytics } from '../hooks/useAnalytics';
import RealTimeStats from '../components/RealTimeStats';
import { useRealTimeData } from '../hooks/useRealTimeData';
import LearningProgressTracker from '../components/LearningProgressTracker';


const Learn = () => {
  const [hoveredPillar, setHoveredPillar] = useState(null);
  const [bookmarkedTopics, setBookmarkedTopics] = useState(new Set());
  const [readTopics, setReadTopics] = useState(new Set());
  const [pillarProgress, setPillarProgress] = useState({});
  const [bookmarkedPillars, setBookmarkedPillars] = useState(new Set());
  const [userLevel, setUserLevel] = useState('Beginner');
  const [completedPillars, setCompletedPillars] = useState(new Set());
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { trackLearningProgress, trackFeatureUse } = useAnalytics();
  const { totalUsers, calculatorUses } = useRealTimeData();
  
  // Optimized localStorage loading with safe parsing
  useEffect(() => {
    window.scrollTo(0, 0);
    
    setBookmarkedTopics(new Set(safeJSONParse('bookmarkedTopics', [])));
    setReadTopics(new Set(safeJSONParse('readTopics', [])));
    setPillarProgress(safeJSONParse('pillarProgress', {}));
    setBookmarkedPillars(new Set(safeJSONParse('bookmarkedPillars', [])));
    setUserLevel(safeJSONParse('userLevel', 'Beginner'));
    setCompletedPillars(new Set(safeJSONParse('completedPillars', [])));
    
    // Debounced progress calculation for better performance
    const calculateProgress = debounce(() => {
      const toolUsage = safeJSONParse('toolUsageAnalytics', {});
      const learningPoints = parseInt(safeJSONParse('learningPoints', '0'));
      
      const progress = {
        1: Math.min(Math.floor(learningPoints / 50) * 10, 100),
        2: Math.min(Object.keys(toolUsage).length * 15, 100),
        3: toolUsage['Term Life Insurance Estimator'] ? 45 : 0,
        4: (toolUsage['SIP Calculator'] ? 30 : 0) + (toolUsage['Mutual Fund Return Tracker'] ? 25 : 0),
        5: learningPoints > 500 ? 25 : 0,
        6: toolUsage['HRA Exemption Calculator'] ? 40 : 0,
        7: learningPoints > 1000 ? 15 : 0,
        8: learningPoints > 1500 ? 10 : 0
      };
      
      setPillarProgress(progress);
      safeJSONStringify('pillarProgress', progress);
    }, 300);
    
    calculateProgress();
    
    // Scroll to top functionality
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPillarProgress = (pillarId) => {
    return pillarProgress[pillarId] || 0;
  };

  // Optimized pillars with static data from external file
  const pillars = useMemo(() => {
    return PILLAR_DATA.map(pillar => ({
      ...pillar,
      progress: pillarProgress[pillar.id] || 0,
      recommended: pillar.id === 1 ? userLevel === 'Beginner' : 
                   pillar.id === 3 ? completedPillars.has(1) :
                   pillar.id === 4 ? completedPillars.has(1) && userLevel !== 'Beginner' :
                   pillar.id === 5 ? completedPillars.has(4) && userLevel === 'Advanced' :
                   pillar.id === 6 ? completedPillars.has(1) :
                   pillar.id === 7 ? completedPillars.has(4) && userLevel === 'Advanced' :
                   pillar.id === 8 ? completedPillars.has(4) && userLevel === 'Advanced' : false
    }));
  }, [pillarProgress, userLevel, completedPillars]);

  const popularTopics = POPULAR_TOPICS;

  const toggleBookmark = useCallback((topicId) => {
    const newBookmarks = new Set(bookmarkedTopics);
    if (newBookmarks.has(topicId)) {
      newBookmarks.delete(topicId);
    } else {
      newBookmarks.add(topicId);
    }
    setBookmarkedTopics(newBookmarks);
    safeJSONStringify('bookmarkedTopics', [...newBookmarks]);
  }, [bookmarkedTopics]);

  const markAsRead = useCallback((topicId) => {
    const newRead = new Set(readTopics);
    newRead.add(topicId);
    setReadTopics(newRead);
    safeJSONStringify('readTopics', [...newRead]);
  }, [readTopics]);

  const togglePillarBookmark = (pillarId) => {
    const newBookmarks = new Set(bookmarkedPillars);
    if (newBookmarks.has(pillarId)) {
      newBookmarks.delete(pillarId);
    } else {
      newBookmarks.add(pillarId);
    }
    setBookmarkedPillars(newBookmarks);
    localStorage.setItem('bookmarkedPillars', JSON.stringify([...newBookmarks]));
  };

  const startPillarLearning = useCallback((pillar) => {
    const currentPoints = parseInt(safeJSONParse('learningPoints', '0'));
    const newPoints = currentPoints + 25;
    safeJSONStringify('learningPoints', newPoints.toString());
    
    const pillarActivity = safeJSONParse('pillarActivity', {});
    pillarActivity[pillar.id] = {
      started: new Date().toISOString(),
      lastAccessed: new Date().toISOString()
    };
    safeJSONStringify('pillarActivity', pillarActivity);
    
    // Track learning progress with analytics
    trackLearningProgress(pillar.title, 10); // 10% progress for starting
    trackFeatureUse(`learning_pillar_${pillar.id}`);
  }, [trackLearningProgress, trackFeatureUse]);

  const getRecommendedPillars = () => {
    return pillars.filter(pillar => pillar.recommended).slice(0, 3);
  };

  const getNextPillar = () => {
    const inProgress = pillars.find(pillar => pillar.progress > 0 && pillar.progress < 100);
    if (inProgress) return inProgress;
    
    const notStarted = pillars.find(pillar => pillar.progress === 0 && (!pillar.prerequisite || completedPillars.has(pillar.prerequisite)));
    return notStarted || pillars[0];
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 1: return 'text-green-600 dark:text-green-400';
      case 2: return 'text-blue-600 dark:text-blue-400';
      case 3: return 'text-purple-600 dark:text-purple-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getDifficultyBg = (difficulty) => {
    switch(difficulty) {
      case 1: return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200';
      case 2: return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200';
      case 3: return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200';
      default: return 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-200';
    }
  };



  const getCurrentWeekTips = () => {
    const weeklyTipsRotation = [
      [
        {
          title: "💰 Smart Budgeting Tip",
          content: "Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings. Track with our Budget Planner!",
          icon: LightBulbIcon,
          category: "Budgeting",
          toolLink: "/calculators/budget-planner",
          toolName: "Budget Planner",
          level: "Beginner",
          actionText: "Try Budget Tool"
        },
        {
          title: "📈 Investment Automation",
          content: "Start SIP with just ₹500/month. Compound interest works best when automated!",
          icon: FireIcon,
          category: "Investment",
          toolLink: "/calculators/sip",
          toolName: "SIP Calculator",
          level: "Beginner",
          actionText: "Calculate SIP Returns"
        },
        {
          title: "🚨 Emergency Fund Priority",
          content: "Build 6 months of expenses as emergency fund before investing. Use our calculator to plan!",
          icon: SparklesIcon,
          category: "Planning",
          toolLink: "/calculators/emergency-fund",
          toolName: "Emergency Fund Calculator",
          level: "Essential",
          actionText: "Plan Emergency Fund"
        }
      ],
      [
        {
          title: "💸 Tax Saving Strategy",
          content: "Maximize ₹1.5L under 80C + ₹50K NPS. Calculate your tax savings now!",
          icon: TrophyIcon,
          category: "Tax Planning",
          toolLink: "/calculators/hra-exemption",
          toolName: "Tax Calculator",
          level: "Intermediate",
          actionText: "Calculate Tax Savings"
        },
        {
          title: "🏠 Home Loan Wisdom",
          content: "EMI should not exceed 40% of income. Check your eligibility before applying!",
          icon: LightBulbIcon,
          category: "Loans",
          toolLink: "/calculators/home-loan-emi",
          toolName: "Home Loan Calculator",
          level: "Important",
          actionText: "Check EMI Affordability"
        },
        {
          title: "📊 Credit Score Boost",
          content: "Keep credit utilization below 30%. Pay bills on time to improve score by 50+ points!",
          icon: FireIcon,
          category: "Credit",
          toolLink: "/learn/credit-score-debt-management",
          toolName: "Credit Guide",
          level: "Critical",
          actionText: "Learn Credit Strategy"
        }
      ]
    ];
    
    const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000)) % weeklyTipsRotation.length;
    return weeklyTipsRotation[weekNumber];
  };

  const weeklyTips = getCurrentWeekTips();

  // Remove hardcoded stats - will use RealTimeStats component instead

  return (
    <>
      <SEOHead 
        title="Learn Financial Planning - NeoCred's 8 Learning Pillars | Free Financial Education"
        description="Master personal finance with NeoCred's comprehensive 8-pillar learning system. From budgeting to investments, insurance to taxes - complete financial education for Indians."
        keywords="financial education India, personal finance learning, investment education, tax planning guide, insurance learning, budgeting course, financial literacy India, money management course, SIP learning, EMI education"
        canonicalUrl="/learn"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "NeoCred Financial Learning Platform",
          "description": "Comprehensive 8-pillar financial education system covering personal finance, investments, insurance, and more",
          "provider": {
            "@type": "Organization",
            "name": "NeoCred",
            "url": "https://neocred.in"
          },
          "courseMode": "online",
          "educationalLevel": "beginner to advanced",
          "teaches": ["Personal Finance", "Investment Planning", "Tax Optimization", "Insurance Planning", "Banking", "Corporate Finance", "Alternative Finance", "International Finance"]
        }}
      />
      
      <div className="min-h-screen relative overflow-hidden">
        <AnimatedBackground />
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-16 px-4 overflow-hidden">
          {/* Enhanced Hero Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-600/25 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-emerald-400/25 to-blue-600/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-300/15 to-purple-400/20 rounded-full blur-3xl animate-spin-slow"></div>
          </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4"
          >
            <SparklesIcon className="w-4 h-4 mr-2" />
            India's #1 Financial Learning Platform
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
          >
            Master Your Money,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              One Step at a Time
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto"
          >
            Learn personal finance, investments, banking, insurance, and more with NeoCred's comprehensive guided journey.
          </motion.p>
          
          {/* Real-time Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <RealTimeStats className="max-w-4xl mx-auto" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <Link 
              to="/learn/personal-finance"
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <PlayIcon className="w-4 h-4 mr-2" />
              Start Learning
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/tools"
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              Explore Tools
            </Link>
          </motion.div>
        </div>
      </section>



        {/* Enhanced 8 Financial Pillars Grid */}
        <section className="py-20 px-4 relative">
          {/* Section Background */}
          <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/5"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-200/10 to-purple-300/15 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-emerald-200/12 to-teal-300/18 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
              <TrophyIcon className="w-4 h-4 mr-2" />
              Complete Learning Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              🎯 8 Financial Pillars
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Master every aspect of personal finance with our comprehensive learning path
            </p>
            
            {/* Learning Path Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{pillars.filter(p => p.progress > 0).length}/8</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Started</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{completedPillars.size}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{Math.round(pillars.reduce((acc, p) => acc + p.progress, 0) / 8)}%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Overall Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{userLevel}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Your Level</div>
              </div>
            </div>
            
            {/* Next Recommended Pillar */}
            {getNextPillar() && (
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                <SparklesIcon className="w-4 h-4 mr-2" />
                Next: {getNextPillar().title}
              </div>
            )}
          </motion.div>
          
          <PillarsGrid 
            pillars={pillars}
            onPillarStart={startPillarLearning}
            hoveredPillar={hoveredPillar}
            setHoveredPillar={setHoveredPillar}
          />
          
          {/* Learning Path Recommendations */}
          {getRecommendedPillars().length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                🎯 Recommended for You
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {getRecommendedPillars().map((pillar) => (
                  <Link
                    key={pillar.id}
                    to={pillar.path}
                    onClick={() => startPillarLearning(pillar)}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    {pillar.icon} {pillar.title}
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

        {/* From Knowledge to Action */}
        <section className="py-16 px-4 relative overflow-hidden">
          {/* Premium Action Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/40 via-transparent to-blue-100/50 dark:from-emerald-900/10 dark:via-transparent dark:to-blue-900/15"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-gradient-to-br from-indigo-300/10 to-cyan-400/15 rounded-full blur-3xl animate-float-slow"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6">
              <TrophyIcon className="w-4 h-4 mr-2" />
              Ready to Take Action?
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">From Knowledge to </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your financial knowledge into <span className="font-semibold text-blue-600 dark:text-blue-400">wealth-building actions</span>
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Emergency Fund Plan 🛡️💰", icon: "🚨", path: "/learn/emergency-fund-plan", gradient: "from-red-500 to-pink-600", bgGradient: "from-red-50 to-pink-50", darkBg: "from-red-900/20 to-pink-900/20", desc: "Complete guide to building emergency funds by age & life stage" },
              { title: "Bonds – Complete Practical Guide", icon: "📋", path: "/learn/bonds-complete-guide", gradient: "from-blue-500 to-indigo-600", bgGradient: "from-blue-50 to-indigo-50", darkBg: "from-blue-900/20 to-indigo-900/20", desc: "Complete guide to bonds, selection, risks & portfolio examples" },
              { title: "📈 Investments & Portfolio Building (Step-by-Step Ladder)", icon: "📊", path: "/learn/investment-portfolio-guide", gradient: "from-purple-500 to-violet-600", bgGradient: "from-purple-50 to-violet-50", darkBg: "from-purple-900/20 to-violet-900/20", desc: "Complete 7-step ladder from FDs to AIFs with age-based strategies" },
              { title: "💳 Credit Score & Debt Management (Complete Guide)", icon: "📊", path: "/learn/credit-score-debt-management", gradient: "from-orange-500 to-amber-600", bgGradient: "from-orange-50 to-amber-50", darkBg: "from-orange-900/20 to-amber-900/20", desc: "Complete 9-step guide to building credit score & managing debt effectively" },
              { 
                title: "🏖️ Retirement Planning (Complete 2025 Guide)", 
                icon: "🏖️", 
                path: "/learn/retirement-planning", 
                gradient: "from-teal-500 to-cyan-600", 
                bgGradient: "from-teal-50 to-cyan-50", 
                darkBg: "from-teal-900/20 to-cyan-900/20", 
                desc: "Complete retirement planning guide with 2025 updated schemes, returns & age-based strategies"
              },
              { 
                title: "🛡️ Insurance Strategy (Complete 2025 Guide)", 
                icon: "🛡️", 
                path: "/learn/insurance-strategy", 
                gradient: "from-indigo-500 to-purple-600", 
                bgGradient: "from-indigo-50 to-purple-50", 
                darkBg: "from-indigo-900/20 to-purple-900/20", 
                desc: "Complete insurance guide: Life (15-20x income), Health (₹10-25L), Age-based planning, Term vs ULIP, 2025 rates & 7-step action plan" 
              },
              { 
                title: "💸 Tax Optimization (Complete 2025 Guide)", 
                icon: "💸", 
                path: "/learn/tax-optimization", 
                gradient: "from-pink-500 to-rose-600", 
                bgGradient: "from-pink-50 to-rose-50", 
                darkBg: "from-pink-900/20 to-rose-900/20", 
                desc: "Complete tax planning guide: 80C (₹1.5L), 80D (health), NPS (₹50K), Old vs New regime comparison, age-wise strategy & 2025 tax slabs" 
              },
              { title: "📊 Wealth Tracking & Monitoring (Complete 2025 Guide)", icon: "📊", path: "/learn/wealth-tracking", gradient: "from-blue-500 to-indigo-600", bgGradient: "from-blue-50 to-indigo-50", darkBg: "from-blue-900/20 to-indigo-900/20", desc: "Complete wealth tracking guide: Net worth calculation, cash flow monitoring, investment performance, goal tracking & ready-to-use Excel templates with automated formulas" },
              { title: "🏛️ Estate Planning – Complete Action Plan (2025)", icon: "🏛️", path: "/learn/estate-planning", gradient: "from-purple-500 to-indigo-600", bgGradient: "from-purple-50 to-indigo-50", darkBg: "from-purple-900/20 to-indigo-900/20", desc: "Complete estate planning guide: Will drafting, Trust formation, POA setup, beneficiary designations, guardianship planning & ready-to-use Excel checklist template" }
            ].map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
                className="group"
              >
                <Link 
                  to={action.path}
                  className={`block relative overflow-hidden bg-gradient-to-br ${action.bgGradient} dark:${action.darkBg} backdrop-blur-sm rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 border border-white/50 dark:border-gray-700/50 group-hover:border-transparent group-hover:-translate-y-3 group-hover:rotate-1 h-full`}
                >
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500`} />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 dark:bg-gray-800/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 dark:bg-gray-800/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                  
                  <div className="relative z-10 text-center h-full flex flex-col">
                    {/* Icon with enhanced animation */}
                    <div className="relative mb-4">
                      <div className="text-4xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                        {action.icon}
                      </div>
                    </div>
                    
                    {/* Title with better typography */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {action.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex-grow">
                      {action.desc}
                    </p>
                    
                    {/* Enhanced CTA Button */}
                    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${action.gradient} text-white font-semibold rounded-xl transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl mt-auto`}>
                      <span className="mr-2">Start Now</span>
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          </div>
        </section>

        {/* Enhanced Trending Topics */}
        <section className="py-20 px-4 relative">
          {/* Trending Background */}
          <div className="absolute inset-0 bg-gray-50/90 dark:bg-gray-800/40 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-red-50/20 dark:from-orange-900/5 dark:via-transparent dark:to-red-900/5"></div>
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-orange-200/15 to-red-300/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br from-red-200/12 to-pink-300/18 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium mb-4">
              <FireIcon className="w-4 h-4 mr-2" />
              Updated This Week
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              📈 Trending Topics
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Most popular financial guides this week • {popularTopics.filter(t => t.trending).length} trending now
            </p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {popularTopics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link 
                  to={topic.path}
                  onClick={() => markAsRead(topic.id)}
                  className="block bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{topic.icon}</div>
                      <div className="flex flex-wrap gap-2">
                        {topic.badge && (
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            topic.badge === 'New' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' :
                            topic.badge === 'Updated' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200' :
                            topic.badge === 'Popular' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200' :
                            topic.badge === 'Trending' ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' :
                            'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200'
                          }`}>
                            {topic.badge}
                          </span>
                        )}
                        {topic.trending && (
                          <span className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-medium rounded-full animate-pulse">
                            <FireIcon className="w-3 h-3 mr-1" />
                            Hot
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleBookmark(topic.id);
                      }}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarkedTopics.has(topic.id)
                          ? 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30'
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      {bookmarkedTopics.has(topic.id) ? '⭐' : '☆'}
                    </button>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {topic.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        topic.difficulty === 'Beginner' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' :
                        topic.difficulty === 'Intermediate' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200' :
                        'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200'
                      }`}>
                        {topic.difficulty}
                      </span>
                      <span className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {topic.time}
                      </span>
                      <span className="flex items-center">
                        👁️ {topic.views}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      <span className="font-medium">{topic.category}</span> • by {topic.author}
                      {readTopics.has(topic.id) && <span className="ml-2 text-green-600 dark:text-green-400">✓ Read</span>}
                    </div>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      Read Guide
                      <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* View All Topics CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/learn"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Learning Topics
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
          </div>
        </section>

        {/* Enhanced Weekly Tips */}
        <section className="py-16 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 relative overflow-hidden">
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/8 to-transparent"></div>
            <div className="absolute top-10 right-10 w-40 h-40 bg-white/8 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/6 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-white/4 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-1/3 right-1/4 w-36 h-36 bg-white/5 rounded-full blur-2xl animate-float-delayed"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
              <SparklesIcon className="w-4 h-4 mr-2" />
              Week of {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              💡 This Week's Financial Tips
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Actionable insights to improve your financial health • Updated weekly
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {weeklyTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors">
                    <tip.icon className="w-6 h-6 text-yellow-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        tip.level === 'Beginner' ? 'bg-green-400/20 text-green-200' :
                        tip.level === 'Intermediate' ? 'bg-blue-400/20 text-blue-200' :
                        tip.level === 'Essential' ? 'bg-red-400/20 text-red-200' :
                        tip.level === 'Important' ? 'bg-orange-400/20 text-orange-200' :
                        'bg-purple-400/20 text-purple-200'
                      }`}>
                        {tip.level}
                      </span>
                      <span className="text-xs text-blue-200 bg-white/10 px-2 py-1 rounded-full">
                        {tip.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-white mb-3 text-lg group-hover:text-yellow-200 transition-colors">
                      {tip.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  {tip.content}
                </p>
                
                <Link
                  to={tip.toolLink}
                  className="inline-flex items-center w-full justify-center px-4 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl transition-all duration-300 group-hover:scale-105 border border-white/30 hover:border-white/50"
                >
                  <span className="mr-2">{tip.actionText}</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="flex items-center justify-between text-xs text-blue-200">
                    <span>💡 {tip.toolName}</span>
                    <span className="flex items-center">
                      <FireIcon className="w-3 h-3 mr-1" />
                      Take Action
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Archive Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/learn"
              className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50"
            >
              📚 View Previous Tips Archive
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 relative">
          {/* CTA Background */}
          <div className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/5"></div>
          <div className="absolute top-10 left-1/4 w-48 h-48 bg-gradient-to-br from-blue-200/10 to-purple-300/15 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-200/12 to-pink-300/18 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              Join thousands of Indians who are building wealth with NeoCred's comprehensive financial education platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/tools"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Calculators
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/learn/personal-finance"
                className="inline-flex items-center px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
              >
                <PlayIcon className="w-5 h-5 mr-2" />
                Start Learning
              </Link>
            </div>
          </motion.div>
          </div>
        </section>
      </div>
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-28 right-4 z-50 p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUpIcon className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
    </>
  );
};

export default Learn;