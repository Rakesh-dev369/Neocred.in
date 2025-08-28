import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function RetirementInvestments() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-b border-orange-200 dark:border-orange-700">
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
            <span className="text-4xl">🏖️</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Retirement & Long-Term Wealth</h1>
              <p className="text-gray-600 dark:text-gray-300">Build wealth for your golden years</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20">
          <div className="text-6xl mb-6">🏖️</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Retirement & Long-Term Wealth</h2>
          <p className="text-gray-600 dark:text-gray-400">Content coming soon...</p>
        </div>
      </div>
    </div>
  );
}