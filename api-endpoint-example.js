// Backend API endpoint for OpenAI GPT-4-turbo integration
// This should be implemented on your server (Node.js/Express example)

const express = require('express');
const OpenAI = require('openai');
const app = express();

// Initialize OpenAI with your API key (store in environment variables)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Store securely on server
});

app.use(express.json());

// POST /api/chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, systemPrompt, toolsContext } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview", // or "gpt-4-turbo"
      messages: [
        {
          role: "system",
          content: `${systemPrompt}\n\n${toolsContext}`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const response = completion.choices[0].message.content;

    res.json({ 
      response,
      success: true 
    });

  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({ 
      error: 'Failed to process chat message',
      success: false 
    });
  }
});

// CORS middleware for frontend requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'POST');
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Environment variables needed:
// OPENAI_API_KEY=your_openai_api_key_here