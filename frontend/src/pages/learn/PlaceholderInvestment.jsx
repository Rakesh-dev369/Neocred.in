import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function PlaceholderInvestment({ title, emoji, description, backLink = "/learn/market-linked-investments" }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-blue-200 dark:border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to={backLink}
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Market-Linked Investments
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">{emoji}</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
              <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12">
            <span className="text-6xl mb-6 block">{emoji}</span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Coming Soon!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We're working on creating comprehensive content for {title}. This page will include detailed information about 
              investment strategies, risk analysis, platform comparisons, and expert tips.
            </p>
            <div className="space-y-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                In the meantime, explore our other investment guides:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/learn/direct-equity" 
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                >
                  Direct Equity
                </Link>
                <Link 
                  to="/learn/equity-mutual-funds" 
                  className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                >
                  Mutual Funds
                </Link>
                <Link 
                  to="/learn/reits" 
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                >
                  REITs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}