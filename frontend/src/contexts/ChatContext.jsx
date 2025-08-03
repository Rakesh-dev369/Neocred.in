import { createContext, useContext, useReducer } from 'react';

const ChatContext = createContext();

const initialState = {
  messages: [],
  isLoading: false,
  error: null,
  sessionId: null
};

// Clear any existing localStorage on app start
if (typeof window !== 'undefined') {
  localStorage.removeItem('chatMessages');
  localStorage.removeItem('chatHistory');
}

function chatReducer(state, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case 'CLEAR_MESSAGES':
      return {
        ...state,
        messages: []
      };
    case 'SET_SESSION_ID':
      return {
        ...state,
        sessionId: action.payload
      };
    default:
      return state;
  }
}

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const addMessage = (message) => {
    dispatch({ type: 'ADD_MESSAGE', payload: message });
  };

  const setLoading = (loading) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const setError = (error) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  const clearMessages = () => {
    dispatch({ type: 'CLEAR_MESSAGES' });
  };

  const setSessionId = (sessionId) => {
    dispatch({ type: 'SET_SESSION_ID', payload: sessionId });
  };

  const value = {
    ...state,
    addMessage,
    setLoading,
    setError,
    clearMessages,
    setSessionId
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}