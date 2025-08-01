import { Link } from 'react-router-dom';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { ROUTES } from '../utils/constants';

// Counter animation hook
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return count;
};

export default function HeroSection() {
  const [stats, setStats] = useState({ users: 15000, moneySaved: 7500000, tools: 40 });
  const [isVisible, setIsVisible] = useState(false);
  
  const userCount = useCounter(isVisible ? stats.users : 0);
  const moneyCount = useCounter(isVisible ? stats.moneySaved : 0);
  const toolCount = useCounter(isVisible ? stats.tools : 0);
  
  useEffect(() => {
    // Simulate dynamic stats
    setStats({
      users: 15000 + Math.floor(Math.random() * 500),
      moneySaved: 7500000 + Math.floor(Math.random() * 100000),
      tools: 40
    });
    
    // Trigger animation after component mounts
    setTimeout(() => setIsVisible(true), 500);
  }, []);
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Master Your
            <span className="text-white/90"> Financial Future</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Learn, plan, and grow your wealth with our comprehensive financial tools,
            AI-powered guidance, and expert insights. Start your journey to financial freedom today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to={ROUTES.LEARN}
              className="btn-primary flex items-center gap-2 text-lg px-8 py-3"
            >
              Start Learning
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            
            <Link
              to={ROUTES.TOOLS}
              className="btn-secondary flex items-center gap-2 text-lg px-8 py-3"
            >
              <PlayIcon className="h-5 w-5" />
              Try Our Tools
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card text-center hover:bg-white/15 transition-all duration-300 cursor-pointer hover:scale-105">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {userCount.toLocaleString()}+
              </div>
              <div className="text-white/70 mb-1">Users Educated</div>
              <div className="text-xs text-green-400">↑ Growing Daily</div>
            </div>
            <div className="glass-card text-center hover:bg-white/15 transition-all duration-300 cursor-pointer hover:scale-105">
              <div className="text-4xl font-bold text-green-400 mb-2">
                ₹{Math.floor(moneyCount / 100000)}L+
              </div>
              <div className="text-white/70 mb-1">Money Saved</div>
              <div className="text-xs text-green-400">↑ Through Smart Planning</div>
            </div>
            <div className="glass-card text-center hover:bg-white/15 transition-all duration-300 cursor-pointer hover:scale-105">
              <div className="text-4xl font-bold text-purple-400 mb-2">{toolCount}+</div>
              <div className="text-white/70 mb-1">Financial Tools</div>
              <div className="text-xs text-blue-400">→ All Categories Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}