import HeroSection from './components/HeroSection';
import PillarGrid from './components/PillarGrid';
import PopularTopics from './components/PopularTopics';
import LiteracyJourney from './components/LiteracyJourney';
import WeeklyTips from './components/WeeklyTips';
import VideoCards from './components/VideoCards';
import StartCTA from './components/StartCTA';

export default function LearnPage() {
  return (
    <>
      <HeroSection />
      <PillarGrid />
      <PopularTopics />
      <LiteracyJourney />
      <WeeklyTips />
      <VideoCards />
      <StartCTA />
    </>
  );
}