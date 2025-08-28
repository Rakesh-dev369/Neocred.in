import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CheckCircleIcon, PlayIcon, CalculatorIcon, TrophyIcon, ChatBubbleLeftRightIcon, BookOpenIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function PersonalFinance() {
  const [activeLevel, setActiveLevel] = useState('beginner');
  const [completedTopics, setCompletedTopics] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizScore, setQuizScore] = useState(null);
  const [currentQuiz, setCurrentQuiz] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const learningLevels = {
    beginner: {
      title: 'Beginner Level',
      description: 'Start your financial journey with basics',
      topics: [
        {
          id: 'budgeting-101',
          title: 'Budgeting 101',
          description: 'Learn to track income and expenses',
          duration: '10 min read',
          tools: ['Budget Planner', '50/30/20 Rule Calculator']
        },
        {
          id: 'savings-accounts',
          title: 'Savings Accounts 2025',
          description: 'Best savings accounts with 7-8% interest',
          duration: '8 min read',
          tools: ['Savings Calculator']
        },
        {
          id: 'emergency-fund',
          title: 'Emergency Fund Basics',
          description: 'Build 6 months expense safety net',
          duration: '12 min read',
          tools: ['Emergency Fund Calculator']
        }
      ]
    },
    intermediate: {
      title: 'Intermediate Level',
      description: 'Manage debt and build credit',
      topics: [
        {
          id: 'debt-management',
          title: 'Debt Management Strategy',
          description: 'Snowball vs Avalanche methods',
          duration: '15 min read',
          tools: ['Debt Repayment Planner']
        },
        {
          id: 'credit-score',
          title: 'Credit Score Mastery',
          description: 'Build 750+ CIBIL score in 2025',
          duration: '12 min read',
          tools: ['Credit Score Simulator']
        },
        {
          id: 'first-investments',
          title: 'First Investments (FD, RD, PPF)',
          description: 'Safe investment options for beginners',
          duration: '18 min read',
          tools: ['FD Calculator', 'RD Calculator', 'PPF Calculator']
        }
      ]
    },
    advanced: {
      title: 'Advanced Level',
      description: 'Wealth building and optimization',
      topics: [
        {
          id: 'retirement-planning',
          title: 'Retirement Planning 2025',
          description: 'NPS, EPF, and retirement corpus building',
          duration: '20 min read',
          tools: ['Retirement Goal Planner', 'NPS Calculator']
        },
        {
          id: 'wealth-building',
          title: 'Wealth Building Strategies',
          description: 'SIP, asset allocation, and compounding',
          duration: '25 min read',
          tools: ['SIP Calculator', 'Goal Based Investment']
        },
        {
          id: 'tax-optimization',
          title: 'Tax-efficient Saving (2025)',
          description: '80C, ELSS, and tax planning strategies',
          duration: '22 min read',
          tools: ['HRA Exemption', 'Form 16 Breakdown']
        }
      ]
    }
  };

  const quizQuestions = [
    {
      question: 'What percentage of income should go to needs in the 50/30/20 rule?',
      options: ['30%', '50%', '20%', '40%'],
      correct: 1
    },
    {
      question: 'How many months of expenses should an emergency fund cover?',
      options: ['1-2 months', '3-6 months', '12 months', '24 months'],
      correct: 1
    },
    {
      question: 'What is a good CIBIL score in India?',
      options: ['600+', '650+', '700+', '750+'],
      correct: 3
    }
  ];

  const caseStudies = [
    {
      name: 'Ravi - ₹30k Salary',
      age: '25, Software Developer',
      challenge: 'Managing expenses and starting investments',
      solution: '50/30/20 rule + ₹2k SIP + ₹3k emergency fund',
      result: '₹50k saved in first year, started investment journey'
    },
    {
      name: 'Priya - ₹45k Salary',
      age: '28, Marketing Manager',
      challenge: 'Credit card debt and no savings',
      solution: 'Debt snowball method + automated savings',
      result: 'Cleared ₹80k debt in 18 months, built ₹1L emergency fund'
    }
  ];

  const commonMistakes = [
    {
      mistake: 'Living on Credit Cards',
      impact: 'High interest (36-48% annually)',
      solution: 'Use debit card, pay full amount monthly'
    },
    {
      mistake: 'No Emergency Fund',
      impact: 'Forced to take loans during crisis',
      solution: 'Build 6 months expenses in savings account'
    },
    {
      mistake: 'Ignoring Insurance',
      impact: 'Medical bills can wipe out savings',
      solution: 'Health insurance + term life insurance'
    }
  ];

  const starterChecklist = [
    { item: 'Open high-interest savings account (7-8%)', done: false },
    { item: 'Set up automated budget tracking', done: false },
    { item: 'Build ₹10k emergency fund first', done: false },
    { item: 'Get health insurance coverage', done: false },
    { item: 'Start ₹1000 monthly SIP', done: false },
    { item: 'Check and improve CIBIL score', done: false },
    { item: 'Plan for tax saving (80C)', done: false }
  ];

  const markTopicComplete = (topicId) => {
    if (!completedTopics.includes(topicId)) {
      setCompletedTopics([...completedTopics, topicId]);
    }
  };

  const calculateProgress = () => {
    const totalTopics = Object.values(learningLevels).reduce((acc, level) => acc + level.topics.length, 0);
    return Math.round((completedTopics.length / totalTopics) * 100);
  };

  const handleQuizAnswer = (answerIndex) => {
    if (answerIndex === quizQuestions[currentQuiz].correct) {
      setQuizScore((prev) => (prev || 0) + 1);
    }
    
    if (currentQuiz < quizQuestions.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    } else {
      const finalScore = quizScore + (answerIndex === quizQuestions[currentQuiz].correct ? 1 : 0);
      alert(`Quiz completed! Score: ${finalScore}/${quizQuestions.length}`);
      setShowQuiz(false);
      setCurrentQuiz(0);
      setQuizScore(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-blue-200 dark:border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Learn
            </Link>
            <div className="flex items-center space-x-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg px-3 py-1">
                <span className="text-sm text-gray-600 dark:text-gray-300">Progress: {calculateProgress()}%</span>
              </div>
              {completedTopics.length >= 3 && (
                <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/20 rounded-lg px-3 py-1">
                  <TrophyIcon className="h-4 w-4 text-yellow-600 mr-1" />
                  <span className="text-sm text-yellow-800 dark:text-yellow-200">Budget Master</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">🏦</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Personal Finance Mastery</h1>
              <p className="text-gray-600 dark:text-gray-300">Master your money management with 2025's latest strategies</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Learning Levels Navigation */}
        <div className="flex flex-wrap gap-4 mb-8">
          {Object.entries(learningLevels).map(([key, level]) => (
            <button
              key={key}
              onClick={() => setActiveLevel(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeLevel === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
              }`}
            >
              {level.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Level Topics */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{learningLevels[activeLevel].title}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{learningLevels[activeLevel].description}</p>
                </div>
                <button
                  onClick={() => setShowQuiz(true)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Take Quiz
                </button>
              </div>
              
              <div className="space-y-4">
                {learningLevels[activeLevel].topics.map((topic) => (
                  <div key={topic.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{topic.title}</h3>
                          {completedTopics.includes(topic.id) && (
                            <CheckCircleIcon className="h-5 w-5 text-green-600" />
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">{topic.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <BookOpenIcon className="h-4 w-4" />
                            {topic.duration}
                          </span>
                          <span>Tools: {topic.tools.join(', ')}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 ml-4">
                        <button
                          onClick={() => markTopicComplete(topic.id)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                        >
                          <PlayIcon className="h-4 w-4" />
                          Start Learning
                        </button>
                        <Link
                          to="/tools"
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2 text-center"
                        >
                          <CalculatorIcon className="h-4 w-4" />
                          Use Tools
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Case Studies */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Real Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudies.map((study, index) => (
                  <div key={index} className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">{study.name}</h3>
                    <p className="text-sm text-green-700 dark:text-green-300 mb-2">{study.age}</p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Challenge:</strong> {study.challenge}</p>
                      <p><strong>Solution:</strong> {study.solution}</p>
                      <p><strong>Result:</strong> {study.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Avoid These Common Mistakes</h2>
              <div className="space-y-4">
                {commonMistakes.map((mistake, index) => (
                  <div key={index} className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                    <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ {mistake.mistake}</h3>
                    <p className="text-red-700 dark:text-red-300 text-sm mb-2"><strong>Impact:</strong> {mistake.impact}</p>
                    <p className="text-green-700 dark:text-green-300 text-sm"><strong>Solution:</strong> {mistake.solution}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Personal Finance Starter Checklist */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Personal Finance Starter Checklist</h3>
              <div className="space-y-3">
                {starterChecklist.map((item, index) => (
                  <label key={index} className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item.item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quick Tools */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Tools</h3>
              <div className="space-y-3">
                <Link to="/calculators/budget-planner" className="block bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  <div className="flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-blue-900 dark:text-blue-100">Budget Planner</span>
                  </div>
                </Link>
                <Link to="/calculators/emergency-fund" className="block bg-green-50 dark:bg-green-900/20 rounded-lg p-3 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                  <div className="flex items-center gap-2">
                    <CalculatorIcon className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-900 dark:text-green-100">Emergency Fund Calculator</span>
                  </div>
                </Link>
                <Link to="/calculators/budget-rule" className="block bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                  <div className="flex items-center gap-2">
                    <CalculatorIcon className="h-5 w-5 text-purple-600" />
                    <span className="font-medium text-purple-900 dark:text-purple-100">50/30/20 Rule Calculator</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* AI FinBot */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                Ask FinBot
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Get personalized financial advice based on your situation
              </p>
              <div className="space-y-2 text-sm">
                <p>• "How much should I save if my salary is ₹40,000?"</p>
                <p>• "What's the right emergency fund size for me?"</p>
                <p>• "Should I pay off debt or start investing?"</p>
              </div>
              <Link
                to="/chatbot"
                className="mt-4 block bg-white text-blue-600 text-center py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Chat with FinBot
              </Link>
            </div>

            {/* 2025 Updates */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">2025 Updates</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
                  <p className="text-yellow-800 dark:text-yellow-200">
                    <strong>Savings Account:</strong> Best rates now 7-8% (SBI, HDFC, ICICI)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <p className="text-green-800 dark:text-green-200">
                    <strong>Tax Limit:</strong> 80C limit remains ₹1.5L, new regime popular
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                  <p className="text-blue-800 dark:text-blue-200">
                    <strong>Digital Banking:</strong> UPI limits increased, instant loans available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Modal */}
        {showQuiz && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Question {currentQuiz + 1} of {quizQuestions.length}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {quizQuestions[currentQuiz].question}
              </p>
              <div className="space-y-2">
                {quizQuestions[currentQuiz].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuizAnswer(index)}
                    className="w-full text-left p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowQuiz(false)}
                className="mt-4 text-gray-500 hover:text-gray-700 text-sm"
              >
                Close Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}