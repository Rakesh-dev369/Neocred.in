import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const SYSTEM_PROMPT = `You are NeoCred AI, a helpful financial advisor assistant. You provide accurate, practical financial advice for Indian users. Focus on:
- Personal finance basics
- Investment strategies (SIP, FD, mutual funds, stocks)
- Tax planning and savings
- Insurance guidance
- Budget planning
- Retirement planning

Always provide actionable advice and suggest using NeoCred's calculators when relevant. Keep responses concise and easy to understand.`;

export const chatbotAPI = {
  sendMessage: async (message, conversationHistory = []) => {
    try {
      const messages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...conversationHistory,
        { role: 'user', content: message }
      ];

      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages,
        max_tokens: 500,
        temperature: 0.7
      });

      return {
        response: completion.choices[0].message.content,
        success: true
      };
    } catch (error) {
      console.error('Chatbot API error:', error);
      return {
        response: 'I\'m sorry, I\'m having trouble connecting right now. Please try again later.',
        success: false,
        error: error.message
      };
    }
  },

  getFinancialTip: async () => {
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{
          role: 'user',
          content: 'Give me a short, practical financial tip for Indian users in 1-2 sentences.'
        }],
        max_tokens: 100,
        temperature: 0.8
      });

      return {
        tip: completion.choices[0].message.content,
        success: true
      };
    } catch (error) {
      return {
        tip: 'Start investing early, even small amounts can grow significantly over time due to compound interest.',
        success: false
      };
    }
  }
};