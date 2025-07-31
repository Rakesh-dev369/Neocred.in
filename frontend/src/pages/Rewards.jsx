import React, { useState, useEffect } from "react";
import { Coins } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from '../utils/constants';

export default function Rewards() {
  const [userPoints, setUserPoints] = useState(0);
  const [selectedTab, setSelectedTab] = useState('earn');
  const [redemptionHistory, setRedemptionHistory] = useState([]);
  const [dailyStreak, setDailyStreak] = useState(7);
  const [toast, setToast] = useState(null);
  const [unlockedAchievements, setUnlockedAchievements] = useState(new Set());
  
  // Load data from localStorage
  useEffect(() => {
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
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🎯 NEOC₹ED Rewards Program
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Turn your financial learning journey into exciting rewards. Every action counts!
          </p>
        </div>

        {/* User Dashboard */}
        <div className="glass-card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">{currentLevel.icon}</div>
              <div className={`text-2xl font-bold ${currentLevel.color}`}>{currentLevel.name} Level</div>
              <div className="text-gray-400 text-sm">Current Status</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Coins className="h-6 w-6 text-yellow-400" />
                <span className="text-3xl font-bold text-yellow-400">{userPoints.toLocaleString()}</span>
              </div>
              <div className="text-gray-400 text-sm">Total Points</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl">🔥</span>
                <span className="text-2xl font-bold text-orange-400">{dailyStreak}</span>
              </div>
              <div className="text-gray-400 text-sm">Day Streak</div>
            </div>
          </div>
          
          {currentLevel.next && (
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress to {getUserLevel(currentLevel.next).name}</span>
                <span>{currentLevel.next - userPoints} points to go</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className={`h-3 bg-gradient-to-r ${currentLevel.color.includes('purple') ? 'from-purple-400 to-purple-200' : currentLevel.color.includes('yellow') ? 'from-yellow-400 to-yellow-200' : currentLevel.color.includes('gray') ? 'from-gray-400 to-gray-200' : 'from-orange-400 to-orange-200'} rounded-full transition-all duration-500`}
                  style={{ width: `${Math.min(currentLevel.progress, 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="glass-card p-1 flex flex-wrap">
            <button
              onClick={() => setSelectedTab('earn')}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                selectedTab === 'earn' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>⚡</span>
              <span className="hidden sm:inline">Earn Points</span>
            </button>
            <button
              onClick={() => setSelectedTab('redeem')}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                selectedTab === 'redeem' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>🎁</span>
              <span className="hidden sm:inline">Redeem Rewards</span>
            </button>
            <button
              onClick={() => setSelectedTab('achievements')}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                selectedTab === 'achievements' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>🏆</span>
              <span className="hidden sm:inline">Achievements</span>
            </button>
            <button
              onClick={() => setSelectedTab('leaderboard')}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                selectedTab === 'leaderboard' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>👑</span>
              <span className="hidden sm:inline">Leaderboard</span>
            </button>
            <button
              onClick={() => setSelectedTab('history')}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                selectedTab === 'history' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>📜</span>
              <span className="hidden sm:inline">History</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {selectedTab === 'earn' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8">💰 Ways to Earn Points</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {earnMethods.map((method, index) => (
                <div
                  key={index}
                  className="glass-card hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  onClick={() => handleEarnPoints(method)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-white/10 ${method.color}`}>
                      <span className="text-2xl">{method.emoji}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-400 font-bold">+{method.points} points</span>
                        <span className="text-gray-400">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to={ROUTES.TOOLS} className="btn-primary inline-flex items-center gap-2">
                <span>🧮</span>
                Start Using Tools (+5 points each)
              </Link>
            </div>
          </div>
        )}

        {selectedTab === 'redeem' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8">🎁 Redeem Your Points</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.map((reward) => (
                <div key={reward.id} className="glass-card">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{reward.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">{reward.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{reward.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-yellow-400 font-bold">{reward.cost} points</span>
                      {userPoints >= reward.cost ? (
                        <span className="text-green-400">🔓</span>
                      ) : (
                        <span className="text-red-400">🔒</span>
                      )}
                    </div>
                    <button
                      onClick={() => handleRedeem(reward)}
                      disabled={userPoints < reward.cost}
                      className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                        userPoints >= reward.cost
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {userPoints >= reward.cost ? 'Redeem Now' : 'Insufficient Points'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'achievements' && (
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
        )}

        {selectedTab === 'leaderboard' && (
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
        )}

        {selectedTab === 'history' && (
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
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🚀 Ready to Start Earning?</h3>
            <p className="text-gray-400 mb-6">
              Join thousands of users who are already earning rewards while building their financial knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ROUTES.LEARN} className="btn-primary">
                Start Learning (+25 points)
              </Link>
              <Link to={ROUTES.TOOLS} className="btn-secondary">
                Use Tools (+5 points each)
              </Link>
            </div>
          </div>
        </div>
        
        {/* Toast Notification */}
        {toast && (
          <div className={`fixed top-6 right-6 z-50 p-4 rounded-lg shadow-xl max-w-sm transition-all duration-300 ${
            toast.type === 'success' 
              ? 'bg-green-600 text-white border border-green-500' 
              : 'bg-red-600 text-white border border-red-500'
          }`}>
            <div className="flex items-center gap-3">
              <span className="text-xl">
                {toast.type === 'success' ? '✓' : '⚠️'}
              </span>
              <p className="font-medium">{toast.message}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}