import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Coins } from "lucide-react";

const pillars = [
  {
    id: 'personal-finance',
    emoji: "💰",
    title: "Personal Finance",
    description: "Budgeting, saving, and personal money management",
    lessons: 12,
    route: '/learn/personal-finance'
  },
  {
    id: 'banking-payments',
    emoji: "🏦",
    title: "Banking & Payments",
    description: "Banking services, digital payments, and fintech",
    lessons: 7,
    route: '/learn/banking-payments'
  },
  {
    id: 'insurance-risk',
    emoji: "🛡️",
    title: "Insurance & Risk",
    description: "Risk management and insurance planning",
    lessons: 6,
    route: '/learn/insurance-risk'
  },
  {
    id: 'investments-capital',
    emoji: "📈",
    title: "Investments & Capital",
    description: "Stock markets, mutual funds, and capital markets",
    lessons: 7,
    route: '/learn/investments-capital'
  },
  {
    id: 'corporate-finance',
    emoji: "🏢",
    title: "Corporate Finance",
    description: "Business finance and corporate financial decisions",
    lessons: 14,
    route: '/learn/corporate-finance'
  },
  {
    id: 'govt-public-finance',
    emoji: "🏛️",
    title: "Government & Public Finance",
    description: "Public policy, taxation, and finance",
    lessons: 6,
    route: '/learn/govt-public-finance'
  },
  {
    id: 'alt-fintech',
    emoji: "⚡",
    title: "Alternative & Fintech",
    description: "Cryptocurrency, fintech innovations, and alternatives",
    lessons: 16,
    route: '/learn/alt-fintech'
  },
  {
    id: 'international-trade',
    emoji: "🌍",
    title: "International Trade",
    description: "Global finance, forex, and international markets",
    lessons: 15,
    route: '/learn/international-trade'
  },
];

const PillarGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [completedLessons, setCompletedLessons] = useState({});
  const [userPoints, setUserPoints] = useState(0);
  
  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('learningProgress');
    const savedPoints = localStorage.getItem('learningPoints');
    
    if (savedProgress) setCompletedLessons(JSON.parse(savedProgress));
    if (savedPoints) setUserPoints(parseInt(savedPoints));
  }, []);
  
  const getPillarProgress = (pillar) => {
    const totalLessons = pillar.lessons;
    const completedCount = Object.keys(completedLessons).filter(key => 
      key.startsWith(`${pillar.id}-`)
    ).length;
    return Math.round((completedCount / totalLessons) * 100);
  };
  
  const filteredPillars = pillars.filter(pillar => {
    const matchesSearch = pillar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pillar.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });
  
  return (
    <div id="pillars" className="text-center" data-section="pillars">
      {/* Points Display */}
      {userPoints > 0 && (
        <div className="mb-6 flex justify-center">
          <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-xl inline-flex items-center gap-2 px-4 py-2">
            <Coins className="h-5 w-5 text-yellow-400" />
            <span className="text-yellow-600 dark:text-yellow-400 font-bold">{userPoints.toLocaleString()}</span>
            <span className="text-gray-700 dark:text-white/70 text-sm">Learning Points</span>
          </div>
        </div>
      )}
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        8 Pillars of Financial Literacy
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Comprehensive learning paths covering all aspects of modern finance
      </p>
      
      {/* Search */}
      <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl mb-8 max-w-md mx-auto">
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-white/50">🔍</span>
          <input
            type="text"
            placeholder="Search pillars..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPillars.map((pillar, index) => {
          const progress = getPillarProgress(pillar);
          
          return (
            <Link to={pillar.route} key={index}>
              <motion.div
                className="bg-gray-100 dark:bg-[#111] border border-gray-300 dark:border-gray-800 rounded-2xl p-5 hover:border-gray-600 dark:hover:border-white transition-all duration-300 shadow-lg cursor-pointer relative overflow-hidden h-40 flex flex-col justify-between"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
              {/* Progress Bar */}
              {progress > 0 && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-700">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
              
              <div className="flex-1 flex flex-col">
                <div className="text-4xl mb-3">{pillar.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{pillar.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 flex-1">{pillar.description}</p>
              </div>
              
              <div className="flex justify-between items-center mt-3">
                <p className="text-gray-600 dark:text-gray-500 text-xs">{pillar.lessons} modules</p>
                {progress > 0 && (
                  <div className="flex items-center gap-1">
                    <span className="text-green-400 text-xs font-medium">{progress}%</span>
                    <span className="text-green-400">✓</span>
                  </div>
                )}
              </div>
              
              {progress === 100 && (
                <div className="absolute top-2 right-2">
                  <span className="text-yellow-400">🏆</span>
                </div>
              )}
              </motion.div>
            </Link>
          );
        })}
      </div>

    </div>
  );
};

export default PillarGrid;