import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
      aria-label="Toggle theme"
    >
      <div className="transition-transform duration-300">
        {isDark ? (
          <Sun className="w-5 h-5 transition-all duration-300" />
        ) : (
          <Moon className="w-5 h-5 transition-all duration-300" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;