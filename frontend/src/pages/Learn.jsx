// src/pages/learn.jsx

import React from "react";
import HeroSection from "../learn/components/HeroSection";
import PillarGrid from "../learn/components/PillarGrid";
import PopularTopics from "../learn/components/PopularTopics";
import LiteracyJourney from "../learn/components/LiteracyJourney";
import WeeklyTips from "../learn/components/WeeklyTips";
import VideoCards from "../learn/components/VideoCards";
import StartCTA from "../learn/components/StartCTA";

const LearnPage = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white px-4 md:px-12 py-8 space-y-20 transition-colors duration-300">
      {/* Hero Banner */}
      <HeroSection
        title="Master Financial Literacy"
        subtitle="Build your financial knowledge from basics to advanced concepts. Start your journey to financial freedom today."
        ctaText="Start Learning"
      />

      {/* 1. Your Financial Literacy Journey */}
      <LiteracyJourney />

      {/* 2. 8 Pillars of Financial Literacy */}
      <PillarGrid />

      {/* 3. Weekly Financial Tips */}
      <WeeklyTips
        tips={[
          {
            title: "Budgeting",
            description:
              "Start tracking your expenses daily to understand your spending patterns",
            date: "This Week",
          },
          {
            title: "Investing",
            description:
              "Consider increasing your SIP amount by 10% every year to beat inflation",
            date: "Last Week",
          },
          {
            title: "Insurance",
            description:
              "Review your insurance coverage annually to ensure adequate protection",
            date: "2 Weeks Ago",
          },
        ]}
      />

      {/* 4. Featured Videos */}
      <VideoCards
        videos={[
          {
            title: "SIP vs Lump Sum Investment",
            duration: "8:45",
            views: "12K views",
            level: "Beginner",
          },
          {
            title: "Tax Saving Strategies for 2024",
            duration: "12:30",
            views: "8.5K views",
            level: "Intermediate",
          },
          {
            title: "Building a Retirement Portfolio",
            duration: "15:20",
            views: "15K views",
            level: "Advanced",
          },
        ]}
      />

      {/* 5. Popular Topics */}
      <PopularTopics
        topics={[
          "How to start investing with ₹1000",
          "Understanding SIP and compound interest",
          "Tax-saving investments under 80C",
          "Emergency fund planning",
          "Credit score improvement tips",
        ]}
      />

      {/* CTA */}
      <StartCTA />
    </div>
  );
};

export default LearnPage;
