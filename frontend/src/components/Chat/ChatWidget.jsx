import React, { useState, useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import TypingIndicator from './TypingIndicator';
import { sendChatMessage } from '../../utils/apiClient';
import { FINBOT_INTRO_MESSAGE } from '../../utils/constants';

const ChatWidget = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: FINBOT_INTRO_MESSAGE,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (text) => {
    const userMessage = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const response = await sendChatMessage(text);
      
      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          text: response,
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        const errorMessage = {
          id: Date.now() + 1,
          text: "Sorry, I'm having trouble connecting right now. Please try again later.",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 md:bottom-20 right-4 w-full max-w-sm md:w-80 h-96 bg-gray-900/80 backdrop-blur-sm border border-gray-700/30 rounded-lg shadow-lg flex flex-col z-40 mx-4 md:mx-0">
      {/* Header */}
      <div className="bg-blue-600/70 backdrop-blur-sm text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            🤖
          </div>
          <div>
            <h3 className="font-semibold">FinBot</h3>
            <p className="text-xs opacity-80">Financial AI Assistant</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white text-xl"
        >
          ×
        </button>
      </div>
      
      {/* Context Display */}
      <div className="bg-blue-50/60 dark:bg-blue-900/20 backdrop-blur-sm text-blue-800 dark:text-blue-200 px-4 py-2 text-xs text-center border-b border-gray-700/30">
        💬 You're chatting with FinBot - Ask me anything about finance!
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map(message => (
          <MessageBubble key={message.id} message={message} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <MessageInput onSendMessage={handleSendMessage} isLoading={isTyping} />
    </div>
  );
};

export default ChatWidget;