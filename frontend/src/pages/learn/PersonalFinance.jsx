import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, BookmarkIcon, ChevronDownIcon, ChevronRightIcon, CalculatorIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function PersonalFinance() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedCards, setExpandedCards] = useState({});
  const [activeTab, setActiveTab] = useState({});
  const [bookmarks, setBookmarks] = useState(new Set());
  const [readMore, setReadMore] = useState({});
  const [showQuickNav, setShowQuickNav] = useState(false);
  const [hoveredDefinition, setHoveredDefinition] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: '📖', level: 'foundation' },
    { id: 'core-components', title: 'Core Components', icon: '🎯', level: 'foundation' },
    { id: 'budgeting', title: 'Budgeting & Planning', icon: '📊', level: 'foundation' },
    { id: 'saving', title: 'Saving & Emergency', icon: '🏦', level: 'foundation' },
    { id: 'investing', title: 'Investment Management', icon: '📈', level: 'advanced' },
    { id: 'debt', title: 'Debt & Credit', icon: '💳', level: 'advanced' },
    { id: 'retirement', title: 'Retirement Planning', icon: '🛡️', level: 'advanced' },
    { id: 'insurance', title: 'Insurance & Risk', icon: '🛡️', level: 'advanced' },
    { id: 'tax', title: 'Tax Planning', icon: '📄', level: 'advanced' },
    { id: 'trends', title: 'Modern Trends', icon: '🚀', level: 'tips' },
    { id: 'challenges', title: 'Challenges', icon: '⚠️', level: 'tips' },
    { id: 'conclusion', title: 'Conclusion', icon: '⭐', level: 'resources' }
  ];

  const quickNavSections = [
    { id: 'introduction', title: 'Introduction', sections: ['introduction'] },
    { id: 'core-components', title: 'Core Components', sections: ['core-components'] },
    { id: 'foundations', title: 'Foundations', sections: ['budgeting', 'saving'] },
    { id: 'advanced', title: 'Advanced', sections: ['investing', 'debt', 'retirement', 'insurance', 'tax'] },
    { id: 'tips', title: 'Tips', sections: ['trends', 'challenges'] },
    { id: 'resources', title: 'Resources', sections: ['conclusion'] }
  ];

  const definitions = {
    budgeting: 'Planning income vs. expenses to achieve financial goals',
    investing: 'Growing wealth through financial instruments over time',
    debt: 'Money borrowed that must be repaid with interest',
    insurance: 'Protection against financial loss from unexpected events',
    retirement: 'Planning for financial independence after working years'
  };

  const relatedPillars = [
    { name: 'Traditional Investments', path: '/learn/traditional-investments' },
    { name: 'Market-Linked Investments', path: '/learn/market-linked-investments' },
    { name: 'Banking & Payments', path: '/learn/banking-payments' },
    { name: 'Insurance & Risk', path: '/learn/insurance-risk' }
  ];

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const setTab = (cardId, tab) => {
    setActiveTab(prev => ({ ...prev, [cardId]: tab }));
  };

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

  const toggleReadMore = (id) => {
    setReadMore(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link 
            to="/learn"
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Learn
          </Link>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">Personal Finance</h1>
              <p className="text-lg mb-4 text-blue-100">Master money management, wealth building, and financial independence.</p>
              <div className="flex items-center space-x-4">
                <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">Pillar 1 of 8</span>
                <span className="text-blue-200">• 12 Sections • 2025 Updated</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-4xl">🏦</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Quick Navigation */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
        <button
          onClick={() => setShowQuickNav(!showQuickNav)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors mb-2"
        >
          📜
        </button>
        {showQuickNav && (
          <div className="bg-white rounded-lg shadow-xl p-4 w-48 border">
            <h4 className="font-bold text-sm mb-3 text-gray-800">Quick Navigation</h4>
            <div className="space-y-2">
              {quickNavSections.map((navSection) => (
                <button
                  key={navSection.id}
                  onClick={() => {
                    setActiveSection(navSection.sections[0]);
                    setShowQuickNav(false);
                  }}
                  className="w-full text-left text-xs p-2 rounded hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {navSection.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
        {/* Left Sidebar TOC */}
        <div className="w-80 bg-white rounded-lg shadow-lg p-6 h-fit sticky top-8">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Table of Contents</h3>
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all ${
                  activeSection === section.id 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'hover:bg-gray-50 text-gray-600'
                }`}
              >
                <span>{section.icon}</span>
                <span className="text-sm font-medium">{section.title}</span>
                {section.level === 'foundation' && <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded ml-auto">📘</span>}
                {section.level === 'advanced' && <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded ml-auto">📗</span>}
                {section.level === 'tips' && <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded ml-auto">📕</span>}
                {section.level === 'resources' && <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded ml-auto">📖</span>}
                {bookmarks.has(section.id) && <BookmarkIcon className="h-4 w-4 text-yellow-500" />}
              </button>
            ))}
          </nav>

          {/* Related Pillars */}
          <div className="mt-8 pt-6 border-t">
            <h4 className="font-semibold text-gray-800 mb-3">Related Pillars</h4>
            <div className="space-y-2">
              {relatedPillars.map((pillar, index) => (
                <Link
                  key={index}
                  to={pillar.path}
                  className="flex items-center justify-between p-2 rounded hover:bg-gray-50 text-sm text-gray-600 hover:text-blue-600"
                >
                  <span>{pillar.name}</span>
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          {/* Introduction Section */}
          {activeSection === 'introduction' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Introduction</h2>
                <button
                  onClick={() => toggleBookmark('introduction')}
                  className={`p-2 rounded-full ${bookmarks.has('introduction') ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                >
                  <BookmarkIcon className="h-5 w-5" />
                </button>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Personal finance refers to the management of an individual's or household's financial activities, including earning, saving, investing, budgeting, spending, and protecting money. It encompasses short-term decisions such as managing daily expenses, as well as long-term strategies such as retirement planning, wealth building, and intergenerational financial security.
                </p>
                
                {!readMore.intro && (
                  <button
                    onClick={() => toggleReadMore('intro')}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Read more <ChevronDownIcon className="h-4 w-4 ml-1" />
                  </button>
                )}
                
                {readMore.intro && (
                  <div className="mt-4">
                    <p className="text-gray-700 mb-4">
                      Personal finance is a critical life skill that influences financial independence, stability, and well-being. In today's rapidly evolving economic landscape, understanding personal finance has become more important than ever, especially in India where financial literacy rates remain low despite growing economic opportunities.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The field encompasses various interconnected areas including income optimization, expense management, strategic saving, intelligent investing, debt management, insurance planning, retirement preparation, and tax optimization. Each component plays a crucial role in building a comprehensive financial foundation.
                    </p>
                    <button
                      onClick={() => toggleReadMore('intro')}
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                      Show less <ChevronRightIcon className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Core Components Section */}
          {activeSection === 'core-components' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-800">Core Components of Personal Finance</h2>
                  <button
                    onClick={() => toggleBookmark('core-components')}
                    className={`p-2 rounded-full ${bookmarks.has('core-components') ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                  >
                    <BookmarkIcon className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-gray-700 mb-8">The core components of personal finance are interconnected areas that help individuals achieve financial health and independence:</p>
              </div>

              {/* Income Management Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="p-6 cursor-pointer flex items-center justify-between bg-gradient-to-r from-green-50 to-green-100"
                  onClick={() => toggleCard('income')}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-2xl">💰</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Income Management</h3>
                  </div>
                  {expandedCards.income ? <ChevronDownIcon className="h-6 w-6" /> : <ChevronRightIcon className="h-6 w-6" />}
                </div>
                
                {expandedCards.income && (
                  <div className="p-6 border-t">
                    <div className="flex border-b mb-6">
                      {['Theory', 'Examples', 'Tools', 'Case Studies'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setTab('income', tab)}
                          className={`px-4 py-2 font-medium ${
                            (activeTab.income || 'Theory') === tab
                              ? 'border-b-2 border-green-500 text-green-600'
                              : 'text-gray-600 hover:text-green-600'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                    
                    {(activeTab.income || 'Theory') === 'Theory' && (
                      <div className="space-y-4">
                        <p className="text-gray-700">Understanding and optimizing various sources of income is fundamental to personal finance success.</p>
                        <ul className="space-y-2 text-gray-700">
                          <li><strong>Primary Income:</strong> Salary, wages, business profits</li>
                          <li><strong>Passive Income:</strong> Rental income, dividends, interest</li>
                          <li><strong>Portfolio Income:</strong> Capital gains, trading profits</li>
                          <li><strong>Side Income:</strong> Freelancing, consulting, part-time work</li>
                        </ul>
                      </div>
                    )}
                    
                    {activeTab.income === 'Examples' && (
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">Software Engineer (₹8L/year)</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Primary: ₹8,00,000 (salary)</li>
                            <li>• Side: ₹1,20,000 (freelancing)</li>
                            <li>• Passive: ₹24,000 (FD interest)</li>
                            <li>• Total: ₹9,44,000</li>
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    {activeTab.income === 'Tools' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <Link to="/calculators/budget-planner" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100">
                            <h4 className="font-semibold mb-2">Income Tracker</h4>
                            <p className="text-sm text-gray-600">Track multiple income sources</p>
                            <span className="mt-2 text-green-600 text-sm font-medium">Use Tool →</span>
                          </Link>
                          <Link to="/calculators/first-salary-planner" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100">
                            <h4 className="font-semibold mb-2">Side Income Calculator</h4>
                            <p className="text-sm text-gray-600">Calculate potential earnings</p>
                            <span className="mt-2 text-green-600 text-sm font-medium">Use Tool →</span>
                          </Link>
                        </div>
                      </div>
                    )}
                    
                    {activeTab.income === 'Case Studies' && (
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">Rahul's Income Diversification Journey</h4>
                          <p className="text-sm text-blue-700 mb-2">Started with ₹5L salary, built multiple income streams over 3 years</p>
                          <p className="text-sm text-blue-600">Result: 40% income increase through side projects and investments</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Budgeting Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="p-6 cursor-pointer flex items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100"
                  onClick={() => toggleCard('budgeting')}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CalculatorIcon className="text-white h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Budgeting & Expense Management</h3>
                  </div>
                  {expandedCards.budgeting ? <ChevronDownIcon className="h-6 w-6" /> : <ChevronRightIcon className="h-6 w-6" />}
                </div>
                
                {expandedCards.budgeting && (
                  <div className="p-6 border-t">
                    <div className="flex border-b mb-6">
                      {['Theory', 'Examples', 'Tools', 'Case Studies'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setTab('budgeting', tab)}
                          className={`px-4 py-2 font-medium ${
                            (activeTab.budgeting || 'Theory') === tab
                              ? 'border-b-2 border-blue-500 text-blue-600'
                              : 'text-gray-600 hover:text-blue-600'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                    
                    {(activeTab.budgeting || 'Theory') === 'Theory' && (
                      <div className="space-y-4">
                        <p className="text-gray-700">Creating a spending plan to balance needs, wants, and savings effectively.</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-2">50/30/20 Rule</h4>
                            <ul className="text-sm text-blue-700 space-y-1">
                              <li>• 50% Needs (rent, food, utilities)</li>
                              <li>• 30% Wants (entertainment, dining)</li>
                              <li>• 20% Savings & Investments</li>
                            </ul>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-2">Zero-Based Budgeting</h4>
                            <ul className="text-sm text-blue-700 space-y-1">
                              <li>• Every rupee assigned purpose</li>
                              <li>• Income - Expenses = 0</li>
                              <li>• Maximum control over money</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab.budgeting === 'Examples' && (
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">Monthly Budget (₹50,000 income)</h4>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="font-medium text-blue-700">Needs (₹25,000)</p>
                              <ul className="text-blue-600 space-y-1">
                                <li>Rent: ₹15,000</li>
                                <li>Food: ₹6,000</li>
                                <li>Utilities: ₹4,000</li>
                              </ul>
                            </div>
                            <div>
                              <p className="font-medium text-blue-700">Wants (₹15,000)</p>
                              <ul className="text-blue-600 space-y-1">
                                <li>Entertainment: ₹5,000</li>
                                <li>Dining: ₹4,000</li>
                                <li>Shopping: ₹6,000</li>
                              </ul>
                            </div>
                            <div>
                              <p className="font-medium text-blue-700">Savings (₹10,000)</p>
                              <ul className="text-blue-600 space-y-1">
                                <li>Emergency: ₹3,000</li>
                                <li>SIP: ₹5,000</li>
                                <li>PPF: ₹2,000</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab.budgeting === 'Tools' && (
                      <div className="grid grid-cols-2 gap-4">
                        <Link to="/calculators/budget-planner" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100">
                          <h4 className="font-semibold mb-2">Budget Planner</h4>
                          <p className="text-sm text-gray-600">Create 50/30/20 budget</p>
                          <span className="mt-2 text-blue-600 text-sm font-medium">Use Tool →</span>
                        </Link>
                        <Link to="/calculators/budget-rule" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100">
                          <h4 className="font-semibold mb-2">Expense Tracker</h4>
                          <p className="text-sm text-gray-600">Track daily expenses</p>
                          <span className="mt-2 text-blue-600 text-sm font-medium">Use Tool →</span>
                        </Link>
                      </div>
                    )}

                    {activeTab.budgeting === 'Case Studies' && (
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">Priya's Budget Transformation</h4>
                          <p className="text-sm text-green-700 mb-2">₹45k salary, reduced expenses by 25% using zero-based budgeting</p>
                          <p className="text-sm text-green-600">Result: Increased savings rate from 5% to 25% in 6 months</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Budgeting Section */}
          {activeSection === 'budgeting' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Budgeting and Expense Planning</h2>
                <button
                  onClick={() => toggleBookmark('budgeting')}
                  className={`p-2 rounded-full ${bookmarks.has('budgeting') ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                >
                  <BookmarkIcon className="h-5 w-5" />
                </button>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Budgeting is the foundation of personal finance. It helps track income and expenses, avoid overspending, and achieve financial goals.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Types of Budgeting</h3>
                    <ul className="space-y-3 text-blue-700">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                        <div>
                          <strong>Traditional Budgeting:</strong> Itemizing all expenses and income sources
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                        <div>
                          <strong>50/30/20 Rule:</strong> 50% needs, 30% wants, 20% savings
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                        <div>
                          <strong>Zero-Based Budgeting:</strong> Every rupee assigned a purpose
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                        <div>
                          <strong>Envelope System:</strong> Cash-based tracking for categories
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">Budgeting Tools</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Manual Tools</h4>
                        <p className="text-sm text-green-600">Excel, Google Sheets, pen & paper</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Indian Apps</h4>
                        <p className="text-sm text-green-600">ET Money, Walnut, Money View</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Global Apps</h4>
                        <p className="text-sm text-green-600">YNAB, Mint, PocketGuard</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-yellow-800 mb-2">💡 Pro Tips for Effective Budgeting</h3>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• Start with tracking expenses for 1 month before creating budget</li>
                    <li>• Use the 24-hour rule for non-essential purchases above ₹1,000</li>
                    <li>• Review and adjust budget monthly based on actual spending</li>
                    <li>• Automate savings to ensure you pay yourself first</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mt-6">
                  <h4 className="font-bold text-blue-800 mb-2">🎯 Key Takeaway</h4>
                  <p className="text-blue-700 text-sm">Budgeting helps you plan, prioritize, and prevent overspending. Start with the 50/30/20 rule and adjust based on your needs.</p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg mt-6">
                  <h4 className="font-bold text-green-800 mb-2">🎯 Key Takeaway</h4>
                  <p className="text-green-700 text-sm">Emergency funds provide financial security. Build 6 months of expenses in high-yield savings accounts (7-8% rates in 2025).</p>
                </div>
              </div>
            </div>
          )}

          {/* Investment Management Section */}
          {activeSection === 'investing' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Investment Management</h2>
                <button
                  onClick={() => toggleBookmark('investing')}
                  className={`p-2 rounded-full ${bookmarks.has('investing') ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                >
                  <BookmarkIcon className="h-5 w-5" />
                </button>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Investments are critical to wealth building and beating inflation. Understanding different asset classes and risk-return relationships is essential for long-term financial success.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">Asset Classes</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>Equity:</strong> Stocks, mutual funds, ETFs (15-22% returns)</li>
                      <li>• <strong>Debt:</strong> Bonds, FDs, debt funds (7-9% returns)</li>
                      <li>• <strong>Real Estate:</strong> Property, REITs (10-12% returns)</li>
                      <li>• <strong>Gold & Commodities:</strong> Physical gold, Gold ETFs</li>
                      <li>• <strong>Alternative Assets:</strong> Crypto, startups, P2P lending</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Risk & Return Trade-off</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>High Risk, High Return:</strong> Equity, startups, crypto</li>
                      <li>• <strong>Medium Risk, Medium Return:</strong> Hybrid funds, REITs</li>
                      <li>• <strong>Low Risk, Low Return:</strong> FDs, government bonds</li>
                      <li>• <strong>Diversification:</strong> Spread across asset classes</li>
                      <li>• <strong>Time Horizon:</strong> Longer = higher risk tolerance</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-4">Popular Indian Investment Options (2025)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">Equity Investments</h4>
                      <ul className="text-sm text-purple-600 space-y-1">
                        <li>• SIP in Large Cap Funds</li>
                        <li>• Index Funds (Nifty 50)</li>
                        <li>• ELSS for Tax Saving</li>
                        <li>• Direct Stocks (Blue Chip)</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">Debt Investments</h4>
                      <ul className="text-sm text-purple-600 space-y-1">
                        <li>• PPF (7.1% tax-free)</li>
                        <li>• EPF (8.25% return)</li>
                        <li>• FD (7-8.5% rates)</li>
                        <li>• Debt Mutual Funds</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">Alternative Options</h4>
                      <ul className="text-sm text-purple-600 space-y-1">
                        <li>• Gold ETFs/SGBs</li>
                        <li>• REITs (Real Estate)</li>
                        <li>• NPS (Retirement)</li>
                        <li>• International Funds</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'saving' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Saving and Emergency Planning</h2>
                <button
                  onClick={() => toggleBookmark('saving')}
                  className={`p-2 rounded-full ${bookmarks.has('saving') ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                >
                  <BookmarkIcon className="h-5 w-5" />
                </button>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Savings are the backbone of financial resilience. An emergency fund acts as a financial safety net for unforeseen expenses.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-green-800 mb-4">Types of Savings</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• Short-term savings (holidays, gadgets)</li>
                      <li>• Long-term savings (education, home purchase)</li>
                      <li>• Emergency savings (3–12 months of living expenses)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-800 mb-4">Best Practices</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Automate savings (SIPs, recurring deposits)</li>
                      <li>• Use high-yield savings accounts, liquid funds</li>
                      <li>• Avoid dipping into emergency savings for non-emergencies</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-purple-800 mb-4">2025 Rates</h3>
                    <ul className="space-y-2 text-purple-700">
                      <li>• Savings Account: 7-8%</li>
                      <li>• FD: 7-8.5%</li>
                      <li>• Liquid Funds: 6-7%</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg mt-6">
                  <h4 className="font-bold text-purple-800 mb-2">🎯 Key Takeaway</h4>
                  <p className="text-purple-700 text-sm">Diversify investments across asset classes. Start with SIP in equity funds for long-term wealth creation. See <Link to="/learn/market-linked-investments" className="text-purple-600 underline">Market-Linked Investments</Link> for details.</p>
                </div>
              </div>
            </div>
          )}

          {/* Debt & Credit Section */}
          {activeSection === 'debt' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Debt and Credit Management</h2>
                <button
                  onClick={() => toggleBookmark('debt')}
                  className={`p-2 rounded-full ${bookmarks.has('debt') ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                >
                  <BookmarkIcon className="h-5 w-5" />
                </button>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Debt can be constructive (home loan, education loan) or destructive (credit card debt, personal loans for lifestyle expenses). Managing credit wisely is crucial for financial health.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-4">Types of Debt</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2">Secured Debt (Good)</h4>
                        <ul className="text-sm text-red-600 space-y-1">
                          <li>• Home Loan (8.5-12% interest)</li>
                          <li>• Car Loan (9-15% interest)</li>
                          <li>• Education Loan (8-12% interest)</li>
                          <li>• Gold Loan (10-16% interest)</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2">Unsecured Debt (Risky)</h4>
                        <ul className="text-sm text-red-600 space-y-1">
                          <li>• Credit Card (36-48% interest)</li>
                          <li>• Personal Loan (12-24% interest)</li>
                          <li>• Payday Loans (Very High)</li>
                          <li>• Buy Now Pay Later</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">Credit Score Management</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">CIBIL Score Ranges</h4>
                        <ul className="text-sm text-green-600 space-y-1">
                          <li>• 750-900: Excellent (Best rates)</li>
                          <li>• 700-749: Good (Decent rates)</li>
                          <li>• 650-699: Fair (Higher rates)</li>
                          <li>• 300-649: Poor (Loan rejection)</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Improvement Tips</h4>
                        <ul className="text-sm text-green-600 space-y-1">
                          <li>• Pay EMIs on time (35% weightage)</li>
                          <li>• Keep credit utilization &lt;30%</li>
                          <li>• Maintain old credit accounts</li>
                          <li>• Check credit report annually</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-yellow-800 mb-2">💡 Debt Repayment Strategies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-yellow-700 mb-2">Debt Snowball Method</h4>
                      <ul className="text-sm text-yellow-600 space-y-1">
                        <li>• Pay minimums on all debts</li>
                        <li>• Focus extra money on smallest debt</li>
                        <li>• Build momentum with quick wins</li>
                        <li>• Good for motivation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-700 mb-2">Debt Avalanche Method</h4>
                      <ul className="text-sm text-yellow-600 space-y-1">
                        <li>• Pay minimums on all debts</li>
                        <li>• Focus extra money on highest interest</li>
                        <li>• Mathematically optimal</li>
                        <li>• Saves more money long-term</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg mt-6">
                  <h4 className="font-bold text-red-800 mb-2">🎯 Key Takeaway</h4>
                  <p className="text-red-700 text-sm">Manage debt wisely - prioritize high-interest debt repayment. Maintain CIBIL score above 750 for best loan rates. Learn more about <Link to="/learn/banking-payments" className="text-red-600 underline">Banking & Payments</Link>.</p>
                </div>
              </div>
            </div>
          )}

          {/* Retirement Planning Section */}
          {activeSection === 'retirement' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Retirement and Long-Term Planning</h2>
                <button
                  onClick={() => toggleBookmark('retirement')}
                  className={`p-2 rounded-full ${bookmarks.has('retirement') ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                >
                  <BookmarkIcon className="h-5 w-5" />
                </button>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Retirement planning ensures financial security post-employment. Starting early leverages the power of compounding for wealth creation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Retirement Needs Assessment</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Estimate future expenses (inflation-adjusted)</li>
                      <li>• Account for healthcare costs</li>
                      <li>• Consider lifestyle changes</li>
                      <li>• Plan for longevity (80+ years)</li>
                      <li>• Factor in inflation (6-7% annually)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">Indian Retirement Instruments</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>EPF:</strong> 8.25% return, tax-free</li>
                      <li>• <strong>PPF:</strong> 7.1% return, 15-year lock-in</li>
                      <li>• <strong>NPS:</strong> Market-linked, tax benefits</li>
                      <li>• <strong>Annuities:</strong> Guaranteed pension</li>
                      <li>• <strong>Equity MFs:</strong> Long-term wealth creation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">Global Retirement Options</h3>
                    <ul className="space-y-2 text-purple-700">
                      <li>• <strong>401(k):</strong> USA employer-sponsored</li>
                      <li>• <strong>Roth IRA:</strong> Tax-free withdrawals</li>
                      <li>• <strong>State Pensions:</strong> UK, EU countries</li>
                      <li>• <strong>Superannuation:</strong> Australia</li>
                      <li>• <strong>RRSP:</strong> Canada retirement savings</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-orange-800 mb-4">Retirement Planning Best Practices (2025)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-orange-700 mb-2">Start Early Strategy</h4>
                      <ul className="text-sm text-orange-600 space-y-1">
                        <li>• Begin investing at 25 vs 35 = 2x more corpus</li>
                        <li>• ₹5,000 monthly SIP for 35 years = ₹2.8 Cr</li>
                        <li>• Same amount for 25 years = ₹1.2 Cr</li>
                        <li>• Power of compounding maximized</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-700 mb-2">Diversification Strategy</h4>
                      <ul className="text-sm text-orange-600 space-y-1">
                        <li>• 60% Equity (growth phase)</li>
                        <li>• 30% Debt (stability)</li>
                        <li>• 10% Alternative (gold, REITs)</li>
                        <li>• Rebalance annually</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-lg mt-6">
                  <h4 className="font-bold text-orange-800 mb-2">🎯 Key Takeaway</h4>
                  <p className="text-orange-700 text-sm">Start retirement planning early to leverage compounding. Diversify between EPF, PPF, NPS, and equity investments for optimal returns.</p>
                </div>
              </div>
            </div>
          )}

          {/* Insurance & Risk Section */}
          {activeSection === 'insurance' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Insurance and Risk Management</h2>
                <button
                  onClick={() => toggleBookmark('insurance')}
                  className={`p-2 rounded-full ${bookmarks.has('insurance') ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                >
                  <BookmarkIcon className="h-5 w-5" />
                </button>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Insurance protects against financial shocks due to unforeseen events. It's a crucial component of comprehensive financial planning.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Types of Insurance</h3>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded">
                        <h4 className="font-semibold text-blue-700">Life Insurance</h4>
                        <p className="text-sm text-blue-600">Term plans (₹1Cr for ₹15k/year), whole life policies</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <h4 className="font-semibold text-blue-700">Health Insurance</h4>
                        <p className="text-sm text-blue-600">Individual (₹5-10L), family floater, critical illness</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <h4 className="font-semibold text-blue-700">General Insurance</h4>
                        <p className="text-sm text-blue-600">Motor, travel, home, cyber insurance</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">Risk Management Strategy</h3>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded">
                        <h4 className="font-semibold text-green-700">1. Identify Risks</h4>
                        <p className="text-sm text-green-600">Death, disability, medical emergencies, property loss</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <h4 className="font-semibold text-green-700">2. Assess Impact</h4>
                        <p className="text-sm text-green-600">Financial impact on family and goals</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <h4 className="font-semibold text-green-700">3. Mitigate & Insure</h4>
                        <p className="text-sm text-green-600">Prevent risks, transfer through insurance</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-lg mt-6">
                  <h4 className="font-bold text-indigo-800 mb-2">🎯 Key Takeaway</h4>
                  <p className="text-indigo-700 text-sm">Insurance protects your wealth from unexpected events. Get adequate life and health coverage. Explore <Link to="/learn/insurance-risk" className="text-indigo-600 underline">Insurance & Risk Management</Link> pillar.</p>
                </div>
              </div>
            </div>
          )}

          {/* Tax Planning Section */}
          {activeSection === 'tax' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Tax Planning and Optimization</h2>
                <button
                  onClick={() => toggleBookmark('tax')}
                  className={`p-2 rounded-full ${bookmarks.has('tax') ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                >
                  <BookmarkIcon className="h-5 w-5" />
                </button>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Tax planning ensures legal savings and efficient allocation of income through various exemptions and deductions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">Indian Tax-Saving Options (2025)</h3>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded">
                        <h4 className="font-semibold text-green-700">Section 80C (₹1.5L limit)</h4>
                        <p className="text-sm text-green-600">ELSS, PPF, NPS, EPF, Life Insurance, Home Loan Principal</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <h4 className="font-semibold text-green-700">Section 80D (₹25k-75k)</h4>
                        <p className="text-sm text-green-600">Health Insurance Premiums (self, family, parents)</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <h4 className="font-semibold text-green-700">Other Sections</h4>
                        <p className="text-sm text-green-600">80E (Education Loan), 24B (Home Loan Interest)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Tax Regimes Comparison (2025)</h3>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded">
                        <h4 className="font-semibold text-blue-700">Old Regime</h4>
                        <p className="text-sm text-blue-600">Higher rates but many deductions available</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <h4 className="font-semibold text-blue-700">New Regime</h4>
                        <p className="text-sm text-blue-600">Lower rates, limited deductions, ₹75k standard deduction</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <h4 className="font-semibold text-blue-700">Best Choice</h4>
                        <p className="text-sm text-blue-600">New regime for income &lt;₹15L, Old for higher income</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-lg mt-6">
                  <h4 className="font-bold text-teal-800 mb-2">🎯 Key Takeaway</h4>
                  <p className="text-teal-700 text-sm">Optimize taxes legally through 80C, 80D deductions. Choose the right tax regime based on your income and deductions available.</p>
                </div>
              </div>
            </div>
          )}

          {/* Modern Trends Section */}
          {activeSection === 'trends' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Modern Trends in Personal Finance</h2>
                <button
                  onClick={() => toggleBookmark('trends')}
                  className={`p-2 rounded-full ${bookmarks.has('trends') ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                >
                  <BookmarkIcon className="h-5 w-5" />
                </button>
              </div>
              
              <div className="prose max-w-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">Digital Finance Revolution</h3>
                    <ul className="space-y-2 text-purple-700">
                      <li>• UPI payments (₹100L+ daily volume)</li>
                      <li>• Mobile banking adoption</li>
                      <li>• Robo-advisors for investments</li>
                      <li>• AI-powered financial planning</li>
                      <li>• Neobanks and digital-first banks</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-orange-800 mb-4">Investment Innovations</h3>
                    <ul className="space-y-2 text-orange-700">
                      <li>• Fractional investing (₹100 SIPs)</li>
                      <li>• ESG & Sustainable investing</li>
                      <li>• Cryptocurrency adoption</li>
                      <li>• International diversification</li>
                      <li>• FIRE movement (Financial Independence)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Challenges Section */}
          {activeSection === 'challenges' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Challenges in Personal Finance</h2>
                <button
                  onClick={() => toggleBookmark('challenges')}
                  className={`p-2 rounded-full ${bookmarks.has('challenges') ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                >
                  <BookmarkIcon className="h-5 w-5" />
                </button>
              </div>
              
              <div className="prose max-w-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-4">Major Challenges</h3>
                    <ul className="space-y-2 text-red-700">
                      <li>• Inflation eroding purchasing power (6-7% annually)</li>
                      <li>• Rising healthcare and education costs</li>
                      <li>• Low financial literacy (especially rural areas)</li>
                      <li>• Mis-selling of financial products</li>
                      <li>• Lifestyle inflation with income growth</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4">Solutions & Best Practices</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• Continuous financial education</li>
                      <li>• Diversified investment portfolio</li>
                      <li>• Regular review and rebalancing</li>
                      <li>• Professional financial advice</li>
                      <li>• Emergency fund maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Conclusion Section */}
          {activeSection === 'conclusion' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Conclusion</h2>
                <button
                  onClick={() => toggleBookmark('conclusion')}
                  className={`p-2 rounded-full ${bookmarks.has('conclusion') ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                >
                  <BookmarkIcon className="h-5 w-5" />
                </button>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Personal finance is an evolving field, deeply influenced by economic conditions, government policies, and global markets. By mastering budgeting, saving, investing, debt management, retirement planning, insurance, and tax strategies, individuals can build financial independence, security, and prosperity for themselves and future generations.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Key Takeaways for 2025</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Start investing early to leverage compounding</li>
                    <li>• Maintain 6-month emergency fund in high-yield savings</li>
                    <li>• Diversify across asset classes and geographies</li>
                    <li>• Optimize taxes through available deductions</li>
                    <li>• Protect wealth through adequate insurance</li>
                    <li>• Stay updated with financial regulations and opportunities</li>
                    <li>• Seek professional advice for complex financial decisions</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Quick Tools Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4">Quick Tools & Calculators</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/calculators/budget-planner" className="bg-white/20 p-4 rounded-lg hover:bg-white/30 transition-colors">
                <CalculatorIcon className="h-8 w-8 mb-2" />
                <p className="font-medium">Budget Planner</p>
              </Link>
              <Link to="/calculators/emergency-fund" className="bg-white/20 p-4 rounded-lg hover:bg-white/30 transition-colors">
                <CalculatorIcon className="h-8 w-8 mb-2" />
                <p className="font-medium">Emergency Fund</p>
              </Link>
              <Link to="/calculators/sip" className="bg-white/20 p-4 rounded-lg hover:bg-white/30 transition-colors">
                <CalculatorIcon className="h-8 w-8 mb-2" />
                <p className="font-medium">SIP Calculator</p>
              </Link>
              <Link to="/calculators/debt-repayment" className="bg-white/20 p-4 rounded-lg hover:bg-white/30 transition-colors">
                <CalculatorIcon className="h-8 w-8 mb-2" />
                <p className="font-medium">Debt Planner</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}