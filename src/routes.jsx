import { createBrowserRouter } from 'react-router-dom';
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

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/learn', element: <Learn /> },
  { path: '/tools', element: <Tools /> },
  { path: '/chatbot', element: <Chatbot /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/news', element: <News /> },
  { path: '/rewards', element: <Rewards /> },
  { path: '/pan-check', element: <PanCheck /> },
  { path: '/loan-check', element: <LoanCheck /> },
]);