import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function AlternativeInvestments() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-b border-purple-200 dark:border-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/learn/investments-capital"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Investments & Capital
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">💎</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Alternative Investments (For advanced users)</h1>
              <p className="text-gray-600 dark:text-gray-300">Advanced investment options for experienced investors</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20">
          <div className="text-6xl mb-6">💎</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Alternative Investments (For advanced users)</h2>
          <p className="text-gray-600 dark:text-gray-400">Content coming soon...</p>
        </div>
      </div>
    </div>
  );
}