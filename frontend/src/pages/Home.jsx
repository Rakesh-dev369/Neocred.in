import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/SEO/SEOHead';
import AnimatedBackground from '../components/AnimatedBackground';
import { CountingNumber, StatCard, ProgressBar } from '../components/ui';
import '../styles/animations.css';
import {
  ArrowRightIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  CalculatorIcon,
  ShieldCheckIcon,
  PlayIcon,
  CheckCircleIcon,
  StarIcon,
  UserGroupIcon,
  SparklesIcon,
  FireIcon,
  BanknotesIcon,
  CreditCardIcon,
  BuildingOfficeIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  TrophyIcon,
  AcademicCapIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { useAnalytics } from '../hooks/useAnalytics';

// Use the new CountingNumber component
const AnimatedCounter = ({ end, duration = 2, prefix = '₹', suffix = '' }) => {
  return (
    <CountingNumber 
      value={end}
      duration={duration}
      prefix={prefix}
      suffix={suffix}
      className="font-bold text-lg"
    />
  );
};

// Floating Calculator Cards (Refined)
const FloatingCalculatorCards = () => {
  const calculators = [
    { name: 'SIP', icon: '📈', amount: '₹50L', color: 'from-blue-500 to-blue-600' },
    { name: 'EMI', icon: '🏠', amount: '₹25K', color: 'from-green-500 to-green-600' },
    { name: 'Tax', icon: '💰', amount: '₹1.5L', color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {calculators.map((calc, index) => (
        <motion.div
          key={calc.name}
          className={`absolute bg-gradient-to-r ${calc.color} text-white p-3 rounded-xl shadow-lg opacity-80`}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ 
            opacity: [0, 0.8, 0.8, 0],
            y: [50, -10, -30, -60],
            scale: [0.8, 1, 1, 0.9]
          }}
          transition={{
            duration: 4,
            delay: index * 1.5,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }}
          style={{
            left: `${15 + index * 25}%`,
            top: '70%'
          }}
        >
          <div className="text-center">
            <div className="text-xl mb-1">{calc.icon}</div>
            <div className="text-xs font-semibold">{calc.name}</div>
            <div className="text-xs opacity-90">{calc.amount}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// AI Chat Simulation (Improved)
const AIChatSimulation = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    { type: 'user', text: 'I want to invest ₹5000 monthly' },
    { type: 'ai', text: 'Great! With ₹5000 SIP for 20 years at 12% returns, you\'ll build ₹49.95 lakhs!' },
    { type: 'user', text: 'Which mutual funds should I choose?' },
    { type: 'ai', text: 'I recommend diversified equity funds. Let me show you the best options...' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setIsTyping(false);
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3 min-h-[120px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMessage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className={`p-3 rounded-2xl max-w-xs ${
            messages[currentMessage].type === 'user'
              ? 'bg-white/20 ml-auto text-right'
              : 'bg-blue-500/30 mr-auto'
          }`}
        >
          <p className="text-sm text-white">{messages[currentMessage].text}</p>
        </motion.div>
      </AnimatePresence>
      
      {isTyping && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center space-x-1 p-3 bg-blue-500/30 rounded-2xl max-w-xs"
        >
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Investment Growth Chart (Refined)
const InvestmentGrowthChart = () => {
  return (
    <div className="relative h-24">
      <svg width="180" height="80" className="overflow-visible">
        <motion.path
          d="M10,60 Q50,45 90,30 Q130,15 170,10"
          stroke="#10B981"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />
        
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={i}
            cx={10 + i * 53}
            cy={60 - i * 12}
            r="3"
            fill="#10B981"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.3, 
              delay: 0.8 + i * 0.2
            }}
          />
        ))}
      </svg>
      
      <div className="absolute -bottom-4 left-0 text-xs text-green-300">Year 1</div>
      <div className="absolute -bottom-4 right-0 text-xs text-green-300">Year 20</div>
      <div className="absolute -top-2 right-0 text-sm font-semibold text-green-300">
        <AnimatedCounter end={4995000} duration={2} />
      </div>
    </div>
  );
};

// Goal selector component
const GoalSelector = ({ onGoalSelect, selectedGoal }) => {
  const goals = useMemo(() => [
    { id: 'invest', title: 'Start Investing', icon: ChartBarIcon, color: 'from-blue-500 to-purple-600' },
    { id: 'save', title: 'Save Money', icon: BanknotesIcon, color: 'from-green-500 to-emerald-600' },
    { id: 'loan', title: 'Get a Loan', icon: CreditCardIcon, color: 'from-orange-500 to-red-600' },
    { id: 'protect', title: 'Get Insurance', icon: ShieldCheckIcon, color: 'from-purple-500 to-pink-600' }
  ], []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {goals.map((goal, index) => (
        <motion.button
          key={goal.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onGoalSelect(goal.id)}
          className={`group p-6 bg-gradient-to-br ${goal.color} text-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${selectedGoal === goal.id ? 'ring-4 ring-white/50 scale-105' : ''}`}
        >
          <goal.icon className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
          <p className="font-semibold text-sm">{goal.title}</p>
        </motion.button>
      ))}
    </div>
  );
};

export default function Home() {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [toolsLoading, setToolsLoading] = useState(true);
  const [currentStory, setCurrentStory] = useState(0);
  const { trackFeatureUse } = useAnalytics();

  const handleGoalSelect = useCallback((goalId) => {
    if (selectedGoal === goalId) {
      // Close if same goal is clicked again
      setSelectedGoal(null);
      return;
    }
    
    setIsLoading(true);
    setSelectedGoal(goalId);
    // Simulate loading for better UX
    setTimeout(() => setIsLoading(false), 300);
  }, [selectedGoal]);

  // Simulate popular tools loading
  useEffect(() => {
    const timer = setTimeout(() => setToolsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  
  // Popular tools without fake user counts
  const popularTools = useMemo(() => [
    { name: 'SIP Calculator', icon: ChartBarIcon, href: '/calculators/sip', desc: 'Plan systematic investments' },
    { name: 'Home Loan EMI', icon: BuildingOfficeIcon, href: '/calculators/home-loan-emi', desc: 'Calculate monthly payments' },
    { name: 'Budget Planner', icon: CalculatorIcon, href: '/calculators/budget-planner', desc: '50/30/20 rule budgeting' },
    { name: 'FD Calculator', icon: CurrencyDollarIcon, href: '/calculators/fd', desc: 'Fixed deposit returns' },
    { name: 'Tax Saver', icon: CheckCircleIcon, href: '/calculators/hra-exemption', desc: '80C deduction optimizer' },
    { name: 'Emergency Fund', icon: ShieldCheckIcon, href: '/calculators/emergency-fund', desc: '6-month safety planning' }
  ], []);

  const successStories = useMemo(() => [
    { name: 'Priya S.', achievement: 'Built ₹5L emergency fund', time: '8 months', tool: 'Budget Planner' },
    { name: 'Rahul M.', achievement: 'Saved ₹85K in taxes', time: '1 year', tool: 'Tax Calculator' },
    { name: 'Anjali K.', achievement: 'Started ₹10K monthly SIP', time: '3 months', tool: 'SIP Calculator' }
  ], []);

  // Auto-rotate success stories
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [successStories.length]);

  const getRecommendationsForGoal = (goalId) => {
    const goalRecommendations = {
      invest: {
        tools: [
          { name: 'SIP Calculator', href: '/calculators/sip', type: 'tool', icon: ChartBarIcon, desc: 'Calculate monthly investment returns', popular: true },
          { name: 'Lumpsum Calculator', href: '/calculators/lumpsum', type: 'tool', icon: CurrencyDollarIcon, desc: 'One-time investment planning' },
          { name: 'Goal Planner', href: '/calculators/goal-based-investment', type: 'tool', icon: TrophyIcon, desc: 'Plan for specific financial goals' }
        ],
        learning: [
          { name: 'Investment Basics', href: '/learn#investment', type: 'learn', icon: BookOpenIcon, desc: 'Start your investment journey', progress: 0 },
          { name: 'Mutual Funds Guide', href: '/learn#mutual-funds', type: 'learn', icon: AcademicCapIcon, desc: 'Understanding mutual funds', progress: 0 }
        ],
        ai: [
          { name: 'Ask AI: Best SIP amount?', href: '/chatbot?q=What should be my monthly SIP amount?', type: 'ai', icon: ChatBubbleLeftRightIcon, desc: 'Get personalized SIP advice' },
          { name: 'Investment Strategy Chat', href: '/chatbot?q=Help me create investment strategy', type: 'ai', icon: LightBulbIcon, desc: 'Build your investment plan' }
        ]
      },
      save: {
        tools: [
          { name: 'Budget Planner', href: '/calculators/budget-planner', type: 'tool', icon: CalculatorIcon, desc: '50/30/20 rule budgeting', popular: true },
          { name: 'Emergency Fund', href: '/calculators/emergency-fund', type: 'tool', icon: ShieldCheckIcon, desc: '6-month safety planning' },
          { name: 'FD Calculator', href: '/calculators/fd', type: 'tool', icon: BanknotesIcon, desc: 'Fixed deposit returns' }
        ],
        learning: [
          { name: 'Budgeting Basics', href: '/learn#budgeting', type: 'learn', icon: BookOpenIcon, desc: 'Master money management', progress: 0 },
          { name: 'Saving Strategies', href: '/learn#saving', type: 'learn', icon: AcademicCapIcon, desc: 'Smart saving techniques', progress: 0 }
        ],
        ai: [
          { name: 'Ask AI: How to save more?', href: '/chatbot?q=How can I save more money monthly?', type: 'ai', icon: ChatBubbleLeftRightIcon, desc: 'Personalized saving tips' },
          { name: 'Budget Planning Chat', href: '/chatbot?q=Help me create a budget plan', type: 'ai', icon: LightBulbIcon, desc: 'Custom budget creation' }
        ]
      },
      loan: {
        tools: [
          { name: 'Home Loan EMI', href: '/calculators/home-loan-emi', type: 'tool', icon: BuildingOfficeIcon, desc: 'Calculate monthly payments', popular: true },
          { name: 'Car Loan EMI', href: '/calculators/car-loan-emi', type: 'tool', icon: CreditCardIcon, desc: 'Auto loan planning' },
          { name: 'Loan Eligibility', href: '/calculators/loan-eligibility', type: 'tool', icon: CheckCircleIcon, desc: 'Check loan approval chances' }
        ],
        learning: [
          { name: 'Loan Basics', href: '/learn#loans', type: 'learn', icon: BookOpenIcon, desc: 'Understanding loans & EMIs', progress: 0 },
          { name: 'Credit Score Guide', href: '/learn#credit-score', type: 'learn', icon: AcademicCapIcon, desc: 'Improve your credit score', progress: 0 }
        ],
        ai: [
          { name: 'Ask AI: Loan eligibility?', href: '/chatbot?q=Am I eligible for home loan?', type: 'ai', icon: ChatBubbleLeftRightIcon, desc: 'Check your loan eligibility' },
          { name: 'Loan Comparison Chat', href: '/chatbot?q=Compare different loan options', type: 'ai', icon: LightBulbIcon, desc: 'Compare loan options' }
        ]
      },
      protect: {
        tools: [
          { name: 'Term Insurance', href: '/calculators/term-life-insurance', type: 'tool', icon: ShieldCheckIcon, desc: 'Life insurance planning', popular: true },
          { name: 'Health Insurance', href: '/calculators/health-insurance', type: 'tool', icon: CheckCircleIcon, desc: 'Medical coverage calculator' },
          { name: 'Vehicle Insurance', href: '/calculators/vehicle-insurance', type: 'tool', icon: CreditCardIcon, desc: 'Auto insurance planning' }
        ],
        learning: [
          { name: 'Insurance Basics', href: '/learn#insurance', type: 'learn', icon: BookOpenIcon, desc: 'Protection fundamentals', progress: 0 },
          { name: 'Risk Management', href: '/learn#risk-management', type: 'learn', icon: AcademicCapIcon, desc: 'Manage financial risks', progress: 0 }
        ],
        ai: [
          { name: 'Ask AI: Insurance coverage?', href: '/chatbot?q=How much insurance do I need?', type: 'ai', icon: ChatBubbleLeftRightIcon, desc: 'Get coverage recommendations' },
          { name: 'Insurance Planning Chat', href: '/chatbot?q=Help me choose right insurance', type: 'ai', icon: LightBulbIcon, desc: 'Choose right insurance' }
        ]
      }
    };
    return goalRecommendations[goalId] || { tools: [], learning: [], ai: [] };
  };

  return (
    <>
      <SEOHead 
        title="NeoCred - India's #1 AI-Powered Financial Platform | 29+ Calculators & Tools"
        description="Master your finances with NeoCred's GPT-4 AI assistant, 29+ financial calculators, 8 learning pillars & real-time news. Free SIP, EMI, Budget, Tax planning tools. Start your financial journey today!"
        keywords="NeoCred, financial calculator India, SIP calculator, EMI calculator, budget planner, tax calculator, investment planning, AI financial advisor, GPT-4 fintech, mutual fund calculator, home loan EMI, personal finance India, financial literacy, wealth building, retirement planning, insurance calculator, FD calculator, PPF calculator, financial news India, RBI updates, stock market news, financial education, money management, Indian fintech, free financial tools"
        canonicalUrl="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "NeoCred",
          "alternateName": "NeoCred Financial Platform",
          "description": "India's leading AI-powered financial platform with 29+ calculators, GPT-4 assistant, learning resources and financial news",
          "url": "https://neocred.in",
          "logo": "https://neocred.in/logo.png",
          "sameAs": [
            "https://twitter.com/neocred_in",
            "https://linkedin.com/company/neocred",
            "https://instagram.com/neocred.in",
            "https://facebook.com/neocred.in",
            "https://youtube.com/@neocred"
          ],
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://neocred.in/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          "mainEntity": {
            "@type": "SoftwareApplication",
            "name": "NeoCred Financial Platform",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            },

            "featureList": [
              "29+ Financial Calculators",
              "AI-Powered Financial Assistant",
              "8 Learning Pillars",
              "Real-time Financial News",
              "SIP Calculator",
              "EMI Calculator",
              "Budget Planner",
              "Tax Calculator",
              "Investment Planning",
              "Insurance Calculator"
            ]
          },
          "provider": {
            "@type": "Organization",
            "name": "NeoCred",
            "url": "https://neocred.in",
            "logo": "https://neocred.in/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9876543210",
              "contactType": "customer service",
              "email": "support@neocred.in",
              "availableLanguage": ["English", "Hindi"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN",
              "addressRegion": "India"
            }
          },
          "audience": {
            "@type": "Audience",
            "audienceType": "Indian investors, financial planners, students",
            "geographicArea": {
              "@type": "Country",
              "name": "India"
            }
          },
          "inLanguage": "en-IN",
          "isAccessibleForFree": true,
          "usageInfo": "https://neocred.in/terms",
          "privacyPolicy": "https://neocred.in/privacy"
        }}
      />
      
      <div className="min-h-screen relative overflow-hidden">
        {/* AI Crawler & SEO Enhancement */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is NeoCred?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NeoCred is India's leading AI-powered financial platform offering 29+ calculators, GPT-4 financial assistant, comprehensive learning resources, and real-time financial news to help Indians build wealth and achieve financial freedom."
                }
              },
              {
                "@type": "Question",
                "name": "Is NeoCred free to use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, NeoCred is completely free to use. All 29+ financial calculators, AI assistant, learning resources, and news are available without any registration or subscription fees."
                }
              },
              {
                "@type": "Question",
                "name": "What calculators does NeoCred offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NeoCred offers 29+ financial calculators including SIP Calculator, EMI Calculator, Budget Planner, Tax Calculator, FD Calculator, PPF Calculator, Insurance Calculator, Goal Planning, Emergency Fund Calculator, and many more for comprehensive financial planning."
                }
              },
              {
                "@type": "Question",
                "name": "How does NeoCred's AI assistant work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NeoCred's AI assistant is powered by GPT-4 technology and provides personalized financial advice, tool recommendations, and step-by-step guidance for investment planning, budgeting, tax saving, and wealth building strategies tailored for Indian users."
                }
              }
            ]
          })}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://neocred.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Financial Tools",
                "item": "https://neocred.in/tools"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "AI Assistant",
                "item": "https://neocred.in/chatbot"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Learn",
                "item": "https://neocred.in/learn"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "News",
                "item": "https://neocred.in/news"
              }
            ]
          })}
        </script>
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "NeoCred Financial Planning Services",
            "description": "Comprehensive financial planning platform with AI-powered tools and calculators for Indian investors",
            "provider": {
              "@type": "Organization",
              "name": "NeoCred",
              "url": "https://neocred.in"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Financial Tools & Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SIP Calculator",
                    "description": "Calculate systematic investment plan returns"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "EMI Calculator",
                    "description": "Calculate loan EMI and interest"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Financial Assistant",
                    "description": "GPT-4 powered personalized financial advice"
                  }
                }
              ]
            },
            "serviceType": "Financial Planning",
            "category": "FinTech"
          })}
        </script>
        <AnimatedBackground />
        
        {/* Content Container */}
        <div className="relative z-10">
        
        {/* Hero Section - Problem Focused */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: Problem & Solution */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center lg:text-left"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                    <SparklesIcon className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">AI-Powered Platform</span>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" itemProp="headline">
                  Stop Guessing Your
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Financial Future
                  </span>
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed" itemProp="description">
                  Get personalized financial guidance with AI-powered calculators, 
                  expert insights, and step-by-step planning tools designed for Indians.
                </p>
                
                {/* Hidden SEO Content for AI Crawlers */}
                <div className="sr-only" itemScope itemType="https://schema.org/WebSite">
                  <meta itemProp="name" content="NeoCred - AI-Powered Financial Platform" />
                  <meta itemProp="description" content="India's leading financial platform with 29+ calculators, GPT-4 AI assistant, learning resources, and real-time news for wealth building and financial planning." />
                  <meta itemProp="url" content="https://neocred.in" />
                  <div itemProp="potentialAction" itemScope itemType="https://schema.org/SearchAction">
                    <meta itemProp="target" content="https://neocred.in/search?q={search_term}" />
                    <meta itemProp="query-input" content="required name=search_term" />
                  </div>
                  <div itemProp="mainEntity" itemScope itemType="https://schema.org/SoftwareApplication">
                    <meta itemProp="name" content="NeoCred Financial Calculators" />
                    <meta itemProp="applicationCategory" content="Finance" />
                    <meta itemProp="operatingSystem" content="Web" />
                    <meta itemProp="price" content="0" />
                    <meta itemProp="priceCurrency" content="INR" />
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/chatbot"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <PlayIcon className="w-5 h-5 mr-2" />
                    Try AI Assistant Free
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/tools"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    Explore 29+ Tools
                  </Link>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-blue-200">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 mr-1" />
                    <span>100% Free</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 mr-1" />
                    <span>No Registration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 mr-1" />
                    <span>Instant Results</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Right: Enhanced Interactive Demo */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                {/* Floating Calculator Cards */}
                <FloatingCalculatorCards />
                
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 relative overflow-hidden">
                  {/* Browser Header with Status */}
                  <div className="flex items-center mb-6">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="ml-4 text-sm text-blue-200">NeoCred AI Assistant</span>
                    <motion.div
                      className="ml-auto w-2 h-2 bg-green-400 rounded-full"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  
                  {/* AI Chat Simulation */}
                  <AIChatSimulation />
                  
                  {/* Investment Growth Visualization */}
                  <motion.div 
                    className="mt-6 p-4 bg-white/5 rounded-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-blue-200">SIP Growth Projection</span>
                      <motion.span 
                        className="text-xs text-green-300 font-semibold"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        +12% CAGR
                      </motion.span>
                    </div>
                    <InvestmentGrowthChart />
                  </motion.div>
                  
                  {/* Enhanced CTA Button */}
                  <Link
                    to="/chatbot"
                    className="group block w-full mt-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-xl text-center hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      Start Your Conversation
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </Link>
                </div>
                
                {/* Floating Stats Badges */}
                <motion.div
                  className="absolute -top-3 -right-3 bg-green-500 text-white p-2 rounded-lg shadow-lg text-center min-w-[60px]"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="text-sm font-bold">
                    <AnimatedCounter end={29} duration={2} prefix="" suffix="+" />
                  </div>
                  <div className="text-xs opacity-90">Tools</div>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-3 -left-3 bg-purple-500 text-white p-2 rounded-lg shadow-lg text-center min-w-[50px]"
                  animate={{ 
                    y: [0, 8, 0],
                    rotate: [0, -1, 1, 0]
                  }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                >
                  <div className="text-sm font-bold">AI</div>
                  <div className="text-xs opacity-90">GPT-4</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Goal Selector */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What's Your Financial Goal?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Choose your goal and get personalized tool recommendations
              </p>
            </motion.div>
            
            <GoalSelector onGoalSelect={handleGoalSelect} selectedGoal={selectedGoal} />
            
            {/* Goal-specific tools */}
            {selectedGoal && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <span className="ml-3 text-gray-600 dark:text-gray-400">Loading recommendations...</span>
                  </div>
                ) : (
                <>                
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Personalized Recommendations
                  </h3>
                  
                  {/* Tools Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <CalculatorIcon className="w-5 h-5 text-blue-600 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Calculators & Tools</h4>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      {getRecommendationsForGoal(selectedGoal).tools.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="group p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 relative"
                        >
                          {item.popular && (
                            <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                              Popular
                            </div>
                          )}
                          <div className="flex items-center mb-3">
                            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg mr-3">
                              <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors text-sm">
                              {item.name}
                            </h5>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{item.desc}</p>
                          <div className="flex gap-2">
                            <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Quick Start</span>
                            <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all ml-auto" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Learning Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <PlayIcon className="w-5 h-5 text-green-600 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Learn & Understand</h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {getRecommendationsForGoal(selectedGoal).learning.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="group p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-green-300"
                        >
                          <div className="flex items-center mb-3">
                            <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg mr-3">
                              <item.icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                            </div>
                            <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-green-600 transition-colors text-sm">
                              {item.name}
                            </h5>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{item.desc}</p>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mb-3">
                            <div className="bg-green-600 h-1 rounded-full" style={{width: `${item.progress}%`}}></div>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">Start Learning</span>
                            <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all ml-auto" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* AI Assistant Section */}
                  <div>
                    <div className="flex items-center mb-4">
                      <SparklesIcon className="w-5 h-5 text-purple-600 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Ask AI Assistant</h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {getRecommendationsForGoal(selectedGoal).ai.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="group p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-300"
                        >
                          <div className="flex items-center mb-3">
                            <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg mr-3">
                              <item.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors text-sm">
                              {item.name}
                            </h5>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{item.desc}</p>
                          <div className="flex gap-2">
                            <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">Ask AI</span>
                            <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all ml-auto" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
                )}
              </motion.div>
            )}
          </div>
        </section>

        {/* NeoCred Platform Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full mb-4">
                <FireIcon className="w-4 h-4 mr-2" />
                Complete Financial Platform
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Everything You Need for Financial Success
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Tools, AI Assistant, Learning & News - All in one platform
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Financial Tools */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  to="/tools"
                  className="group block bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 h-full"
                >
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <CalculatorIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                    29+ Calculators
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    SIP, EMI, Budget, Tax, Insurance & Investment planning tools
                  </p>
                  
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                    <span className="text-sm">Explore Tools</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>

              {/* AI Assistant */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  to="/chatbot"
                  className="group block bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 h-full"
                >
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <SparklesIcon className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 transition-colors">
                    AI FinBot
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    GPT-4 powered financial advisor for personalized guidance
                  </p>
                  
                  <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium">
                    <span className="text-sm">Chat with AI</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>

              {/* Learning System */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/learn"
                  className="group block bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 h-full"
                >
                  <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <AcademicCapIcon className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 transition-colors">
                    8 Learning Pillars
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Complete financial literacy from basics to advanced concepts
                  </p>
                  
                  <div className="flex items-center text-green-600 dark:text-green-400 font-medium">
                    <span className="text-sm">Start Learning</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>

              {/* Financial News */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/news"
                  className="group block bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 h-full"
                >
                  <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <FireIcon className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 transition-colors">
                    Financial News
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Latest market updates, RBI policies & financial insights
                  </p>
                  
                  <div className="flex items-center text-orange-600 dark:text-orange-400 font-medium">
                    <span className="text-sm">Read News</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            </div>
            
            {/* Popular Tools Showcase */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Most Popular Tools This Week
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {toolsLoading ? (
                  // Loading skeletons
                  [...Array(6)].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-9 h-9 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
                      </div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 animate-pulse" />
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mb-3 w-3/4 animate-pulse" />
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse" />
                    </motion.div>
                  ))
                ) : (
                  popularTools.slice(0, 6).map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={tool.href}
                        className="group block bg-white dark:bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex items-center mb-3">
                          <div className="p-2 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                            <tool.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                        </div>
                        
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors text-sm">
                          {tool.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">
                          {tool.desc}
                        </p>
                        
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                          <span className="text-xs">Try Now</span>
                          <ArrowRightIcon className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Carousel */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Real Success Stories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                See how Indians are building wealth with NeoCred
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStory}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto"
                  >
                    <div className="flex items-center mb-6">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                          >
                            <StarIconSolid className="w-5 h-5" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 dark:text-gray-300 mb-6 italic text-lg leading-relaxed">
                      "{successStories[currentStory].achievement} in just {successStories[currentStory].time} using NeoCred's {successStories[currentStory].tool}. The step-by-step guidance made it so easy!"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {successStories[currentStory].name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white text-lg">{successStories[currentStory].name}</div>
                        <div className="text-gray-500 dark:text-gray-400">NeoCred User</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStory(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentStory
                        ? 'bg-blue-600 scale-125'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Master Your Money?
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Transform your financial life with NeoCred's comprehensive AI-powered platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  to="/chatbot"
                  className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <SparklesIcon className="w-5 h-5 mr-2" />
                  Start with AI Assistant
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/learn"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  <PlayIcon className="w-5 h-5 mr-2" />
                  Start Learning
                </Link>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-blue-200">
                <div className="flex items-center">
                  <CalculatorIcon className="w-4 h-4 mr-2" />
                  <span>29+ Tools</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 mr-2" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center">
                  <SparklesIcon className="w-4 h-4 mr-2" />
                  <span>AI Powered</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        </div>
      </div>
    </>
  );
}