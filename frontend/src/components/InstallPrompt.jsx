import React from 'react';
import { Download, X } from 'lucide-react';
import { usePWA } from '../hooks/usePWA';

const InstallPrompt = () => {
  const { isInstallable, installApp } = usePWA();
  const [dismissed, setDismissed] = React.useState(false);

  if (!isInstallable || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 z-50">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center">
          <Download className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="font-semibold text-gray-900 dark:text-white">Install NeoCred</h3>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        Install our app for quick access to financial tools and offline support.
      </p>
      <div className="flex space-x-2">
        <button
          onClick={installApp}
          className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Install
        </button>
        <button
          onClick={() => setDismissed(true)}
          className="px-3 py-2 text-gray-600 dark:text-gray-400 text-sm hover:text-gray-800 dark:hover:text-gray-200"
        >
          Later
        </button>
      </div>
    </div>
  );
};

export default InstallPrompt;