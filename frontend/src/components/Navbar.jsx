import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ROUTES } from '../utils/constants';
import HorizontalLogo from './HorizontalLogo';
import { ThemeToggle } from './ui';
import { useTheme } from '../contexts/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const navigation = [
    { name: 'Home', href: ROUTES.HOME },
    { name: 'Learn', href: ROUTES.LEARN },
    { name: 'Tools', href: ROUTES.TOOLS },
    { name: 'News', href: ROUTES.NEWS },
    { name: 'Explore', href: ROUTES.EXPLORE },
    { name: 'Rewards', href: ROUTES.REWARDS }
  ];

  return (
    <nav className="glass-nav shadow-lg sticky top-0 z-50" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to={ROUTES.HOME} className="flex-shrink-0 p-2 sm:p-3">
              <img 
                src="/logo.png" 
                alt="NeoCred" 
                className="h-10 w-auto max-w-[160px] sm:h-12 sm:max-w-[200px] md:h-14 md:max-w-[240px] hover:scale-105 transition-all duration-200 drop-shadow-sm" 
                style={{ 
                  imageRendering: 'crisp-edges',
                  filter: 'contrast(1.2) brightness(1.1) saturate(1.1)',
                  WebkitFontSmoothing: 'antialiased'
                }}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.div key={item.name} className="relative">
                <Link
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative ${
                    location.pathname === item.href
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors touch-manipulation"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.div 
              className="px-4 pt-4 pb-4 space-y-2 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    className="block px-4 py-3 min-h-[44px] text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors touch-manipulation"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}