import React, { useState } from 'react';
import ChatWidget from './Chat/ChatWidget';

const FloatingBubble = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className={`fixed bottom-4 right-4 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 z-40 ${
          isChatOpen ? 'rotate-45' : 'rotate-0'
        }`}
        title={isChatOpen ? 'Close FinBot' : 'Chat with FinBot'}
      >
        {isChatOpen ? '×' : '💬'}
      </button>

      {/* Notification Badge (optional) */}
      {!isChatOpen && (
        <div className="fixed bottom-16 right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center z-41 animate-pulse">
          !
        </div>
      )}

      {/* Chat Widget */}
      <ChatWidget 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </>
  );
};
};

export default FloatingBubble;