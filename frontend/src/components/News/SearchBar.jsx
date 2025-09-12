import React, { useState, useMemo } from 'react';
import { Search, X, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

// Move popular tags outside component to prevent recreation
const POPULAR_TAGS = ['RBI', 'Banking', 'UPI', 'Investment', 'Tax', 'Budget', 'Stock Market', 'Cryptocurrency', 'Mutual Funds', 'Insurance'];

const SearchBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
    setShowSuggestions(false);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 1) {
      const filtered = POPULAR_TAGS.filter(tag => 
        tag.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (tag) => {
    setQuery(tag);
    onSearch(tag);
    setShowSuggestions(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8"
    >
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={() => query.length > 1 && setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Search finance news... (e.g., RBI, Banking, UPI)"
            className="w-full pl-12 pr-12 py-4 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
            disabled={loading}
          />
          {query && (
            <motion.button
              type="button"
              onClick={handleClear}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <X className="w-4 h-4" />
            </motion.button>
          )}
          
          {/* Search Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-10 overflow-hidden"
            >
              {suggestions.map((suggestion, index) => (
                <motion.button
                  key={suggestion}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)", x: 5 }}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg flex items-center"
                >
                  <Search className="w-4 h-4 text-gray-400 mr-3" />
                  <span className="text-gray-900 dark:text-white">{suggestion}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
        
        <motion.button
          type="submit"
          disabled={loading || !query.trim()}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
        >
          {loading ? (
            <>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
              />
              Searching...
            </>
          ) : (
            <>
              <Search className="w-4 h-4 mr-2 inline" />
              Search News
            </>
          )}
        </motion.button>
      </form>

      {/* Popular Tags */}
      <div>
        <div className="flex items-center mb-3">
          <TrendingUp className="w-4 h-4 text-gray-500 mr-2" />
          <p className="text-sm text-gray-600 dark:text-gray-400">Trending topics:</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {POPULAR_TAGS.slice(0, 7).map((tag, index) => (
            <motion.button
              key={tag}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.3, type: "spring" }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setQuery(tag);
                onSearch(tag);
              }}
              className="px-4 py-2 text-sm bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
              disabled={loading}
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SearchBar;