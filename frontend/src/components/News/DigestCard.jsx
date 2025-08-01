import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles, TrendingUp, RefreshCw } from 'lucide-react';

const DigestCard = () => {
  const [digest, setDigest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDigest = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:8002/api/news/daily-digest');
      const data = await response.json();
      
      if (data.success) {
        setDigest(data.digest);
      } else {
        setError('Failed to load digest');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDigest();
  }, []);

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Today';
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-100 dark:border-blue-800 p-6 animate-pulse">
        <div className="flex items-center justify-between mb-4">
          <div className="h-6 bg-blue-200 dark:bg-blue-700 rounded w-48"></div>
          <div className="h-8 bg-blue-200 dark:bg-blue-700 rounded w-8"></div>
        </div>
        <div className="h-4 bg-blue-200 dark:bg-blue-700 rounded w-32 mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-blue-200 dark:bg-blue-700 rounded w-full"></div>
          <div className="h-4 bg-blue-200 dark:bg-blue-700 rounded w-3/4"></div>
          <div className="h-4 bg-blue-200 dark:bg-blue-700 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-red-800 dark:text-red-400 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Today's Digest
          </h3>
          <button
            onClick={fetchDigest}
            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
        <p className="text-red-600 dark:text-red-400">{error}</p>
      </div>
    );
  }

  if (!digest) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-100 dark:border-blue-800 p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          🗞️ Today's Digest
        </h3>
        <button
          onClick={fetchDigest}
          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
          title="Refresh digest"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Date */}
      <p className="text-sm text-blue-700 dark:text-blue-400 mb-4 flex items-center">
        <TrendingUp className="w-4 h-4 mr-1" />
        {formatDate(digest.date)}
      </p>

      {/* AI Overview */}
      <div className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-5 mb-4 border border-blue-200 dark:border-blue-700">
        <div className="flex items-center mb-3">
          <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
          <span className="text-base font-semibold text-blue-800 dark:text-blue-300">AI Overview</span>
        </div>
        <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
          <div 
            className="whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: digest.overview
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/### (.*?)\n/g, '<h3 class="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2 mt-4">$1</h3>')
                .replace(/- \*\*(.*?)\*\*/g, '• <strong>$1</strong>')
                .replace(/^- (.*?)$/gm, '• $1')
            }}
          />
        </div>
      </div>

      {/* Top Headlines */}
      {digest.top_news && digest.top_news.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-3">Top Headlines ({digest.total_count})</h4>
          <div className="space-y-2">
            {digest.top_news.slice(0, 6).map((news, index) => (
              <div key={index} className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 border border-blue-100 dark:border-blue-700">
                <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-1 line-clamp-2">
                  {news.title}
                </h5>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                    {news.source}
                  </span>
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                  >
                    Read →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DigestCard;