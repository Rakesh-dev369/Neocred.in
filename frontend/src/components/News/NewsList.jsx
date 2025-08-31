import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeNewsCard from './SafeNewsCard';
import SwipeableCard from '../SwipeableCard';
import { NewsCardSkeleton } from '../SkeletonLoader';
import { Newspaper, AlertCircle, RefreshCw } from 'lucide-react';

const NewsList = ({ articles, loading, error, query, pagination, onLoadMore, loadingMore, bookmarkedArticles, onBookmark, onShare }) => {
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
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-lg font-semibold text-red-800 dark:text-red-400 mb-2">Error Loading News</h3>
        <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </button>
      </motion.div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-6" />
        </motion.div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
          {query ? 'No Results Found' : 'No News Available'}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
          {query 
            ? `No finance news found for "${query}". Try different keywords or check our trending topics.`
            : 'No finance news available at the moment. Our team is working to bring you the latest updates.'
          }
        </p>
        {query && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Clear Search
          </motion.button>
        )}
      </motion.div>
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
        <AnimatePresence mode="popLayout">
          {articles.map((article, index) => {
            const isBookmarked = bookmarkedArticles?.some(b => b.link === article.link);
            
            return (
              <motion.div 
                key={`${article.link}-${index}`} 
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.05,
                  layout: { duration: 0.3 }
                }}
                className="md:contents"
              >
                <div className="block md:hidden">
                  <SwipeableCard
                    onSwipeLeft={() => window.open(article.link, '_blank')}
                    onSwipeRight={() => onBookmark?.(article)}
                  >
                    <SafeNewsCard 
                      article={article} 
                      isBookmarked={isBookmarked}
                      onBookmark={onBookmark}
                      onShare={onShare}
                    />
                  </SwipeableCard>
                </div>
                <div className="hidden md:block">
                  <SafeNewsCard 
                    article={article} 
                    isBookmarked={isBookmarked}
                    onBookmark={onBookmark}
                    onShare={onShare}
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      {pagination && pagination.has_next && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <motion.button
            onClick={onLoadMore}
            disabled={loadingMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 min-h-[48px] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-blue-400 disabled:to-purple-400 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl touch-manipulation"
          >
            {loadingMore ? (
              <>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="rounded-full h-5 w-5 border-b-2 border-white mr-3"
                />
                Loading More...
              </>
            ) : (
              <>
                <Newspaper className="w-5 h-5 mr-2" />
                Load More News
              </>
            )}
          </motion.button>
          
          {pagination && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 space-y-2"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing {articles.length} of {pagination.total_items} articles
                {pagination.total_pages > 1 && (
                  <span> • Page {pagination.page} of {pagination.total_pages}</span>
                )}
              </p>
              
              {/* Progress Bar */}
              <div className="max-w-xs mx-auto bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(articles.length / pagination.total_items) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default NewsList;