const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8001';

const SYSTEM_PROMPT = `You are FinBot, NeoCred's AI-powered financial assistant. You help users with:
- 40+ Financial Calculators (SIP, FD, Home Loan EMI, etc.)
- Investment advice and planning
- Tax saving strategies
- Budget and goal planning
- Insurance guidance

When users ask about calculations, always mention the relevant calculator tool. Be helpful, accurate, and suggest using NeoCred's tools.`;

const TOOLS_CONTEXT = `Available NeoCred Tools:
- SIP Calculator, Lumpsum Investment Calculator
- Budget Planner, Emergency Fund Calculator
- Home Loan EMI Calculator, FD Calculator
- Tax Saver Calculator, PPF Calculator
- And 30+ more financial tools`;

export const chatbotAPI = {
  sendMessage: async (message, conversationHistory = []) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          conversationHistory,
          systemPrompt: SYSTEM_PROMPT,
          toolsContext: TOOLS_CONTEXT
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        response: data.response,
        suggestions: data.suggestions || [],
        toolLink: data.toolLink,
        toolLinks: data.toolLinks || [],
        success: true
      };
    } catch (error) {
      console.error('FinBot API error:', error);
      throw error;
    }
  },

  getFinancialTip: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Give me a quick financial tip for Indian users',
          conversationHistory: [],
          systemPrompt: 'You are a financial advisor. Give a short, practical tip in 1-2 sentences.',
          toolsContext: ''
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        tip: data.response,
        success: true
      };
    } catch (error) {
      throw error;
    }
  }
};