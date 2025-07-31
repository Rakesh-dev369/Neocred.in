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
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-xl hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 flex items-center gap-2"
        aria-label="Open FinBot AI Assistant"
      >
        <Bot className="h-5 w-5" />
        <span className="hidden sm:inline font-medium text-sm">FinBot AI</span>
      </button>
    </div>
  );
}
