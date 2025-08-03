import React, { useState, useEffect } from 'react';
import { Heart, Star } from 'lucide-react';

const ToolFavorites = ({ toolName, className = '' }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteTools') || '[]');
    setFavorites(savedFavorites);
    setIsFavorite(savedFavorites.includes(toolName));
  }, [toolName]);

  const toggleFavorite = () => {
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter(tool => tool !== toolName);
    } else {
      updatedFavorites = [...favorites, toolName];
    }
    
    setFavorites(updatedFavorites);
    setIsFavorite(!isFavorite);
    localStorage.setItem('favoriteTools', JSON.stringify(updatedFavorites));
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`p-2 rounded-lg transition-colors ${
        isFavorite 
          ? 'text-red-500 bg-red-50 dark:bg-red-900/20' 
          : 'text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
      } ${className}`}
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
    </button>
  );
};

export const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteTools') || '[]');
    setFavorites(savedFavorites);
  }, []);

  if (favorites.length === 0) return null;

  return (
    <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <div className="flex items-center gap-2 mb-3">
        <Star className="w-5 h-5 text-yellow-600" />
        <h3 className="font-semibold text-yellow-800 dark:text-yellow-300">Your Favorite Tools</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {favorites.map((tool, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-yellow-100 dark:bg-yellow-800/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ToolFavorites;