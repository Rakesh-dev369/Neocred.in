import { FINBOT_SYSTEM_PROMPT, SAVELY_TOOLS_CONTEXT } from './constants';

// OpenAI GPT-4-turbo integration
export const sendChatMessage = async (message, conversationHistory = []) => {
  // Add typing delay for better UX
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));
  
  try {
    console.log('Attempting API call to:', `${import.meta.env.VITE_API_BASE_URL}/api/chat`);
    console.log('Sending message:', message);
    console.log('Conversation history length:', conversationHistory.length);
    
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        conversationHistory,
        systemPrompt: FINBOT_SYSTEM_PROMPT,
        toolsContext: SAVELY_TOOLS_CONTEXT
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
      isApiResponse: true
    };
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};



// Backend endpoint for OpenAI GPT-4-turbo (implement on server)
// POST /api/chat
// {
//   "message": "user message",
//   "systemPrompt": "FinBot system prompt",
//   "toolsContext": "Savely tools and features context"
// }