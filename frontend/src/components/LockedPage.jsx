import { Lock, Bell, Users, Calendar } from 'lucide-react';

const LockedPage = ({ pageName, description, icon: Icon = Lock }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
        {/* Lock Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-10 h-10 text-white" />
          </div>
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto -mt-10 border-4 border-white dark:border-gray-800">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Content */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {pageName} is Locked
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {description || `We're working hard to bring you an amazing ${pageName.toLowerCase()} experience. This feature is currently under development.`}
        </p>

        {/* Features Coming Soon */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center justify-center">
            <Calendar className="w-4 h-4 mr-2" />
            Coming Soon
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Stay tuned for updates on our social media channels
          </p>
        </div>

        {/* Social Media Links */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center justify-center">
            <Bell className="w-4 h-4 mr-2" />
            Get notified when it's live:
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://www.instagram.com/rakesh.neocred?igsh=MW1tOXBjdG80a2o1eg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center"
            >
              <Users className="w-4 h-4 mr-2" />
              Instagram
            </a>
          </div>
        </div>

        {/* Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="mt-6 w-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default LockedPage;