import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  SparklesIcon, 
  Cog6ToothIcon, 
  MoonIcon, 
  SunIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

export default function ChatHeader({ 
  isOnline, 
  rateLimitWarning, 
  darkMode, 
  toggleDarkMode, 
  onShowHelp,
  onShowAnalytics,
  messageCount 
}) {
  const [showSettings, setShowSettings] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`sticky top-0 z-10 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} px-4 py-2`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => navigate('/')}
            className={`p-1.5 rounded hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'text-gray-600'}`}
            title="Back to Home"
          >
            <ArrowLeftIcon className="h-4 w-4" />
          </button>
          <div className="relative">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <SparklesIcon className="h-4 w-4 text-white" />
            </div>
            <div className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
          </div>
          <div>
            <h1 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              FinBot AI
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          <button
            onClick={toggleDarkMode}
            className={`p-1.5 rounded hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'text-gray-600'}`}
            title={darkMode ? 'Light mode' : 'Dark mode'}
          >
            {darkMode ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          </button>

          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`p-1.5 rounded hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'text-gray-600'}`}
            title="Settings"
          >
            <Cog6ToothIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {rateLimitWarning && (
        <div className="mt-1 px-2 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 text-xs rounded">
          ⏱️ Rate limit warning
        </div>
      )}

      {showSettings && (
        <div className={`absolute right-4 top-16 w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-4 z-20`}>
          <h3 className={`font-medium mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Settings</h3>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Dark Mode</span>
              <button
                onClick={toggleDarkMode}
                className={`w-10 h-6 rounded-full ${darkMode ? 'bg-blue-600' : 'bg-gray-300'} relative transition-colors`}
              >
                <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${darkMode ? 'translate-x-5' : 'translate-x-1'}`}></div>
              </button>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}