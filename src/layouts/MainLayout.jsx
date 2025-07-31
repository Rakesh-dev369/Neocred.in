import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingAssistantCTA from '../components/FloatingAssistantCTA';

export default function MainLayout({ children, title, description }) {
  const location = useLocation();
  const isChatbot = location.pathname === '/chatbot';
  
  useEffect(() => {
    // Initialize Plausible analytics
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible('pageview');
    }
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Savely` : 'Savely - Master Your Financial Future'}</title>
        <meta name="description" content={description || 'Learn, plan, and grow your wealth with comprehensive financial tools, AI-powered guidance, and expert insights.'} />
        <meta name="keywords" content="financial planning, investment calculator, budget planner, financial literacy, money management" />
        <meta property="og:title" content={title ? `${title} | Savely` : 'Savely - Master Your Financial Future'} />
        <meta property="og:description" content={description || 'Learn, plan, and grow your wealth with comprehensive financial tools, AI-powered guidance, and expert insights.'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        {!isChatbot && <Navbar />}
        <main className="flex-grow">{children}</main>
        {!isChatbot && <Footer />}
        {!isChatbot && <FloatingAssistantCTA />}
      </div>
    </>
  );
}