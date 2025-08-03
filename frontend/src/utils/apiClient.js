import { FINBOT_SYSTEM_PROMPT, NEOCRED_TOOLS_CONTEXT } from './constants';

// OpenAI GPT-4-turbo integration
export const sendChatMessage = async (message, conversationHistory = []) => {
  // Add typing delay for better UX
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));
  
  try {
    const apiUrl = import.meta.env?.VITE_API_BASE_URL || 'https://neocred.in';
    console.log('Attempting API call to:', `${apiUrl}/api/chat`);
    console.log('Sending message:', message);
    console.log('Conversation history length:', conversationHistory.length);
    
    const response = await fetch(`${apiUrl}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        conversationHistory,
        systemPrompt: FINBOT_SYSTEM_PROMPT,
        toolsContext: NEOCRED_TOOLS_CONTEXT
      }),
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('API Response received:', data);
    
    return {
      text: data.response,
      suggestions: data.suggestions || [],
      toolLink: data.toolLink,
      toolName: data.toolName,
      toolLinks: data.toolLinks || [],
      responseTime: data.responseTime,
      tokensUsed: data.tokensUsed,
      isApiResponse: true
    };
  } catch (error) {
    console.error('FinBot API Error:', error);
    console.error('API URL attempted:', `${import.meta.env?.VITE_API_BASE_URL || 'https://neocred.in'}/api/chat`);
    
    // Re-throw the error to be handled by the calling component
    throw new Error(`Backend API Error: ${error.message}`);
  }
};



// Backend endpoint for OpenAI GPT-4-turbo (implement on server)
// POST /api/chat
// {
//   "message": "user message",
//   "systemPrompt": "FinBot system prompt",
//   "toolsContext": "NeoCred tools and features context"
// }