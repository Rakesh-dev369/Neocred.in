import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const ComparisonTable = ({ 
  data = [], 
  columns = [], 
  highlightBest = true,
  className = ""
}) => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [hoveredCol, setHoveredCol] = useState(null);

  const getBestValue = (columnKey, isHigherBetter = true) => {
    const values = data.map(row => parseFloat(row[columnKey]) || 0);
    return isHigherBetter ? Math.max(...values) : Math.min(...values);
  };

  const getComparisonIcon = (current, previous) => {
    if (current > previous) return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (current < previous) return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-400" />;
  };

  const isBestValue = (value, columnKey, isHigherBetter = true) => {
    if (!highlightBest) return false;
    const bestValue = getBestValue(columnKey, isHigherBetter);
    return parseFloat(value) === bestValue;
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <motion.table 
        className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            {columns.map((column, index) => (
              <motion.th
                key={column.key}
                className="px-6 py-4 text-left font-semibold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                onMouseEnter={() => setHoveredCol(column.key)}
                onMouseLeave={() => setHoveredCol(null)}
              >
                <motion.div
                  animate={{ scale: hoveredCol === column.key ? 1.05 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {column.label}
                </motion.div>
              </motion.th>
            ))}
          </tr>
        </thead>
        
        <tbody>
          <AnimatePresence>
            {data.map((row, rowIndex) => (
              <motion.tr
                key={rowIndex}
                className={`border-b border-gray-200 dark:border-gray-700 transition-colors duration-200 ${
                  hoveredRow === rowIndex 
                    ? 'bg-blue-50 dark:bg-blue-900/20' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: rowIndex * 0.1, duration: 0.3 }}
                onMouseEnter={() => setHoveredRow(rowIndex)}
                onMouseLeave={() => setHoveredRow(null)}
                whileHover={{ scale: 1.01 }}
              >
                {columns.map((column, colIndex) => {
                  const value = row[column.key];
                  const isNumeric = !isNaN(parseFloat(value));
                  const isBest = isNumeric && isBestValue(value, column.key, column.higherBetter);
                  
                  return (
                    <motion.td
                      key={column.key}
                      className={`px-6 py-4 text-gray-900 dark:text-white relative ${
                        hoveredCol === column.key ? 'bg-blue-100/50 dark:bg-blue-800/20' : ''
                      }`}
                      animate={{
                        backgroundColor: isBest && highlightBest 
                          ? 'rgba(34, 197, 94, 0.1)' 
                          : 'transparent'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-2">
                        <motion.span
                          className={`${isBest ? 'font-bold text-green-600 dark:text-green-400' : ''}`}
                          animate={{ scale: isBest ? 1.05 : 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {column.format ? column.format(value) : value}
                        </motion.span>
                        
                        {/* Comparison with previous row */}
                        {rowIndex > 0 && isNumeric && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            {getComparisonIcon(
                              parseFloat(value), 
                              parseFloat(data[rowIndex - 1][column.key])
                            )}
                          </motion.div>
                        )}
                        
                        {/* Best value indicator */}
                        {isBest && highlightBest && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ type: "spring", damping: 15 }}
                            className="absolute -top-1 -right-1"
                          >
                            <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                              <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            </div>
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Hover highlight effect */}
                      {(hoveredRow === rowIndex || hoveredCol === column.key) && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.td>
                  );
                })}
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </motion.table>
      
      {/* Legend */}
      {highlightBest && (
        <motion.div
          className="mt-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span>Best value</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span>Higher than previous</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-red-500" />
            <span>Lower than previous</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ComparisonTable;