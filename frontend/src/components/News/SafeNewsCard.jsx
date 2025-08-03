import React, { useState } from 'react';
import { Clock, ExternalLink, Tag, Image, Sparkles } from 'lucide-react';

const SafeNewsCard = ({ article }) => {
  const [aiSummary, setAiSummary] = useState('');
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  
  if (!article) return null;

  // Safely extract and convert all data to strings
  const title = String(article.title || 'No Title');
  const summary = String(article.summary || 'No summary available');
  const source = String(article.source || 'Unknown Source');
  const link = String(article.link || '#');
  const published = String(article.published || '');
  const tags = Array.isArray(article.tags) ? article.tags.map(tag => String(tag)) : [];

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

  const handleAISummary = async () => {
    if (showSummary) {
      setShowSummary(false);
      return;
    }
    
    if (aiSummary) {
      setShowSummary(true);
      return;
    }
    
    setLoadingSummary(true);
    try {
      const response = await fetch('https://neocred-backend.fly.dev/api/news/summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, summary })
      });
      const data = await response.json();
      
      if (data.success) {
        setAiSummary(data.summary);
        setShowSummary(true);
      } else {
        setAiSummary('Unable to generate summary at the moment.');
        setShowSummary(true);
      }
    } catch (error) {
      setAiSummary('Failed to generate AI summary. Please try again.');
      setShowSummary(true);
    } finally {
      setLoadingSummary(false);
    }
  };

  const getSourceColor = (source) => {
    const colors = {
      'RBI': 'bg-blue-100 text-blue-800',
      'PIB': 'bg-green-100 text-green-800',
      'MoneyControl': 'bg-purple-100 text-purple-800',
      'Business Standard': 'bg-orange-100 text-orange-800',
      'Economic Times': 'bg-red-100 text-red-800',
      'LiveMint': 'bg-green-100 text-green-800',
      'Times of India Business': 'bg-blue-100 text-blue-800'
    };
    return colors[source] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md dark:hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Image className="w-12 h-12 mx-auto mb-2 opacity-60" />
            <p className="text-sm font-medium">{source}</p>
          </div>
        </div>
        
        {/* Source Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSourceColor(source)} backdrop-blur-sm`}>
            {source}
          </span>
        </div>
        
        {/* Time Badge */}
        <div className="absolute top-3 right-3">
          <div className="flex items-center bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
            <Clock className="w-3 h-3 mr-1" />
            {formatDate(published)}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* Summary */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {summary}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">+{tags.length - 3} more</span>
            )}
          </div>
        )}

        {/* AI Summary */}
        {showSummary && (
          <div className="mb-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
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
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{aiSummary}</p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleAISummary}
            disabled={loadingSummary}
            className="inline-flex items-center px-4 py-3 min-h-[44px] text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors disabled:opacity-50 touch-manipulation"
          >
            <Sparkles className="w-4 h-4 mr-1" />
            {loadingSummary ? 'Generating...' : showSummary ? 'Hide Summary' : 'AI Summary'}
          </button>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-3 min-h-[44px] text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors touch-manipulation"
          >
            Read More
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SafeNewsCard;