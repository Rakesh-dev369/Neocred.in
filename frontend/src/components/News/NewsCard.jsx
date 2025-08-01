import React, { useState } from 'react';
import { Clock, ExternalLink, Sparkles, Tag, Image } from 'lucide-react';

const NewsCard = ({ article, onSummaryClick }) => {
  const [showSummary, setShowSummary] = useState(false);
  const [summary, setSummary] = useState('');
  const [loadingSummary, setLoadingSummary] = useState(false);

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Recently';
    }
  };

  const getSourceColor = (source) => {
    const colors = {
      'RBI': 'bg-blue-100 text-blue-800',
      'PIB': 'bg-green-100 text-green-800',
      'MoneyControl': 'bg-purple-100 text-purple-800',
      'Business Standard': 'bg-orange-100 text-orange-800',
      'Google News': 'bg-gray-100 text-gray-800'
    };
    return colors[source] || 'bg-gray-100 text-gray-800';
  };

  const handleSummaryClick = async () => {
    if (showSummary && summary) {
      setShowSummary(false);
      return;
    }

    setLoadingSummary(true);
    try {
      const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8003';
      const response = await fetch(`${API_BASE}/api/news/summary?title=${encodeURIComponent(article.title)}&content=${encodeURIComponent(article.summary)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setSummary(data.summary);
        setShowSummary(true);
      } else {
        setSummary('Summary generation failed. Please try again.');
        setShowSummary(true);
      }
    } catch (error) {
      console.error('Error fetching summary:', error);
      setSummary('Unable to generate summary at the moment. Please try again later.');
      setShowSummary(true);
    } finally {
      setLoadingSummary(false);
    }
  };

  const getThumbnailUrl = (article) => {
    // Use real thumbnail if available
    if (article.thumbnail && 
        article.thumbnail !== 'null' && 
        article.thumbnail.trim() !== '' &&
        !article.thumbnail.includes('placeholder')) {
      return article.thumbnail;
    }
    
    // Generate placeholder only when no real image
    const sourceColors = {
      'RBI': '3B82F6',
      'PIB': '10B981', 
      'MoneyControl': '8B5CF6',
      'Business Standard': 'F59E0B',
      'Google News': '6B7280',
      'Google News - RBI': '1976D2',
      'Google News - Markets': '388E3C', 
      'Google News - MF': '7B1FA2',
      'Google News - Banking': 'F57C00',
      'NDTV Profit': 'D32F2F',
      'Economic Times': 'E65100'
    };
    
    const color = sourceColors[article.source] || '6B7280';
    const text = encodeURIComponent(article.source.replace(' ', '+'));
    
    return `https://via.placeholder.com/400x250/${color}/FFFFFF?text=${text}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md dark:hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
        <img
          src={getThumbnailUrl(article)}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            // If image fails to load, show fallback
            const fallbackUrl = `https://via.placeholder.com/400x250/6B7280/FFFFFF?text=${encodeURIComponent(article.source.replace(' ', '+'))}`;
            if (e.target.src !== fallbackUrl) {
              e.target.src = fallbackUrl;
            } else {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }
          }}
        />
        <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center">
          <div className="text-center text-white">
            <Image className="w-12 h-12 mx-auto mb-2 opacity-60" />
            <p className="text-sm font-medium">{article.source}</p>
          </div>
        </div>
        
        {/* Source Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSourceColor(article.source)} backdrop-blur-sm`}>
            {article.source}
          </span>
        </div>
        
        {/* Time Badge */}
        <div className="absolute top-3 right-3">
          <div className="flex items-center bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
            <Clock className="w-3 h-3 mr-1" />
            {formatDate(article.published)}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pb-4">


        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 leading-tight">
          {article.title}
        </h3>

        {/* Summary */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {article.summary}
        </p>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
            {article.tags.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">+{article.tags.length - 3} more</span>
            )}
          </div>
        )}
      </div>

      {/* AI Summary Section */}
      {showSummary && (
        <div className="px-6 pb-4">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
            <div className="flex items-center mb-2">
              <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-800 dark:text-blue-300">AI Summary</span>
            </div>
            {loadingSummary ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Generating summary...</span>
              </div>
            ) : (
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{summary}</p>
            )}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="px-6 pb-6 flex items-center justify-between">
        <button
          onClick={handleSummaryClick}
          disabled={loadingSummary}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors disabled:opacity-50"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          {loadingSummary ? 'Generating...' : showSummary ? 'Hide Summary' : 'AI Summary'}
        </button>

        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        >
          Read More
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default NewsCard;