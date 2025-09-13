import React, { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { SwipeableCard, TouchButton, PullToRefresh, ScrollReveal } from '../components/mobile';
import { HeartButton } from '../components/ui/micro-interactions';
import { CountingNumber } from '../components/ui';
import {
  CalculatorIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  FireIcon,
  SparklesIcon,
  HeartIcon,
  ClockIcon,
  ArrowRightIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const FdCalculator = lazy(() => import('../calculators/FdCalculator'));
const SIPCalculator = lazy(() => import('../calculators/SIPCalculator'));
const BudgetPlanner = lazy(() => import('../calculators/BudgetPlanner'));

import RDCalculator from '../calculators/RDCalculator';
import PPFCalculator from '../calculators/PPFCalculator';
import StepUpSIPCalculator from '../calculators/StepUpSIPCalculator';
import LumpsumInvestmentCalculator from '../calculators/LumpsumInvestmentCalculator';
import GoalBasedInvestmentPlanner from '../calculators/GoalBasedInvestmentPlanner';
import MutualFundReturnTracker from '../calculators/MutualFundReturnTracker';
import GoldInvestmentCalculator from '../calculators/GoldInvestmentCalculator';
import HomeLoanEMICalculator from '../calculators/HomeLoanEMICalculator';
import EducationLoanEMICalculator from '../calculators/EducationLoanEMICalculator';
import CarBikeLoanEMICalculator from '../calculators/CarBikeLoanEMICalculator';
import LoanEligibilityChecker from '../calculators/LoanEligibilityChecker';
import TermLifeInsuranceEstimator from '../calculators/TermLifeInsuranceEstimator';
import HealthInsurancePremiumEstimator from '../calculators/HealthInsurancePremiumEstimator';

import NPSReturnCalculator from '../calculators/NPSReturnCalculator';
import RetirementGoalPlanner from '../calculators/RetirementGoalPlanner';
import EPFMaturityCalculator from '../calculators/EPFMaturityCalculator';
import DebtRepaymentPlanner from '../calculators/DebtRepaymentPlanner';
import HRAExemptionCalculator from '../calculators/HRAExemptionCalculator';

import NetWorthTracker from '../calculators/NetWorthTracker';
import EmergencyFundCalculator from '../calculators/EmergencyFundCalculator';
import BudgetRuleCalculator from '../calculators/BudgetRuleCalculator';
import FirstSalaryPlanner from '../calculators/FirstSalaryPlanner';

import RentVsBuyCalculator from '../calculators/RentVsBuyCalculator';
import RealReturnsCalculator from '../calculators/RealReturnsCalculator';
import RuleOf72Calculator from '../calculators/RuleOf72Calculator';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Tools() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTool, setSelectedTool] = useState(null);
  const [favoriteTools, setFavoriteTools] = useState(new Set());
  const [recentTools, setRecentTools] = useState([]);
  const [userPoints, setUserPoints] = useState(0);
  const [showPointsAnimation, setShowPointsAnimation] = useState(false);
  const [isFromChatbot, setIsFromChatbot] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Enhanced tool data with tags, levels, and popularity (30+ tools)
  const allTools = useMemo(() => [
    // Core Tools (4)
    { name: 'FD Calculator', icon: CurrencyDollarIcon, component: FdCalculator, category: 'Core Tools', level: 'Beginner', tags: ['savings', 'deposit', 'fixed'], popularity: 95, description: 'Calculate returns on Fixed Deposits', pageUrl: '/calculators/fd' },
    { name: 'SIP Calculator', icon: ChartBarIcon, component: SIPCalculator, category: 'Core Tools', level: 'Beginner', tags: ['invest', 'sip', 'mutual-fund'], popularity: 98, description: 'Plan your systematic investment', pageUrl: '/calculators/sip' },
    { name: 'Budget Planner', icon: DocumentTextIcon, component: BudgetPlanner, category: 'Core Tools', level: 'Beginner', tags: ['budget', 'planning', 'expense'], popularity: 92, description: 'Manage your monthly budget', pageUrl: '/calculators/budget-planner' },
    { name: 'HRA Exemption Calculator', icon: CalculatorIcon, component: HRAExemptionCalculator, category: 'Core Tools', level: 'Intermediate', tags: ['tax', 'hra', 'salary'], popularity: 88, description: 'Calculate HRA tax exemption', pageUrl: '/calculators/hra-exemption' },
    
    // Savings & Deposits (2)
    { name: 'RD Calculator', icon: CalculatorIcon, component: RDCalculator, category: 'Savings & Deposits', level: 'Beginner', tags: ['savings', 'recurring', 'deposit'], popularity: 75, description: 'Calculates maturity and total interest from Recurring Deposits', pageUrl: '/calculators/rd' },
    { name: 'PPF Calculator', icon: CalculatorIcon, component: PPFCalculator, category: 'Savings & Deposits', level: 'Intermediate', tags: ['savings', 'ppf', 'tax'], popularity: 82, description: 'Calculates maturity value of Public Provident Fund', pageUrl: '/calculators/ppf' },

    
    // Investment Tools (6)
    { name: 'Step-up SIP Calculator', icon: ChartBarIcon, component: StepUpSIPCalculator, category: 'Investment Tools', level: 'Intermediate', tags: ['invest', 'sip', 'step-up'], popularity: 78, description: 'Calculates returns if SIP amount increases yearly', pageUrl: '/calculators/step-up-sip' },
    { name: 'Lumpsum Investment Calculator', icon: CurrencyDollarIcon, component: LumpsumInvestmentCalculator, category: 'Investment Tools', level: 'Intermediate', tags: ['invest', 'lumpsum', 'cagr'], popularity: 80, description: 'Calculates one-time investment returns (with CAGR)', pageUrl: '/calculators/lumpsum' },
    { name: 'Goal-Based Investment Planner', icon: ChartBarIcon, component: GoalBasedInvestmentPlanner, category: 'Investment Tools', level: 'Advanced', tags: ['invest', 'goal', 'planning'], popularity: 72, description: 'Helps users invest monthly to reach future goals', pageUrl: '/calculators/goal-based-investment' },
    { name: 'Mutual Fund Return Tracker', icon: ChartBarIcon, component: MutualFundReturnTracker, category: 'Investment Tools', level: 'Intermediate', tags: ['invest', 'mutual-fund', 'returns'], popularity: 76, description: 'Estimates mutual fund returns over a period', pageUrl: '/calculators/mutual-fund-tracker' },
    { name: 'Gold Investment Calculator', icon: CurrencyDollarIcon, component: GoldInvestmentCalculator, category: 'Investment Tools', level: 'Intermediate', tags: ['invest', 'gold', 'sgb'], popularity: 68, description: 'SGB/digital gold returns over years', pageUrl: '/calculators/gold-investment' },
    { name: 'Rule of 72 Calculator', icon: CalculatorIcon, component: RuleOf72Calculator, category: 'Investment Tools', level: 'Beginner', tags: ['invest', 'doubling', 'rule72'], popularity: 84, description: 'Quick way to estimate investment doubling time', pageUrl: '/calculators/rule-of-72' },
    
    // Loan & Credit Tools (4)
    { name: 'Home Loan EMI Calculator', icon: CalculatorIcon, component: HomeLoanEMICalculator, category: 'Loan & Credit Tools', level: 'Intermediate', tags: ['loan', 'home', 'emi'], popularity: 90, description: 'Estimate EMI + interest breakup', pageUrl: '/calculators/home-loan-emi' },
    { name: 'Education Loan EMI Calculator', icon: CalculatorIcon, component: EducationLoanEMICalculator, category: 'Loan & Credit Tools', level: 'Intermediate', tags: ['loan', 'education', 'student'], popularity: 70, description: 'Helps students plan repayment', pageUrl: '/calculators/education-loan-emi' },
    { name: 'Car/Bike Loan EMI Calculator', icon: CalculatorIcon, component: CarBikeLoanEMICalculator, category: 'Loan & Credit Tools', level: 'Beginner', tags: ['loan', 'vehicle', 'emi'], popularity: 74, description: 'For vehicle buyers', pageUrl: '/calculators/car-loan-emi' },
    { name: 'Loan Eligibility Checker', icon: CalculatorIcon, component: LoanEligibilityChecker, category: 'Loan & Credit Tools', level: 'Intermediate', tags: ['loan', 'eligibility', 'income'], popularity: 77, description: 'Based on salary/income, debt ratio', pageUrl: '/calculators/loan-eligibility' },

    
    // Insurance Tools (2)
    { name: 'Term Life Insurance Estimator', icon: CalculatorIcon, component: TermLifeInsuranceEstimator, category: 'Insurance Tools', level: 'Intermediate', tags: ['insurance', 'life', 'family'], popularity: 85, description: 'Estimates ideal life cover based on income & age', pageUrl: '/calculators/term-life-insurance' },
    { name: 'Health Insurance Premium Estimator', icon: CalculatorIcon, component: HealthInsurancePremiumEstimator, category: 'Insurance Tools', level: 'Beginner', tags: ['insurance', 'health', 'family'], popularity: 88, description: 'Based on city, age, coverage amount', pageUrl: '/calculators/health-insurance' },


    
    // Retirement Tools (3)
    { name: 'NPS Return Calculator', icon: ChartBarIcon, component: NPSReturnCalculator, category: 'Retirement Tools', level: 'Advanced', tags: ['retirement', 'nps', 'pension'], popularity: 65, description: 'Calculates future value based on investment %', pageUrl: '/calculators/nps-return' },
    { name: 'Retirement Goal Planner', icon: ChartBarIcon, component: RetirementGoalPlanner, category: 'Retirement Tools', level: 'Advanced', tags: ['retirement', 'planning', 'goal'], popularity: 78, description: 'Helps users invest monthly for post-60 life', pageUrl: '/calculators/retirement-goal' },
    { name: 'EPF Maturity Calculator', icon: CalculatorIcon, component: EPFMaturityCalculator, category: 'Retirement Tools', level: 'Intermediate', tags: ['retirement', 'epf', 'provident'], popularity: 73, description: 'For salaried employees (estimate maturity at 58)', pageUrl: '/calculators/epf-maturity' },
    
    // Credit & Score Tools (2)
    { name: 'Credit Score Simulator', icon: ChartBarIcon, category: 'Credit & Score Tools', level: 'Advanced', tags: ['credit', 'score', 'simulation'], popularity: 67, description: 'Simulates how score changes based on EMI defaults, usage', pageUrl: '/calculators/credit-score-simulator' },
    { name: 'Debt Repayment Planner', icon: CalculatorIcon, component: DebtRepaymentPlanner, category: 'Credit & Score Tools', level: 'Advanced', tags: ['debt', 'credit', 'planning'], popularity: 72, description: 'Strategizes how to repay loans faster using snowball/avalanche method', pageUrl: '/calculators/debt-repayment' },
    
    // Tax & Salary Tools (0)


    
    // Personal Planning Tools (4)
    { name: 'Net Worth Tracker', icon: ChartBarIcon, component: NetWorthTracker, category: 'Personal Planning Tools', level: 'Beginner', tags: ['planning', 'wealth', 'assets'], popularity: 68, description: 'Calculates total assets – liabilities', pageUrl: '/calculators/net-worth-tracker' },
    { name: 'Emergency Fund Calculator', icon: CurrencyDollarIcon, component: EmergencyFundCalculator, category: 'Personal Planning Tools', level: 'Beginner', tags: ['emergency', 'savings', 'planning'], popularity: 85, description: 'Shows how much savings needed for 3/6 months', pageUrl: '/calculators/emergency-fund' },
    { name: '50/30/20 Rule Budgeter', icon: DocumentTextIcon, component: BudgetRuleCalculator, category: 'Personal Planning Tools', level: 'Beginner', tags: ['budget', 'rule', 'planning'], popularity: 79, description: 'Income-based auto-planner', pageUrl: '/calculators/budget-rule' },
    { name: 'First Salary Planner', icon: CalculatorIcon, component: FirstSalaryPlanner, category: 'Personal Planning Tools', level: 'Beginner', tags: ['salary', 'fresher', 'planning'], popularity: 83, description: 'For freshers to plan savings, tax, and spend smartly', pageUrl: '/calculators/first-salary-planner' },

    
    // Specialized Tools (2)

    { name: 'Rent vs Buy Home Calculator', icon: CalculatorIcon, component: RentVsBuyCalculator, category: 'Specialized Tools', level: 'Advanced', tags: ['property', 'rent', 'buy'], popularity: 75, description: 'Compares renting vs buying a house over years', pageUrl: '/calculators/rent-vs-buy' },
    { name: 'Real Returns Calculator', icon: ChartBarIcon, component: RealReturnsCalculator, category: 'Specialized Tools', level: 'Advanced', tags: ['returns', 'inflation', 'real'], popularity: 64, description: 'Adjusts returns for inflation impact', pageUrl: '/calculators/real-returns' }
  ], []);
  
  // Load data from localStorage and handle URL parameters on component mount
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    try {
      const savedFavorites = localStorage.getItem('favoriteTools');
      const savedRecent = localStorage.getItem('recentTools');
      const savedPoints = localStorage.getItem('learningPoints');
      
      if (savedFavorites) {
        setFavoriteTools(new Set(JSON.parse(savedFavorites)));
      }
      if (savedRecent) {
        setRecentTools(JSON.parse(savedRecent));
      }
      if (savedPoints) {
        setUserPoints(parseInt(savedPoints, 10) || 0);
      }
    } catch (error) {
      console.warn('Error loading saved data from localStorage:', error);
    }
    
    // Handle URL parameter to auto-open tool
    const urlParams = new URLSearchParams(window.location.search);
    const toolName = urlParams.get('tool');
    const fromChat = urlParams.get('from') === 'chat' || document.referrer.includes('/chatbot');
    const recommended = urlParams.get('recommended') === 'true';
    
    setIsFromChatbot(fromChat);
    
    // Handle recommended tools from home page
    try {
      if (recommended && savedRecent && JSON.parse(savedRecent).length > 0) {
        setSelectedCategory('Recent');
      }
    } catch (error) {
      console.warn('Error parsing savedRecent:', error);
    }
    
    if (toolName) {
      const tool = allTools.find(t => t.name === toolName);
      if (tool && !tool.locked) {
        setSelectedTool(tool);
        trackToolUsage(tool);
      }
    }
    
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
  
  // Track tool usage and award points
  const trackToolUsage = (tool) => {
    try {
      // Add to recent tools (keep last 3)
      const newRecent = [tool.name, ...recentTools.filter(name => name !== tool.name)].slice(0, 3);
      setRecentTools(newRecent);
      localStorage.setItem('recentTools', JSON.stringify(newRecent));
      
      // Award points (10 points per tool use)
      const newPoints = userPoints + 10;
      setUserPoints(newPoints);
      localStorage.setItem('learningPoints', newPoints.toString());
      
      // Show animation
      setShowPointsAnimation(true);
      setTimeout(() => setShowPointsAnimation(false), 2000);
      
      // Track usage analytics
      const usageData = JSON.parse(localStorage.getItem('toolUsageAnalytics') || '{}');
      usageData[tool.name] = (usageData[tool.name] || 0) + 1;
      localStorage.setItem('toolUsageAnalytics', JSON.stringify(usageData));
    } catch (error) {
      console.warn('Error tracking tool usage:', error);
    }
  };

  // Toggle favorite status
  const toggleFavorite = (toolName) => {
    const newFavorites = new Set(favoriteTools);
    if (newFavorites.has(toolName)) {
      newFavorites.delete(toolName);
    } else {
      newFavorites.add(toolName);
    }
    setFavoriteTools(newFavorites);
    localStorage.setItem('favoriteTools', JSON.stringify([...newFavorites]));
  };

  // Get favorite tools
  const favoriteToolsList = allTools.filter(tool => favoriteTools.has(tool.name));
  
  // Get recent tools
  const recentToolsList = recentTools.map(name => allTools.find(tool => tool.name === name)).filter(Boolean);

  // Filter and search logic with level-based sorting
  const filteredTools = useMemo(() => {
    const currentFavorites = favoriteToolsList;
    const currentRecent = recentToolsList;
    let toolsToFilter = selectedCategory === 'Favorites' ? currentFavorites : 
                       selectedCategory === 'Recent' ? currentRecent : allTools;
    
    const filtered = toolsToFilter.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesLevel = selectedLevel === 'All' || tool.level === selectedLevel;
      const matchesTag = selectedTag === 'All' || tool.tags.includes(selectedTag);
      const matchesCategory = selectedCategory === 'All' || selectedCategory === 'Recent' || selectedCategory === 'Favorites' || tool.category === selectedCategory;
      return matchesSearch && matchesLevel && matchesTag && matchesCategory;
    });
    
    // Sort by level: Beginner -> Intermediate -> Advanced
    return filtered.sort((a, b) => {
      const levelOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
      const levelDiff = levelOrder[a.level] - levelOrder[b.level];
      // If same level, sort by popularity (descending)
      return levelDiff !== 0 ? levelDiff : b.popularity - a.popularity;
    });
  }, [searchTerm, selectedLevel, selectedTag, selectedCategory, favoriteTools, recentTools, allTools]);
  
  // Popular tools (top 6 by popularity)
  const popularTools = [...allTools].sort((a, b) => b.popularity - a.popularity).slice(0, 6);
  
  // Get unique values for filters
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const tags = ['All', ...new Set(allTools.flatMap(tool => tool.tags))];
  const categories = ['All', 'Recent', 'Favorites', ...new Set(allTools.map(tool => tool.category))];

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return '🟢';
      case 'Intermediate': return '🟡';
      case 'Advanced': return '🔴';
      default: return '⚪';
    }
  };

  const renderToolCard = (tool) => (
    <div className="h-full">
      <motion.div 
        layout
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        whileHover={{ 
          y: -8, 
          scale: 1.02,
          transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
        whileTap={{ scale: 0.98 }}
        className={`relative bg-white dark:bg-gray-800 p-6 rounded-2xl group border border-gray-200 dark:border-gray-700 h-full flex flex-col overflow-hidden ${
          tool.locked 
            ? 'opacity-75 cursor-not-allowed' 
            : 'cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/30 hover:border-blue-300 dark:hover:border-blue-600'
        }`}
        onClick={() => {
          if (!tool.locked) {
            if (tool.pageUrl) {
              navigate(tool.pageUrl);
            } else {
              setSelectedTool(tool);
              trackToolUsage(tool);
            }
          }
        }}
    >
      {/* Enhanced gradient overlay with animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ 
          opacity: 1, 
          scale: 1,
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))"
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
        whileHover={{
          translateX: "200%",
          transition: { duration: 0.6, ease: "easeInOut" }
        }}
      />
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="flex items-center gap-4">
          <motion.div 
            className={`p-3 rounded-xl ${
              tool.locked 
                ? 'bg-gray-100 dark:bg-gray-700' 
                : 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
            }`}
            whileHover={!tool.locked ? {
              scale: 1.15,
              rotate: [0, -5, 5, 0],
              background: "linear-gradient(135deg, rgb(219, 234, 254), rgb(243, 232, 255))",
              transition: { duration: 0.3 }
            } : {}}
          >
            <motion.div
              whileHover={!tool.locked ? {
                rotate: 360,
                transition: { duration: 0.5 }
              } : {}}
            >
              <tool.icon className={`h-6 w-6 transition-all duration-300 ${
                tool.locked ? 'text-gray-500 dark:text-white/50' : 'text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300'
              }`} />
            </motion.div>
          </motion.div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className={`text-lg font-bold transition-all duration-300 ${
                tool.locked ? 'text-gray-500 dark:text-white/60' : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'
              }`}>{tool.name}</h3>
              {tool.locked && (
                <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full border border-yellow-500/30">
                  🔒 Locked
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs">{getLevelColor(tool.level)} {tool.level}</span>
              <span className="text-xs text-gray-500 dark:text-white/50">•</span>
              <span className="text-xs text-gray-600 dark:text-white/70">{tool.category}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Micro-Interaction Buttons */}
          <HeartButton
            isLiked={favoriteTools.has(tool.name)}
            onClick={() => toggleFavorite(tool.name)}
            size="sm"
          />
          {tool.popularity > 85 && !tool.locked && (
            <div className="flex items-center gap-1 text-orange-400">
              <FireIcon className="h-4 w-4" />
              <span className="text-xs font-medium">Popular</span>
            </div>
          )}
        </div>
      </div>
      <p className={`text-sm mb-4 leading-relaxed relative z-10 flex-grow ${
        tool.locked ? 'text-gray-500 dark:text-white/50' : 'text-gray-600 dark:text-white/70 group-hover:text-gray-700 dark:group-hover:text-white/80'
      }`}>{tool.description}</p>
      
      {/* Enhanced tags with staggered animations */}
      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {tool.tags.slice(0, 3).map((tag, index) => (
          <motion.span 
            key={tag} 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2 }
            }}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-300 ${
              tool.locked 
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400' 
                : 'bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800/50 dark:group-hover:to-purple-800/50'
            }`}
          >
            {tag}
          </motion.span>
        ))}
      </div>
      
      {/* Action button - fixed at bottom */}
      <div className={`flex items-center justify-between relative z-10 mt-auto ${
        tool.locked ? 'opacity-50' : ''
      }`}>
        <div className={`text-sm font-medium transition-colors ${
          tool.locked 
            ? 'text-gray-400 dark:text-gray-500'
            : 'text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300'
        }`}>
          {tool.locked ? '🔒 Coming Soon' : 'Open Calculator →'}
        </div>
        <div className={`text-xs px-2 py-1 rounded-full ${
          tool.popularity > 85 
            ? 'bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-700 dark:text-orange-300'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
        }`}>
          <CountingNumber value={tool.popularity} duration={1000} />% popular
        </div>
      </div>
      </motion.div>
    </div>
  );

  return (
    <PullToRefresh 
      onRefresh={async () => {
        // Simulate refresh - could reload data, reset filters, etc.
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSearchTerm('');
        setSelectedLevel('All');
        setSelectedTag('All');
        setSelectedCategory('All');
      }}
      className="min-h-screen"
    >
      <div className="py-12 min-h-screen relative text-gray-900 dark:text-white transition-all duration-500" style={{ WebkitOverflowScrolling: 'touch' }}>
      {/* Advanced Background System */}
      <div className="fixed inset-0 z-0">
        {/* Primary Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10"></div>
        
        {/* Animated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/40 via-transparent to-blue-100/30 dark:from-purple-900/8 dark:via-transparent dark:to-blue-900/12 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-emerald-50/30 via-transparent to-cyan-50/40 dark:from-emerald-900/6 dark:via-transparent dark:to-cyan-900/8" style={{animationDelay: '3s'}}></div>
        
        {/* Floating Calculator Icons */}
        <div className="absolute top-20 left-16 w-20 h-20 bg-gradient-to-br from-blue-200/25 to-purple-300/30 dark:from-blue-600/15 dark:to-purple-600/20 rounded-2xl blur-lg animate-float rotate-12"></div>
        <div className="absolute top-32 right-24 w-16 h-16 bg-gradient-to-br from-emerald-200/30 to-teal-300/35 dark:from-emerald-600/15 dark:to-teal-600/20 rounded-xl blur-md animate-float-delayed -rotate-6"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-200/20 to-blue-300/25 dark:from-indigo-600/12 dark:to-blue-600/15 rounded-3xl blur-xl animate-float-slow rotate-45"></div>
        <div className="absolute top-1/2 right-1/3 w-18 h-18 bg-gradient-to-br from-purple-200/25 to-pink-300/30 dark:from-purple-600/12 dark:to-pink-600/15 rounded-2xl blur-lg animate-float-reverse -rotate-12"></div>
        <div className="absolute bottom-24 right-16 w-22 h-22 bg-gradient-to-br from-teal-200/22 to-cyan-300/28 dark:from-teal-600/10 dark:to-cyan-600/12 rounded-2xl blur-xl animate-float-delayed rotate-30"></div>
        
        {/* Mathematical Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]" style={{
          backgroundImage: `
            linear-gradient(90deg, rgb(59 130 246) 1px, transparent 1px),
            linear-gradient(180deg, rgb(59 130 246) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Dynamic Calculator Symbols */}
        <div className="absolute top-1/4 left-1/5 text-blue-200/20 dark:text-blue-600/10 text-6xl font-bold animate-pulse" style={{animationDelay: '1s'}}>+</div>
        <div className="absolute top-3/4 right-1/4 text-purple-200/20 dark:text-purple-600/10 text-5xl font-bold animate-pulse" style={{animationDelay: '2s'}}>%</div>
        <div className="absolute bottom-1/3 left-1/3 text-emerald-200/20 dark:text-emerald-600/10 text-4xl font-bold animate-pulse" style={{animationDelay: '0.5s'}}>₹</div>
        <div className="absolute top-1/3 right-1/5 text-indigo-200/20 dark:text-indigo-600/10 text-5xl font-bold animate-pulse" style={{animationDelay: '1.5s'}}>×</div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-blue-400/40 dark:bg-blue-300/25 rounded-full animate-particle-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 12}s`,
                animationDuration: `${18 + Math.random() * 12}s`
              }}
            />
          ))}
        </div>
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent dark:via-gray-800/15 animate-mesh-move"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10">
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        /* Mobile scrolling fixes */
        @media (max-width: 768px) {
          body {
            -webkit-overflow-scrolling: touch;
            overflow-scrolling: touch;
          }
          
          .mobile-scroll-fix {
            -webkit-overflow-scrolling: touch;
            overflow-scrolling: touch;
            transform: translateZ(0);
          }
        }
      `}</style>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-scroll-fix">
            <div className="text-center mb-12 relative">
              {/* Enhanced Header Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-transparent to-purple-50/40 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/15 rounded-3xl blur-3xl"></div>
              <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🧮 Financial Tools & Calculators
              </h1>
              <p className="text-xl text-gray-600 dark:text-white/80 max-w-3xl mx-auto mb-6">
                Make informed financial decisions with our comprehensive suite of <span className="font-semibold text-blue-600 dark:text-blue-400">{allTools.length}+ calculators</span> and planning tools.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
                <span className="flex items-center gap-1">🟢 <CountingNumber value={allTools.filter(t => t.level === 'Beginner').length} duration={800} /> Beginner</span>
                <span className="flex items-center gap-1">🟡 <CountingNumber value={allTools.filter(t => t.level === 'Intermediate').length} duration={1000} /> Intermediate</span>
                <span className="flex items-center gap-1">🔴 <CountingNumber value={allTools.filter(t => t.level === 'Advanced').length} duration={1200} /> Advanced</span>
                <span className="flex items-center gap-1">🔥 <CountingNumber value={allTools.filter(t => t.popularity > 85).length} duration={1400} /> Popular</span>
              </div>
            </div>
            
            {/* Points Display */}
            {userPoints > 0 && (
              <div className="mb-8 flex justify-center">
                <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-xl inline-flex items-center gap-2 px-4 py-2 relative">
                  <span className="text-2xl">🏆</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold"><CountingNumber value={userPoints} duration={1500} /></span>
                  <span className="text-gray-700 dark:text-white/70 text-sm">Learning Points</span>
                  {showPointsAnimation && (
                    <span className="text-green-400 font-bold absolute -top-2 right-0 animate-bounce">
                      +10
                    </span>
                  )}
                </div>
              </div>
            )}
            
            {/* Enhanced Quick Access Cards */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <div className="group bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/30 p-6 rounded-2xl border border-blue-200 dark:border-blue-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <SparklesIcon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-900 dark:text-white font-semibold">New to Financial Planning?</span>
                </div>
                <button 
                  onClick={() => setSelectedLevel('Beginner')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-sm transition-all duration-300 flex items-center gap-2 group-hover:gap-3"
                >
                  Start with Beginner Tools
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
              
              {recentToolsList.length > 0 && (
                <div className="group bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30 p-6 rounded-2xl border border-green-200 dark:border-green-700 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <ClockIcon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-900 dark:text-white font-semibold">Continue Learning ({recentToolsList.length})</span>
                  </div>
                  <button 
                    onClick={() => setSelectedCategory('Recent')}
                    className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-semibold text-sm transition-all duration-300 flex items-center gap-2 group-hover:gap-3"
                  >
                    Resume Recent Tools
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              )}
              
              {favoriteToolsList.length > 0 && (
                <div className="group bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900/20 dark:to-pink-900/30 p-6 rounded-2xl border border-red-200 dark:border-red-700 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-red-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <HeartIconSolid className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-900 dark:text-white font-semibold">Your Favorites ({favoriteToolsList.length})</span>
                  </div>
                  <button 
                    onClick={() => setSelectedCategory('Favorites')}
                    className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-semibold text-sm transition-all duration-300 flex items-center gap-2 group-hover:gap-3"
                  >
                    View Saved Tools
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Enhanced Search and Filters */}
            <div className="relative mb-8">
              {/* Filter Section Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50/80 to-blue-50/60 dark:from-gray-800/60 dark:to-blue-900/30 backdrop-blur-sm rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/20 dark:from-blue-900/15 dark:via-transparent dark:to-purple-900/10 rounded-2xl"></div>
              <div className="relative z-20 p-6 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Advanced Search Bar */}
              <div className="relative lg:col-span-2">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500 dark:text-blue-400" />
                <input
                  type="text"
                  placeholder="Search by name, category, or tags..."
                  value={searchTerm}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSearchTerm(value);
                    
                    // Generate search suggestions
                    if (value.length > 0) {
                      const suggestions = allTools
                        .filter(tool => 
                          tool.name.toLowerCase().includes(value.toLowerCase()) ||
                          tool.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase()))
                        )
                        .slice(0, 5)
                        .map(tool => tool.name);
                      setSearchSuggestions(suggestions);
                      setShowSuggestions(true);
                    } else {
                      setShowSuggestions(false);
                    }
                  }}
                  onFocus={() => searchTerm.length > 0 && setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 300)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
                />
                
                {/* Search Suggestions Dropdown */}
                {showSuggestions && searchSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow-2xl z-[9999] overflow-hidden">
                    {searchSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setSearchTerm(suggestion);
                          setShowSuggestions(false);
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-900 dark:text-white transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                      >
                        <MagnifyingGlassIcon className="inline w-4 h-4 mr-2 text-gray-400" />
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Enhanced Level Filter with animation */}
              <motion.select
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 font-medium"
              >
                {levels.map(level => (
                  <option key={level} value={level} className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                    {level === 'All' ? 'All Levels' : `${getLevelColor(level)} ${level}`}
                  </option>
                ))}
              </motion.select>
              
              {/* Enhanced Tag Filter with animation */}
              <motion.select
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 font-medium"
              >
                {tags.map(tag => (
                  <option key={tag} value={tag} className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white capitalize">
                    {tag === 'All' ? 'All Tags' : tag}
                  </option>
                ))}
              </motion.select>
              
              {/* Enhanced Category Filter with animation */}
              <motion.select
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 font-medium"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                    {category}
                  </option>
                ))}
              </motion.select>
                </div>
              </div>
            </div>

            {/* All Tools Grid */}
            <div className="mb-8 relative">
              {/* Tools Grid Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-blue-50/30 dark:from-gray-800/20 dark:via-transparent dark:to-blue-900/10 rounded-3xl blur-3xl"></div>
              <div className="flex items-center justify-between mb-6 relative z-10">
              <motion.h2 
                className="text-2xl font-bold text-gray-900 dark:text-white"
                key={filteredTools.length}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {searchTerm || selectedLevel !== 'All' || selectedTag !== 'All' || selectedCategory !== 'All' 
                  ? `Filtered Tools (${filteredTools.length})` 
                  : 'All Tools'}
              </motion.h2>
              <motion.div 
                className="flex items-center gap-2 text-gray-600 dark:text-white/60"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  animate={{ rotate: filteredTools.length > 0 ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <FunnelIcon className="h-5 w-5" />
                </motion.div>
                <motion.span 
                  className="text-sm"
                  key={filteredTools.length}
                  initial={{ scale: 1.2, color: "#3b82f6" }}
                  animate={{ scale: 1, color: "inherit" }}
                  transition={{ duration: 0.3 }}
                >
                  <CountingNumber value={filteredTools.length} duration={500} /> tools found
                </motion.span>
              </motion.div>
            </div>
            
            {filteredTools.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
                layout
              >
                <AnimatePresence mode="popLayout">
                  {filteredTools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      layout
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { 
                          delay: index * 0.05,
                          duration: 0.4,
                          type: "spring",
                          stiffness: 100
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        y: -30, 
                        scale: 0.9,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {renderToolCard(tool)}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-100/80 dark:bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center py-12 relative z-10 border border-gray-200/50 dark:border-gray-700/50"
              >
                <motion.div 
                  className="text-gray-500 dark:text-white/50 mb-4"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <MagnifyingGlassIcon className="h-12 w-12 mx-auto mb-3" />
                  </motion.div>
                  <p className="text-lg">No tools found</p>
                  <p className="text-sm">Try adjusting your search or filters</p>
                </motion.div>
                <motion.button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedLevel('All');
                    setSelectedTag('All');
                    setSelectedCategory('All');
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Clear all filters
                </motion.button>
              </motion.div>
            )}
            </div>
            
            {/* Selected Tool Modal/Panel */}
            <AnimatePresence>
            {selectedTool && (
              <motion.div 
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedTool(null)}
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                <motion.div 
                  className="bg-white dark:bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }
                  }}
                  exit={{ 
                    scale: 0.8, 
                    opacity: 0, 
                    y: 50,
                    transition: { duration: 0.2 }
                  }}
                  onClick={(e) => e.stopPropagation()}
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  <motion.div 
                    className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-white/10 p-6 flex items-center justify-between"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-4">
                      <selectedTool.icon className="h-8 w-8 text-blue-400" />
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedTool.name}</h2>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm">{getLevelColor(selectedTool.level)} {selectedTool.level}</span>
                          <span className="text-sm text-gray-500 dark:text-white/50">•</span>
                          <span className="text-sm text-gray-600 dark:text-white/70">{selectedTool.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {isFromChatbot && (
                        <button
                          onClick={() => window.location.href = '/chatbot'}
                          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
                        >
                          Back to Chat
                        </button>
                      )}
                      <button
                        onClick={() => setSelectedTool(null)}
                        className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white text-2xl font-bold w-8 h-8 flex items-center justify-center"
                      >
                        ×
                      </button>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="p-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-gray-700 dark:text-white/80 mb-6">{selectedTool.description}</p>
                    {selectedTool.component ? (
                      <Suspense fallback={
                        <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl text-center py-12">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white mx-auto mb-4"></div>
                          <span className="text-gray-600 dark:text-white/70">Loading calculator...</span>
                        </div>
                      }>
                        <selectedTool.component key={selectedTool.name + Date.now()} />
                      </Suspense>
                    ) : (
                      <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl text-center py-12">
                        <span className="text-gray-600 dark:text-white/50 bg-gray-200 dark:bg-white/10 px-4 py-2 rounded-full">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </div>
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
    </PullToRefresh>
  );
}