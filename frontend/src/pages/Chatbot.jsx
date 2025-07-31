import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  PaperAirplaneIcon, 
  MagnifyingGlassIcon,
  DocumentArrowDownIcon,
  QuestionMarkCircleIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';
import { sendChatMessage } from '../utils/apiClient';
import { FINBOT_INTRO_MESSAGE, QUICK_SUGGESTIONS, CONVERSATION_STARTERS } from '../utils/constants';

// Import new components
import ChatHeader from '../components/Chat/ChatHeader';
import MessageBubble from '../components/Chat/MessageBubble';
import VoiceInput from '../components/Chat/VoiceInput';
import ChatSearch from '../components/Chat/ChatSearch';
import ChatAnalytics from '../components/Chat/ChatAnalytics';
import ChatExport from '../components/Chat/ChatExport';

export default function Chatbot() {
  const navigate = useNavigate();
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: FINBOT_INTRO_MESSAGE.text || FINBOT_INTRO_MESSAGE,
      sender: 'bot',
      timestamp: new Date().toISOString(),
      suggestions: FINBOT_INTRO_MESSAGE.suggestions || []
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const [userPreferences, setUserPreferences] = useState({});
  const [error, setError] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [rateLimitWarning, setRateLimitWarning] = useState(false);
  
  // New state for advanced features
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('finbot-dark-mode');
    return saved ? JSON.parse(saved) : false;
  });
  const [showSearch, setShowSearch] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [conversationTemplates] = useState(CONVERSATION_STARTERS);
  const [showTemplates, setShowTemplates] = useState(false);

  // Enhanced message sending with better context management
  const sendMessage = useCallback(async (text) => {
    if (!text.trim()) return;
    
    if (text.length > 1000) {
      setError('Message too long. Please keep it under 1000 characters.');
      return;
    }
    
    const userMessage = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setIsTyping(true);
    setError(null);
    setRateLimitWarning(false);
    
    try {
      // Include current messages + new user message for context
      const conversationHistory = [...messages, userMessage].slice(-10); // Last 10 messages
      console.log('Sending conversation history:', conversationHistory);
      const response = await sendChatMessage(text, conversationHistory);
      
      console.log('Frontend received response:', response);
      console.log('toolLinks in response:', response.toolLinks);
      
      const botMessage = {
        id: Date.now() + 1,
        text: response.text || response,
        sender: 'bot',
        timestamp: new Date().toISOString(),
        suggestions: response.suggestions || [],
        toolLink: response.toolLink,
        toolName: response.toolName,
        toolLinks: response.toolLinks || [],
        responseTime: response.responseTime,
        tokensUsed: response.tokensUsed,
        isApiResponse: response.isApiResponse
      };
      
      console.log('Bot message created:', botMessage);
      setMessages(prev => [...prev, botMessage]);
      
      // Enhanced user preference tracking
      updateUserPreferences(text);
      
    } catch (error) {
      console.error('Chat error:', error);
      handleChatError(error);
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  }, [messages]);
  
  // Enhanced preference tracking
  const updateUserPreferences = (text) => {
    const lowerText = text.toLowerCase();
    const updates = {};
    
    if (lowerText.includes('sip') || lowerText.includes('systematic')) {
      updates.interestedInSIP = true;
    }
    if (lowerText.includes('budget') || lowerText.includes('expense')) {
      updates.interestedInBudget = true;
    }
    if (lowerText.includes('loan') || lowerText.includes('emi')) {
      updates.interestedInLoans = true;
    }
    if (lowerText.includes('tax') || lowerText.includes('80c')) {
      updates.interestedInTax = true;
    }
    if (lowerText.includes('insurance')) {
      updates.interestedInInsurance = true;
    }
    
    if (Object.keys(updates).length > 0) {
      setUserPreferences(prev => ({ ...prev, ...updates }));
    }
  };
  
  // Enhanced error handling
  const handleChatError = (error) => {
    let errorText = "Sorry, I'm having trouble right now. Please try again! 😔";
    
    if (error.message?.includes('429')) {
      errorText = "You're sending messages too quickly. Please wait a moment before trying again. ⏱️";
      setRateLimitWarning(true);
    } else if (error.message?.includes('network') || !isOnline) {
      errorText = "Network connection issue. Please check your internet and try again. 🌐";
    } else if (error.message?.includes('500')) {
      errorText = "Our AI service is temporarily unavailable. Please try again in a few moments. 🔧";
    }
    
    const errorMessage = {
      id: Date.now() + 1,
      text: errorText,
      sender: 'bot',
      timestamp: new Date().toISOString(),
      isError: true
    };
    setMessages(prev => [...prev, errorMessage]);
    setError(errorText);
  };
  
  // Enhanced message management
  const clearMessages = () => {
    setMessages([
      {
        id: 1,
        text: FINBOT_INTRO_MESSAGE.text || FINBOT_INTRO_MESSAGE,
        sender: 'bot',
        timestamp: new Date().toISOString(),
        suggestions: FINBOT_INTRO_MESSAGE.suggestions || []
      }
    ]);
    localStorage.removeItem('chatbot-messages');
  };
  
  const navigateToTool = (toolLink) => {
    if (toolLink) {
      navigate(toolLink);
    }
  };
  
  // New message actions
  const handleMessageReact = (messageId, reaction) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId 
        ? { ...msg, reaction: msg.reaction === reaction ? null : reaction }
        : msg
    ));
  };
  
  const handleMessageDelete = (messageId) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
  };
  
  const handleMessageEdit = (messageId, newText) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, text: newText } : msg
    ));
  };
  
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const handleSpeak = (text) => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.8;
        utterance.pitch = 1;
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        speechSynthesis.speak(utterance);
      }
    }
  };
  
  const handleVoiceTranscript = (transcript) => {
    setInputMessage(transcript);
    inputRef.current?.focus();
  };
  
  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('finbot-dark-mode', JSON.stringify(newMode));
      return newMode;
    });
  };
  
  // Auto-scroll with smooth behavior
  const scrollToBottom = useCallback(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'end',
        inline: 'nearest'
      });
    }
  }, []);
  
  // Keyboard shortcuts
  const handleKeyDown = useCallback((e) => {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'k':
          e.preventDefault();
          setShowSearch(true);
          break;
        case 'e':
          e.preventDefault();
          setShowExport(true);
          break;
        case 'd':
          e.preventDefault();
          toggleDarkMode();
          break;
        case '/':
          e.preventDefault();
          setShowHelp(true);
          break;
      }
    }
    if (e.key === 'Escape') {
      setShowSearch(false);
      setShowAnalytics(false);
      setShowExport(false);
      setShowHelp(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      await sendMessage(inputMessage);
      setInputMessage('');
    }
  };

  const handleQuickQuestion = async (question) => {
    await sendMessage(question);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // Show temporary success indicator
      setError(null);
    } catch (error) {
      console.error('Copy failed:', error);
      setError('Failed to copy to clipboard');
    }
  };

  // Enhanced initialization and event handling
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatbot-messages');
    const savedPreferences = localStorage.getItem('user-preferences');
    
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        setMessages(parsed);
      } catch (error) {
        console.error('Error loading messages:', error);
      }
    }
    
    if (savedPreferences) {
      try {
        setUserPreferences(JSON.parse(savedPreferences));
      } catch (error) {
        console.error('Error loading preferences:', error);
      }
    }
    
    // Event listeners
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  
  // Auto-scroll on new messages
  useEffect(() => {
    if (messages.length > 1) {
      const timer = setTimeout(scrollToBottom, 100);
      return () => clearTimeout(timer);
    }
  }, [messages, scrollToBottom]);

  // Enhanced persistence
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('chatbot-messages', JSON.stringify(messages));
    }
  }, [messages]);
  
  useEffect(() => {
    localStorage.setItem('user-preferences', JSON.stringify(userPreferences));
  }, [userPreferences]);
  
  useEffect(() => {
    localStorage.setItem('finbot-dark-mode', JSON.stringify(darkMode));
    // Apply dark mode to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`h-screen flex flex-col ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Chat Header */}
      <ChatHeader
        isOnline={isOnline}
        rateLimitWarning={rateLimitWarning}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        onShowHelp={() => setShowHelp(true)}
        onShowAnalytics={() => setShowAnalytics(true)}
        messageCount={messages.length}
      />
      
      {/* Messages Area - Takes up remaining space */}
      <div className={`flex-1 overflow-y-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 py-4 space-y-4">
              {messages.length === 1 ? (
                <div className="text-center py-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg">🤖</span>
                  </div>
                  <h2 className={`text-base font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Welcome to FinBot AI!
                  </h2>
                  <p className={`mb-4 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Your intelligent financial assistant
                  </p>
                  
                  {/* Quick Start Questions */}
                  <div className="max-w-lg mx-auto space-y-2">
                    {conversationTemplates.investment?.slice(0, 3).map((question, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickQuestion(question)}
                        className={`w-full p-2 text-left rounded transition-all text-xs ${
                          darkMode 
                            ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700' 
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200'
                        }`}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((message) => (
                  <MessageBubble
                    key={message.id}
                    message={message}
                    darkMode={darkMode}
                    onCopy={copyToClipboard}
                    onReact={handleMessageReact}
                    onSpeak={handleSpeak}
                    onDelete={handleMessageDelete}
                    onEdit={handleMessageEdit}
                    onNavigateToTool={navigateToTool}
                    onSendMessage={sendMessage}
                    isSpeaking={isSpeaking}
                  />
                ))
              )}
              
              {/* Enhanced typing indicator */}
              {isTyping && (
                <div className="flex justify-start pl-10">
                  <div className={`px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        FinBot is thinking...
                      </span>
                    </div>
                  </div>
                </div>
              )}
              
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Compact Input Area */}
      <div className={`border-t ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 py-2">
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <button
                type="button"
                onClick={() => setShowSearch(true)}
                className={`p-1.5 rounded hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'text-gray-600'}`}
                title="Search"
              >
                <MagnifyingGlassIcon className="h-4 w-4" />
              </button>
              
              <VoiceInput
                onTranscript={handleVoiceTranscript}
                darkMode={darkMode}
                disabled={isLoading || !isOnline}
              />
            </div>
            
            <div className="flex-1">
              <textarea
                ref={inputRef}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder="Ask about investments, budgeting, taxes..."
                className={`w-full px-3 py-2 rounded-lg border focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                disabled={isLoading || !isOnline}
                maxLength={1000}
                rows={1}
                style={{ minHeight: '36px', maxHeight: '100px' }}
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading || !inputMessage.trim() || !isOnline}
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              <PaperAirplaneIcon className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
      
      {/* Overlay Components */}
      <ChatSearch
          messages={messages}
          onSearchResults={setSearchResults}
          darkMode={darkMode}
          isOpen={showSearch}
          onClose={() => setShowSearch(false)}
        />
        
        <ChatAnalytics
          messages={messages}
          userPreferences={userPreferences}
          darkMode={darkMode}
          isOpen={showAnalytics}
          onClose={() => setShowAnalytics(false)}
        />
        
        <ChatExport
          messages={messages}
          darkMode={darkMode}
          isOpen={showExport}
          onClose={() => setShowExport(false)}
        />
        
      {/* Help Modal */}
      {showHelp && (
        <div className={`absolute top-0 left-0 right-0 bottom-0 ${darkMode ? 'bg-gray-900' : 'bg-white'} z-20 flex flex-col`}>
            <div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  FinBot Help & Shortcuts
                </h2>
                <button
                  onClick={() => setShowHelp(false)}
                  className={`p-2 rounded-lg hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'text-gray-600'}`}
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="max-w-2xl mx-auto space-y-6">
                <div>
                  <h3 className={`font-medium mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Keyboard Shortcuts</h3>
                  <div className="space-y-2">
                    {[
                      { key: 'Ctrl + K', desc: 'Search conversations' },
                      { key: 'Ctrl + E', desc: 'Export conversation' },
                      { key: 'Ctrl + D', desc: 'Toggle dark mode' },
                      { key: 'Ctrl + /', desc: 'Show this help' },
                      { key: 'Escape', desc: 'Close modals' },
                      { key: 'Shift + Enter', desc: 'New line in message' }
                    ].map((shortcut, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span className={`font-mono text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {shortcut.key}
                        </span>
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {shortcut.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className={`font-medium mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Features</h3>
                  <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <li>• Voice input with speech recognition</li>
                    <li>• Message reactions and editing</li>
                    <li>• Conversation search and export</li>
                    <li>• Smart tool recommendations</li>
                    <li>• Dark/light mode support</li>
                    <li>• Conversation analytics</li>
                    <li>• Keyboard shortcuts</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}