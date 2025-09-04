import React, { useMemo } from 'react';

const AnimatedBackground = () => {
  // Memoize particles to prevent recreation on every render
  const particles = useMemo(() => 
    Array.from({length: 20}).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10
    })), []
  );

  return (
    <div className="fixed inset-0 z-0">
      {/* Primary Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950"></div>
      
      {/* Animated Mesh Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/10 via-transparent to-purple-400/10 animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-emerald-400/8 via-transparent to-cyan-400/8 animate-pulse" style={{animationDuration: '12s', animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-purple-400/6 via-transparent to-pink-400/6 animate-pulse" style={{animationDuration: '10s', animationDelay: '4s'}}></div>
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-300/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-emerald-200/15 to-teal-300/15 dark:from-emerald-600/8 dark:to-teal-600/8 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-200/12 to-blue-300/12 dark:from-indigo-600/6 dark:to-blue-600/6 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-purple-200/18 to-pink-300/18 dark:from-purple-600/9 dark:to-pink-600/9 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 right-10 w-88 h-88 bg-gradient-to-br from-cyan-200/14 to-blue-300/14 dark:from-cyan-600/7 dark:to-blue-600/7 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59 130 246) 1px, transparent 0)`,
        backgroundSize: '80px 80px'
      }}></div>
      
      {/* Dynamic Light Rays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200/20 to-transparent dark:via-blue-600/10 transform rotate-12 animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-200/15 to-transparent dark:via-purple-600/8 transform -rotate-12 animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-200/12 to-transparent dark:via-emerald-600/6 transform rotate-6 animate-pulse" style={{animationDuration: '10s', animationDelay: '4s'}}></div>
      </div>
      
      {/* Optimized Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400/30 dark:bg-blue-300/20 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent dark:via-gray-800/5" style={{
        animation: 'mesh-move 20s ease-in-out infinite'
      }}></div>
    </div>
  );
};

export default AnimatedBackground;