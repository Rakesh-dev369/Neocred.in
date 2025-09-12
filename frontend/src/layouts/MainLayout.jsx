import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingAssistantCTA from '../components/FloatingAssistantCTA';
import FloatingParticles from '../components/ui/FloatingParticles';
import EasterEgg from '../components/ui/EasterEgg';
import { useNavigationDirection } from '../hooks/useNavigationDirection';
import { handleHashLink } from '../utils/smoothScroll';


export default function MainLayout({ children, title, description }) {
  const location = useLocation();
  const direction = useNavigationDirection();
  const isChatbot = location.pathname === '/chatbot';
  
  useEffect(() => {
    // Initialize Plausible analytics
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible('pageview');
    }
    
    // Handle hash links
    handleHashLink(location.hash);
  }, [location.pathname, location.hash]);

  return (
    <>
      <Helmet>
        <title>{title ? `${title} | NeoCred` : 'NeoCred - Master Your Financial Future'}</title>
        <meta name="description" content={description || 'Learn, plan, and grow your wealth with comprehensive financial tools, AI-powered guidance, and expert insights.'} />
        <meta name="keywords" content="financial planning, investment calculator, budget planner, financial literacy, money management" />
        <meta property="og:title" content={title ? `${title} | NeoCred` : 'NeoCred - Master Your Financial Future'} />
        <meta property="og:description" content={description || 'Learn, plan, and grow your wealth with comprehensive financial tools, AI-powered guidance, and expert insights.'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
        <FloatingParticles count={15} />
        {!isChatbot && <Navbar />}
        <AnimatePresence mode="wait">
          <motion.main 
            key={location.pathname}
            className="flex-grow"
            initial={{ 
              opacity: 0, 
              x: direction === 1 ? 50 : direction === -1 ? -50 : 0,
              y: direction === 0 ? 20 : 0
            }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ 
              opacity: 0, 
              x: direction === 1 ? -50 : direction === -1 ? 50 : 0,
              y: direction === 0 ? -20 : 0
            }}
            transition={{ 
              duration: 0.3, 
              ease: "easeInOut",
              when: "beforeChildren"
            }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
        {!isChatbot && <Footer />}
        {!isChatbot && <FloatingAssistantCTA />}
        <EasterEgg />
      </div>
    </>
  );
}