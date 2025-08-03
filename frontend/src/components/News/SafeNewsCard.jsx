import React from 'react';
import { Clock, ExternalLink, Tag, Image } from 'lucide-react';

const SafeNewsCard = ({ article }) => {
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

        {/* Actions */}
        <div className="flex items-center justify-end">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
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