import React, { useState, useEffect } from 'react';
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


const Learn = () => {
  const [hoveredPillar, setHoveredPillar] = useState(null);
  const [bookmarkedTopics, setBookmarkedTopics] = useState(new Set());
  const [readTopics, setReadTopics] = useState(new Set());
  const [pillarProgress, setPillarProgress] = useState({});
  const [bookmarkedPillars, setBookmarkedPillars] = useState(new Set());
  const [userLevel, setUserLevel] = useState('Beginner');
  const [completedPillars, setCompletedPillars] = useState(new Set());
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Load saved data from localStorage with error handling
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    try {
      const savedBookmarks = localStorage.getItem('bookmarkedTopics');
      const savedRead = localStorage.getItem('readTopics');
      const savedPillarProgress = localStorage.getItem('pillarProgress');
      const savedPillarBookmarks = localStorage.getItem('bookmarkedPillars');
      const savedUserLevel = localStorage.getItem('userLevel');
      const savedCompletedPillars = localStorage.getItem('completedPillars');
      
      if (savedBookmarks) {
        setBookmarkedTopics(new Set(JSON.parse(savedBookmarks)));
      }
      if (savedRead) {
        setReadTopics(new Set(JSON.parse(savedRead)));
      }
      if (savedPillarProgress) {
        setPillarProgress(JSON.parse(savedPillarProgress));
      }
      if (savedPillarBookmarks) {
        setBookmarkedPillars(new Set(JSON.parse(savedPillarBookmarks)));
      }
      if (savedUserLevel) {
        setUserLevel(savedUserLevel);
      }
      if (savedCompletedPillars) {
        setCompletedPillars(new Set(JSON.parse(savedCompletedPillars)));
      }
    } catch (error) {
      console.warn('Error loading saved data from localStorage:', error);
    }
    
    // Calculate real progress based on localStorage activity
    const calculateProgress = () => {
      try {
        const progress = {};
        const toolUsage = JSON.parse(localStorage.getItem('toolUsageAnalytics') || '{}');
        const learningPoints = parseInt(localStorage.getItem('learningPoints') || '0');
        
        // Calculate progress based on activity
        progress[1] = Math.min(Math.floor(learningPoints / 50) * 10, 100); // Personal Finance
        progress[2] = Math.min(Object.keys(toolUsage).length * 15, 100); // Banking
        progress[3] = toolUsage['Term Life Insurance Estimator'] ? 45 : 0; // Insurance
        progress[4] = (toolUsage['SIP Calculator'] ? 30 : 0) + (toolUsage['Mutual Fund Return Tracker'] ? 25 : 0); // Investment
        progress[5] = learningPoints > 500 ? 25 : 0; // Corporate Finance
        progress[6] = toolUsage['HRA Exemption Calculator'] ? 40 : 0; // Tax
        progress[7] = learningPoints > 1000 ? 15 : 0; // Alternative Finance
        progress[8] = learningPoints > 1500 ? 10 : 0; // International Finance
        
        setPillarProgress(progress);
        localStorage.setItem('pillarProgress', JSON.stringify(progress));
      } catch (error) {
        console.warn('Error calculating progress:', error);
      }
    };
    
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

  const pillars = React.useMemo(() => {
    // Memoize static pillar data to avoid recreation
    const staticPillars = [
    {
      id: 1,
      title: "Personal Finance Mastery",
      description: "Master budgeting, emergency funds, debt elimination & financial goal setting.",
      detailedDescription: "Build a solid financial foundation with proven strategies for budgeting, saving, and debt management.",
      icon: "💰",
      path: "/learn/personal-finance",
      gradient: "from-blue-400 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      darkBgGradient: "from-blue-900/20 to-indigo-900/20",
      progress: pillarProgress[1] || 0,
      sections: 12,
      duration: "2h 45m",
      difficulty: 1,
      difficultyLabel: "Beginner",
      prerequisite: null,
      completionRate: 94,
      avgSavings: "₹50,000",
      learningOutcomes: [
        "Create a bulletproof budget that actually works",
        "Build 6-month emergency fund systematically",
        "Eliminate debt using proven strategies",
        "Set and achieve financial goals"
      ],
      keyTopics: ["50/30/20 Rule", "Emergency Fund", "Debt Snowball", "Goal Setting"],
      tools: ["Budget Planner", "Emergency Fund Calculator", "Debt Repayment Planner"],
      recommended: userLevel === 'Beginner',
      popular: true,
      testimonial: "Saved ₹45K in first 6 months!",
      nextPillar: 2
    },
    {
      id: 2,
      title: "Digital Banking & Payments",
      description: "Master UPI, digital wallets, online banking & payment security.",
      detailedDescription: "Navigate the digital financial ecosystem safely and efficiently with modern banking tools.",
      icon: "🏦",
      path: "/learn/banking-payments",
      gradient: "from-blue-400 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      darkBgGradient: "from-blue-900/20 to-indigo-900/20",
      progress: pillarProgress[2] || 0,
      sections: 10,
      duration: "2h 20m",
      difficulty: 1,
      difficultyLabel: "Beginner",
      prerequisite: null,
      completionRate: 89,
      avgSavings: "₹15,000",
      learningOutcomes: [
        "Use UPI & digital payments securely",
        "Choose the right bank accounts",
        "Avoid banking fees and charges",
        "Protect against financial fraud"
      ],
      keyTopics: ["UPI Security", "Account Types", "Digital Wallets", "Fraud Prevention"],
      tools: ["Bank Comparison", "Fee Calculator"],
      recommended: false,
      popular: false,
      testimonial: "No more banking fees!",
      nextPillar: 3
    },
    {
      id: 3,
      title: "Insurance & Risk Shield",
      description: "Build comprehensive protection with life, health & general insurance.",
      detailedDescription: "Protect your family and assets with the right insurance coverage at optimal costs.",
      icon: "🛡️",
      path: "/learn/insurance",
      gradient: "from-red-400 to-pink-600",
      bgGradient: "from-red-50 to-pink-50",
      darkBgGradient: "from-red-900/20 to-pink-900/20",
      progress: pillarProgress[3] || 0,
      sections: 11,
      duration: "2h 35m",
      difficulty: 2,
      difficultyLabel: "Intermediate",
      prerequisite: 1,
      completionRate: 87,
      avgSavings: "₹75,000",
      learningOutcomes: [
        "Calculate optimal life insurance coverage",
        "Choose the right health insurance plan",
        "Understand policy terms and exclusions",
        "Claim insurance efficiently"
      ],
      keyTopics: ["Term vs ULIP", "Health Insurance", "Claim Process", "Riders"],
      tools: ["Life Insurance Calculator", "Health Insurance Estimator"],
      recommended: completedPillars.has(1),
      popular: true,
      testimonial: "Saved ₹60K on premiums!",
      nextPillar: 4
    },
    {
      id: 4,
      title: "Investment & Wealth Building",
      description: "Build wealth through mutual funds, SIP, stocks, bonds & ETFs.",
      detailedDescription: "Create a diversified investment portfolio to achieve long-term financial goals.",
      icon: "📈",
      path: "/learn/investments",
      gradient: "from-purple-400 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      darkBgGradient: "from-purple-900/20 to-violet-900/20",
      progress: pillarProgress[4] || 0,
      sections: 13,
      duration: "3h 10m",
      difficulty: 2,
      difficultyLabel: "Intermediate",
      prerequisite: 1,
      completionRate: 91,
      avgSavings: "₹2,50,000",
      learningOutcomes: [
        "Start SIP with proper asset allocation",
        "Build a diversified portfolio",
        "Understand risk vs return",
        "Track and rebalance investments"
      ],
      keyTopics: ["SIP Strategy", "Asset Allocation", "Mutual Funds", "Portfolio Rebalancing"],
      tools: ["SIP Calculator", "Asset Allocation Tool", "Portfolio Tracker"],
      recommended: completedPillars.has(1) && userLevel !== 'Beginner',
      popular: true,
      testimonial: "Built ₹10L portfolio!",
      nextPillar: 5
    },
    {
      id: 5,
      title: "Business & Corporate Finance",
      description: "Master business funding, valuations, financial statements & growth.",
      detailedDescription: "Understand corporate finance principles for business growth and investment decisions.",
      icon: "🏢",
      path: "/learn/corporate-finance",
      gradient: "from-orange-400 to-amber-600",
      bgGradient: "from-orange-50 to-amber-50",
      darkBgGradient: "from-orange-900/20 to-amber-900/20",
      progress: pillarProgress[5] || 0,
      sections: 10,
      duration: "2h 30m",
      difficulty: 3,
      difficultyLabel: "Advanced",
      prerequisite: 4,
      completionRate: 78,
      avgSavings: "₹5,00,000",
      learningOutcomes: [
        "Analyze company financial statements",
        "Understand business valuation methods",
        "Evaluate investment opportunities",
        "Make informed business decisions"
      ],
      keyTopics: ["Financial Statements", "Valuation", "Cash Flow", "ROI Analysis"],
      tools: ["Business Valuation Calculator", "ROI Calculator"],
      recommended: completedPillars.has(4) && userLevel === 'Advanced',
      popular: false,
      testimonial: "Increased business ROI by 40%!",
      nextPillar: 6
    },
    {
      id: 6,
      title: "Tax & Government Finance",
      description: "Master tax planning, government schemes, subsidies & fiscal policy.",
      detailedDescription: "Optimize taxes and leverage government schemes for maximum financial benefit.",
      icon: "🏛️",
      path: "/learn/government-finance",
      gradient: "from-indigo-600 to-purple-700",
      bgGradient: "from-indigo-50 to-purple-50",
      darkBgGradient: "from-indigo-900/20 to-purple-900/20",
      progress: pillarProgress[6] || 0,
      sections: 9,
      duration: "2h 15m",
      difficulty: 2,
      difficultyLabel: "Intermediate",
      prerequisite: 1,
      completionRate: 85,
      avgSavings: "₹1,25,000",
      learningOutcomes: [
        "Optimize tax using 80C, 80D deductions",
        "Choose between old vs new tax regime",
        "Leverage government schemes effectively",
        "Plan tax-efficient investments"
      ],
      keyTopics: ["Tax Deductions", "Government Schemes", "Tax Planning", "Regime Comparison"],
      tools: ["Tax Calculator", "HRA Calculator", "80C Optimizer"],
      recommended: completedPillars.has(1),
      popular: true,
      testimonial: "Saved ₹85K in taxes!",
      nextPillar: 7
    },
    {
      id: 7,
      title: "Alternative & Emerging Finance",
      description: "Explore crypto, blockchain, P2P lending & crowdfunding opportunities.",
      detailedDescription: "Navigate emerging financial technologies and alternative investment opportunities.",
      icon: "🚀",
      path: "/learn/alternative-finance",
      gradient: "from-purple-600 to-pink-700",
      bgGradient: "from-purple-50 to-pink-50",
      darkBgGradient: "from-purple-900/20 to-pink-900/20",
      progress: pillarProgress[7] || 0,
      sections: 11,
      duration: "2h 50m",
      difficulty: 3,
      difficultyLabel: "Advanced",
      prerequisite: 4,
      completionRate: 72,
      avgSavings: "₹3,00,000",
      learningOutcomes: [
        "Understand cryptocurrency basics safely",
        "Evaluate P2P lending opportunities",
        "Assess crowdfunding investments",
        "Manage alternative investment risks"
      ],
      keyTopics: ["Cryptocurrency", "P2P Lending", "Crowdfunding", "Risk Management"],
      tools: ["Crypto Calculator", "P2P Returns Calculator"],
      recommended: completedPillars.has(4) && userLevel === 'Advanced',
      popular: false,
      testimonial: "Diversified beyond traditional assets!",
      nextPillar: 8
    },
    {
      id: 8,
      title: "Global Finance & Trade",
      description: "Master forex, international investing, trade finance & remittances.",
      detailedDescription: "Expand your financial horizons with international markets and global opportunities.",
      icon: "🌍",
      path: "/learn/international-finance",
      gradient: "from-green-400 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      darkBgGradient: "from-green-900/20 to-emerald-900/20",
      progress: pillarProgress[8] || 0,
      sections: 11,
      duration: "2h 40m",
      difficulty: 3,
      difficultyLabel: "Advanced",
      prerequisite: 4,
      completionRate: 68,
      avgSavings: "₹4,00,000",
      learningOutcomes: [
        "Invest in international markets",
        "Understand forex and currency risks",
        "Navigate global trade finance",
        "Optimize international remittances"
      ],
      keyTopics: ["Forex Trading", "International Investing", "Trade Finance", "Remittances"],
      tools: ["Currency Converter", "International Investment Calculator"],
      recommended: completedPillars.has(4) && userLevel === 'Advanced',
      popular: false,
      testimonial: "Expanded globally with confidence!",
      nextPillar: null
    }
    ];
    
    // Only update dynamic properties
    return staticPillars.map(pillar => ({
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

  const popularTopics = [
    {
      id: 'emergency-fund',
      title: "Emergency Fund Planning by Age & Life Stage",
      icon: "🛡️",
      difficulty: "Beginner",
      time: "12 min read",
      trending: true,
      badge: "New",
      path: "/learn/emergency-fund-plan",
      author: "NeoCred Team",
      views: "15.2K",
      category: "Planning"
    },
    {
      id: 'tax-saving-2025',
      title: "Tax Saving Investments 2025: Complete Guide",
      icon: "💸",
      difficulty: "Intermediate",
      time: "18 min read",
      trending: true,
      badge: "Updated",
      path: "/learn/tax-optimization",
      author: "Tax Expert",
      views: "23.8K",
      category: "Tax Planning"
    },
    {
      id: 'investment-ladder',
      title: "7-Step Investment Ladder: FD to Mutual Funds",
      icon: "📈",
      difficulty: "Intermediate",
      time: "15 min read",
      trending: true,
      badge: "Popular",
      path: "/learn/investment-portfolio-guide",
      author: "Investment Team",
      views: "31.5K",
      category: "Investing"
    },
    {
      id: 'credit-score-guide',
      title: "Credit Score Improvement: 9-Step Action Plan",
      icon: "📊",
      difficulty: "Beginner",
      time: "14 min read",
      trending: true,
      badge: "Trending",
      path: "/learn/credit-score-debt-management",
      author: "Credit Expert",
      views: "19.7K",
      category: "Credit"
    },
    {
      id: 'retirement-planning',
      title: "Retirement Planning 2025: Age-Based Strategy",
      icon: "🏖️",
      difficulty: "Advanced",
      time: "22 min read",
      trending: false,
      badge: "Comprehensive",
      path: "/learn/retirement-planning",
      author: "Retirement Planner",
      views: "12.3K",
      category: "Retirement"
    },
    {
      id: 'insurance-strategy',
      title: "Insurance Strategy: Life + Health Coverage Guide",
      icon: "🛡️",
      difficulty: "Intermediate",
      time: "16 min read",
      trending: false,
      badge: "Essential",
      path: "/learn/insurance-strategy",
      author: "Insurance Expert",
      views: "18.9K",
      category: "Insurance"
    }
  ];

  const toggleBookmark = (topicId) => {
    const newBookmarks = new Set(bookmarkedTopics);
    if (newBookmarks.has(topicId)) {
      newBookmarks.delete(topicId);
    } else {
      newBookmarks.add(topicId);
    }
    setBookmarkedTopics(newBookmarks);
    localStorage.setItem('bookmarkedTopics', JSON.stringify([...newBookmarks]));
  };

  const markAsRead = (topicId) => {
    const newRead = new Set(readTopics);
    newRead.add(topicId);
    setReadTopics(newRead);
    localStorage.setItem('readTopics', JSON.stringify([...newRead]));
  };

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

  const startPillarLearning = (pillar) => {
    // Award points for starting a pillar
    const currentPoints = parseInt(localStorage.getItem('learningPoints') || '0');
    const newPoints = currentPoints + 25;
    localStorage.setItem('learningPoints', newPoints.toString());
    
    // Track pillar start
    const pillarActivity = JSON.parse(localStorage.getItem('pillarActivity') || '{}');
    pillarActivity[pillar.id] = {
      started: new Date().toISOString(),
      lastAccessed: new Date().toISOString()
    };
    localStorage.setItem('pillarActivity', JSON.stringify(pillarActivity));
  };

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

  const stats = [
    { label: "Active Learners", value: "50K+", icon: UserGroupIcon },
    { label: "Completion Rate", value: "94%", icon: CheckCircleIcon },
    { label: "Avg. Rating", value: "4.9", icon: StarIcon },
    { label: "Total Lessons", value: "85+", icon: BookOpenIcon }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Advanced Background System */}
      <div className="fixed inset-0 z-0">
        {/* Primary Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10"></div>
        
        {/* Animated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/50 via-transparent to-blue-100/30 dark:from-emerald-900/5 dark:via-transparent dark:to-blue-900/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-50/30 via-transparent to-pink-50/40 dark:from-purple-900/5 dark:via-transparent dark:to-pink-900/5" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-300/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-200/25 to-teal-300/25 dark:from-emerald-600/10 dark:to-teal-600/10 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-indigo-200/15 to-blue-300/20 dark:from-indigo-600/8 dark:to-blue-600/8 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-purple-200/20 to-pink-300/20 dark:from-purple-600/8 dark:to-pink-600/8 rounded-full blur-xl animate-float-reverse"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-br from-teal-200/18 to-cyan-300/22 dark:from-teal-600/8 dark:to-cyan-600/8 rounded-full blur-2xl animate-float-delayed"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Dynamic Light Rays */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200/30 to-transparent dark:via-blue-600/20 transform rotate-12 animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-200/25 to-transparent dark:via-purple-600/15 transform -rotate-12" style={{animationDelay: '1s'}}></div>
        
        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-blue-400/30 dark:bg-blue-300/20 rounded-full animate-particle-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-gray-800/10 animate-mesh-move"></div>
      </div>
      
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
          
          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-1">
                  <stat.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => {
              const isLocked = false;
              const isCompleted = pillar.progress === 100;
              const isInProgress = pillar.progress > 0 && pillar.progress < 100;
              
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                  onMouseEnter={() => setHoveredPillar(pillar.id)}
                  onMouseLeave={() => setHoveredPillar(null)}
                >
                  <Link 
                    to={pillar.path}
                    onClick={() => startPillarLearning(pillar)}
                    className={`block relative overflow-hidden bg-gradient-to-br ${pillar.bgGradient} dark:${pillar.darkBgGradient} rounded-2xl p-6 transition-all duration-500 border border-gray-200 dark:border-gray-700 h-full hover:shadow-2xl group-hover:border-transparent group-hover:-translate-y-2`}
                  >
                    {/* Background Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Status Badges */}
                    <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
                      {/* Status Badges - Only show most important one */}
                      {isCompleted ? (
                        <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-0.5 rounded-full text-xs font-medium">
                          ✓ Complete
                        </div>
                      ) : isInProgress ? (
                        <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full text-xs font-medium">
                          {pillar.progress}%
                        </div>
                      ) : pillar.recommended ? (
                        <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 px-2 py-0.5 rounded-full text-xs font-medium animate-pulse">
                          Recommended
                        </div>
                      ) : pillar.popular ? (
                        <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-2 py-0.5 rounded-full text-xs font-medium">
                          🔥 Popular
                        </div>
                      ) : null}
                    </div>
                    
                    <div className="relative z-10 pt-2">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                          {pillar.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 leading-tight">
                        {pillar.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                        {pillar.description}
                      </p>
                      
                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <ClockIcon className="w-3 h-3 mr-1" />
                          {pillar.duration}
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <BookOpenIcon className="w-3 h-3 mr-1" />
                          {pillar.sections} sections
                        </div>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 col-span-2">
                          📊 {pillar.progress}% complete
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${pillar.gradient} transition-all duration-500`}
                          style={{ width: `${pillar.progress}%` }}
                        />
                      </div>
                      
                      {/* Difficulty Badge */}
                      <div className="mb-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyBg(pillar.difficulty)}`}>
                          {pillar.difficultyLabel}
                        </span>
                      </div>
                      

                      
                      {/* Prerequisites */}
                      {pillar.prerequisite && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                          Requires: {pillars.find(p => p.id === pillar.prerequisite)?.title}
                        </div>
                      )}
                      
                      {/* CTA */}
                      <div className={`flex items-center font-medium transition-colors ${
                        isCompleted
                          ? 'text-green-600 dark:text-green-400'
                          : isInProgress
                          ? 'text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400'
                          : 'text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400'
                      }`}>
                        {isCompleted
                          ? '✓ Completed • Review'
                          : isInProgress
                          ? 'Continue Learning'
                          : 'Start Learning'
                        }
                        <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                      
                      {/* Testimonial */}
                      {pillar.testimonial && hoveredPillar === pillar.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg text-xs text-gray-600 dark:text-gray-400 italic"
                        >
                          "{pillar.testimonial}"
                        </motion.div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          
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
  );
};

export default Learn;