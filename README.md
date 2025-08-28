# 🛡️₹ Neocred - AI-Powered Financial Platform

> **Master Your Financial Future** with 30+ calculators, AI assistant, and comprehensive learning resources.

## ✨ Features

### 🤖 **FinBot AI Assistant**
- GPT-4-turbo powered financial advisor
- Smart tool recommendations
- Real-time financial guidance
- VS comparison support (SIP vs Lumpsum, etc.)

### 🧮 **30+ Financial Calculators**
- **Investment**: SIP, Lumpsum, Step-up SIP, Goal Planning
- **Loans**: Home Loan EMI, Car Loan, Personal Loan
- **Savings**: FD, RD, PPF, NSC
- **Insurance**: Term Life, Health, Vehicle
- **Tax**: 80C Savings, HRA, Form 16 Analysis
- **Retirement**: NPS, EPF, Annuity Planning

### 📚 **Learn Section**
- 8 Pillars of Financial Literacy
- Interactive learning journey
- Weekly financial tips
- Video tutorials

### 📰 **Financial News**
- Real-time market updates
- Policy changes & RBI updates
- Advanced filtering & search
- Bookmark system

## 🛠️ Tech Stack

### Frontend
- **React 19** + **Vite**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Zustand** for state management

### Backend
- **FastAPI** (Python)
- **OpenAI GPT-4-turbo** integration
- **SQLite** database
- **Redis** for caching
- **Comprehensive API documentation**

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.11+
- OpenAI API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Rakesh-dev369/Neocred.in.git
cd Neocred.in
```

2. **Backend Setup**
```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
# Add your OpenAI API key to .env
python main_simple.py
```

3. **Frontend Setup**
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

4. **Docker Setup (Alternative)**
```bash
docker-compose up --build
```

## 📁 Project Structure

```
Neocred.in/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── utils/          # Utilities & constants
│   │   └── learn/          # Learning section
├── backend/                 # FastAPI backend
│   ├── main_simple.py      # Main API server
│   ├── requirements.txt    # Python dependencies
│   └── .env.example       # Environment template
└── docker-compose.yml     # Docker configuration
```

## 🔧 Configuration

### Backend Environment Variables
```env
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4-turbo-preview
PORT=8001
SECRET_KEY=your_secret_key_here
```

### Frontend Environment Variables
```env
VITE_API_BASE_URL=http://localhost:8001
VITE_APP_NAME=NeoCred
VITE_APP_VERSION=2.0.0
```

## 🤖 FinBot Features

### Smart Tool Detection
- **Single Tools**: "How to use SIP calculator?" → Direct SIP Calculator link
- **VS Comparisons**: "SIP vs Lumpsum?" → Both calculator buttons
- **Context Awareness**: Suggests relevant tools based on conversation

### Advanced Capabilities
- Real-time OpenAI integration
- Conversation history management
- Tool-specific responses
- Error handling & fallbacks

## 📊 API Documentation

Visit `http://localhost:8001/docs` for interactive Swagger documentation.

### Key Endpoints
- `POST /api/chat` - Chat with FinBot
- `GET /health` - Health check
- `GET /api/tools` - Available tools
- `GET /api/stats` - Usage statistics

## 🔒 Security

- ✅ Environment variables for sensitive data
- ✅ API key protection
- ✅ CORS configuration
- ✅ Input validation
- ✅ Rate limiting ready

## 🚀 Deployment

### Production Build
```bash
# Frontend
cd frontend && npm run build

# Backend
cd backend && python main_simple.py

# Docker
docker-compose -f docker-compose.yml up -d --build
```

### Environment Setup
1. Set production environment variables
2. Configure domain and SSL
3. Set up monitoring and logging
4. Configure backup systems

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for GPT-4-turbo API
- React & FastAPI communities
- Financial data providers
- Open source contributors

## 📞 Support

- 📧 Email: support@neocred.in
- 🐛 Issues: [GitHub Issues](https://github.com/Rakesh-dev369/Neocred.in/issues)
- 📖 Docs: [Documentation](https://docs.neocred.in)

---

**Made with ❤️ for financial literacy in India** 🇮🇳