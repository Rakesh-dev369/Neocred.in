import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedChart = ({ data, type = "line", width = 400, height = 300, animate = true }) => {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimationProgress(1), 100);
      return () => clearTimeout(timer);
    } else {
      setAnimationProgress(1);
    }
  }, [animate]);

  const maxValue = Math.max(...data.map(d => d.value));
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const getPath = (progress = 1) => {
    const points = data.map((d, i) => {
      const x = padding + (i / (data.length - 1)) * chartWidth;
      const y = padding + chartHeight - (d.value / maxValue) * chartHeight * progress;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
    return points;
  };

  const getAreaPath = (progress = 1) => {
    const linePath = getPath(progress);
    const bottomRight = `L ${padding + chartWidth} ${padding + chartHeight}`;
    const bottomLeft = `L ${padding} ${padding + chartHeight}`;
    const close = 'Z';
    return `${linePath} ${bottomRight} ${bottomLeft} ${close}`;
  };

  if (type === "pie") {
    const total = data.reduce((sum, d) => sum + d.value, 0);
    let currentAngle = -90;
    
    return (
      <svg width={width} height={height} className="overflow-visible">
        <g transform={`translate(${width/2}, ${height/2})`}>
          {data.map((d, i) => {
            const angle = (d.value / total) * 360;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angle;
            currentAngle += angle;
            
            const radius = Math.min(width, height) / 2 - 20;
            const x1 = Math.cos((startAngle * Math.PI) / 180) * radius;
            const y1 = Math.sin((startAngle * Math.PI) / 180) * radius;
            const x2 = Math.cos((endAngle * Math.PI) / 180) * radius;
            const y2 = Math.sin((endAngle * Math.PI) / 180) * radius;
            
            const largeArc = angle > 180 ? 1 : 0;
            const pathData = `M 0 0 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
            
            return (
              <motion.path
                key={i}
                d={pathData}
                fill={`hsl(${(i * 360) / data.length}, 70%, 60%)`}
                stroke="white"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: animationProgress, 
                  opacity: animationProgress,
                  rotate: animationProgress * 360
                }}
                transition={{ delay: i * 0.1, duration: 0.8, type: "spring" }}
              />
            );
          })}
        </g>
      </svg>
    );
  }

  if (type === "bar") {
    return (
      <svg width={width} height={height}>
        {data.map((d, i) => {
          const barWidth = chartWidth / data.length * 0.8;
          const x = padding + (i / data.length) * chartWidth + (chartWidth / data.length - barWidth) / 2;
          const barHeight = (d.value / maxValue) * chartHeight;
          const y = padding + chartHeight - barHeight;
          
          return (
            <motion.rect
              key={i}
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              fill={`hsl(${(i * 360) / data.length}, 70%, 60%)`}
              initial={{ height: 0, y: padding + chartHeight }}
              animate={{ 
                height: barHeight * animationProgress, 
                y: y + barHeight * (1 - animationProgress)
              }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            />
          );
        })}
      </svg>
    );
  }

  return (
    <svg width={width} height={height}>
      {type === "area" && (
        <motion.path
          d={getAreaPath(1)}
          fill="url(#gradient)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: animationProgress, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      )}
      
      <motion.path
        d={getPath(1)}
        stroke="#3B82F6"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: animationProgress }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      {data.map((d, i) => {
        const x = padding + (i / (data.length - 1)) * chartWidth;
        const y = padding + chartHeight - (d.value / maxValue) * chartHeight;
        
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="4"
            fill="#3B82F6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: animationProgress, opacity: animationProgress }}
            transition={{ delay: i * 0.1 + 0.5, duration: 0.3 }}
          />
        );
      })}
      
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AnimatedChart;