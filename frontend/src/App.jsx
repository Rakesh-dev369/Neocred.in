import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Tools from './pages/Tools';
import Chatbot from './pages/Chatbot';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import Rewards from './pages/Rewards';
import PanCheck from './pages/PanCheck';
import LoanCheck from './pages/LoanCheck';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';
import Cookies from './pages/Cookies';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import FontDemo from './components/FontDemo';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/learn" element={<MainLayout><Learn /></MainLayout>} />
          <Route path="/tools" element={<MainLayout><Tools /></MainLayout>} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/news" element={<MainLayout><News /></MainLayout>} />
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
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;