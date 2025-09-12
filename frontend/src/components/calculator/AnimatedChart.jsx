import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const AnimatedChart = ({ 
  data, 
  type = 'bar', 
  title = 'Chart', 
  colors = ['#60a5fa', '#34d399', '#fbbf24', '#f87171'],
  height = 250 
}) => {
  const [animatedData, setAnimatedData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      setIsVisible(true);
      // Animate data entry
      const timer = setTimeout(() => {
        setAnimatedData(data);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [data]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600"
        >
          <p className="text-gray-900 dark:text-white font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="font-semibold">
              {`${entry.name}: ₹${Number(entry.value).toLocaleString()}`}
            </p>
          ))}
        </motion.div>
      );
    }
    return null;
  };

  const renderBarChart = () => (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={animatedData} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
        <XAxis 
          dataKey="name" 
          tick={{ fill: 'currentColor', fontSize: 10 }}
          axisLine={{ stroke: 'currentColor', strokeWidth: 1 }}
          className="text-gray-900 dark:text-white"
        />
        <YAxis 
          tick={{ fill: 'currentColor', fontSize: 10 }}
          axisLine={{ stroke: 'currentColor', strokeWidth: 1 }}
          tickFormatter={(val) => `₹${(val/1000).toFixed(0)}K`}
          className="text-gray-900 dark:text-white"
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar 
          dataKey="amount" 
          radius={[4, 4, 0, 0]}
          fill="url(#chartGradient)"
        >
          {animatedData.map((entry, index) => (
            <motion.rect
              key={`bar-${index}`}
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            />
          ))}
        </Bar>
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors[0]} />
            <stop offset="50%" stopColor={colors[1] || colors[0]} />
            <stop offset="100%" stopColor={colors[2] || colors[0]} />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );

  const renderPieChart = () => (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={animatedData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          dataKey="amount"
          animationBegin={0}
          animationDuration={1000}
        >
          {animatedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );

  if (!isVisible || !animatedData.length) {
    return (
      <motion.div 
        className="bg-gray-200 dark:bg-white/5 p-6 rounded-xl flex items-center justify-center"
        style={{ height }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-gray-500 dark:text-gray-400">
          Enter values to see chart
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="bg-gray-200 dark:bg-white/5 p-6 rounded-xl relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background shimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      
      <motion.h3 
        className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h3>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {type === 'pie' ? renderPieChart() : renderBarChart()}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedChart;