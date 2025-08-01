# 🤖 NeoCred FinBot Frontend

Modern React + TypeScript frontend for the AI-powered financial assistant.

## ✨ Features

- **React 18** with TypeScript
- **Vite** for lightning-fast development
- **TailwindCSS** for modern styling
- **React Query** for server state management
- **Zustand** for client state management
- **React Router** for navigation
- **PWA Support** for mobile experience
- **Type-safe API** with generated clients

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Backend API running on port 8001

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
npm run test         # Run tests

# API Integration
npm run api:generate # Generate API client from OpenAPI spec
```

## 📁 Project Structure

```
src/
├── api/           # API clients and types
├── components/    # Reusable UI components
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── store/         # Zustand stores
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── main.tsx       # App entry point
```

## 🔧 Configuration

### Environment Variables

```env
VITE_API_URL=http://localhost:8001    # Backend API URL
VITE_APP_NAME=FinBot                  # App name
VITE_ENABLE_PWA=true                  # Enable PWA features
```

### API Integration

The frontend automatically generates type-safe API clients from your backend's OpenAPI specification:

```bash
npm run api:generate
```

## 🎨 Styling

- **TailwindCSS** for utility-first styling
- **Custom design system** with consistent colors and spacing
- **Dark mode** support with system preference detection
- **Responsive design** for mobile and desktop

## 📱 PWA Features

- **Offline support** with service worker
- **Install prompt** for mobile devices
- **App-like experience** with custom icons
- **Background sync** for chat messages

## 🔄 State Management

### Chat Store (Zustand)
```typescript
const { messages, addMessage, clearMessages } = useChatStore()
```

### Server State (React Query)
```typescript
const { data, isLoading } = useQuery({
  queryKey: ['stats'],
  queryFn: systemApi.getStats
})
```

## 🧪 Testing

```bash
npm run test        # Run unit tests
npm run test:ui     # Run tests with UI
```

## 📦 Building for Production

```bash
npm run build       # Build optimized bundle
npm run preview     # Preview production build
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🔗 API Integration

The frontend connects to the FastAPI backend with:

- **Type-safe requests** with generated TypeScript types
- **Automatic error handling** and retry logic
- **Request/response interceptors** for auth and logging
- **Real-time updates** with optimistic UI updates

## 🎯 Performance

- **Code splitting** with React.lazy()
- **Bundle optimization** with Vite
- **Image optimization** with modern formats
- **Caching strategies** for API responses
- **Lazy loading** for non-critical components

## 🛠️ Development

### Hot Reload
Changes are reflected instantly during development.

### TypeScript
Full type safety with strict mode enabled.

### ESLint + Prettier
Code quality and formatting enforced.

## 📄 License

MIT License - see LICENSE file for details.

---

**Version:** 2.0.0  
**Tech Stack:** React 18 + TypeScript + Vite + TailwindCSS  
**API:** FastAPI Backend with OpenAPI integration