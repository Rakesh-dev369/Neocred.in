import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  FunnelIcon,
  StarIcon,
  ChartBarIcon,
  ClockIcon,
  FireIcon,
  SparklesIcon,
  ArrowRightIcon,
  XMarkIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid, FireIcon as FireIconSolid } from '@heroicons/react/24/solid';
import { ROUTES } from '../utils/constants';

export default function Explore() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [sortBy, setSortBy] = useState('popular'); // popular, name, recent
  const [favorites, setFavorites] = useState(new Set());
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userPreferences, setUserPreferences] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  const allCards = [
    {
      id: 'credit-cards',
      title: 'Best Credit Cards',
      description: 'Students | Salaried | Business',
      details: 'Annual fee, benefits, links to apply (via affiliate)',
      icon: CreditCardIcon,
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600',
      link: ROUTES.CREDIT_CARDS,
      buttonText: 'Compare Cards',
      category: 'Financial Products',
      popularity: 95,
      isNew: false,
      isTrending: true,
      estimatedTime: '5 min',
      benefits: ['Cashback up to 5%', 'Zero annual fee options', 'Instant approval'],
      keywords: ['credit', 'cards', 'students', 'salaried', 'business', 'annual fee', 'benefits']
    },
    {
      id: 'insurance-platforms',
      title: 'Insurance Platforms',
      description: 'Health | Life | Motor | Crop',
      details: 'PolicyBazaar, Ditto, ACKO, Digit — compare or redirect',
      icon: ShieldCheckIcon,
      color: 'bg-green-500',
      gradient: 'from-green-500 to-emerald-600',
      link: ROUTES.INSURANCE_PLATFORMS,
      buttonText: 'View Platforms',
      category: 'Insurance',
      popularity: 88,
      isNew: false,
      isTrending: false,
      estimatedTime: '10 min',
      benefits: ['Compare 40+ insurers', 'Expert guidance', 'Instant quotes'],
      keywords: ['insurance', 'health', 'life', 'motor', 'crop', 'policybazaar', 'ditto', 'acko', 'digit']
    },
    {
      id: 'personal-loans',
      title: 'Personal Loans & Credit',
      description: 'Partner with KreditBee, CASHe, Navi, etc.',
      details: '"Apply via our trusted partners" CTA',
      icon: CurrencyRupeeIcon,
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-violet-600',
      link: ROUTES.PERSONAL_LOANS,
      buttonText: 'Apply Now',
      category: 'Loans',
      popularity: 92,
      isNew: true,
      isTrending: true,
      estimatedTime: '15 min',
      benefits: ['Instant approval', 'Minimal documentation', 'Competitive rates'],
      keywords: ['personal', 'loans', 'credit', 'kreditbee', 'cashe', 'navi', 'partners']
    },
    {
      id: 'government-schemes',
      title: 'Government & Startup Schemes',
      description: 'Filter by state, age, category',
      details: 'Show schemes with benefits, eligibility, apply button/link',
      icon: BuildingLibraryIcon,
      color: 'bg-red-500',
      gradient: 'from-red-500 to-rose-600',
      link: ROUTES.GOVERNMENT_SCHEMES,
      buttonText: 'Browse Schemes',
      category: 'Government',
      popularity: 76,
      isNew: false,
      isTrending: false,
      estimatedTime: '20 min',
      benefits: ['State-wise filtering', 'Eligibility checker', 'Direct application links'],
      keywords: ['government', 'startup', 'schemes', 'state', 'age', 'category', 'benefits', 'eligibility']
    },
    {
      id: 'finance-jobs',
      title: 'Finance Jobs & Internships',
      description: 'Fintech openings, remote roles, campus jobs',
      details: 'Email submission form or redirect to Notion/LinkedIn board',
      icon: AcademicCapIcon,
      color: 'bg-yellow-500',
      gradient: 'from-yellow-500 to-orange-500',
      link: ROUTES.FINANCE_JOBS,
      buttonText: 'Find Jobs',
      category: 'Careers',
      popularity: 84,
      isNew: true,
      isTrending: false,
      estimatedTime: '30 min',
      benefits: ['Latest openings', 'Remote opportunities', 'Internship programs'],
      keywords: ['finance', 'jobs', 'internships', 'fintech', 'remote', 'campus', 'careers']
    },
    {
      id: 'business-tools',
      title: 'Business Tools & Banking',
      description: 'Business loan calculators, GST tools, MSME credit info',
      details: 'Business card comparisons',
      icon: BriefcaseIcon,
      color: 'bg-indigo-500',
      gradient: 'from-indigo-500 to-blue-600',
      link: ROUTES.BUSINESS_TOOLS,
      buttonText: 'Business Tools',
      category: 'Business',
      popularity: 79,
      isNew: false,
      isTrending: true,
      estimatedTime: '25 min',
      benefits: ['GST calculators', 'MSME loan info', 'Business card comparison'],
      keywords: ['business', 'tools', 'banking', 'loan', 'calculators', 'gst', 'msme', 'credit']
    }
  ];

  // Load user preferences and data from localStorage
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    try {
      const savedFavorites = localStorage.getItem('explore-favorites');
      const savedRecent = localStorage.getItem('explore-recent');
      const savedPreferences = localStorage.getItem('explore-preferences');
      
      if (savedFavorites) setFavorites(new Set(JSON.parse(savedFavorites)));
      if (savedRecent) setRecentlyViewed(JSON.parse(savedRecent));
      if (savedPreferences) setUserPreferences(JSON.parse(savedPreferences));
    } catch (error) {
      console.warn('Error loading explore data:', error);
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

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('explore-favorites', JSON.stringify([...favorites]));
  }, [favorites]);

  // Save recent views to localStorage
  useEffect(() => {
    localStorage.setItem('explore-recent', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  // Categories for filtering
  const categories = ['All', ...new Set(allCards.map(card => card.category))];

  // Advanced filtering and sorting
  const filteredAndSortedCards = useMemo(() => {
    let filtered = allCards.filter(card => {
      const matchesSearch = searchTerm === '' || 
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || card.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Sort cards
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.popularity - a.popularity;
        case 'name':
          return a.title.localeCompare(b.title);
        case 'recent':
          return b.isNew ? 1 : -1;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  // Search suggestions
  useEffect(() => {
    if (searchTerm.length > 0) {
      const suggestions = allCards
        .filter(card => 
          card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .slice(0, 5)
        .map(card => card.title);
      setSearchSuggestions(suggestions);
    } else {
      setSearchSuggestions([]);
    }
  }, [searchTerm]);

  // Handle card interaction
  const handleCardClick = (card) => {
    // Add to recently viewed
    const newRecent = [card.id, ...recentlyViewed.filter(id => id !== card.id)].slice(0, 5);
    setRecentlyViewed(newRecent);
    
    // Track user preferences
    const newPrefs = { ...userPreferences };
    newPrefs[card.category] = (newPrefs[card.category] || 0) + 1;
    setUserPreferences(newPrefs);
    localStorage.setItem('explore-preferences', JSON.stringify(newPrefs));
  };

  // Toggle favorite
  const toggleFavorite = (cardId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(cardId)) {
      newFavorites.delete(cardId);
    } else {
      newFavorites.add(cardId);
    }
    setFavorites(newFavorites);
  };

  // Get recommended cards based on user preferences
  const getRecommendedCards = () => {
    const topCategory = Object.keys(userPreferences).reduce((a, b) => 
      userPreferences[a] > userPreferences[b] ? a : b, Object.keys(userPreferences)[0]
    );
    
    return allCards
      .filter(card => card.category === topCategory && !recentlyViewed.includes(card.id))
      .slice(0, 3);
  };

  return (
    <div className="min-h-screen relative overflow-hidden transition-all duration-500">
      {/* Advanced Exploration-Themed Background System */}
      <div className="fixed inset-0 z-0">
        {/* Primary Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"></div>
        
        {/* Animated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/30 via-transparent to-cyan-100/25 dark:from-purple-900/6 dark:via-transparent dark:to-cyan-900/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-emerald-50/25 via-transparent to-indigo-50/30 dark:from-emerald-900/5 dark:via-transparent dark:to-indigo-900/8" style={{animationDelay: '5s'}}></div>
        
        {/* Floating Discovery Elements */}
        <div className="absolute top-20 left-16 w-32 h-24 bg-gradient-to-br from-blue-200/15 to-purple-300/20 dark:from-blue-600/8 dark:to-purple-600/12 rounded-2xl blur-lg animate-float rotate-12"></div>
        <div className="absolute top-40 right-24 w-28 h-20 bg-gradient-to-br from-emerald-200/20 to-teal-300/25 dark:from-emerald-600/10 dark:to-teal-600/15 rounded-xl blur-md animate-float-delayed -rotate-8"></div>
        <div className="absolute bottom-40 left-1/4 w-36 h-28 bg-gradient-to-br from-indigo-200/12 to-blue-300/18 dark:from-indigo-600/6 dark:to-blue-600/10 rounded-3xl blur-xl animate-float-slow rotate-30"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-18 bg-gradient-to-br from-purple-200/18 to-pink-300/22 dark:from-purple-600/8 dark:to-pink-600/12 rounded-2xl blur-lg animate-float-reverse -rotate-20"></div>
        <div className="absolute bottom-24 right-16 w-30 h-22 bg-gradient-to-br from-cyan-200/15 to-blue-300/20 dark:from-cyan-600/7 dark:to-blue-600/10 rounded-2xl blur-xl animate-float-delayed rotate-15"></div>
        
        {/* Exploration Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
          backgroundImage: `
            linear-gradient(90deg, rgb(99 102 241) 1px, transparent 1px),
            linear-gradient(180deg, rgb(99 102 241) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Dynamic Discovery Symbols - Replaced with geometric shapes */}
        <div className="absolute top-1/6 left-1/8 w-12 h-12 bg-blue-200/8 dark:bg-blue-600/4 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/5 right-1/6 w-10 h-10 bg-purple-200/8 dark:bg-purple-600/4 rounded-lg animate-pulse" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute bottom-1/5 left-1/3 w-8 h-8 bg-emerald-200/8 dark:bg-emerald-600/4 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/5 right-1/8 w-10 h-10 bg-indigo-200/8 dark:bg-indigo-600/4 rounded-lg animate-pulse" style={{animationDelay: '2.8s'}}></div>
        <div className="absolute bottom-2/5 right-2/5 w-6 h-6 bg-cyan-200/8 dark:bg-cyan-600/4 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating Discovery Particles */}
        <div className="absolute inset-0">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-indigo-400/25 dark:bg-indigo-300/15 rounded-full animate-particle-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 18}s`,
                animationDuration: `${25 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>
        
        {/* Exploration Path Lines */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]">
          <div className="absolute top-1/5 left-1/10 w-40 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent dark:via-blue-600 animate-pulse rotate-12" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-2/3 right-1/10 w-36 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent dark:via-purple-600 animate-pulse -rotate-8" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/4 left-1/5 w-32 h-0.5 bg-gradient-to-r from-transparent via-emerald-300 to-transparent dark:via-emerald-600 animate-pulse rotate-25" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-28 h-0.5 bg-gradient-to-r from-transparent via-indigo-300 to-transparent dark:via-indigo-600 animate-pulse -rotate-15" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Discovery Constellation Pattern */}
        <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.12]">
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-blue-400/40 dark:bg-blue-300/25 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-purple-400/40 dark:bg-purple-300/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-2/5 left-1/5 w-1 h-1 bg-emerald-400/40 dark:bg-emerald-300/25 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-indigo-400/40 dark:bg-indigo-300/25 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-2/5 right-1/4 w-1.5 h-1.5 bg-cyan-400/40 dark:bg-cyan-300/25 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-pink-400/40 dark:bg-pink-300/25 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
        </div>
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-gray-800/10 animate-mesh-move"></div>
      </div>
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden z-10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mr-4">
                <SparklesIcon className="h-12 w-12 text-yellow-300" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Explore NeoCred
                </h1>
                <p className="text-blue-100 text-lg">Your Financial Discovery Hub</p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed font-medium tracking-wide">
              Discover credit cards, insurance platforms, personal loans,<br className="hidden md:block" /> government schemes, finance careers & business tools
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="max-w-3xl mx-auto relative mb-8">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-blue-400" />
                <input
                  type="text"
                  placeholder="Search credit cards, insurance, loans, jobs, business tools..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSuggestions(e.target.value.length > 0);
                  }}
                  onFocus={() => setShowSuggestions(searchTerm.length > 0)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  className="w-full pl-14 pr-6 py-5 text-lg rounded-2xl border-0 focus:ring-4 focus:ring-white/30 bg-white/15 backdrop-blur-md text-white placeholder-blue-200 shadow-2xl transition-all duration-300 focus:bg-white/20"
                />
                {searchTerm && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setShowSuggestions(false);
                    }}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-white transition-colors"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                )}
              </div>
              
              {/* Search Suggestions */}
              {showSuggestions && searchSuggestions.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 overflow-hidden z-50"
                >
                  {searchSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSearchTerm(suggestion);
                        setShowSuggestions(false);
                      }}
                      className="w-full text-left px-6 py-3 hover:bg-blue-50 text-gray-800 transition-colors border-b border-gray-100 last:border-b-0 flex items-center"
                    >
                      <MagnifyingGlassIcon className="h-4 w-4 text-gray-400 mr-3" />
                      {suggestion}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: 'Financial Products', count: '50+', icon: '💳' },
                { label: 'Insurance Partners', count: '40+', icon: '🛡️' },
                { label: 'Loan Options', count: '25+', icon: '💰' },
                { label: 'Job Opportunities', count: '100+', icon: '💼' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.count}</div>
                  <div className="text-xs text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Filters & Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {selectedCategory === 'All' ? 'All Services' : selectedCategory}
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
                ({filteredAndSortedCards.length} {filteredAndSortedCards.length === 1 ? 'service' : 'services'})
              </span>
            </h2>
            
            {recentlyViewed.length > 0 && (
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <ClockIcon className="h-4 w-4 mr-1" />
                <span>{recentlyViewed.length} recently viewed</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="popular">Most Popular</option>
              <option value="name">Name A-Z</option>
              <option value="recent">Newest First</option>
            </select>
            
            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>
        
        {/* Recommendations Section */}
        {Object.keys(userPreferences).length > 0 && getRecommendedCards().length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
              <div className="flex items-center mb-4">
                <SparklesIcon className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recommended for You</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {getRecommendedCards().map((card, idx) => {
                  const IconComponent = card.icon;
                  return (
                    <Link
                      key={card.id}
                      to={card.link}
                      onClick={() => handleCardClick(card)}
                      className="group bg-white dark:bg-gray-800 rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center mb-2">
                        <div className={`bg-gradient-to-r ${card.gradient} p-2 rounded-lg mr-3`}>
                          <IconComponent className="h-4 w-4 text-white" />
                        </div>
                        <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {card.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{card.description}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Enhanced Feature Cards */}
        <AnimatePresence mode="wait">
          {filteredAndSortedCards.length > 0 ? (
            <motion.div 
              key={`${viewMode}-${selectedCategory}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'space-y-6'
              }
            >
              {filteredAndSortedCards.map((card, index) => {
                const IconComponent = card.icon;
                const isFavorite = favorites.has(card.id);
                const isRecentlyViewed = recentlyViewed.includes(card.id);
                
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 transition-all duration-500 overflow-hidden ${
                      viewMode === 'list' ? 'flex items-center p-6' : 'p-6'
                    } hover:-translate-y-1`}
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Top Row: Star and Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-10">
                      {/* Favorite Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite(card.id);
                        }}
                        className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                          isFavorite 
                            ? 'bg-yellow-500 text-white shadow-lg' 
                            : 'bg-white/80 dark:bg-gray-800/80 text-gray-400 hover:text-yellow-500 backdrop-blur-sm'
                        }`}
                      >
                        {isFavorite ? (
                          <StarIconSolid className="h-4 w-4" />
                        ) : (
                          <StarIcon className="h-4 w-4" />
                        )}
                      </button>
                      
                      {/* Badges */}
                      <div className="flex flex-col items-end space-y-1">
                        {card.isNew && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse shadow-sm">
                            NEW
                          </span>
                        )}
                        {card.isTrending && (
                          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center shadow-sm">
                            <FireIconSolid className="h-3 w-3 mr-1" />
                            HOT
                          </span>
                        )}
                        {isRecentlyViewed && (
                          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                            RECENT
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className={`relative z-10 ${viewMode === 'list' ? 'flex items-center flex-1 pt-12' : 'pt-12'}`}>
                      {/* Icon and Title */}
                      <div className={`flex items-center ${viewMode === 'list' ? 'mr-6' : 'mb-4'}`}>
                        <div className={`bg-gradient-to-r ${card.gradient} p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className={viewMode === 'list' ? 'flex-1' : ''}>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {card.title}
                          </h3>
                          <div className="flex items-center mt-1 space-x-3">
                            <span className="text-sm text-gray-500 dark:text-gray-400">{card.category}</span>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <ClockIcon className="h-3 w-3 mr-1" />
                              {card.estimatedTime}
                            </div>
                            <div className="flex items-center text-sm text-orange-500">
                              <ChartBarIcon className="h-3 w-3 mr-1" />
                              {card.popularity}% popular
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {viewMode === 'grid' && (
                        <>
                          {/* Description */}
                          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            {card.description}
                          </p>
                          
                          {/* Benefits */}
                          <div className="mb-6">
                            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Benefits:</h4>
                            <div className="space-y-1">
                              {card.benefits.slice(0, 3).map((benefit, idx) => (
                                <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                                  {benefit}
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                      
                      {/* Action Button */}
                      <Link
                        to={card.link}
                        onClick={() => handleCardClick(card)}
                        className={`group/btn inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${card.gradient} text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 ${viewMode === 'list' ? 'ml-auto' : 'w-full'}`}
                      >
                        {card.buttonText}
                        <ArrowRightIcon className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <MagnifyingGlassIcon className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No results found
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  {searchTerm 
                    ? `No services found for "${searchTerm}"` 
                    : `No services found in ${selectedCategory}`
                  }
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-400 dark:text-gray-500">Try searching for:</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['credit cards', 'insurance', 'loans', 'jobs', 'business tools'].map((term, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSearchTerm(term)}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
}