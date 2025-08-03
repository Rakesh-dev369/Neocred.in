import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import { usePerformanceMonitoring } from './hooks/usePerformance';
import { useAnalytics } from './hooks/useAnalytics';
import InstallPrompt from './components/InstallPrompt';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Learn = lazy(() => import('./pages/Learn'));
const Tools = lazy(() => import('./pages/Tools'));
const Chatbot = lazy(() => import('./pages/Chatbot'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const News = lazy(() => import('./pages/News'));
const Explore = lazy(() => import('./pages/Explore'));
const CreditCards = lazy(() => import('./pages/CreditCards'));
const InsurancePlatforms = lazy(() => import('./pages/InsurancePlatforms'));
const PersonalLoans = lazy(() => import('./pages/PersonalLoans'));
const GovernmentSchemes = lazy(() => import('./pages/GovernmentSchemes'));
const FinanceJobs = lazy(() => import('./pages/FinanceJobs'));
const BusinessTools = lazy(() => import('./pages/BusinessTools'));
const Rewards = lazy(() => import('./pages/Rewards'));
const PanCheck = lazy(() => import('./pages/PanCheck'));
const LoanCheck = lazy(() => import('./pages/LoanCheck'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const Cookies = lazy(() => import('./pages/Cookies'));
const NotFound = lazy(() => import('./pages/NotFound'));
const FontDemo = lazy(() => import('./components/FontDemo'));
import './App.css';

function App() {
  usePerformanceMonitoring();
  useAnalytics();
  
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="lg" text="Loading page..." /></div>}>
          <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/learn" element={<MainLayout><Learn /></MainLayout>} />
          <Route path="/tools" element={<MainLayout><Tools /></MainLayout>} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/news" element={<MainLayout><News /></MainLayout>} />
          <Route path="/explore" element={<MainLayout><Explore /></MainLayout>} />
          <Route path="/credit-cards" element={<MainLayout><CreditCards /></MainLayout>} />
          <Route path="/insurance-platforms" element={<MainLayout><InsurancePlatforms /></MainLayout>} />
          <Route path="/personal-loans" element={<MainLayout><PersonalLoans /></MainLayout>} />
          <Route path="/government-schemes" element={<MainLayout><GovernmentSchemes /></MainLayout>} />
          <Route path="/finance-jobs" element={<MainLayout><FinanceJobs /></MainLayout>} />
          <Route path="/business-tools" element={<MainLayout><BusinessTools /></MainLayout>} />
          <Route path="/rewards" element={<MainLayout><Rewards /></MainLayout>} />
          <Route path="/pan-check" element={<MainLayout><PanCheck /></MainLayout>} />
          <Route path="/loan-check" element={<MainLayout><LoanCheck /></MainLayout>} />
          <Route path="/privacy" element={<MainLayout><Privacy /></MainLayout>} />
          <Route path="/terms" element={<MainLayout><Terms /></MainLayout>} />
          <Route path="/disclaimer" element={<MainLayout><Disclaimer /></MainLayout>} />
          <Route path="/cookies" element={<MainLayout><Cookies /></MainLayout>} />
          <Route path="/fonts" element={<MainLayout><FontDemo /></MainLayout>} />
          <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
          </Routes>
        </Suspense>
        <InstallPrompt />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;