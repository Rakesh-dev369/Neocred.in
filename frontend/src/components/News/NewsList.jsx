import React from 'react';
import SafeNewsCard from './SafeNewsCard';
import SwipeableCard from '../SwipeableCard';
import { NewsCardSkeleton } from '../SkeletonLoader';
import { Newspaper, AlertCircle } from 'lucide-react';

const NewsList = ({ articles, loading, error, query, pagination, onLoadMore, loadingMore }) => {
  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <NewsCardSkeleton key={index} />
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
          <div key={`${article.link}-${index}`} className="md:contents">
            <div className="block md:hidden">
              <SwipeableCard
                onSwipeLeft={() => window.open(article.link, '_blank')}
                onSwipeRight={() => console.log('Bookmark feature coming soon')}
              >
                <SafeNewsCard article={article} />
              </SwipeableCard>
            </div>
            <div className="hidden md:block">
              <SafeNewsCard article={article} />
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {pagination && pagination.has_next && (
        <div className="mt-12 text-center">
          <button
            onClick={onLoadMore}
            disabled={loadingMore}
            className="inline-flex items-center px-8 py-4 min-h-[48px] bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl touch-manipulation"
          >
            {loadingMore ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Loading More...
              </>
            ) : (
              <>
                <Newspaper className="w-5 h-5 mr-2" />
                Load More News
              </>
            )}
          </button>
          
          {pagination && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              Showing {articles.length} of {pagination.total_items} articles
              {pagination.total_pages > 1 && (
                <span> • Page {pagination.page} of {pagination.total_pages}</span>
              )}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsList;