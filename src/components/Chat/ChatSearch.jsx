import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function ChatSearch({ messages, onSearchResults, darkMode, isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = messages.filter(message =>
        message.text.toLowerCase().includes(searchQuery.toLowerCase())
      ).map(message => ({
        ...message,
        highlightedText: highlightText(message.text, searchQuery)
      }));
      setResults(filtered);
      onSearchResults(filtered);
    } else {
      setResults([]);
      onSearchResults([]);
    }
  }, [searchQuery, messages, onSearchResults]);

  const highlightText = (text, query) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>');
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleDateString() + ' ' + 
           new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) return null;

  return (
    <div className={`absolute top-0 left-0 right-0 bottom-0 ${darkMode ? 'bg-gray-900' : 'bg-white'} z-20 flex flex-col`}>
      {/* Search Header */}
      <div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search conversations..."
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              autoFocus
            />
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'text-gray-600'}`}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
        
        {searchQuery && (
          <div className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {results.length} result{results.length !== 1 ? 's' : ''} found
          </div>
        )}
      </div>

      {/* Search Results */}
      <div className="flex-1 overflow-y-auto p-4">
        {searchQuery && results.length === 0 && (
          <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <MagnifyingGlassIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No messages found for "{searchQuery}"</p>
          </div>
        )}

        <div className="space-y-3">
          {results.map((message) => (
            <div
              key={message.id}
              className={`p-3 rounded-lg border ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' 
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
              } cursor-pointer transition-colors`}
              onClick={() => {
                // Scroll to message in main chat
                const element = document.getElementById(`message-${message.id}`);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  onClose();
                }
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {message.sender === 'user' ? 'You' : 'FinBot'} • {formatTime(message.timestamp)}
                </div>
              </div>
              <div 
                className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-800'} line-clamp-3`}
                dangerouslySetInnerHTML={{ __html: message.highlightedText }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Search Tips */}
      {!searchQuery && (
        <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <p className="font-medium mb-2">Search Tips:</p>
            <ul className="space-y-1">
              <li>• Search for specific financial terms like "SIP", "EMI", "tax"</li>
              <li>• Use quotes for exact phrases: "emergency fund"</li>
              <li>• Search is case-insensitive</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}