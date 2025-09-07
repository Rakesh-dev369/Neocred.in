import LockedPage from '../components/LockedPage';
import { Newspaper } from 'lucide-react';

const LockedNews = () => {
  return (
    <LockedPage 
      pageName="Financial News"
      description="We're curating the latest financial news, market updates, and policy changes just for you. Our news section will feature real-time updates, expert analysis, and personalized content."
      icon={Newspaper}
    />
  );
};

export default LockedNews;