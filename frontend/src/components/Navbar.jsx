import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ROUTES } from '../utils/constants';
import HorizontalLogo from './HorizontalLogo';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: ROUTES.HOME },
    { name: 'Learn', href: ROUTES.LEARN },
    { name: 'Tools', href: ROUTES.TOOLS },
    { name: 'News', href: ROUTES.NEWS },
    { name: 'Explore', href: ROUTES.EXPLORE },
    { name: 'Rewards', href: ROUTES.REWARDS }
  ];

  return (
    <nav className="glass-nav shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to={ROUTES.HOME} className="flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="NeoCred" 
                className="h-10 w-auto max-w-[180px] sm:h-12 sm:max-w-[200px] md:h-14 md:max-w-[220px] hover:opacity-80 transition-opacity duration-200" 
                style={{ 
                  imageRendering: 'crisp-edges',
                  filter: 'contrast(1.1) brightness(1.05)',
                  WebkitFontSmoothing: 'antialiased'
                }}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Link to={ROUTES.CONTACT} className="btn-primary">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
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

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to={ROUTES.CONTACT}
              className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}