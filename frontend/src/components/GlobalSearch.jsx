import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GlobalSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const searchData = [
    { title: 'SIP Calculator', type: 'Tool', url: '/tools?tool=SIP Calculator' },
    { title: 'Budget Planner', type: 'Tool', url: '/tools?tool=Budget Planner' },
    { title: 'Home Loan EMI', type: 'Tool', url: '/tools?tool=Home Loan EMI Calculator' },
    { title: 'Financial News', type: 'Page', url: '/news' },
    { title: 'Learn Finance', type: 'Page', url: '/learn' },
    { title: 'AI Assistant', type: 'Feature', url: '/chatbot' },
  ];

  useEffect(() => {
    if (query.length > 1) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelect = (url) => {
    navigate(url);
    setIsOpen(false);
    setQuery('');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <Search className="w-4 h-4" />
        <span>Search...</span>
        <kbd className="text-xs bg-gray-200 dark:bg-gray-600 px-1 rounded">Ctrl+K</kbd>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-lg mx-4">
        <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search tools, pages, features..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white"
            autoFocus
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {results.length > 0 && (
          <div className="max-h-80 overflow-y-auto">
            {results.map((result, index) => (
              <button
                key={index}
                onClick={() => handleSelect(result.url)}
                className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 text-left transition-colors"
              >
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Search className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">{result.title}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{result.type}</div>
                </div>
              </button>
            ))}
          </div>
        )}
        
        {query.length > 1 && results.length === 0 && (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">
            No results found for "{query}"
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalSearch;