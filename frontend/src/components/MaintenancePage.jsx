import { ArrowLeft, Settings, Clock, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const MaintenancePage = ({ pageName = "This page" }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-4">
              <Settings className="w-8 h-8 text-orange-600 dark:text-orange-400 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Under Maintenance
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {pageName} is temporarily unavailable while we make improvements.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400 mb-3">
              <Clock className="w-4 h-4 mr-2" />
              We'll be back soon!
            </div>
            <div className="text-center">
              <a
                href="https://www.instagram.com/rakesh.neocred?igsh=MW1tOXBjdG80a2o1eg=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors cursor-pointer"
              >
                <Instagram className="w-4 h-4 mr-1" />
                Follow for updates
              </a>
            </div>
          </div>

          <Link
            to="/"
            className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;