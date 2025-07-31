import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [bookmarkedNews, setBookmarkedNews] = useState(new Set());
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('date'); // 'date' or 'popularity'
  
  // Load bookmarks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('bookmarkedNews');
    if (saved) setBookmarkedNews(new Set(JSON.parse(saved)));
  }, []);
  
  const toggleBookmark = (id) => {
    const newBookmarks = new Set(bookmarkedNews);
    if (newBookmarks.has(id)) {
      newBookmarks.delete(id);
    } else {
      newBookmarks.add(id);
    }
    setBookmarkedNews(newBookmarks);
    localStorage.setItem('bookmarkedNews', JSON.stringify([...newBookmarks]));
  };

  const categories = ['All', 'RBI Updates', 'Market News', 'Policy Changes', 'Investment Tips'];

  const newsArticles = [
    {
      id: 1,
      title: 'RBI Keeps Repo Rate Unchanged at 6.5%',
      summary: 'Reserve Bank maintains status quo on interest rates, focuses on inflation control',
      category: 'RBI Updates',
      date: '2024-12-15',
      readTime: '3 min read',
      source: 'RBI Official',
      trending: true,
      views: 15420,
      impact: 'high'
    },
    {
      id: 2,
      title: 'New Tax Rules for FY 2024-25',
      summary: 'Important changes in income tax slabs and deductions you should know',
      category: 'Policy Changes',
      date: '2024-12-14',
      readTime: '5 min read',
      source: 'Income Tax Dept',
      trending: false,
      views: 8930,
      impact: 'high'
    },
    {
      id: 3,
      title: 'SIP Investment Hits Record High',
      summary: 'Monthly SIP contributions cross ₹18,000 crores in November 2024',
      category: 'Market News',
      date: '2024-12-13',
      readTime: '4 min read',
      source: 'AMFI Data',
      trending: true,
      views: 12650,
      impact: 'medium'
    },
    {
      id: 4,
      title: 'Digital Payment Growth in Rural India',
      summary: 'UPI transactions in rural areas show 45% year-on-year growth',
      category: 'Market News',
      date: '2024-12-12',
      readTime: '3 min read',
      source: 'NPCI Report',
      trending: false,
      views: 6780,
      impact: 'medium'
    },
    {
      id: 5,
      title: 'Best Investment Options for 2025',
      summary: 'Expert recommendations for portfolio allocation in the new year',
      category: 'Investment Tips',
      date: '2024-12-11',
      readTime: '6 min read',
      source: 'Market Expert',
      trending: true,
      views: 18920,
      impact: 'high'
    },
    {
      id: 6,
      title: 'SEBI Introduces New Mutual Fund Rules',
      summary: 'Enhanced disclosure norms and investor protection measures announced',
      category: 'Policy Changes',
      date: '2024-12-10',
      readTime: '4 min read',
      source: 'SEBI Official',
      trending: false,
      views: 5420,
      impact: 'medium'
    }
  ];

  // Advanced filtering and sorting
  const filteredNews = newsArticles
    .filter(article => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date) - new Date(a.date);
      } else {
        return b.views - a.views;
      }
    });
  
  const trendingNews = newsArticles.filter(article => article.trending).slice(0, 3);
  
  const getImpactColor = (impact) => {
    switch(impact) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      default: return 'text-green-400';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/20 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Financial <span className="text-blue-400">News</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest financial news, policy changes, and market insights from trusted sources.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        {/* Trending News Banner */}
        <div className="glass-card mb-8 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-red-500/30">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🔥</span>
            <h2 className="text-xl font-bold text-white">Trending Now</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trendingNews.map(article => (
              <div key={article.id} className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                <h4 className="text-white font-medium text-sm mb-2 line-clamp-2">{article.title}</h4>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{article.views.toLocaleString()} views</span>
                  <span className={getImpactColor(article.impact)}>● {article.impact} impact</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Advanced Controls */}
        <div className="glass-card mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">🔍 Search News</label>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">📂 Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800">{category}</option>
                ))}
              </select>
            </div>
            
            {/* Sort & View Options */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">⚙️ Options</label>
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="date" className="bg-gray-800">Latest First</option>
                  <option value="popularity" className="bg-gray-800">Most Popular</option>
                </select>
                <div className="flex border border-white/20 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 text-sm ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-300'}`}
                  >
                    ⊞
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-2 text-sm ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-300'}`}
                  >
                    ☰
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results & Bookmarks */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-400 text-sm">
            Showing {filteredNews.length} article{filteredNews.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
          {bookmarkedNews.size > 0 && (
            <button
              onClick={() => setSelectedCategory('Bookmarked')}
              className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center gap-1"
            >
              🔖 {bookmarkedNews.size} Bookmarked
            </button>
          )}
        </div>

        {/* Dynamic News Layout */}
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'
          : 'space-y-4'
        }>
          {(selectedCategory === 'Bookmarked' 
            ? newsArticles.filter(article => bookmarkedNews.has(article.id))
            : filteredNews
          ).map(article => (
            <div key={article.id} className={`glass-card hover:bg-white/10 transition-all duration-300 cursor-pointer group relative ${
              viewMode === 'list' ? 'flex gap-4 items-start' : 'hover:scale-105'
            }`}>
              {/* Bookmark Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBookmark(article.id);
                }}
                className={`absolute top-3 right-3 z-10 p-1 rounded-full transition-colors ${
                  bookmarkedNews.has(article.id) ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-400'
                }`}
              >
                {bookmarkedNews.has(article.id) ? '🔖' : '📑'}
              </button>
              
              <div className={viewMode === 'list' ? 'flex-1' : ''}>
                {/* Header */}
                <div className="flex items-center justify-between mb-3 pr-8">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full font-medium">
                      {article.category}
                    </span>
                    {article.trending && <span className="text-xs text-red-400">🔥 Trending</span>}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <span>⏱️</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className={`font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors leading-tight ${
                  viewMode === 'list' ? 'text-base' : 'text-lg'
                }`}>
                  {article.title}
                </h3>
                
                {/* Summary */}
                <p className={`text-gray-300 mb-4 leading-relaxed ${
                  viewMode === 'list' ? 'text-xs' : 'text-sm'
                }`}>
                  {article.summary}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <span>📰</span>
                      <span className="font-medium">{article.source}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>👁️</span>
                      <span>{article.views.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`${getImpactColor(article.impact)} font-medium`}>● {article.impact}</span>
                    <span>{new Date(article.date).toLocaleDateString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* No Results */}
        {filteredNews.length === 0 && (
          <div className="glass-card text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No Articles Found</h3>
            <p className="text-gray-300 mb-4">
              Try adjusting your search terms or category filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Premium Features Preview */}
        <div className="glass-card text-center mt-12 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30">
          <div className="text-4xl mb-4">⭐</div>
          <h3 className="text-xl font-semibold text-white mb-2">Premium News Features</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Unlock advanced features like real-time notifications, AI-powered summaries, and personalized news feeds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-2xl mb-2">🤖</div>
              <h4 className="font-medium text-white mb-1">AI Summaries</h4>
              <p className="text-xs text-gray-300">Get key insights instantly</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-2xl mb-2">🔔</div>
              <h4 className="font-medium text-white mb-1">Smart Alerts</h4>
              <p className="text-xs text-gray-300">Never miss important news</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-2xl mb-2">📊</div>
              <h4 className="font-medium text-white mb-1">Market Impact</h4>
              <p className="text-xs text-gray-300">Understand financial effects</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-medium text-white mb-1">Personalized</h4>
              <p className="text-xs text-gray-300">News tailored for you</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              to={ROUTES.CONTACT}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              🚀 Request Early Access
            </Link>
            <button 
              onClick={() => {
                window.location.href = `${ROUTES.LEARN}#pillars`;
                setTimeout(() => {
                  const pillarsSection = document.getElementById('pillars');
                  if (pillarsSection) {
                    pillarsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              📚 Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}