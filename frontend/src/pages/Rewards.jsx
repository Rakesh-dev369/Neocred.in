import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Coins, 
  Trophy, 
  Star, 
  Gift, 
  Zap, 
  Crown, 
  Calendar, 
  TrendingUp, 
  Award, 
  Target, 
  Sparkles, 
  ChevronRight, 
  Clock, 
  Users, 
  BarChart3, 
  CheckCircle, 
  Lock,
  Flame,
  ArrowUp,
  Download,
  Share2,
  RefreshCw,
  ChevronUp
} from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from '../utils/constants';

export default function Rewards() {
  const [userPoints, setUserPoints] = useState(0);
  const [selectedTab, setSelectedTab] = useState('earn');
  const [redemptionHistory, setRedemptionHistory] = useState([]);
  const [dailyStreak, setDailyStreak] = useState(7);
  const [toast, setToast] = useState(null);
  const [unlockedAchievements, setUnlockedAchievements] = useState(new Set());
  const [showConfetti, setShowConfetti] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Load data from localStorage
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    const savedPoints = localStorage.getItem('learningPoints');
    const savedAchievements = localStorage.getItem('unlockedAchievements');
    const savedRedemptions = localStorage.getItem('redemptionHistory');
    
    if (savedPoints) {
      setUserPoints(parseInt(savedPoints));
    }
    if (savedAchievements) {
      setUnlockedAchievements(new Set(JSON.parse(savedAchievements)));
    }
    if (savedRedemptions) {
      setRedemptionHistory(JSON.parse(savedRedemptions));
    }
  }, []);
  
  // Auto-detect achievements based on points and actions
  useEffect(() => {
    const newAchievements = new Set(unlockedAchievements);
    let hasNewAchievement = false;
    
    // Achievement logic
    if (userPoints >= 50 && !newAchievements.has('first-steps')) {
      newAchievements.add('first-steps');
      hasNewAchievement = true;
      showToast('🎉 Achievement Unlocked: First Steps!', 'success');
    }
    if (userPoints >= 250 && !newAchievements.has('tool-master')) {
      newAchievements.add('tool-master');
      hasNewAchievement = true;
      showToast('🎉 Achievement Unlocked: Tool Master!', 'success');
    }
    if (userPoints >= 500 && !newAchievements.has('learning-enthusiast')) {
      newAchievements.add('learning-enthusiast');
      hasNewAchievement = true;
      showToast('🎉 Achievement Unlocked: Learning Enthusiast!', 'success');
    }
    
    if (hasNewAchievement) {
      setUnlockedAchievements(newAchievements);
      localStorage.setItem('unlockedAchievements', JSON.stringify([...newAchievements]));
    }
  }, [userPoints, unlockedAchievements]);
  
  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Toast notification system
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };
  
  // Dynamic level calculation
  const getUserLevel = (points) => {
    if (points >= 2000) return { name: 'Platinum', icon: '💎', color: 'text-purple-400', next: null, progress: 100 };
    if (points >= 1500) return { name: 'Gold', icon: '🥇', color: 'text-yellow-400', next: 2000, progress: ((points - 1500) / 500) * 100 };
    if (points >= 500) return { name: 'Silver', icon: '🥈', color: 'text-gray-300', next: 1500, progress: ((points - 500) / 1000) * 100 };
    return { name: 'Bronze', icon: '🥉', color: 'text-orange-400', next: 500, progress: (points / 500) * 100 };
  };
  
  const currentLevel = getUserLevel(userPoints);
  
  // Save points to localStorage
  const savePoints = (newPoints) => {
    setUserPoints(newPoints);
    localStorage.setItem('learningPoints', newPoints.toString());
  };

  const earnMethods = [
    { title: 'Use Financial Tools', points: 5, color: 'text-blue-400', description: 'Per calculator use', emoji: '🧮' },
    { title: 'Complete Lessons', points: 25, color: 'text-green-400', description: 'Per module completed', emoji: '📚' },
    { title: 'AI Chat Sessions', points: 3, color: 'text-yellow-400', description: 'Per meaningful conversation', emoji: '🤖' },
    { title: 'Daily Login', points: 10, color: 'text-purple-400', description: 'Every day you visit', emoji: '📅' },
    { title: 'Weekly Streak', points: 50, color: 'text-orange-400', description: 'Maintain 7-day streak', emoji: '🔥' },
    { title: 'Achievements', points: 100, color: 'text-pink-400', description: 'Unlock milestones', emoji: '🏆' }
  ];

  const rewards = [
    { id: 1, title: 'Premium Calculator Features', cost: 200, icon: '⚡', description: 'Advanced charts & export options' },
    { id: 2, title: 'Exclusive Financial Guide', cost: 500, icon: '📖', description: 'Advanced investment strategies' },
    { id: 3, title: '₹100 Amazon Voucher', cost: 1000, icon: '🎁', description: 'Digital gift card' },
    { id: 4, title: 'Personal Finance Consultation', cost: 1500, icon: '👨‍💼', description: '30-min expert session' },
    { id: 5, title: 'Early Access Features', cost: 300, icon: '🚀', description: 'Beta features first' },
    { id: 6, title: '₹500 Investment Bonus', cost: 2500, icon: '💰', description: 'Platform investment credit' }
  ];

  const achievements = [
    { id: 'first-steps', title: 'First Steps', description: 'Earned your first 50 points', icon: '👶', earned: unlockedAchievements.has('first-steps'), points: 50, requirement: 50 },
    { id: 'tool-master', title: 'Tool Master', description: 'Earned 250+ points using tools', icon: '🔧', earned: unlockedAchievements.has('tool-master'), points: 100, requirement: 250 },
    { id: 'learning-enthusiast', title: 'Learning Enthusiast', description: 'Earned 500+ points from learning', icon: '📖', earned: unlockedAchievements.has('learning-enthusiast'), points: 150, requirement: 500 },
    { id: 'streak-champion', title: 'Streak Champion', description: 'Maintained 30-day streak', icon: '🔥', earned: dailyStreak >= 30, points: 300, requirement: '30 days' },
    { id: 'point-collector', title: 'Point Collector', description: 'Earned 1000+ total points', icon: '💎', earned: userPoints >= 1000, points: 200, requirement: 1000 },
    { id: 'financial-guru', title: 'Financial Guru', description: 'Earned 2000+ points', icon: '🏆', earned: userPoints >= 2000, points: 500, requirement: 2000 }
  ];

  const leaderboard = [
    { rank: 1, name: 'Priya S.', points: 4250, level: getUserLevel(4250).name, avatar: '👩' },
    { rank: 2, name: 'Rahul K.', points: 3890, level: getUserLevel(3890).name, avatar: '👨' },
    { rank: 3, name: 'Anita M.', points: 2650, level: getUserLevel(2650).name, avatar: '👩' },
    { rank: 4, name: 'You', points: userPoints, level: currentLevel.name, avatar: '🫵', isUser: true },
    { rank: 5, name: 'Vikram R.', points: 1180, level: getUserLevel(1180).name, avatar: '👨' }
  ];

  const handleEarnPoints = (method) => {
    const newPoints = userPoints + method.points;
    savePoints(newPoints);
    showToast(`+${method.points} points earned from ${method.title}!`, 'success');
  };

  const handleRedeem = (reward) => {
    if (userPoints >= reward.cost) {
      const newPoints = userPoints - reward.cost;
      savePoints(newPoints);
      showToast(`🎉 Successfully redeemed: ${reward.title}!`, 'success');
      
      // Save redemption history
      const newRedemption = {
        id: reward.id,
        title: reward.title,
        cost: reward.cost,
        icon: reward.icon,
        date: new Date().toISOString()
      };
      const updatedHistory = [newRedemption, ...redemptionHistory];
      setRedemptionHistory(updatedHistory);
      localStorage.setItem('redemptionHistory', JSON.stringify(updatedHistory));
    } else {
      showToast('Insufficient points for this reward!', 'error');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden text-gray-900 dark:text-white transition-all duration-500">
      {/* Advanced Rewards-Themed Background System */}
      <div className="fixed inset-0 z-0">
        {/* Primary Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"></div>
        
        {/* Animated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50/30 via-transparent to-orange-100/25 dark:from-yellow-900/6 dark:via-transparent dark:to-orange-900/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-50/25 via-transparent to-pink-50/30 dark:from-purple-900/5 dark:via-transparent dark:to-pink-900/8" style={{animationDelay: '6s'}}></div>
        
        {/* Floating Reward Elements */}
        <div className="absolute top-20 left-20 w-28 h-28 bg-gradient-to-br from-yellow-200/15 to-orange-300/20 dark:from-yellow-600/8 dark:to-orange-600/12 rounded-full blur-lg animate-float rotate-12"></div>
        <div className="absolute top-32 right-16 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-pink-300/25 dark:from-purple-600/10 dark:to-pink-600/15 rounded-2xl blur-md animate-float-delayed -rotate-8"></div>
        <div className="absolute bottom-40 left-1/5 w-32 h-32 bg-gradient-to-br from-blue-200/12 to-cyan-300/18 dark:from-blue-600/6 dark:to-cyan-600/10 rounded-full blur-xl animate-float-slow rotate-30"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-green-200/18 to-emerald-300/22 dark:from-green-600/8 dark:to-emerald-600/12 rounded-3xl blur-lg animate-float-reverse -rotate-20"></div>
        <div className="absolute bottom-20 right-20 w-26 h-26 bg-gradient-to-br from-indigo-200/15 to-purple-300/20 dark:from-indigo-600/7 dark:to-purple-600/10 rounded-2xl blur-xl animate-float-delayed rotate-15"></div>
        
        {/* Rewards Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
          backgroundImage: `
            linear-gradient(90deg, rgb(251 191 36) 1px, transparent 1px),
            linear-gradient(180deg, rgb(251 191 36) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}></div>
        
        {/* Dynamic Reward Symbols */}
        <div className="absolute top-1/6 left-1/8 text-yellow-200/12 dark:text-yellow-600/6 text-6xl font-bold animate-pulse" style={{animationDelay: '2s'}}>🏆</div>
        <div className="absolute top-3/5 right-1/6 text-purple-200/12 dark:text-purple-600/6 text-5xl font-bold animate-pulse" style={{animationDelay: '3.5s'}}>🎁</div>
        <div className="absolute bottom-1/5 left-1/3 text-orange-200/12 dark:text-orange-600/6 text-4xl font-bold animate-pulse" style={{animationDelay: '1s'}}>🪙</div>
        <div className="absolute top-2/5 right-1/8 text-green-200/12 dark:text-green-600/6 text-5xl font-bold animate-pulse" style={{animationDelay: '2.8s'}}>💰</div>
        <div className="absolute bottom-2/5 right-2/5 text-blue-200/12 dark:text-blue-600/6 text-3xl font-bold animate-pulse" style={{animationDelay: '4s'}}>⭐</div>
        
        {/* Floating Reward Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-yellow-400/25 dark:bg-yellow-300/15 rounded-full animate-particle-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${30 + Math.random() * 25}s`
              }}
            />
          ))}
        </div>
        
        {/* Achievement Sparkle Lines */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]">
          <div className="absolute top-1/5 left-1/10 w-48 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent dark:via-yellow-600 animate-pulse rotate-12" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-2/3 right-1/10 w-40 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent dark:via-purple-600 animate-pulse -rotate-8" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/4 left-1/5 w-36 h-0.5 bg-gradient-to-r from-transparent via-orange-300 to-transparent dark:via-orange-600 animate-pulse rotate-25" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent dark:via-green-600 animate-pulse -rotate-15" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Reward Constellation Pattern */}
        <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.12]">
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-yellow-400/40 dark:bg-yellow-300/25 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-purple-400/40 dark:bg-purple-300/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-2/5 left-1/5 w-1 h-1 bg-orange-400/40 dark:bg-orange-300/25 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-green-400/40 dark:bg-green-300/25 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-2/5 right-1/4 w-1.5 h-1.5 bg-blue-400/40 dark:bg-blue-300/25 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-pink-400/40 dark:bg-pink-300/25 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
        </div>
        
        {/* Floating Trophy Elements */}
        <div className="absolute top-1/8 right-1/3 w-16 h-16 bg-gradient-to-br from-yellow-300/10 to-orange-400/15 dark:from-yellow-600/5 dark:to-orange-600/8 rounded-lg blur-md animate-float-slow rotate-45" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/8 left-1/2 w-12 h-12 bg-gradient-to-br from-purple-300/10 to-pink-400/15 dark:from-purple-600/5 dark:to-pink-600/8 rounded-full blur-sm animate-float-reverse -rotate-30" style={{animationDelay: '3s'}}></div>
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/4 to-transparent dark:via-gray-800/8 animate-mesh-move"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 mr-4 shadow-2xl">
              <Trophy className="h-12 w-12 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NeoCred Rewards
              </h1>
              <p className="text-blue-600 dark:text-blue-400 text-lg font-medium">Level Up Your Financial Journey</p>
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium tracking-wide">
            Transform your financial learning into exciting rewards.<br className="hidden md:block" /> Every calculator use, lesson completed, and milestone achieved earns you valuable points!
          </p>
        </motion.div>

        {/* Compact User Dashboard */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-8 relative overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Level Status */}
            <div className="text-center">
              <div className="text-3xl mb-2">{currentLevel.icon}</div>
              <div className={`text-lg font-bold ${currentLevel.color}`}>{currentLevel.name}</div>
              <div className="text-gray-500 dark:text-gray-400 text-xs">Level</div>
            </div>
            
            {/* Points Display */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Coins className="h-4 w-4 text-yellow-500" />
                <motion.span 
                  key={userPoints}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-2xl font-bold text-yellow-500"
                >
                  {userPoints.toLocaleString()}
                </motion.span>
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-xs">Points</div>
            </div>
            
            {/* Streak Counter */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Flame className="h-4 w-4 text-orange-500" />
                <span className="text-2xl font-bold text-orange-500">{dailyStreak}</span>
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-xs">Streak</div>
            </div>
            
            {/* Achievements Count */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="h-4 w-4 text-purple-500" />
                <span className="text-2xl font-bold text-purple-500">{unlockedAchievements.size}</span>
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-xs">Badges</div>
            </div>
          </div>
          
          {/* Compact Progress Bar */}
          {currentLevel.next && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Next: {getUserLevel(currentLevel.next).name}</span>
                <span className="text-xs text-gray-500">{currentLevel.next - userPoints} Points to go</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(currentLevel.progress, 100)}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* Enhanced Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-2 flex flex-wrap gap-1">
            {[
              { id: 'earn', icon: Zap, label: 'Earn Points', emoji: '⚡' },
              { id: 'redeem', icon: Gift, label: 'Redeem Rewards', emoji: '🎁' },
              { id: 'achievements', icon: Trophy, label: 'Achievements', emoji: '🏆' },
              { id: 'leaderboard', icon: Crown, label: 'Leaderboard', emoji: '👑' },
              { id: 'history', icon: Clock, label: 'History', emoji: '📜' }
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 font-medium ${
                    selectedTab === tab.id 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden text-lg">{tab.emoji}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Enhanced Tab Content */}
        <AnimatePresence mode="wait">
          {selectedTab === 'earn' && (
            <motion.div
              key="earn"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    💰 Ways to Earn Points
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Every action you take on NeoCred earns you valuable points. Start your journey to financial mastery!
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {earnMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 transition-all duration-500 cursor-pointer relative overflow-hidden"
                      onClick={() => handleEarnPoints(method)}
                    >
                      {/* Background gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-3xl">{method.emoji}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-xl mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {method.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                              {method.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Coins className="h-5 w-5 text-yellow-500" />
                            <span className="text-yellow-500 font-bold text-lg">+{method.points} points</span>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Quick Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                  <Link 
                    to={ROUTES.TOOLS} 
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-2xl">🧮</span>
                    <span>Start Using Tools</span>
                    <div className="bg-white/20 px-2 py-1 rounded-full text-sm">+5 each</div>
                  </Link>
                  <Link 
                    to={ROUTES.LEARN} 
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-2xl">📚</span>
                    <span>Start Learning</span>
                    <div className="bg-white/20 px-2 py-1 rounded-full text-sm">+25 each</div>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {selectedTab === 'redeem' && (
            <motion.div
              key="redeem"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    🎁 Redeem Your Points
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Transform your hard-earned points into valuable rewards and exclusive benefits!
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rewards.map((reward, index) => {
                    const canAfford = userPoints >= reward.cost;
                    const progressPercentage = Math.min((userPoints / reward.cost) * 100, 100);
                    
                    return (
                      <motion.div 
                        key={reward.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border transition-all duration-500 relative overflow-hidden ${
                          canAfford 
                            ? 'border-green-200 dark:border-green-800 hover:shadow-2xl hover:shadow-green-500/10 dark:hover:shadow-green-400/20' 
                            : 'border-gray-200 dark:border-gray-700 hover:shadow-xl'
                        }`}
                      >
                        {/* Background gradient */}
                        <div className={`absolute inset-0 transition-opacity duration-500 ${
                          canAfford 
                            ? 'bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100'
                            : 'bg-gradient-to-br from-gray-500/5 to-gray-500/5 opacity-0 group-hover:opacity-100'
                        }`} />
                        
                        {/* Availability Badge */}
                        <div className="absolute top-4 right-4">
                          {canAfford ? (
                            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                              <CheckCircle className="h-3 w-3" />
                              Available
                            </div>
                          ) : (
                            <div className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                              <Lock className="h-3 w-3" />
                              Locked
                            </div>
                          )}
                        </div>
                        
                        <div className="relative z-10 text-center">
                          <div className={`text-5xl mb-4 transition-transform duration-300 ${
                            canAfford ? 'group-hover:scale-110' : 'grayscale opacity-50'
                          }`}>
                            {reward.icon}
                          </div>
                          
                          <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {reward.title}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                            {reward.description}
                          </p>
                          
                          {/* Cost and Progress */}
                          <div className="mb-6">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <Coins className="h-5 w-5 text-yellow-500" />
                              <span className="text-yellow-500 font-bold text-lg">{reward.cost} points</span>
                            </div>
                            
                            {!canAfford && (
                              <div className="mt-3">
                                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                  Progress: {userPoints}/{reward.cost} points
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                  <div 
                                    className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                                    style={{ width: `${progressPercentage}%` }}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                          
                          <motion.button
                            onClick={() => handleRedeem(reward)}
                            disabled={!canAfford}
                            whileHover={canAfford ? { scale: 1.05 } : {}}
                            whileTap={canAfford ? { scale: 0.95 } : {}}
                            className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                              canAfford
                                ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg hover:shadow-xl'
                                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                            }`}
                          >
                            {canAfford ? (
                              <span className="flex items-center justify-center gap-2">
                                <Gift className="h-4 w-4" />
                                Redeem Now
                              </span>
                            ) : (
                              <span>Need {reward.cost - userPoints} more points</span>
                            )}
                          </motion.button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {selectedTab === 'achievements' && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center mb-8">🏆 Your Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`glass-card transition-all duration-300 ${
                        achievement.earned 
                          ? 'border-green-500/30 bg-green-500/5' 
                          : 'border-gray-600/30'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`text-4xl ${
                          achievement.earned ? 'grayscale-0' : 'grayscale opacity-50'
                        }`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{achievement.title}</h3>
                          <p className="text-gray-400 text-sm mb-2">{achievement.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-yellow-400 font-bold">+{achievement.points} points</span>
                            {achievement.earned ? (
                              <span className="text-green-400 text-sm font-medium">✓ Earned</span>
                            ) : (
                              <div className="text-right">
                                <span className="text-gray-500 text-sm block">🔒 Locked</span>
                                {typeof achievement.requirement === 'number' && (
                                  <div className="mt-2">
                                    <span className="text-xs text-white/50 block mb-1">
                                      {userPoints}/{achievement.requirement} points
                                    </span>
                                    <div className="w-20 bg-gray-700 rounded-full h-1">
                                      <div 
                                        className="h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full transition-all duration-500"
                                        style={{ width: `${Math.min((userPoints / achievement.requirement) * 100, 100)}%` }}
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        {selectedTab === 'leaderboard' && (
            <motion.div
              key="leaderboard"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center mb-8">👑 Community Leaderboard</h2>
                <div className="glass-card max-w-2xl mx-auto">
                  {leaderboard.map((user, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                        user.isUser 
                          ? 'bg-blue-500/20 border border-blue-500/30' 
                          : 'hover:bg-white/5'
                      } ${index < leaderboard.length - 1 ? 'border-b border-white/10' : ''}`}
                    >
                      <div className={`text-2xl font-bold ${
                        user.rank === 1 ? 'text-yellow-400' :
                        user.rank === 2 ? 'text-gray-300' :
                        user.rank === 3 ? 'text-orange-400' : 'text-gray-500'
                      }`}>
                        #{user.rank}
                      </div>
                      <div className="text-2xl">{user.avatar}</div>
                      <div className="flex-1">
                        <div className="font-semibold">{user.name}</div>
                        <div className="text-sm text-gray-400">{user.level} Level</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-yellow-400">{user.points.toLocaleString()}</div>
                        <div className="text-xs text-gray-400">points</div>
                      </div>
                      {user.rank <= 3 && (
                        <div className="text-2xl">
                          {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        {selectedTab === 'history' && (
            <motion.div
              key="history"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center mb-8">📜 Redemption History</h2>
                {redemptionHistory.length > 0 ? (
                  <div className="glass-card max-w-2xl mx-auto">
                    {redemptionHistory.map((redemption, index) => (
                      <div
                        key={`${redemption.id}-${redemption.date}`}
                        className={`flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 ${
                          index < redemptionHistory.length - 1 ? 'border-b border-white/10' : ''
                        }`}
                      >
                        <div className="text-3xl">{redemption.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white">{redemption.title}</h3>
                          <p className="text-sm text-gray-400">
                            {new Date(redemption.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-red-400">-{redemption.cost}</div>
                          <div className="text-xs text-gray-400">points</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="glass-card text-center py-12 max-w-2xl mx-auto">
                    <span className="text-6xl mb-4 block">📜</span>
                    <h3 className="text-xl font-semibold text-white mb-2">No Redemptions Yet</h3>
                    <p className="text-white/60 mb-4">
                      Start redeeming rewards to see your history here.
                    </p>
                    <button
                      onClick={() => setSelectedTab('redeem')}
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Browse Rewards
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🚀 Ready to Start Earning?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Join thousands of users who are already earning rewards while building their financial knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ROUTES.LEARN} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                Start Learning (+25 points)
              </Link>
              <Link to={ROUTES.TOOLS} className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                Use Tools (+5 points each)
              </Link>
            </div>
          </div>
        </div>
        
        {/* Enhanced Toast Notification */}
        <AnimatePresence>
          {toast && (
            <motion.div 
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.8 }}
              className={`fixed top-6 right-6 z-50 p-4 rounded-2xl shadow-2xl max-w-sm backdrop-blur-sm border ${
                toast.type === 'success' 
                  ? 'bg-green-500/90 text-white border-green-400' 
                  : 'bg-red-500/90 text-white border-red-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${
                  toast.type === 'success' ? 'bg-white/20' : 'bg-white/20'
                }`}>
                  {toast.type === 'success' ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <span className="text-lg">⚠️</span>
                  )}
                </div>
                <p className="font-medium flex-1">{toast.message}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Confetti Animation */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-40">
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    opacity: 1, 
                    y: -100, 
                    x: Math.random() * window.innerWidth,
                    rotate: 0
                  }}
                  animate={{ 
                    opacity: 0, 
                    y: window.innerHeight + 100, 
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 3, 
                    delay: Math.random() * 2,
                    ease: "easeOut"
                  }}
                  className={`absolute w-3 h-3 ${
                    ['bg-yellow-400', 'bg-blue-400', 'bg-green-400', 'bg-purple-400', 'bg-pink-400'][Math.floor(Math.random() * 5)]
                  } rounded-full`}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="fixed bottom-28 right-4 z-50 p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronUp className="h-6 w-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}