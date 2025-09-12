import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    <motion.nav 
      className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Link 
          to="/" 
          className="flex items-center hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className="w-4 h-4" />
          </motion.div>
        </Link>
      </motion.div>
      
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = breadcrumbNames[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);

        return (
          <React.Fragment key={pathname}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: (index + 1) * 0.1 }}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: (index + 1) * 0.1 + 0.1 }}
            >
              {isLast ? (
                <span className="text-gray-900 dark:text-white font-medium">
                  {displayName}
                </span>
              ) : (
                <Link 
                  to={routeTo}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {displayName}
                  </motion.span>
                </Link>
              )}
            </motion.div>
          </React.Fragment>
        );
      })}
    </motion.nav>
  );
};

export default Breadcrumbs;