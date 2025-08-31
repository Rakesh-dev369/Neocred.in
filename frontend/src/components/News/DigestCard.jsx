import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Calendar, Sparkles, TrendingUp, RefreshCw, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DigestCard = () => {
  const [digest, setDigest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDigest = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8001';
      
      // Add timeout and better error handling
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const response = await fetch(`${API_BASE}/api/digest`, {
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
      
      const data = await response.json();
      
      if (data.success) {
        setDigest(data);
      } else {
        setError(data.error || 'Failed to load digest');
      }
    } catch (err) {
      console.error('Digest API error:', err);
      let errorMessage = 'Unable to load digest. Please try again.';
      
      if (err.name === 'AbortError') {
        errorMessage = 'Request timeout. The server is taking too long to respond.';
      } else if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
        errorMessage = 'Cannot connect to server. Please check if the backend is running.';
      } else if (err.message.includes('Server error')) {
        errorMessage = 'Server error. Please try again later.';
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

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
        <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
        <button
          onClick={fetchDigest}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!digest) {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-100 dark:border-blue-800 p-6 mb-8"
    >
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
          <p className="mb-4">{digest.summary}</p>
          <div className="space-y-2">
            {digest.highlights?.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>{String(highlight)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Summary */}
      {digest.market_summary && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-3">Market Summary</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(digest.market_summary).map(([key, value]) => (
              <div key={key} className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 border border-blue-100 dark:border-blue-700 text-center">
                <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  {key.replace('_', ' ')}
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  {String(value)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default DigestCard;