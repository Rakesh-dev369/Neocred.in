import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon, 
  ChartBarIcon, 
  CurrencyRupeeIcon, 
  HomeIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  TrophyIcon,
  NewspaperIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      title: 'Investment Tools',
      icon: ChartBarIcon,
      color: 'bg-green-500',
      description: 'SIP, Mutual Funds, Gold, and Investment Planning',
      tools: ['SIP Calculator', 'Lumpsum Calculator', 'Goal Planner', 'Mutual Fund Tracker'],
      link: '/tools?category=investment'
    },
    {
      title: 'Loan & EMI Tools',
      icon: HomeIcon,
      color: 'bg-blue-500',
      description: 'Home, Car, Education, and Personal Loans',
      tools: ['Home Loan EMI', 'Car Loan EMI', 'Education Loan', 'Loan Eligibility'],
      link: '/tools?category=loans'
    },
    {
      title: 'Savings & Deposits',
      icon: BanknotesIcon,
      color: 'bg-purple-500',
      description: 'FD, RD, PPF, and Government Schemes',
      tools: ['FD Calculator', 'RD Calculator', 'PPF Calculator', 'Post Office FD'],
      link: '/tools?category=savings'
    },
    {
      title: 'Insurance Planning',
      icon: ShieldCheckIcon,
      color: 'bg-red-500',
      description: 'Life, Health, Vehicle, and Crop Insurance',
      tools: ['Term Insurance', 'Health Insurance', 'Vehicle Insurance', 'Crop Insurance'],
      link: '/tools?category=insurance'
    },
    {
      title: 'Tax & Compliance',
      icon: CurrencyRupeeIcon,
      color: 'bg-yellow-500',
      description: 'Tax Saving, HRA, TDS, and Form 16 Analysis',
      tools: ['Tax Saver', 'HRA Calculator', 'TDS Estimator', 'Form 16 Tool'],
      link: '/tools?category=tax'
    },
    {
      title: 'Budget & Planning',
      icon: ChartBarIcon,
      color: 'bg-indigo-500',
      description: 'Budget Planning, Emergency Fund, Net Worth',
      tools: ['Budget Planner', 'Emergency Fund', 'Net Worth Tracker', '50/30/20 Rule'],
      link: '/tools?category=budget'
    }
  ];

  const quickLinks = [
    {
      title: 'Financial Learning',
      icon: BookOpenIcon,
      description: '8 Pillars of Financial Literacy',
      link: '/learn',
      color: 'text-blue-600'
    },
    {
      title: 'Latest News',
      icon: NewspaperIcon,
      description: 'Market Updates & Financial News',
      link: '/news',
      color: 'text-green-600'
    },
    {
      title: 'Rewards Program',
      icon: TrophyIcon,
      description: 'Earn Points & Unlock Benefits',
      link: '/rewards',
      color: 'text-purple-600'
    },
    {
      title: 'AI Assistant',
      icon: AcademicCapIcon,
      description: 'Chat with FinBot for Personalized Advice',
      link: '/chatbot',
      color: 'text-orange-600'
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.tools.some(tool => tool.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explore NeoCred
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover 40+ Financial Tools, Learning Resources & More
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tools, calculators, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg rounded-2xl border-0 focus:ring-4 focus:ring-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tool Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Financial Tool Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={index}
                  to={category.link}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className={`${category.color} p-3 rounded-xl mr-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {category.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.tools.slice(0, 3).map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                    {category.tools.length > 3 && (
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                        +{category.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Quick Access
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={index}
                  to={link.link}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                >
                  <IconComponent className={`h-12 w-12 mx-auto mb-4 ${link.color}`} />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {link.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              NeoCred by Numbers
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Empowering financial decisions across India
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">40+</div>
              <div className="text-gray-600 dark:text-gray-300">Financial Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">8</div>
              <div className="text-gray-600 dark:text-gray-300">Learning Pillars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">AI Assistant</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">Free</div>
              <div className="text-gray-600 dark:text-gray-300">Always Free</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}