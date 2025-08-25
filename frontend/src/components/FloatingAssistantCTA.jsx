// src/components/FloatingAssistantCTA.jsx

import { Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

export default function FloatingAssistantCTA() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(ROUTES.CHATBOT);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="bg-transparent hover:bg-white/5 border border-gray-400/30 text-gray-600 dark:text-gray-400 p-4 rounded-full shadow-none hover:scale-105 transition-all duration-300 flex items-center gap-2"
        aria-label="Open FinBot AI Assistant"
      >
        <Bot className="h-5 w-5" />
        <span className="hidden sm:inline font-medium text-sm">FinBot AI</span>
      </button>
    </div>
  );
}
