import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Coins } from "lucide-react";
import personalFinanceData from '../content/pillars/personal-finance.json';
import bankingPaymentsData from '../content/pillars/banking-payments.json';
import insuranceRiskData from '../content/pillars/insurance-risk.json';
import investmentsCapitalData from '../content/pillars/investments-capital.json';
import corporateFinanceData from '../content/pillars/corporate-finance.json';
import govtPublicFinanceData from '../content/pillars/govt-public-finance.json';
import altFintechData from '../content/pillars/alt-fintech.json';
import internationalTradeData from '../content/pillars/international-trade.json';

const pillars = [
  {
    id: 'personal-finance',
    emoji: "💰",
    title: "Personal Finance",
    description: "Budgeting, saving, and personal money management",
    lessons: 12,
    data: personalFinanceData
  },
  {
    id: 'banking-payments',
    emoji: "🏦",
    title: "Banking & Payments",
    description: "Banking services, digital payments, and fintech",
    lessons: 7,
    data: bankingPaymentsData
  },
  {
    id: 'insurance-risk',
    emoji: "🛡️",
    title: "Insurance & Risk",
    description: "Risk management and insurance planning",
    lessons: 6,
    data: insuranceRiskData
  },
  {
    id: 'investments-capital',
    emoji: "📈",
    title: "Investments & Capital",
    description: "Stock markets, mutual funds, and capital markets",
    lessons: 7,
    data: investmentsCapitalData
  },
  {
    id: 'corporate-finance',
    emoji: "🏢",
    title: "Corporate Finance",
    description: "Business finance and corporate financial decisions",
    lessons: 14,
    data: corporateFinanceData
  },
  {
    id: 'govt-public-finance',
    emoji: "🏛️",
    title: "Government & Public Finance",
    description: "Public policy, taxation, and government finance",
    lessons: 13,
    data: govtPublicFinanceData
  },
  {
    id: 'alt-fintech',
    emoji: "⚡",
    title: "Alternative & Fintech",
    description: "Cryptocurrency, fintech innovations, and alternatives",
    lessons: 16,
    data: altFintechData
  },
  {
    id: 'international-trade',
    emoji: "🌍",
    title: "International Trade",
    description: "Global finance, forex, and international markets",
    lessons: 15,
    data: internationalTradeData
  },
];

const PillarGrid = () => {
  const [selectedPillar, setSelectedPillar] = useState(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [viewMode, setViewMode] = useState('overview'); // 'overview', 'lesson', 'progress'
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [completedLessons, setCompletedLessons] = useState({});
  const [bookmarkedLessons, setBookmarkedLessons] = useState(new Set());
  const [userPoints, setUserPoints] = useState(0);
  const [showPointsAnimation, setShowPointsAnimation] = useState(false);
  const [videoExpanded, setVideoExpanded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [theaterMode, setTheaterMode] = useState(false);
  
  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('learningProgress');
    const savedBookmarks = localStorage.getItem('bookmarkedLessons');
    const savedPoints = localStorage.getItem('learningPoints');
    
    if (savedProgress) setCompletedLessons(JSON.parse(savedProgress));
    if (savedBookmarks) setBookmarkedLessons(new Set(JSON.parse(savedBookmarks)));
    if (savedPoints) setUserPoints(parseInt(savedPoints));
  }, []);
  
  // Save progress to localStorage
  const saveProgress = (pillarId, lessonIndex) => {
    const key = `${pillarId}-${lessonIndex}`;
    const newCompleted = { ...completedLessons, [key]: true };
    setCompletedLessons(newCompleted);
    localStorage.setItem('learningProgress', JSON.stringify(newCompleted));
    
    // Award points
    const newPoints = userPoints + 25;
    setUserPoints(newPoints);
    localStorage.setItem('learningPoints', newPoints.toString());
    
    // Show animation
    setShowPointsAnimation(true);
    setTimeout(() => setShowPointsAnimation(false), 2000);
  };
  
  const toggleBookmark = (pillarId, lessonIndex) => {
    const key = `${pillarId}-${lessonIndex}`;
    const newBookmarks = new Set(bookmarkedLessons);
    
    if (newBookmarks.has(key)) {
      newBookmarks.delete(key);
    } else {
      newBookmarks.add(key);
    }
    
    setBookmarkedLessons(newBookmarks);
    localStorage.setItem('bookmarkedLessons', JSON.stringify([...newBookmarks]));
  };
  
  const getPillarProgress = (pillar) => {
    if (!pillar.data || !pillar.data.lessons) return 0;
    const totalLessons = pillar.data.lessons.length;
    const completedCount = pillar.data.lessons.filter((_, idx) => 
      completedLessons[`${pillar.id}-${idx}`]
    ).length;
    return Math.round((completedCount / totalLessons) * 100);
  };
  
  const filteredPillars = pillars.filter(pillar => {
    const matchesSearch = pillar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pillar.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });
  
  const openPillar = (pillar) => {
    setSelectedPillar(pillar);
    setCurrentLessonIndex(0);
    setViewMode('overview');
  };
  
  const closePillar = () => {
    setSelectedPillar(null);
    setCurrentLessonIndex(0);
    setViewMode('overview');
  };
  
  const goToLesson = (index) => {
    setCurrentLessonIndex(index);
    setViewMode('lesson');
  };
  
  const nextLesson = () => {
    if (selectedPillar && selectedPillar.data && currentLessonIndex < selectedPillar.data.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };
  
  const prevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (theaterMode) {
        if (e.key === 'Escape') {
          setTheaterMode(false);
        }
        return;
      }
      
      if (!selectedPillar) return;
      
      if (e.key === 'Escape') {
        closePillar();
      } else if (e.key === 'ArrowLeft' && viewMode === 'lesson') {
        prevLesson();
      } else if (e.key === 'ArrowRight' && viewMode === 'lesson') {
        nextLesson();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedPillar, currentLessonIndex, viewMode, theaterMode]);
  
  return (
    <div id="pillars" className="text-center" data-section="pillars">
      {/* Points Display */}
      {userPoints > 0 && (
        <div className="mb-6 flex justify-center">
          <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-xl inline-flex items-center gap-2 px-4 py-2 relative">
            <Coins className="h-5 w-5 text-yellow-400" />
            <span className="text-yellow-600 dark:text-yellow-400 font-bold">{userPoints.toLocaleString()}</span>
            <span className="text-gray-700 dark:text-white/70 text-sm">Learning Points</span>
            {showPointsAnimation && (
              <motion.span
                initial={{ opacity: 0, y: 0, scale: 1 }}
                animate={{ opacity: 1, y: -20, scale: 1.2 }}
                exit={{ opacity: 0, y: -40, scale: 0.8 }}
                className="text-green-400 font-bold absolute -top-2 right-0"
              >
                +25
              </motion.span>
            )}
          </div>
        </div>
      )}
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        8 Pillars of Financial Literacy
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Comprehensive learning paths covering all aspects of modern finance
      </p>
      
      {/* Search and Filters */}
      <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-xl mb-8 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-white/50">🔍</span>
            <input
              type="text"
              placeholder="Search pillars and lessons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">All Levels</option>
            <option value="Beginner" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">🟢 Beginner</option>
            <option value="Intermediate" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">🟡 Intermediate</option>
            <option value="Advanced" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">🔴 Advanced</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPillars.map((pillar, index) => {
          const progress = getPillarProgress(pillar);
          
          return (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-[#111] border border-gray-300 dark:border-gray-800 rounded-2xl p-5 hover:border-gray-600 dark:hover:border-white transition-all duration-300 shadow-lg cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => openPillar(pillar)}
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
              
              <div className="text-4xl mb-3">{pillar.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{pillar.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{pillar.description}</p>
              
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
          );
        })}
      </div>
      
      {selectedPillar && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4">
          <motion.div 
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl w-full h-full md:max-w-7xl md:max-h-[95vh] md:h-auto overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Modal Header */}
            <div className="flex-shrink-0 border-b border-gray-200 dark:border-white/10 p-2 md:p-3">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-xl">{selectedPillar.emoji}</span>
                  <div>
                    <h2 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">{selectedPillar.title}</h2>
                    {viewMode === 'lesson' && selectedPillar.data && (
                      <p className="text-xs text-gray-600 dark:text-white/60">
                        Module {currentLessonIndex + 1} of {selectedPillar.data.lessons.length}
                      </p>
                    )}
                  </div>
                </div>
                <button 
                  onClick={closePillar}
                  className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white text-xl font-light"
                >
                  ×
                </button>
              </div>
              
              {/* Navigation Tabs */}
              <div className="flex gap-1 bg-white/5 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('overview')}
                  className={`flex-1 px-2 py-1 rounded-md text-xs font-medium transition-colors ${
                    viewMode === 'overview' ? 'bg-gray-200 dark:bg-white/20 text-gray-900 dark:text-white' : 'text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  📋 Overview
                </button>
                {selectedPillar.data && selectedPillar.data.lessons && (
                  <button
                    onClick={() => setViewMode('lesson')}
                    className={`flex-1 px-2 py-1 rounded-md text-xs font-medium transition-colors ${
                      viewMode === 'lesson' ? 'bg-gray-200 dark:bg-white/20 text-gray-900 dark:text-white' : 'text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    📚 Modules
                  </button>
                )}
                <button
                  onClick={() => setViewMode('progress')}
                  className={`flex-1 px-2 py-1 rounded-md text-xs font-medium transition-colors ${
                    viewMode === 'progress' ? 'bg-gray-200 dark:bg-white/20 text-gray-900 dark:text-white' : 'text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  📊 Progress
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-2 md:p-3">
            
            {/* Overview Tab */}
            {viewMode === 'overview' && selectedPillar.data && (
              <div>
                <p className="text-gray-700 dark:text-white/80 mb-3 text-sm">{selectedPillar.data.description}</p>
                
                {/* Lesson Index */}
                <div className="grid gap-3">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">📚 Modules ({selectedPillar.data.lessons.length})</h3>
                  {selectedPillar.data.lessons.map((lesson, idx) => {
                    const lessonKey = `${selectedPillar.id}-${idx}`;
                    const isCompleted = completedLessons[lessonKey];
                    const isBookmarked = bookmarkedLessons.has(lessonKey);
                    
                    return (
                      <div 
                        key={idx} 
                        className={`p-2 rounded border cursor-pointer transition-all duration-300 hover:bg-gray-50 dark:hover:bg-white/10 ${
                          isCompleted ? 'border-green-300 dark:border-green-500/30 bg-green-50 dark:bg-green-500/5' : 'border-gray-300 dark:border-white/10'
                        }`}
                        onClick={() => goToLesson(idx)}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600 dark:text-white/60 text-xs font-mono">{String(idx + 1).padStart(2, '0')}</span>
                            <div>
                              <h4 className="text-gray-900 dark:text-white font-medium text-sm">{lesson.title}</h4>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {isBookmarked && <span className="text-yellow-400">🔖</span>}
                            {isCompleted && <span className="text-green-400">✓</span>}
                            <span className="text-gray-400 dark:text-white/40">→</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Pillar Summary */}
                {selectedPillar.data.summary && (
                  <div className="mt-6 p-4 bg-gray-100 dark:bg-white/5 backdrop-blur-md rounded-lg border border-gray-300 dark:border-white/10">
                    <h4 className="text-gray-900 dark:text-white font-medium mb-2">📝 Summary</h4>
                    <p className="text-gray-700 dark:text-white/90 text-sm">{selectedPillar.data.summary}</p>
                  </div>
                )}
              </div>
            )}
            
            {/* Lesson Tab */}
            {viewMode === 'lesson' && selectedPillar.data && selectedPillar.data.lessons && (
              <div>
                {/* Lesson Navigation */}
                <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-300 dark:border-white/10">
                  <button
                    onClick={prevLesson}
                    disabled={currentLessonIndex === 0}
                    className={`flex items-center gap-1 px-2 py-1 rounded text-sm transition-colors ${
                      currentLessonIndex === 0 
                        ? 'text-gray-400 dark:text-white/30 cursor-not-allowed' 
                        : 'text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                    }`}
                  >
                    ← Prev
                  </button>
                  
                  <div className="text-center">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {selectedPillar.data.lessons[currentLessonIndex].title}
                    </h3>
                  </div>
                  
                  <button
                    onClick={nextLesson}
                    disabled={currentLessonIndex === selectedPillar.data.lessons.length - 1}
                    className={`flex items-center gap-1 px-2 py-1 rounded text-sm transition-colors ${
                      currentLessonIndex === selectedPillar.data.lessons.length - 1
                        ? 'text-gray-400 dark:text-white/30 cursor-not-allowed' 
                        : 'text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                    }`}
                  >
                    Next →
                  </button>
                </div>
                
                {/* Current Lesson Content */}
                {(() => {
                  const lesson = selectedPillar.data.lessons[currentLessonIndex];
                  const lessonKey = `${selectedPillar.id}-${currentLessonIndex}`;
                  const isCompleted = completedLessons[lessonKey];
                  const isBookmarked = bookmarkedLessons.has(lessonKey);
                  
                  return (
                    <div className={`p-4 rounded-lg border transition-all duration-300 ${
                      isCompleted ? 'border-green-300 dark:border-green-500/30 bg-green-50 dark:bg-green-500/5' : 'border-gray-300 dark:border-white/10'
                    }`}>
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                          {isCompleted && <span className="text-green-400">✓</span>}
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBookmark(selectedPillar.id, currentLessonIndex);
                          }}
                          className={`text-lg hover:scale-110 transition-transform ${
                            isBookmarked ? 'text-yellow-400' : 'text-gray-400 dark:text-white/40 hover:text-yellow-400'
                          }`}
                        >
                          {isBookmarked ? '🔖' : '📑'}
                        </button>
                      </div>
                      

                      
                      {/* Content Section */}
                      {lesson.content && (
                        <div className="mb-6">
                          {/* Introduction */}
                          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <h4 className="font-heading text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">📖 Introduction</h4>
                            <p className="font-sans text-gray-700 dark:text-blue-100">{lesson.content.introduction}</p>
                          </div>
                          
                          {/* Content Sections */}
                          <div className="space-y-6">
                            {lesson.content.sections.map((section, idx) => (
                              <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5">
                                <h4 className="font-heading text-lg font-semibold text-gray-900 dark:text-white mb-3">{section.title}</h4>
                                <div className="font-sans text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                  {section.content.split('**').map((part, partIdx) => {
                                    if (partIdx % 2 === 1) {
                                      return <strong key={partIdx} className="font-display font-semibold text-gray-900 dark:text-white">{part}</strong>;
                                    }
                                    return part;
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Key Takeaways */}
                          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                            <h4 className="font-heading text-lg font-semibold text-green-900 dark:text-green-300 mb-3">🎯 Key Takeaways</h4>
                            <ul className="font-sans space-y-2">
                              {lesson.content.keyTakeaways.map((takeaway, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-green-800 dark:text-green-200">
                                  <span className="text-green-500 mt-1">✓</span>
                                  <span>{takeaway}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Action Steps */}
                          <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                            <h4 className="font-heading text-lg font-semibold text-purple-900 dark:text-purple-300 mb-3">🚀 Action Steps</h4>
                            <ol className="font-sans space-y-2">
                              {lesson.content.actionSteps.map((step, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-purple-800 dark:text-purple-200">
                                  <span className="font-display font-bold text-purple-500 bg-purple-200 dark:bg-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm">{idx + 1}</span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                          
                          {/* Calculator Links */}
                          {lesson.content.calculatorLinks && lesson.content.calculatorLinks.length > 0 && (
                            <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                              <h4 className="font-heading text-lg font-semibold text-orange-900 dark:text-orange-300 mb-3">🧮 Related Calculators</h4>
                              <div className="grid gap-3 md:grid-cols-2">
                                {lesson.content.calculatorLinks.map((calc, idx) => (
                                  <a
                                    key={idx}
                                    href={calc.url}
                                    className="font-display block p-3 bg-white dark:bg-gray-800 rounded-lg border border-orange-200 dark:border-orange-700 hover:border-orange-400 dark:hover:border-orange-500 transition-colors group"
                                  >
                                    <div className="font-semibold text-orange-900 dark:text-orange-300 group-hover:text-orange-600 dark:group-hover:text-orange-200">
                                      {calc.name}
                                    </div>
                                    <div className="text-sm text-orange-700 dark:text-orange-400 mt-1">
                                      {calc.description}
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      
                      {lesson.video && (
                        <div className="mb-6">
                          {/* Video Player Section */}
                          <div className="bg-gray-100 dark:bg-white/10 backdrop-blur-md rounded-lg border border-gray-300 dark:border-white/20 overflow-hidden">
                            <div className="flex items-center justify-between p-3 border-b border-gray-300 dark:border-white/10">
                              <div className="flex items-center gap-2">
                                <span className="text-lg">📹</span>
                                <h4 className="text-gray-900 dark:text-white font-medium">Video Lesson</h4>
                                {videoPlaying && <span className="text-green-400 text-sm">● Playing</span>}
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => setVideoExpanded(!videoExpanded)}
                                  className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white text-sm px-2 py-1 rounded transition-colors"
                                >
                                  {videoExpanded ? '🔽 Minimize' : '🔼 Expand'}
                                </button>
                                <button
                                  onClick={() => setTheaterMode(true)}
                                  className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white text-sm px-2 py-1 rounded transition-colors"
                                >
                                  ⛶ Theater
                                </button>
                              </div>
                            </div>
                            
                            {/* Desktop Layout - Side by Side */}
                            <div className="hidden md:flex">
                              {/* Video Player */}
                              <div className={`transition-all duration-300 ${
                                videoExpanded ? 'w-full' : videoPlaying ? 'w-3/5' : 'w-2/5'
                              }`}>
                                <div className={`bg-black/50 ${
                                  videoExpanded ? 'aspect-video' : 'aspect-video max-h-64'
                                }`}>
                                  <video 
                                    className="w-full h-full object-cover"
                                    controls
                                    preload="metadata"
                                    onPlay={() => setVideoPlaying(true)}
                                    onPause={() => setVideoPlaying(false)}
                                    onEnded={() => setVideoPlaying(false)}
                                  >
                                    <source src={lesson.video.url} type="video/mp4" />
                                    <source src={lesson.video.url} type="video/webm" />
                                    <p className="text-white p-4">Your browser does not support the video tag.</p>
                                  </video>
                                </div>
                              </div>
                              
                              {/* Video Info - Hidden when expanded */}
                              {!videoExpanded && (
                                <div className={`p-2 transition-all duration-300 ${
                                  videoPlaying ? 'w-2/5' : 'w-3/5'
                                }`}>
                                  <p className="text-gray-700 dark:text-white/80 text-sm mb-3">{lesson.video.description}</p>
                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-white/60">
                                      <span>🎯</span>
                                      <span>Key concepts covered</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-white/60">
                                      <span>🎯</span>
                                      <span>Key concepts covered in this video</span>
                                    </div>
                                  </div>
                                  
                                  {/* Video Topics */}
                                  <div className="mt-2">
                                    <p className="text-gray-700 dark:text-white/70 text-xs mb-1">Topics covered:</p>
                                    <div className="flex flex-wrap gap-1">
                                      {lesson.topics.map((topic, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white/70 text-xs rounded">
                                          {topic}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                  

                                </div>
                              )}
                            </div>
                            
                            {/* Mobile Layout - Stacked */}
                            <div className="md:hidden">
                              <div className={`bg-black/50 ${
                                videoExpanded ? 'aspect-video' : 'aspect-video max-h-48'
                              }`}>
                                <video 
                                  className="w-full h-full object-cover"
                                  controls
                                  preload="metadata"
                                  onPlay={() => setVideoPlaying(true)}
                                  onPause={() => setVideoPlaying(false)}
                                  onEnded={() => setVideoPlaying(false)}
                                >
                                  <source src={lesson.video.url} type="video/mp4" />
                                  <source src={lesson.video.url} type="video/webm" />
                                  <p className="text-white p-4">Your browser does not support the video tag.</p>
                                </video>
                              </div>
                              {!videoExpanded && (
                                <div className="p-3">
                                  <p className="text-gray-700 dark:text-white/80 text-sm">{lesson.video.description}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                      

                      
                      {lesson.table && (
                        <div className="mb-6 overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-gray-300 dark:border-white/20">
                                {lesson.table.headers.map((header, headerIdx) => (
                                  <th key={headerIdx} className="text-left py-2 px-3 text-gray-900 dark:text-white/90 font-medium">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {lesson.table.rows.map((row, rowIdx) => (
                                <tr key={rowIdx} className="border-b border-gray-200 dark:border-white/10">
                                  {row.map((cell, cellIdx) => (
                                    <td key={cellIdx} className="py-2 px-3 text-gray-800 dark:text-white/80">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                      
                      {/* Complete Lesson Button */}
                      {!isCompleted && (
                        <div className="pt-4 border-t border-gray-300 dark:border-white/10">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              saveProgress(selectedPillar.id, currentLessonIndex);
                            }}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                          >
                            <Coins className="h-4 w-4" />
                            Complete Module (+25 points)
                          </button>
                        </div>
                      )}
                      
                      {isCompleted && (
                        <div className="pt-4 border-t border-green-300 dark:border-green-500/20">
                          <div className="flex items-center gap-2 text-green-400 text-sm">
                            <span>✅ Completed</span>
                            <span>•</span>
                            <span>+25 points earned</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}
            
            {/* Progress Tab */}
            {viewMode === 'progress' && (
              <div>
                <div className="mb-6 p-4 bg-gray-100 dark:bg-white/10 backdrop-blur-md rounded-lg border border-gray-300 dark:border-white/20">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-900 dark:text-white font-medium">Overall Progress</span>
                    <span className="text-gray-700 dark:text-white/80">{getPillarProgress(selectedPillar)}% Complete</span>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-500"
                      style={{ width: `${getPillarProgress(selectedPillar)}%` }}
                    />
                  </div>
                  {getPillarProgress(selectedPillar) === 100 && (
                    <div className="mt-4 text-center">
                      <span className="text-yellow-400 text-3xl">🏆</span>
                      <p className="text-green-400 font-medium mt-2">Pillar Completed!</p>
                      <p className="text-gray-600 dark:text-white/60 text-sm">You've mastered all lessons in this pillar</p>
                    </div>
                  )}
                </div>
                
                {/* Detailed Progress */}
                {selectedPillar.data && (
                  <div className="space-y-3">
                    <h4 className="text-gray-900 dark:text-white font-medium mb-4">📈 Module Progress</h4>
                    {selectedPillar.data.lessons.map((lesson, idx) => {
                      const lessonKey = `${selectedPillar.id}-${idx}`;
                      const isCompleted = completedLessons[lessonKey];
                      const isBookmarked = bookmarkedLessons.has(lessonKey);
                      
                      return (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-200 dark:bg-white/5 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="text-gray-600 dark:text-white/60 text-sm font-mono w-8">{String(idx + 1).padStart(2, '0')}</span>
                            <div>
                              <p className="text-gray-900 dark:text-white text-sm font-medium">{lesson.title}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {isBookmarked && <span className="text-yellow-400">🔖</span>}
                            {isCompleted ? (
                              <span className="text-green-400 text-lg">✅</span>
                            ) : (
                              <span className="text-gray-400 dark:text-white/30 text-lg">⭕</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
            
            {/* No Data State */}
            {!selectedPillar.data && (

              <div className="text-center py-8">
                <p className="text-gray-600 dark:text-white/60">Content coming soon...</p>
                <p className="text-sm text-gray-500 dark:text-white/40 mt-2">{selectedPillar.lessons} modules available</p>
              </div>
            )}
            
            </div>
          </motion.div>
        </div>
      )}
      
      {/* Theater Mode Modal */}
      {theaterMode && selectedPillar && selectedPillar.data && selectedPillar.data.lessons && selectedPillar.data.lessons[currentLessonIndex] && selectedPillar.data.lessons[currentLessonIndex].video && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-[60] flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setTheaterMode(false);
            }
          }}
        >
          <div className="w-full h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Theater Header */}
            <div className="flex-shrink-0 flex items-center justify-between p-4 bg-black/90 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="text-xl">{selectedPillar.emoji}</span>
                <div>
                  <h3 className="text-white font-medium">{selectedPillar.data.lessons[currentLessonIndex].title}</h3>
                  <p className="text-white/60 text-sm">Module {currentLessonIndex + 1} of {selectedPillar.data.lessons.length}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/40 text-sm hidden md:inline">Press ESC to exit</span>
                <button
                  onClick={() => setTheaterMode(false)}
                  className="text-white/60 hover:text-white text-2xl font-light p-2 hover:bg-white/10 rounded transition-colors"
                >
                  ×
                </button>
              </div>
            </div>
            
            {/* Theater Video */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-8">
              <div className="w-full max-w-7xl aspect-video bg-black rounded-lg overflow-hidden">
                <video 
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  preload="metadata"
                  onError={(e) => {
                    console.error('Theater video error:', e);
                  }}
                >
                  <source src={selectedPillar.data.lessons[currentLessonIndex].video.url} type="video/mp4" />
                  <source src={selectedPillar.data.lessons[currentLessonIndex].video.url} type="video/webm" />
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white text-center p-8">
                      <span className="text-4xl mb-4 block">📹</span>
                      Video not available<br />
                      <span className="text-sm text-white/60">Please check the video source</span>
                    </p>
                  </div>
                </video>
              </div>
            </div>
            
            {/* Theater Footer */}
            <div className="flex-shrink-0 p-4 bg-black/90 backdrop-blur-sm">
              <div className="max-w-4xl mx-auto">
                <p className="text-white/80 text-center mb-2">
                  {selectedPillar.data.lessons[currentLessonIndex].video.description}
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-white/60">
                  <span>📚 {selectedPillar.title}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PillarGrid;