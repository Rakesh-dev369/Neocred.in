import React, { useState, useEffect } from 'react';
import { Newspaper, TrendingUp } from 'lucide-react';
import SearchBar from '../components/News/SearchBar';
import NewsList from '../components/News/NewsList';
import DigestCard from '../components/News/DigestCard';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const fetchNews = async (searchQuery = '') => {
    setLoading(true);
    setError(null);
    try {
      const url = searchQuery 
        ? `http://localhost:8002/api/news?q=${encodeURIComponent(searchQuery)}`
        : 'http://localhost:8002/api/news';
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.success) {
        setArticles(data.data);
      } else {
        setError('Failed to fetch news');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    fetchNews(searchQuery);
  };



  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Newspaper className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Finance News
            </h1>
          </div>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto">
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
        />
      </div>
    </div>
  );
}