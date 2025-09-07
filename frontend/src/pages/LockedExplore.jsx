import LockedPage from '../components/LockedPage';
import { Compass } from 'lucide-react';

const LockedExplore = () => {
  return (
    <LockedPage 
      pageName="Explore Section"
      description="Discover new financial opportunities, investment options, and personalized recommendations. Our explore section will help you find the perfect financial products and services tailored to your needs."
      icon={Compass}
    />
  );
};

export default LockedExplore;