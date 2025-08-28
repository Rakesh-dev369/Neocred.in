import React, { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import { Tab } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import {
  CalculatorIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  FireIcon,
  SparklesIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const FdCalculator = lazy(() => import('../calculators/FdCalculator'));
const SIPCalculator = lazy(() => import('../calculators/SIPCalculator'));
const BudgetPlanner = lazy(() => import('../calculators/BudgetPlanner'));
const TaxSaverCalc = lazy(() => import('../calculators/TaxSaverCalc'));
import RDCalculator from '../calculators/RDCalculator';
import PPFCalculator from '../calculators/PPFCalculator';
import PostOfficeFDCalculator from '../calculators/PostOfficeFDCalculator';
import StepUpSIPCalculator from '../calculators/StepUpSIPCalculator';
import LumpsumInvestmentCalculator from '../calculators/LumpsumInvestmentCalculator';
import GoalBasedInvestmentPlanner from '../calculators/GoalBasedInvestmentPlanner';
import MutualFundReturnTracker from '../calculators/MutualFundReturnTracker';
import GoldInvestmentCalculator from '../calculators/GoldInvestmentCalculator';
import HomeLoanEMICalculator from '../calculators/HomeLoanEMICalculator';
import EducationLoanEMICalculator from '../calculators/EducationLoanEMICalculator';
import CarBikeLoanEMICalculator from '../calculators/CarBikeLoanEMICalculator';
import CreditCardEMICalculator from '../calculators/CreditCardEMICalculator';
import LoanEligibilityChecker from '../calculators/LoanEligibilityChecker';
import LoanAffordabilityTool from '../calculators/LoanAffordabilityTool';
import TermLifeInsuranceEstimator from '../calculators/TermLifeInsuranceEstimator';
import HealthInsurancePremiumEstimator from '../calculators/HealthInsurancePremiumEstimator';
import VehicleInsuranceEstimator from '../calculators/VehicleInsuranceEstimator';
import CropInsuranceEstimator from '../calculators/CropInsuranceEstimator';
import NPSReturnCalculator from '../calculators/NPSReturnCalculator';
import RetirementGoalPlanner from '../calculators/RetirementGoalPlanner';
import AnnuityCalculator from '../calculators/AnnuityCalculator';
import EPFMaturityCalculator from '../calculators/EPFMaturityCalculator';
import DebtRepaymentPlanner from '../calculators/DebtRepaymentPlanner';
import HRAExemptionCalculator from '../calculators/HRAExemptionCalculator';
import Form16BreakdownTool from '../calculators/Form16BreakdownTool';
import TDSEstimator from '../calculators/TDSEstimator';
import NetWorthTracker from '../calculators/NetWorthTracker';
import EmergencyFundCalculator from '../calculators/EmergencyFundCalculator';
import BudgetRuleCalculator from '../calculators/BudgetRuleCalculator';
import FirstSalaryPlanner from '../calculators/FirstSalaryPlanner';

import RentVsBuyCalculator from '../calculators/RentVsBuyCalculator';
import RealReturnsCalculator from '../calculators/RealReturnsCalculator';
import RuleOf72Calculator from '../calculators/RuleOf72Calculator';
import BudgetGoalPlanner from '../calculators/BudgetGoalPlanner';

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
  
  // Enhanced tool data with tags, levels, and popularity (30+ tools)
  const allTools = [
    // Core Tools (4)
    { name: 'FD Calculator', icon: CurrencyDollarIcon, component: FdCalculator, category: 'Core Tools', level: 'Beginner', tags: ['savings', 'deposit', 'fixed'], popularity: 95, description: 'Calculate returns on Fixed Deposits', pageUrl: '/calculators/fd' },
    { name: 'SIP Calculator', icon: ChartBarIcon, component: SIPCalculator, category: 'Core Tools', level: 'Beginner', tags: ['invest', 'sip', 'mutual-fund'], popularity: 98, description: 'Plan your systematic investment', pageUrl: '/calculators/sip' },
    { name: 'Budget Planner', icon: DocumentTextIcon, component: BudgetPlanner, category: 'Core Tools', level: 'Beginner', tags: ['budget', 'planning', 'expense'], popularity: 92, description: 'Manage your monthly budget', pageUrl: '/calculators/budget-planner' },
    { name: 'Tax Saver', icon: CalculatorIcon, component: TaxSaverCalc, category: 'Core Tools', level: 'Intermediate', tags: ['tax', 'savings', '80c'], popularity: 88, description: 'Calculate tax savings' },
    
    // Savings & Deposits (3)
    { name: 'RD Calculator', icon: CalculatorIcon, component: RDCalculator, category: 'Savings & Deposits', level: 'Beginner', tags: ['savings', 'recurring', 'deposit'], popularity: 75, description: 'Calculates maturity and total interest from Recurring Deposits', pageUrl: '/calculators/rd' },
    { name: 'PPF Calculator', icon: CalculatorIcon, component: PPFCalculator, category: 'Savings & Deposits', level: 'Intermediate', tags: ['savings', 'ppf', 'tax'], popularity: 82, description: 'Calculates maturity value of Public Provident Fund', pageUrl: '/calculators/ppf' },

    
    // Investment Tools (6)
    { name: 'Step-up SIP Calculator', icon: ChartBarIcon, component: StepUpSIPCalculator, category: 'Investment Tools', level: 'Intermediate', tags: ['invest', 'sip', 'step-up'], popularity: 78, description: 'Calculates returns if SIP amount increases yearly', pageUrl: '/calculators/step-up-sip' },
    { name: 'Lumpsum Investment Calculator', icon: CurrencyDollarIcon, component: LumpsumInvestmentCalculator, category: 'Investment Tools', level: 'Intermediate', tags: ['invest', 'lumpsum', 'cagr'], popularity: 80, description: 'Calculates one-time investment returns (with CAGR)', pageUrl: '/calculators/lumpsum' },
    { name: 'Goal-Based Investment Planner', icon: ChartBarIcon, component: GoalBasedInvestmentPlanner, category: 'Investment Tools', level: 'Advanced', tags: ['invest', 'goal', 'planning'], popularity: 72, description: 'Helps users invest monthly to reach future goals', pageUrl: '/calculators/goal-based-investment' },
    { name: 'Mutual Fund Return Tracker', icon: ChartBarIcon, component: MutualFundReturnTracker, category: 'Investment Tools', level: 'Intermediate', tags: ['invest', 'mutual-fund', 'returns'], popularity: 76, description: 'Estimates mutual fund returns over a period', pageUrl: '/calculators/mutual-fund-tracker' },
    { name: 'Gold Investment Calculator', icon: CurrencyDollarIcon, component: GoldInvestmentCalculator, category: 'Investment Tools', level: 'Intermediate', tags: ['invest', 'gold', 'sgb'], popularity: 68, description: 'SGB/digital gold returns over years', pageUrl: '/calculators/gold-investment' },
    { name: 'Rule of 72 Calculator', icon: CalculatorIcon, component: RuleOf72Calculator, category: 'Investment Tools', level: 'Beginner', tags: ['invest', 'doubling', 'rule72'], popularity: 84, description: 'Quick way to estimate investment doubling time', pageUrl: '/calculators/rule-of-72' },
    
    // Loan & Credit Tools (6)
    { name: 'Home Loan EMI Calculator', icon: CalculatorIcon, component: HomeLoanEMICalculator, category: 'Loan & Credit Tools', level: 'Intermediate', tags: ['loan', 'home', 'emi'], popularity: 90, description: 'Estimate EMI + interest breakup', pageUrl: '/calculators/home-loan-emi' },
    { name: 'Education Loan EMI Calculator', icon: CalculatorIcon, component: EducationLoanEMICalculator, category: 'Loan & Credit Tools', level: 'Intermediate', tags: ['loan', 'education', 'student'], popularity: 70, description: 'Helps students plan repayment', pageUrl: '/calculators/education-loan-emi' },
    { name: 'Car/Bike Loan EMI Calculator', icon: CalculatorIcon, component: CarBikeLoanEMICalculator, category: 'Loan & Credit Tools', level: 'Beginner', tags: ['loan', 'vehicle', 'emi'], popularity: 74, description: 'For vehicle buyers', pageUrl: '/calculators/car-loan-emi' },

    { name: 'Loan Eligibility Checker', icon: CalculatorIcon, component: LoanEligibilityChecker, category: 'Loan & Credit Tools', level: 'Intermediate', tags: ['loan', 'eligibility', 'income'], popularity: 77, description: 'Based on salary/income, debt ratio', pageUrl: '/calculators/loan-eligibility' },

    
    // Insurance Tools (4)
    { name: 'Term Life Insurance Estimator', icon: CalculatorIcon, component: TermLifeInsuranceEstimator, category: 'Insurance Tools', level: 'Intermediate', tags: ['insurance', 'life', 'family'], popularity: 85, description: 'Estimates ideal life cover based on income & age', pageUrl: '/calculators/term-life-insurance' },
    { name: 'Health Insurance Premium Estimator', icon: CalculatorIcon, component: HealthInsurancePremiumEstimator, category: 'Insurance Tools', level: 'Beginner', tags: ['insurance', 'health', 'family'], popularity: 88, description: 'Based on city, age, coverage amount', pageUrl: '/calculators/health-insurance' },


    
    // Retirement Tools (4)
    { name: 'NPS Return Calculator', icon: ChartBarIcon, component: NPSReturnCalculator, category: 'Retirement Tools', level: 'Advanced', tags: ['retirement', 'nps', 'pension'], popularity: 65, description: 'Calculates future value based on investment %', pageUrl: '/calculators/nps-return' },
    { name: 'Retirement Goal Planner', icon: ChartBarIcon, component: RetirementGoalPlanner, category: 'Retirement Tools', level: 'Advanced', tags: ['retirement', 'planning', 'goal'], popularity: 78, description: 'Helps users invest monthly for post-60 life', pageUrl: '/calculators/retirement-goal' },

    { name: 'EPF Maturity Calculator', icon: CalculatorIcon, component: EPFMaturityCalculator, category: 'Retirement Tools', level: 'Intermediate', tags: ['retirement', 'epf', 'provident'], popularity: 73, description: 'For salaried employees (estimate maturity at 58)', pageUrl: '/calculators/epf-maturity' },
    
    // Credit & Score Tools (2)
    { name: 'Credit Score Simulator', icon: ChartBarIcon, category: 'Credit & Score Tools', level: 'Advanced', tags: ['credit', 'score', 'simulation'], popularity: 67, description: 'Simulates how score changes based on EMI defaults, usage', pageUrl: '/calculators/credit-score-simulator' },
    { name: 'Debt Repayment Planner', icon: CalculatorIcon, component: DebtRepaymentPlanner, category: 'Credit & Score Tools', level: 'Advanced', tags: ['debt', 'credit', 'planning'], popularity: 72, description: 'Strategizes how to repay loans faster using snowball/avalanche method', pageUrl: '/calculators/debt-repayment' },
    
    // Tax & Salary Tools (3)
    { name: 'HRA Exemption Calculator', icon: CalculatorIcon, component: HRAExemptionCalculator, category: 'Tax & Salary Tools', level: 'Intermediate', tags: ['tax', 'hra', 'salary'], popularity: 80, description: 'Show HRA deduction based on salary & rent', pageUrl: '/calculators/hra-exemption' },


    
    // Personal Planning Tools (5)
    { name: 'Net Worth Tracker', icon: ChartBarIcon, component: NetWorthTracker, category: 'Personal Planning Tools', level: 'Beginner', tags: ['planning', 'wealth', 'assets'], popularity: 68, description: 'Calculates total assets – liabilities', pageUrl: '/calculators/net-worth-tracker' },
    { name: 'Emergency Fund Calculator', icon: CurrencyDollarIcon, component: EmergencyFundCalculator, category: 'Personal Planning Tools', level: 'Beginner', tags: ['emergency', 'savings', 'planning'], popularity: 85, description: 'Shows how much savings needed for 3/6 months', pageUrl: '/calculators/emergency-fund' },
    { name: '50/30/20 Rule Budgeter', icon: DocumentTextIcon, component: BudgetRuleCalculator, category: 'Personal Planning Tools', level: 'Beginner', tags: ['budget', 'rule', 'planning'], popularity: 79, description: 'Income-based auto-planner', pageUrl: '/calculators/budget-rule' },
    { name: 'First Salary Planner', icon: CalculatorIcon, component: FirstSalaryPlanner, category: 'Personal Planning Tools', level: 'Beginner', tags: ['salary', 'fresher', 'planning'], popularity: 83, description: 'For freshers to plan savings, tax, and spend smartly', pageUrl: '/calculators/first-salary-planner' },

    
    // Specialized Tools (4)

    { name: 'Rent vs Buy Home Calculator', icon: CalculatorIcon, component: RentVsBuyCalculator, category: 'Specialized Tools', level: 'Advanced', tags: ['property', 'rent', 'buy'], popularity: 75, description: 'Compares renting vs buying a house over years', pageUrl: '/calculators/rent-vs-buy' },
    { name: 'Real Returns Calculator', icon: ChartBarIcon, component: RealReturnsCalculator, category: 'Specialized Tools', level: 'Advanced', tags: ['returns', 'inflation', 'real'], popularity: 64, description: 'Adjusts returns for inflation impact', pageUrl: '/calculators/real-returns' }
  ];
  
  // Load data from localStorage and handle URL parameters on component mount
  useEffect(() => {
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
      setUserPoints(parseInt(savedPoints));
    }
    
    // Handle URL parameter to auto-open tool
    const urlParams = new URLSearchParams(window.location.search);
    const toolName = urlParams.get('tool');
    const fromChat = urlParams.get('from') === 'chat' || document.referrer.includes('/chatbot');
    const recommended = urlParams.get('recommended') === 'true';
    
    setIsFromChatbot(fromChat);
    
    // Handle recommended tools from home page
    if (recommended && savedRecent && JSON.parse(savedRecent).length > 0) {
      setSelectedCategory('Recent');
    }
    
    if (toolName) {
      console.log('Looking for tool:', toolName);
      const tool = allTools.find(t => t.name === toolName);
      console.log('Found tool:', tool);
      if (tool && !tool.locked) {
        setSelectedTool(tool);
        trackToolUsage(tool);
      } else {
        console.log('Tool not found or locked:', toolName);
      }
    }
  }, []);
  
  // Track tool usage and award points
  const trackToolUsage = (tool) => {
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
  const popularTools = allTools.sort((a, b) => b.popularity - a.popularity).slice(0, 6);
  
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
    <div 
      key={tool.name}
      className={`bg-gray-100 dark:bg-white/5 p-6 rounded-xl transition-all duration-300 group ${
        tool.locked ? 'opacity-75 cursor-not-allowed' : 'hover:bg-gray-200 dark:hover:bg-white/15 cursor-pointer'
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
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <tool.icon className={`h-6 w-6 transition-colors ${
            tool.locked ? 'text-gray-500 dark:text-white/50' : 'text-gray-900 dark:text-white group-hover:text-blue-400'
          }`} />
          <div>
            <div className="flex items-center gap-2">
              <h3 className={`text-lg font-semibold transition-colors ${
                tool.locked ? 'text-gray-500 dark:text-white/60' : 'text-gray-900 dark:text-white group-hover:text-blue-400'
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
          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(tool.name);
            }}
            className={`p-1 rounded-full transition-all duration-200 hover:scale-110 ${
              favoriteTools.has(tool.name)
                ? 'text-red-400 hover:text-red-300'
                : 'text-gray-500 dark:text-white/40 hover:text-red-400'
            }`}
            title={favoriteTools.has(tool.name) ? 'Remove from favorites' : 'Add to favorites'}
          >
            {favoriteTools.has(tool.name) ? (
              <HeartIconSolid className="h-4 w-4" />
            ) : (
              <HeartIcon className="h-4 w-4" />
            )}
          </button>
          {tool.popularity > 85 && !tool.locked && (
            <div className="flex items-center gap-1 text-orange-400">
              <FireIcon className="h-4 w-4" />
              <span className="text-xs font-medium">Popular</span>
            </div>
          )}
        </div>
      </div>
      <p className={`text-sm mb-3 ${
        tool.locked ? 'text-gray-500 dark:text-white/50' : 'text-gray-600 dark:text-white/70'
      }`}>{tool.description}</p>
      <div className="flex flex-wrap gap-1">
        {tool.tags.slice(0, 3).map(tag => (
          <span key={tag} className={`text-xs px-2 py-1 rounded-full ${
            tool.locked ? 'bg-gray-200 dark:bg-white/5 text-gray-500 dark:text-white/50' : 'bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/80'
          }`}>
            {tag}
          </span>
        ))}
      </div>
      {tool.locked && (
        <div className="mt-3 pt-3 border-t border-white/10">
          <p className="text-xs text-yellow-300/80">
            🔒 This tool is currently locked. Coming soon!
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="py-12 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Financial Tools & Calculators
            </h1>
            <p className="text-xl text-gray-600 dark:text-white/80 max-w-3xl mx-auto mb-6">
              Make informed financial decisions with our comprehensive suite of calculators and planning tools.
            </p>
            
            {/* Points Display */}
            {userPoints > 0 && (
              <div className="mb-6 flex justify-center">
                <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-xl inline-flex items-center gap-2 px-4 py-2 relative">
                  <span className="text-2xl">🏆</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold">{userPoints.toLocaleString()}</span>
                  <span className="text-gray-700 dark:text-white/70 text-sm">Learning Points</span>
                  {showPointsAnimation && (
                    <span className="text-green-400 font-bold absolute -top-2 right-0 animate-bounce">
                      +10
                    </span>
                  )}
                </div>
              </div>
            )}
            
            {/* Quick Access Cards */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <SparklesIcon className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-900 dark:text-white font-medium">Not sure where to begin?</span>
                </div>
                <button 
                  onClick={() => setSelectedLevel('Beginner')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                >
                  → Try Beginner Tools
                </button>
              </div>
              
              {recentToolsList.length > 0 && (
                <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg">🕒</span>
                    <span className="text-gray-900 dark:text-white font-medium">Recently Used ({recentToolsList.length})</span>
                  </div>
                  <button 
                    onClick={() => setSelectedCategory('Recent')}
                    className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium text-sm transition-colors"
                  >
                    → Continue Where You Left Off
                  </button>
                </div>
              )}
              
              {favoriteToolsList.length > 0 && (
                <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <HeartIconSolid className="h-5 w-5 text-red-400" />
                    <span className="text-gray-900 dark:text-white font-medium">Your Favorites ({favoriteToolsList.length})</span>
                  </div>
                  <button 
                    onClick={() => setSelectedCategory('Favorites')}
                    className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-medium text-sm transition-colors"
                  >
                    → View Favorite Tools
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search Bar */}
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-white/50" />
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {/* Level Filter */}
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {levels.map(level => (
                  <option key={level} value={level} className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                    {level === 'All' ? 'All Levels' : `${getLevelColor(level)} ${level}`}
                  </option>
                ))}
              </select>
              
              {/* Tag Filter */}
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {tags.map(tag => (
                  <option key={tag} value={tag} className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white capitalize">
                    {tag === 'All' ? 'All Tags' : tag}
                  </option>
                ))}
              </select>
              
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* All Tools Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {searchTerm || selectedLevel !== 'All' || selectedTag !== 'All' || selectedCategory !== 'All' 
                  ? `Filtered Tools (${filteredTools.length})` 
                  : 'All Tools'}
              </h2>
              <div className="flex items-center gap-2 text-gray-600 dark:text-white/60">
                <FunnelIcon className="h-5 w-5" />
                <span className="text-sm">{filteredTools.length} tools found</span>
              </div>
            </div>
            
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map(tool => renderToolCard(tool))}
              </div>
            ) : (
              <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl text-center py-12">
                <div className="text-gray-500 dark:text-white/50 mb-4">
                  <MagnifyingGlassIcon className="h-12 w-12 mx-auto mb-3" />
                  <p className="text-lg">No tools found</p>
                  <p className="text-sm">Try adjusting your search or filters</p>
                </div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedLevel('All');
                    setSelectedTag('All');
                    setSelectedCategory('All');
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
          
          {/* Selected Tool Modal/Panel */}
          {selectedTool && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-white/10 p-6 flex items-center justify-between">
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
                </div>
                <div className="p-6">
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
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
  );
}