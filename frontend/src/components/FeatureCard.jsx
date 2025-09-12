import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  link, 
  badge, 
  index = 0,
  delay = 0
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: 50,
        scale: 0.9
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        scale: 1
      } : {}}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        duration: 0.6,
        delay: delay + index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass-card transition-all duration-500 relative h-full flex flex-col overflow-hidden group"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isHovered ? 0.1 : 0,
          scale: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg"
      />
      
      {badge && (
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ 
            delay: delay + index * 0.1 + 0.3,
            type: "spring",
            stiffness: 200
          }}
          className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg z-10"
        >
          {badge}
        </motion.div>
      )}
      
      <motion.div 
        initial={{ scale: 0, rotate: -90 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        whileHover={{ 
          scale: 1.2,
          rotate: 10,
          backgroundColor: "rgba(59, 130, 246, 0.2)"
        }}
        transition={{ 
          delay: delay + index * 0.1 + 0.2,
          type: "spring",
          stiffness: 150
        }}
        className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg mb-4 relative z-10"
      >
        <Icon className="h-6 w-6 text-gray-900 dark:text-white" />
      </motion.div>
      
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ 
          delay: delay + index * 0.1 + 0.4,
          duration: 0.5
        }}
        className="text-xl font-semibold text-gray-900 dark:text-white mb-2 relative z-10"
      >
        {title}
      </motion.h3>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          delay: delay + index * 0.1 + 0.6,
          duration: 0.5
        }}
        className="text-gray-700 dark:text-white/70 mb-4 flex-1 relative z-10"
      >
        {description}
      </motion.p>
      
      {link && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            delay: delay + index * 0.1 + 0.8,
            duration: 0.5
          }}
          className="mt-auto relative z-10"
        >
          <Link
            to={link}
            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium inline-flex items-center transition-all duration-200 group-hover:translate-x-1"
          >
            Learn more
            <motion.svg 
              className="ml-1 h-4 w-4" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              animate={isHovered ? { x: 3, scale: 1.1 } : { x: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </motion.svg>
          </Link>
        </motion.div>
      )}
      
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
        style={{ width: '100%' }}
      />
    </motion.div>
  );
}