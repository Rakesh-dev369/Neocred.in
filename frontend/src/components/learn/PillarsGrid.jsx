import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ClockIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const PillarsGrid = ({ pillars, onPillarStart, hoveredPillar, setHoveredPillar }) => {
  const getDifficultyBg = (difficulty) => {
    switch(difficulty) {
      case 1: return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200';
      case 2: return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200';
      case 3: return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200';
      default: return 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-200';
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {pillars.map((pillar, index) => {
        const isCompleted = pillar.progress === 100;
        const isInProgress = pillar.progress > 0 && pillar.progress < 100;
        
        return (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
            onMouseEnter={() => setHoveredPillar(pillar.id)}
            onMouseLeave={() => setHoveredPillar(null)}
          >
            <Link 
              to={pillar.path}
              onClick={() => onPillarStart(pillar)}
              className={`block relative overflow-hidden bg-gradient-to-br ${pillar.bgGradient} dark:${pillar.darkBgGradient} rounded-2xl p-6 transition-all duration-500 border border-gray-200 dark:border-gray-700 h-full hover:shadow-2xl group-hover:border-transparent group-hover:-translate-y-2`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="absolute top-3 right-3">
                {isCompleted ? (
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-0.5 rounded-full text-xs font-medium">
                    ✓ Complete
                  </div>
                ) : isInProgress ? (
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full text-xs font-medium">
                    {pillar.progress}%
                  </div>
                ) : pillar.popular ? (
                  <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-2 py-0.5 rounded-full text-xs font-medium">
                    🔥 Popular
                  </div>
                ) : null}
              </div>
              
              <div className="relative z-10 pt-2">
                <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300 mb-4">
                  {pillar.icon}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 leading-tight">
                  {pillar.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {pillar.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <ClockIcon className="w-3 h-3 mr-1" />
                    {pillar.duration}
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <BookOpenIcon className="w-3 h-3 mr-1" />
                    {pillar.sections} sections
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${pillar.gradient} transition-all duration-500`}
                    style={{ width: `${pillar.progress}%` }}
                  />
                </div>
                
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyBg(pillar.difficulty)} mb-4 inline-block`}>
                  {pillar.difficultyLabel}
                </span>
                
                <div className={`flex items-center font-medium transition-colors ${
                  isCompleted ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400'
                }`}>
                  {isCompleted ? '✓ Completed • Review' : isInProgress ? 'Continue Learning' : 'Start Learning'}
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
                
                {pillar.testimonial && hoveredPillar === pillar.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg text-xs text-gray-600 dark:text-gray-400 italic"
                  >
                    "{pillar.testimonial}"
                  </motion.div>
                )}
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PillarsGrid;