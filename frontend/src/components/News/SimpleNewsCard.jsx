import React from 'react';
import { Clock, ExternalLink } from 'lucide-react';

const SimpleNewsCard = ({ article }) => {
  if (!article) return null;

  const title = String(article.title || 'No Title');
  const summary = String(article.summary || 'No summary available');
  const source = String(article.source || 'Unknown Source');
  const link = String(article.link || '#');
  const published = String(article.published || '');

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Recently';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
      <div className="flex items-start justify-between mb-3">
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {source}
        </span>
        <div className="flex items-center text-gray-500 text-xs">
          <Clock className="w-3 h-3 mr-1" />
          {formatDate(published)}
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
        {summary}
      </p>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
      >
        Read More
        <ExternalLink className="w-4 h-4 ml-2" />
      </a>
    </div>
  );
};

export default SimpleNewsCard;