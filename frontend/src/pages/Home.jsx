import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEO/SEOHead';
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
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

// Goal selector component
const GoalSelector = ({ onGoalSelect }) => {
  const goals = [
    { id: 'invest', title: 'Start Investing', icon: ChartBarIcon, color: 'from-blue-500 to-purple-600' },
    { id: 'save', title: 'Save Money', icon: BanknotesIcon, color: 'from-green-500 to-emerald-600' },
    { id: 'loan', title: 'Get a Loan', icon: CreditCardIcon, color: 'from-orange-500 to-red-600' },
    { id: 'protect', title: 'Get Insurance', icon: ShieldCheckIcon, color: 'from-purple-500 to-pink-600' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {goals.map((goal, index) => (
        <motion.button
          key={goal.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onGoalSelect(goal.id)}
          className={`group p-6 bg-gradient-to-br ${goal.color} text-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
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

  // Popular tools based on actual usage
  const popularTools = [
    { name: 'SIP Calculator', icon: ChartBarIcon, href: '/calculators/sip', users: '25K+', desc: 'Plan systematic investments' },
    { name: 'Home Loan EMI', icon: BuildingOfficeIcon, href: '/calculators/home-loan-emi', users: '18K+', desc: 'Calculate monthly payments' },
    { name: 'Budget Planner', icon: CalculatorIcon, href: '/calculators/budget-planner', users: '22K+', desc: '50/30/20 rule budgeting' },
    { name: 'FD Calculator', icon: CurrencyDollarIcon, href: '/calculators/fd', users: '15K+', desc: 'Fixed deposit returns' },
    { name: 'Tax Saver', icon: CheckCircleIcon, href: '/calculators/hra-exemption', users: '12K+', desc: '80C deduction optimizer' },
    { name: 'Emergency Fund', icon: ShieldCheckIcon, href: '/calculators/emergency-fund', users: '10K+', desc: '6-month safety planning' }
  ];

  const successStories = [
    { name: 'Priya S.', achievement: 'Built ₹5L emergency fund', time: '8 months', tool: 'Budget Planner' },
    { name: 'Rahul M.', achievement: 'Saved ₹85K in taxes', time: '1 year', tool: 'Tax Calculator' },
    { name: 'Anjali K.', achievement: 'Started ₹10K monthly SIP', time: '3 months', tool: 'SIP Calculator' }
  ];

  const getToolsForGoal = (goalId) => {
    const goalTools = {
      invest: [
        { name: 'SIP Calculator', href: '/calculators/sip' },
        { name: 'Lumpsum Calculator', href: '/calculators/lumpsum' },
        { name: 'Goal Planner', href: '/calculators/goal-based-investment' }
      ],
      save: [
        { name: 'Budget Planner', href: '/calculators/budget-planner' },
        { name: 'Emergency Fund', href: '/calculators/emergency-fund' },
        { name: 'FD Calculator', href: '/calculators/fd' }
      ],
      loan: [
        { name: 'Home Loan EMI', href: '/calculators/home-loan-emi' },
        { name: 'Car Loan EMI', href: '/calculators/car-loan-emi' },
        { name: 'Loan Eligibility', href: '/calculators/loan-eligibility' }
      ],
      protect: [
        { name: 'Term Insurance', href: '/calculators/term-life-insurance' },
        { name: 'Health Insurance', href: '/calculators/health-insurance' },
        { name: 'Vehicle Insurance', href: '/calculators/vehicle-insurance' }
      ]
    };
    return goalTools[goalId] || [];
  };

  return (
    <>
      <SEOHead 
        title="NeoCred - India's #1 AI-Powered Financial Platform | 29+ Calculators"
        description="Join 50,000+ Indians building wealth with NeoCred's AI assistant, 29+ calculators, and expert guidance. Start your financial journey today!"
        keywords="financial planning India, SIP calculator, home loan EMI, budget planner, tax saver, investment tools, AI financial advisor, NeoCred"
        canonicalUrl="/"
      />
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Advanced Background System */}
        <div className="fixed inset-0 z-0">
          {/* Primary Gradient Base */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950"></div>
          
          {/* Animated Mesh Gradients */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/10 via-transparent to-purple-400/10 animate-pulse" style={{animationDuration: '8s'}}></div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-emerald-400/8 via-transparent to-cyan-400/8 animate-pulse" style={{animationDuration: '12s', animationDelay: '2s'}}></div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-purple-400/6 via-transparent to-pink-400/6 animate-pulse" style={{animationDuration: '10s', animationDelay: '4s'}}></div>
          </div>
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-300/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-emerald-200/15 to-teal-300/15 dark:from-emerald-600/8 dark:to-teal-600/8 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-200/12 to-blue-300/12 dark:from-indigo-600/6 dark:to-blue-600/6 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-purple-200/18 to-pink-300/18 dark:from-purple-600/9 dark:to-pink-600/9 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 right-10 w-88 h-88 bg-gradient-to-br from-cyan-200/14 to-blue-300/14 dark:from-cyan-600/7 dark:to-blue-600/7 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59 130 246) 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}></div>
          
          {/* Dynamic Light Rays */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200/20 to-transparent dark:via-blue-600/10 transform rotate-12 animate-pulse" style={{animationDuration: '6s'}}></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-200/15 to-transparent dark:via-purple-600/8 transform -rotate-12 animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
            <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-200/12 to-transparent dark:via-emerald-600/6 transform rotate-6 animate-pulse" style={{animationDuration: '10s', animationDelay: '4s'}}></div>
          </div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {Array.from({length: 20}).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/30 dark:bg-blue-300/20 rounded-full animate-float"
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
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent dark:via-gray-800/5" style={{
            animation: 'mesh-move 20s ease-in-out infinite'
          }}></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10">
        
        {/* Hero Section - Problem Focused */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: Problem & Solution */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center lg:text-left"
              >
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                  <SparklesIcon className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Trusted by 50,000+ Indians</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Stop Guessing Your
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Financial Future
                  </span>
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Get personalized financial guidance with AI-powered calculators, 
                  expert insights, and step-by-step planning tools designed for Indians.
                </p>
                
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
              
              {/* Right: Interactive Demo */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="ml-4 text-sm text-blue-200">NeoCred AI Assistant</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/20 rounded-2xl p-4">
                      <p className="text-sm text-blue-100 mb-2">"I want to start investing ₹5000 monthly"</p>
                    </div>
                    <div className="bg-blue-500/30 rounded-2xl p-4">
                      <p className="text-sm text-white">Great! With ₹5000 monthly SIP for 20 years at 12% returns, you'll build ₹49.95 lakhs! Let me show you the best mutual funds...</p>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-1 bg-white/20 rounded-lg text-xs">SIP Calculator</button>
                        <button className="px-3 py-1 bg-white/20 rounded-lg text-xs">Fund Selector</button>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to="/chatbot"
                    className="block w-full mt-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold rounded-xl text-center hover:from-yellow-300 hover:to-orange-300 transition-all duration-300"
                  >
                    Start Your Conversation
                  </Link>
                </div>
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
            
            <GoalSelector onGoalSelect={setSelectedGoal} />
            
            {/* Goal-specific tools */}
            {selectedGoal && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Recommended Tools for You
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {getToolsForGoal(selectedGoal).map((tool, index) => (
                    <Link
                      key={tool.name}
                      to={tool.href}
                      className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {tool.name}
                      </h4>
                      <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all mt-2" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Popular Tools */}
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
                Most Popular This Week
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Top Financial Tools
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Join thousands using these calculators daily
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={tool.href}
                    className="group block bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl group-hover:scale-110 transition-transform">
                        <tool.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{tool.users}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">users</div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {tool.desc}
                    </p>
                    
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                      <span className="text-sm">Try Calculator</span>
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
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
            
            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <StarIconSolid key={i} className="w-4 h-4" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "{story.achievement} in just {story.time} using NeoCred's {story.tool}. The step-by-step guidance made it so easy!"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{story.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">NeoCred User</div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
                Join 50,000+ Indians who've transformed their financial lives with NeoCred's AI-powered platform.
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
                  <UserGroupIcon className="w-4 h-4 mr-2" />
                  <span>50,000+ Users</span>
                </div>
                <div className="flex items-center">
                  <CalculatorIcon className="w-4 h-4 mr-2" />
                  <span>29+ Tools</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 mr-2" />
                  <span>100% Free</span>
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