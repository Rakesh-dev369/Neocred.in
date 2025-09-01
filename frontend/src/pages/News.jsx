import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Newspaper, TrendingUp, Filter, BookmarkPlus, Share2, Bell, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from '../components/News/SearchBar';
import NewsList from '../components/News/NewsList';
import DigestCard from '../components/News/DigestCard';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [pagination, setPagination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedArticles, setBookmarkedArticles] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('bookmarkedNews') || '[]');
    } catch {
      return [];
    }
  });
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [showFilters, setShowFilters] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const fetchNews = useCallback(async (searchQuery = '', page = 1, append = false, forceRefresh = false) => {
    // Check localStorage cache for news (30 minutes cache)
    const cacheKey = `news_${searchQuery}_${filterCategory}_${sortBy}_${page}`;
    const cachedNews = localStorage.getItem(cacheKey);
    const cacheTime = localStorage.getItem(`${cacheKey}_time`);
    const now = Date.now();
    const cacheExpiry = 30 * 60 * 1000; // 30 minutes
    
    if (!forceRefresh && !append && cachedNews && cacheTime && (now - parseInt(cacheTime)) < cacheExpiry) {
      try {
        const parsedData = JSON.parse(cachedNews);
        setArticles(parsedData.articles);
        setPagination(parsedData.pagination);
        setCurrentPage(page);
        setLoading(false);
        return;
      } catch (e) {
        console.warn('Failed to parse cached news');
      }
    }
    
    if (append) {
      setLoadingMore(true);
    } else {
      setLoading(true);
      setCurrentPage(1);
    }
    setError(null);
    
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20'
      });
      
      if (searchQuery) {
        params.append('q', searchQuery);
      }
      
      if (filterCategory !== 'all') {
        params.append('category', filterCategory);
      }
      
      if (sortBy !== 'latest') {
        params.append('sort', sortBy);
      }
      
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8001';
      const url = `${API_BASE_URL}/api/news?${params}`;
      
      console.log('Fetching news from:', url);
      console.log('API_BASE_URL:', API_BASE_URL);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);
      
      const response = await fetch(url, {
        signal: controller.signal,
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid response format');
      }
      
      const data = await response.json();
      
      if (data.success) {
        if (append) {
          setArticles(prev => [...prev, ...data.data]);
        } else {
          setArticles(data.data);
          // Cache the news data (only for first page, no search)
          if (page === 1 && !searchQuery && filterCategory === 'all' && sortBy === 'latest') {
            localStorage.setItem(cacheKey, JSON.stringify({
              articles: data.data,
              pagination: data.pagination
            }));
            localStorage.setItem(`${cacheKey}_time`, now.toString());
          }
        }
        setPagination(data.pagination);
        setCurrentPage(page);
      } else {
        setError(data.error || 'Failed to fetch news');
      }
    } catch (err) {
      console.error('News API error:', err);
      console.error('Error details:', {
        name: err.name,
        message: err.message,
        stack: err.stack,
        url: `${API_BASE_URL}/api/news?${params}`
      });
      
      let errorMessage = 'Unable to load news. Please try again.';
      
      if (err.name === 'AbortError') {
        errorMessage = 'Request timeout. The server is taking too long to respond.';
      } else if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError') || err.message.includes('fetch')) {
        errorMessage = `Cannot connect to server at ${API_BASE_URL}. Please check if the backend is running on port 8001.`;
      } else if (err.message.includes('Server error')) {
        errorMessage = 'Server error. Please try again later.';
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [filterCategory, sortBy]);
  


  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    fetchNews(); // Will use cache if available
    
    // Scroll to top functionality
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchNews]);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = useCallback((searchQuery) => {
    setQuery(searchQuery);
    setArticles([]);
    fetchNews(searchQuery, 1, false, true); // Force refresh for search
  }, [fetchNews]);

  const handleLoadMore = useCallback(() => {
    if (pagination && pagination.has_next) {
      fetchNews(query, currentPage + 1, true);
    }
  }, [pagination, query, currentPage, fetchNews]);

  const handleBookmark = useCallback((article) => {
    const isBookmarked = bookmarkedArticles.some(b => b.link === article.link);
    let newBookmarks;
    
    if (isBookmarked) {
      newBookmarks = bookmarkedArticles.filter(b => b.link !== article.link);
    } else {
      newBookmarks = [...bookmarkedArticles, { ...article, bookmarkedAt: Date.now() }];
    }
    
    setBookmarkedArticles(newBookmarks);
    try {
      localStorage.setItem('bookmarkedNews', JSON.stringify(newBookmarks));
    } catch (error) {
      console.warn('Failed to save bookmarks:', error);
    }
  }, [bookmarkedArticles]);

  const handleShare = useCallback(async (article) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.summary,
          url: article.link
        });
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.warn('Share failed:', error);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(article.link);
        // You could add a toast notification here
      } catch (error) {
        console.warn('Copy to clipboard failed:', error);
      }
    }
  }, []);

  const filterCategories = useMemo(() => [
    { id: 'all', label: 'All News', count: articles.length },
    { id: 'rbi', label: 'RBI Updates', count: articles.filter(a => a.source === 'RBI').length },
    { id: 'banking', label: 'Banking', count: articles.filter(a => a.tags?.includes('Banking')).length },
    { id: 'investment', label: 'Investment', count: articles.filter(a => a.tags?.includes('Investment')).length },
    { id: 'tax', label: 'Tax & Policy', count: articles.filter(a => a.tags?.includes('Tax')).length }
  ], [articles]);

  const sortOptions = [
    { id: 'latest', label: 'Latest First' },
    { id: 'oldest', label: 'Oldest First' },
    { id: 'relevance', label: 'Most Relevant' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors">
      {/* Advanced News-Themed Background System */}
      <div className="fixed inset-0 z-0">
        {/* Primary Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900/20"></div>
        
        {/* Animated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/40 via-transparent to-indigo-100/30 dark:from-blue-900/8 dark:via-transparent dark:to-indigo-900/12 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-slate-50/30 via-transparent to-gray-100/40 dark:from-slate-900/6 dark:via-transparent dark:to-gray-800/8" style={{animationDelay: '4s'}}></div>
        
        {/* Floating News Elements */}
        <div className="absolute top-16 left-12 w-24 h-16 bg-gradient-to-br from-blue-200/20 to-indigo-300/25 dark:from-blue-600/10 dark:to-indigo-600/15 rounded-lg blur-lg animate-float rotate-12"></div>
        <div className="absolute top-28 right-20 w-20 h-14 bg-gradient-to-br from-slate-200/25 to-gray-300/30 dark:from-slate-600/12 dark:to-gray-600/18 rounded-md blur-md animate-float-delayed -rotate-8"></div>
        <div className="absolute bottom-32 left-1/5 w-28 h-20 bg-gradient-to-br from-indigo-200/18 to-blue-300/22 dark:from-indigo-600/8 dark:to-blue-600/12 rounded-xl blur-xl animate-float-slow rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-22 h-16 bg-gradient-to-br from-gray-200/20 to-slate-300/25 dark:from-gray-600/10 dark:to-slate-600/12 rounded-lg blur-lg animate-float-reverse -rotate-15"></div>
        <div className="absolute bottom-20 right-12 w-26 h-18 bg-gradient-to-br from-blue-200/18 to-cyan-300/22 dark:from-blue-600/8 dark:to-cyan-600/10 rounded-2xl blur-xl animate-float-delayed rotate-25"></div>
        
        {/* News Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.06]" style={{
          backgroundImage: `
            linear-gradient(90deg, rgb(71 85 105) 1px, transparent 1px),
            linear-gradient(180deg, rgb(71 85 105) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Dynamic News Symbols */}
        <div className="absolute top-1/5 left-1/6 text-blue-200/15 dark:text-blue-600/8 text-5xl font-bold animate-pulse" style={{animationDelay: '1.5s'}}>📰</div>
        <div className="absolute top-2/3 right-1/5 text-slate-200/15 dark:text-slate-600/8 text-4xl font-bold animate-pulse" style={{animationDelay: '2.5s'}}>📊</div>
        <div className="absolute bottom-1/4 left-1/4 text-indigo-200/15 dark:text-indigo-600/8 text-3xl font-bold animate-pulse" style={{animationDelay: '0.8s'}}>💼</div>
        <div className="absolute top-2/5 right-1/6 text-gray-200/15 dark:text-gray-600/8 text-4xl font-bold animate-pulse" style={{animationDelay: '1.8s'}}>📈</div>
        <div className="absolute bottom-1/3 right-1/3 text-blue-200/15 dark:text-blue-600/8 text-3xl font-bold animate-pulse" style={{animationDelay: '3s'}}>🏦</div>
        
        {/* Floating News Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-slate-400/30 dark:bg-slate-300/20 rounded-full animate-particle-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${20 + Math.random() * 15}s`
              }}
            />
          ))}
        </div>
        
        {/* News Article Lines Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
          <div className="absolute top-1/4 left-1/8 w-32 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-600 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/8 w-28 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent dark:via-blue-600 animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 left-1/6 w-24 h-0.5 bg-gradient-to-r from-transparent via-indigo-300 to-transparent dark:via-indigo-600 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-3/4 right-1/4 w-20 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/6 to-transparent dark:via-gray-800/12 animate-mesh-move"></div>
      </div>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-900 text-white py-12 relative overflow-hidden z-10"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}} />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mr-4">
              <Newspaper className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Finance News
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Stay updated with the latest financial news, RBI updates, and market insights from trusted sources across India.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm"
          >
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span>Real-time Updates</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="w-4 h-4 mr-2">🤖</span>
              <span>AI Summaries</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="w-4 h-4 mr-2">🏷️</span>
              <span>Smart Tags</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <BookmarkPlus className="w-4 h-4 mr-2" />
              <span>Bookmark & Share</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Daily Digest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <DigestCard />
        </motion.div>
        
        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <SearchBar onSearch={handleSearch} loading={loading} />
          
          {/* Advanced Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </button>
                
                <div className="flex items-center space-x-2">
                  <Bell className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {articles.length} articles found
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.label}</option>
                  ))}
                </select>
                
                {bookmarkedArticles.length > 0 && (
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <BookmarkPlus className="w-4 h-4 mr-1" />
                    {bookmarkedArticles.length} saved
                  </div>
                )}
              </div>
            </div>
            
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600"
                >
                  <div className="flex flex-wrap gap-2">
                    {filterCategories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setFilterCategory(category.id)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          filterCategory === category.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {category.label}
                        {category.count > 0 && (
                          <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                            {category.count}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        
        {/* News List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <NewsList 
            articles={articles} 
            loading={loading} 
            error={error}
            query={query}
            pagination={pagination}
            onLoadMore={handleLoadMore}
            loadingMore={loadingMore}
            bookmarkedArticles={bookmarkedArticles}
            onBookmark={handleBookmark}
            onShare={handleShare}
          />
        </motion.div>
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
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}