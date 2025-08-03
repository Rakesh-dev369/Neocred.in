import React, { useState, useEffect } from 'react';
import { Newspaper, TrendingUp } from 'lucide-react';
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

  const fetchNews = async (searchQuery = '', page = 1, append = false) => {
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
      
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://neocred-backend.fly.dev';
      const url = `${API_BASE_URL}/api/news?${params}`;
      const response = await fetch(url);
      const data = await response.json();
      
      console.log('News API response:', data);
      if (data.success) {
        if (append) {
          setArticles(prev => [...prev, ...data.data]);
        } else {
          setArticles(data.data);
        }
        setPagination(data.pagination);
        setCurrentPage(page);
      } else {
        setError(data.error || 'Failed to fetch news');
      }
    } catch (err) {
      console.error('News fetch error:', err);
      setError(`Network error: ${err.message}`);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setArticles([]);
    fetchNews(searchQuery, 1, false);
  };

  const handleLoadMore = () => {
    if (pagination && pagination.has_next) {
      fetchNews(query, currentPage + 1, true);
    }
  };



  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Newspaper className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Finance News
            </h1>
          </div>
          <p className="text-lg text-blue-100 dark:text-blue-200 mb-6 max-w-3xl mx-auto">
            Stay updated with the latest financial news, RBI updates, and market insights from trusted sources across India.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span>Real-time Updates</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 mr-2">🤖</span>
              <span>AI Summaries</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 mr-2">🏷️</span>
              <span>Smart Tags</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Daily Digest */}
        <DigestCard />
        
        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} loading={loading} />
        
        {/* News List */}
        <NewsList 
          articles={articles} 
          loading={loading} 
          error={error} 
          query={query}
          pagination={pagination}
          onLoadMore={handleLoadMore}
          loadingMore={loadingMore}
        />
      </div>
    </div>
  );
}