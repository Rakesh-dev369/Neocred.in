import React from 'react';
import NewsCard from './NewsCard';
import { Newspaper, AlertCircle } from 'lucide-react';

const NewsList = ({ articles, loading, error, query }) => {
  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden animate-pulse">
            {/* Thumbnail skeleton */}
            <div className="h-48 bg-gray-200 dark:bg-gray-600"></div>
            {/* Content skeleton */}
            <div className="p-6">
              <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-2/3 mb-4"></div>
              <div className="flex gap-2 mb-4">
                <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded-full w-16"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded-full w-20"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-8 bg-gray-200 dark:bg-gray-600 rounded w-24"></div>
                <div className="h-8 bg-gray-200 dark:bg-gray-600 rounded w-20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-8 text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-red-800 dark:text-red-400 mb-2">Error Loading News</h3>
        <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 text-center">
        <Newspaper className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
          {query ? 'No Results Found' : 'No News Available'}
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          {query 
            ? `No finance news found for "${query}". Try different keywords.`
            : 'No finance news available at the moment. Please check back later.'
          }
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Results Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {query ? `Search Results for "${query}"` : 'Latest Finance News'}
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {articles.length} article{articles.length !== 1 ? 's' : ''} found
          </span>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article, index) => (
          <NewsCard
            key={`${article.link}-${index}`}
            article={article}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;