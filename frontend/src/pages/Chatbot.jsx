import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  PaperAirplaneIcon, 
  MagnifyingGlassIcon,
  DocumentArrowDownIcon,
  QuestionMarkCircleIcon,
  CommandLineIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import { sendChatMessage } from '../utils/apiClient';
import { FINBOT_INTRO_MESSAGE, QUICK_SUGGESTIONS, CONVERSATION_STARTERS } from '../utils/constants';
import '../styles/chatbot.css';

// Import available components (others will be created as needed)
// import ChatHeader from '../components/Chat/ChatHeader';
// import MessageBubble from '../components/Chat/MessageBubble';
// import VoiceInput from '../components/Chat/VoiceInput';
// import ChatSearch from '../components/Chat/ChatSearch';
// import ChatAnalytics from '../components/Chat/ChatAnalytics';
// import ChatExport from '../components/Chat/ChatExport';

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
  
  // Use website's theme context
  const { isDark: darkMode, toggleTheme } = useTheme();
  
  // New state for advanced features
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
      // Use functional update to get latest messages
      setMessages(prev => {
        const conversationHistory = [...prev, userMessage].slice(-10); // Last 10 messages
        
        // Continue with API call
        (async () => {
          try {
      // Sending conversation history
      const response = await sendChatMessage(text, conversationHistory);
      
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
      
      // Bot message created successfully
      setMessages(prev => [...prev, botMessage]);
      
      // Enhanced user preference tracking
      updateUserPreferences(text);
      
          } catch (error) {
            console.error('Chat API error');
            handleChatError(error);
          } finally {
            setIsLoading(false);
            setIsTyping(false);
          }
        })();
        
        return [...prev, userMessage];
      });
    } catch (error) {
      console.error('Message processing error');
      setIsLoading(false);
      setIsTyping(false);
    }
  }, []);
  
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
    let errorText = "❌ **Backend Connection Failed**\n\nI'm unable to connect to the NeoCred AI service. This could be because:\n\n• The backend server is starting up (takes 10-30 seconds)\n• Network connectivity issues\n• Server maintenance\n\nPlease wait a moment and try again! 🔄";
    
    if (error.message?.includes('429')) {
      errorText = "⏱️ **Rate Limited**\n\nYou're sending messages too quickly. Please wait a moment before trying again.";
      setRateLimitWarning(true);
    } else if (error.message?.includes('network') || !isOnline) {
      errorText = "🌐 **Network Issue**\n\nPlease check your internet connection and try again.";
    } else if (error.message?.includes('500')) {
      errorText = "🔧 **Server Error**\n\nOur AI service is temporarily unavailable. Please try again in a few moments.";
    }
    
    const errorMessage = {
      id: Date.now() + 1,
      text: errorText,
      sender: 'bot',
      timestamp: new Date().toISOString(),
      isError: true,
      isApiResponse: false
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
  
  // Use website's theme toggle
  const toggleDarkMode = toggleTheme;
  
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
      // Feature detection for Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        setError(null);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setError(null);
      }
    } catch (error) {
      console.error('Copy operation failed');
      setError('Unable to copy to clipboard. Please try selecting and copying manually.');
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
  


  return (
    <div className={`h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      {/* Enhanced Chat Header */}
      <div className={`border-b backdrop-blur-sm transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-800/80 border-gray-700 shadow-lg' 
          : 'bg-white/80 border-gray-200 shadow-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate(-1)}
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                  darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
                }`}
                title="Go Back"
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </button>
              
              <div className="relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  darkMode ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gradient-to-r from-blue-500 to-purple-500'
                } shadow-lg`}>
                  <span className="text-lg animate-pulse">🤖</span>
                </div>
                {isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                )}
              </div>
              <div>
                <h1 className={`text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
                  FinBot AI
                </h1>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {isOnline ? 'Your AI Financial Assistant' : 'Offline Mode'}
                  {rateLimitWarning && ' • Rate Limited'}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowSearch(true)}
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                  darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
                }`}
                title="Search (Ctrl+K)"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => setShowExport(true)}
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                  darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
                }`}
                title="Export (Ctrl+E)"
              >
                <DocumentArrowDownIcon className="h-5 w-5" />
              </button>
              
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                  darkMode ? 'hover:bg-gray-700 text-yellow-400' : 'hover:bg-gray-100 text-gray-600'
                }`}
                title="Toggle Theme (Ctrl+D)"
              >
                {darkMode ? '🌙' : '☀️'}
              </button>
              
              <button
                onClick={() => setShowHelp(true)}
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                  darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
                }`}
                title="Help (Ctrl+/)"
              >
                <QuestionMarkCircleIcon className="h-5 w-5" />
              </button>
              
              <button
                onClick={clearMessages}
                className={`px-3 py-1.5 text-xs rounded-lg transition-all duration-200 hover:scale-105 ${
                  darkMode 
                    ? 'bg-red-900/30 text-red-400 hover:bg-red-900/50' 
                    : 'bg-red-50 text-red-600 hover:bg-red-100'
                }`}
                title="Clear Chat"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Messages Area */}
      <div className={`flex-1 overflow-y-auto transition-colors duration-300 ${
        darkMode ? 'bg-transparent' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
              {messages.length === 1 ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 transform hover:scale-110 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl shadow-blue-500/25' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/25'
                    }`}>
                      <span className="text-2xl animate-bounce">🤖</span>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 animate-ping" />
                  </div>
                  
                  <h2 className={`text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
                    Welcome to FinBot AI! 🚀
                  </h2>
                  <p className={`mb-8 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your intelligent financial assistant with access to 25+ calculators & 8 learning pillars
                  </p>
                  
                  {/* Enhanced Quick Start */}
                  <div className="max-w-4xl mx-auto space-y-6">
                    <h3 className={`text-sm font-medium mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      💡 Try asking me about:
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { icon: '📈', text: 'How to start SIP investment?', category: 'Investment' },
                        { icon: '🏠', text: 'Calculate my home loan EMI', category: 'Loans' },
                        { icon: '💰', text: 'Best tax saving options under 80C?', category: 'Tax' },
                        { icon: '📊', text: 'Create a monthly budget plan', category: 'Planning' },
                        { icon: '🛡️', text: 'How much life insurance do I need?', category: 'Insurance' },
                        { icon: '🎯', text: 'Plan for retirement corpus', category: 'Retirement' }
                      ].map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuickQuestion(item.text)}
                          className={`group p-4 text-left rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                            darkMode 
                              ? 'bg-gray-800/50 hover:bg-gray-700/70 text-gray-300 border border-gray-700/50 hover:border-blue-500/50 backdrop-blur-sm' 
                              : 'bg-white/70 hover:bg-white text-gray-700 border border-gray-200 hover:border-blue-300 backdrop-blur-sm shadow-sm hover:shadow-lg'
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <span className="text-xl group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                            <div className="flex-1">
                              <p className="text-sm font-medium group-hover:text-blue-600 transition-colors">{item.text}</p>
                              <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{item.category}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    <div className={`mt-8 p-4 rounded-xl ${darkMode ? 'bg-blue-900/20 border border-blue-800/30' : 'bg-blue-50 border border-blue-200'}`}>
                      <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                        💬 <strong>Pro Tip:</strong> I have access to all NeoCred tools, learning content, and current 2025 financial data!
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {messages.map((message, index) => (
                    <div
                      key={message.id}
                      className={`message-bubble ${message.sender} animate-fade-in`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Enhanced Message Display */}
                      <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-6`}>
                        <div className={`max-w-2xl lg:max-w-4xl px-6 py-4 rounded-2xl shadow-sm ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                            : darkMode
                              ? 'bg-gray-800/90 text-gray-100 border border-gray-700'
                              : 'bg-white text-gray-900 border border-gray-200'
                        }`}>
                          <div className="prose prose-sm max-w-none">
                            <p className="text-base leading-relaxed whitespace-pre-wrap mb-0">{message.text}</p>
                          </div>
                          {message.toolLinks && message.toolLinks.length > 0 && (
                            <div className="mt-4 space-y-2">
                              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Recommended Tools:</p>
                              <div className="flex flex-wrap gap-2">
                                {message.toolLinks.map((tool, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => navigateToTool(tool.url)}
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-sm"
                                  >
                                    <span className="mr-2">{tool.icon}</span>
                                    {tool.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                          {message.toolLink && (
                            <div className="mt-4">
                              <button
                                onClick={() => navigateToTool(message.toolLink)}
                                className="inline-flex items-center px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-sm"
                              >
                                <span className="mr-2">🔧</span>
                                {message.toolName || 'Open Tool'}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Enhanced typing indicator with better animation */}
              {isTyping && (
                <div className="flex justify-start pl-10 animate-fade-in">
                  <div className={`px-4 py-3 rounded-2xl rounded-bl-md shadow-lg border backdrop-blur-sm ${
                    darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-gray-200'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        FinBot is analyzing...
                      </span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Error Display */}
              {error && (
                <div className="flex justify-center px-4 animate-fade-in">
                  <div className={`max-w-md p-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-red-900/20 border-red-800/30 text-red-300' 
                      : 'bg-red-50 border-red-200 text-red-700'
                  }`}>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500">⚠️</span>
                      <p className="text-sm">{error}</p>
                      <button
                        onClick={() => setError(null)}
                        className={`ml-auto text-xs px-2 py-1 rounded ${
                          darkMode ? 'hover:bg-red-800/30' : 'hover:bg-red-100'
                        }`}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Enhanced Input Area */}
      <div className={`border-t backdrop-blur-sm transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-800/80 border-gray-700 shadow-lg' 
          : 'bg-white/80 border-gray-200 shadow-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-3">
          <form onSubmit={handleSubmit} className="relative">
            <div className={`flex items-end space-x-3 p-3 rounded-2xl border-2 transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-700/50 border-gray-600 focus-within:border-blue-500 focus-within:bg-gray-700/70' 
                : 'bg-white border-gray-200 focus-within:border-blue-400 focus-within:shadow-lg'
            } backdrop-blur-sm`}>
              
              {/* Left Actions */}
              <div className="flex items-center space-x-2">
                {/* Voice Input - Coming Soon */}
                <button
                  type="button"
                  disabled
                  className={`p-2 rounded-lg opacity-50 cursor-not-allowed ${
                    darkMode ? 'text-gray-500' : 'text-gray-400'
                  }`}
                  title="Voice Input - Coming Soon"
                >
                  🎤
                </button>
                
                <button
                  type="button"
                  onClick={() => setShowTemplates(!showTemplates)}
                  className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                    darkMode ? 'hover:bg-gray-600 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
                  }`}
                  title="Quick Templates"
                >
                  <CommandLineIcon className="h-4 w-4" />
                </button>
              </div>
              
              {/* Input Field */}
              <div className="flex-1 relative">
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
                  placeholder="Ask me anything about finance, investments, loans, taxes... 💬"
                  className={`w-full px-0 py-2 bg-transparent border-none focus:ring-0 focus:outline-none resize-none text-sm leading-relaxed transition-all duration-200 ${
                    darkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                  }`}
                  disabled={isLoading || !isOnline}
                  maxLength={1000}
                  rows={1}
                  style={{ minHeight: '24px', maxHeight: '120px' }}
                />
                
                {/* Character Count */}
                {inputMessage.length > 800 && (
                  <div className={`absolute -top-6 right-0 text-xs ${
                    inputMessage.length > 950 ? 'text-red-500' : darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {inputMessage.length}/1000
                  </div>
                )}
              </div>
              
              {/* Send Button */}
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim() || !isOnline}
                className={`p-2.5 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                  inputMessage.trim() && isOnline && !isLoading
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl'
                    : darkMode 
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <PaperAirplaneIcon className="h-4 w-4" />
                )}
              </button>
            </div>
            
            {/* Quick Templates Dropdown */}
            {showTemplates && (
              <div className={`absolute bottom-full left-0 right-0 mb-2 p-3 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800/90 border-gray-700 shadow-xl' 
                  : 'bg-white/90 border-gray-200 shadow-xl'
              }`}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    '📈 SIP vs Lumpsum comparison',
                    '🏠 Home loan eligibility check',
                    '💰 Tax saving under 80C',
                    '📊 Monthly budget planning',
                    '🛡️ Insurance coverage needs',
                    '🎯 Retirement planning guide'
                  ].map((template, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setInputMessage(template.split(' ').slice(1).join(' '));
                        setShowTemplates(false);
                        inputRef.current?.focus();
                      }}
                      className={`p-2 text-xs text-left rounded-lg transition-all duration-200 hover:scale-105 ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {template}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Status Indicators */}
            <div className="flex items-center justify-between mt-2 px-1">
              <div className="flex items-center space-x-3 text-xs">
                <div className={`flex items-center space-x-1 ${
                  isOnline ? 'text-green-500' : 'text-red-500'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    isOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                  }`} />
                  <span>{isOnline ? 'Online' : 'Offline'}</span>
                </div>
                
                {rateLimitWarning && (
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                    <span>Rate Limited</span>
                  </div>
                )}
              </div>
              
              <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                <span className="hidden sm:inline">Press Enter to send • Shift+Enter for new line • </span>
                <span className="text-green-500">✓ Secure & Private</span>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      {/* Overlay Components - Simplified for now */}
      {showSearch && (
        <div className={`fixed inset-0 bg-black/50 z-30 flex items-center justify-center`}>
          <div className={`max-w-md w-full mx-4 p-6 rounded-xl ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}>
            <h3 className="text-lg font-semibold mb-4">Search Feature</h3>
            <p className="text-sm mb-4">Advanced search functionality coming soon!</p>
            <button
              onClick={() => setShowSearch(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      {showExport && (
        <div className={`fixed inset-0 bg-black/50 z-30 flex items-center justify-center`}>
          <div className={`max-w-md w-full mx-4 p-6 rounded-xl ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}>
            <h3 className="text-lg font-semibold mb-4">Export Chat</h3>
            <p className="text-sm mb-4">Export functionality coming soon!</p>
            <button
              onClick={() => setShowExport(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
        
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