import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const breadcrumbNames = {
    'learn': 'Learn',
    'tools': 'Tools',
    'news': 'News',
    'explore': 'Explore',
    'rewards': 'Rewards',
    'contact': 'Contact',
    'chatbot': 'AI Assistant',
    'about': 'About'
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
      <Link 
        to="/" 
        className="flex items-center hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = breadcrumbNames[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);

        return (
          <React.Fragment key={pathname}>
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="text-gray-900 dark:text-white font-medium">
                {displayName}
              </span>
            ) : (
              <Link 
                to={routeTo}
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;