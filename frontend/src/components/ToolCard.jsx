import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ToolCard({ icon: Icon, title, description, path, category }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={path} className="block">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          y: -8,
          scale: 1.02,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="card transition-all duration-300 relative overflow-hidden group"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.05 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg"
        />
        
        <div className="flex items-center justify-between mb-4 relative z-10">
          <motion.div 
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              backgroundColor: "rgb(59 130 246 / 0.1)"
            }}
            className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg transition-colors duration-300"
          >
            <motion.div
              animate={isHovered ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="h-6 w-6 text-black dark:text-white" />
            </motion.div>
          </motion.div>
          {category && (
            <motion.span 
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full transition-all duration-200"
            >
              {category}
            </motion.span>
          )}
        </div>
        
        <motion.h3 
          className="text-lg font-semibold text-black dark:text-white mb-2"
          animate={isHovered ? { x: 2 } : { x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 dark:text-gray-400 text-sm mb-4"
          animate={isHovered ? { opacity: 0.8 } : { opacity: 1 }}
        >
          {description}
        </motion.p>
        
        <motion.div 
          className="flex items-center text-black dark:text-white font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
          animate={isHovered ? { x: 4 } : { x: 0 }}
        >
          Try Now
          <motion.svg 
            className="ml-1 h-4 w-4" 
            fill="currentColor" 
            viewBox="0 0 20 20"
            animate={isHovered ? { x: 2, scale: 1.1 } : { x: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </motion.svg>
        </motion.div>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
          style={{ width: '100%' }}
        />
      </motion.div>
    </Link>
  );
}