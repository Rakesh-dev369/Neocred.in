import { Link } from 'react-router-dom';
import { TrendingUp, Calculator, Users } from 'lucide-react';
import { useRealTimeData } from '../hooks/useRealTimeData';

const PopularToolsWidget = ({ className = "" }) => {
  const { popularCalculators, loading } = useRealTimeData();

  if (loading) {
    return (
      <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex justify-between items-center mb-2">
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="flex items-center mb-3">
        <TrendingUp className="w-4 h-4 text-orange-500 mr-2" />
        <h3 className="font-semibold text-gray-900 dark:text-white">Popular Tools</h3>
      </div>
      
      <div className="space-y-2">
        {popularCalculators.slice(0, 5).map((tool, index) => (
          <Link
            key={tool.name}
            to={`/calculators/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="flex items-center justify-between p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mr-2">
                #{index + 1}
              </span>
              <Calculator className="w-3 h-3 text-gray-400 mr-2" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{tool.name}</span>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <Users className="w-3 h-3 mr-1" />
              {tool.uses}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularToolsWidget;