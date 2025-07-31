import { useState, useCallback } from 'react';
import { useChatContext } from '../contexts/ChatContext';
import { chatbotAPI } from '../services/chatService';
import { v4 as uuidv4 } from 'uuid';

export function useChatbot() {
  const { messages, isLoading, error, addMessage, setLoading, setError, sessionId, setSessionId } = useChatContext();
  const [conversationHistory, setConversationHistory] = useState([]);

  const sendMessage = useCallback(async (messageText) => {
    if (!messageText.trim() || isLoading) return;

    // Generate session ID if not exists
    if (!sessionId) {
      setSessionId(uuidv4());
    }

    // Add user message
    const userMessage = {
      id: uuidv4(),
      text: messageText,
      sender: 'user',
      timestamp: new Date().toISOString()
    };
    addMessage(userMessage);

    // Update conversation history
    const newHistory = [...conversationHistory, { role: 'user', content: messageText }];
    setConversationHistory(newHistory);

    setLoading(true);
    setError(null);

    try {
      const response = await chatbotAPI.sendMessage(messageText, newHistory);
      
      const botMessage = {
        id: uuidv4(),
        text: response.response,
        sender: 'bot',
        timestamp: new Date().toISOString()
      };
      addMessage(botMessage);

      // Update conversation history with bot response
      setConversationHistory([
        ...newHistory,
        { role: 'assistant', content: response.response }
      ]);

      if (!response.success) {
        setError(response.error);
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Chat error:', err);
    } finally {
      setLoading(false);
    }
  }, [isLoading, sessionId, conversationHistory, addMessage, setLoading, setError, setSessionId]);

  const getFinancialTip = useCallback(async () => {
    try {
      const response = await chatbotAPI.getFinancialTip();
      return response.tip;
    } catch (err) {
      console.error('Failed to get financial tip:', err);
      return 'Start investing early, even small amounts can grow significantly over time.';
    }
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    getFinancialTip
  };
}