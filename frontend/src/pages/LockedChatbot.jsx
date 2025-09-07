import LockedPage from '../components/LockedPage';
import { Bot } from 'lucide-react';

const LockedChatbot = () => {
  return (
    <LockedPage 
      pageName="FinBot AI Assistant"
      description="Our AI-powered financial assistant is getting smarter! We're enhancing FinBot with advanced features, personalized recommendations, and real-time financial guidance to help you make better financial decisions."
      icon={Bot}
    />
  );
};

export default LockedChatbot;