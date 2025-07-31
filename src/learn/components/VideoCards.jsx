// ✅ VideoCards.jsx
import React from "react";

const videos = [
  {
    title: "SIP vs Lump Sum Investment",
    duration: "8:45",
    views: "12K",
    level: "Beginner",
  },
  {
    title: "Tax Saving Strategies for 2024",
    duration: "12:30",
    views: "8.5K",
    level: "Intermediate",
  },
  {
    title: "Building a Retirement Portfolio",
    duration: "15:20",
    views: "15K",
    level: "Advanced",
  },
];

const VideoCards = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-white mb-6">Featured Videos</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map(({ title, duration, views, level }, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-xl border border-gray-800 hover:border-white transition-all overflow-hidden text-white"
          >
            <div className="bg-gray-900 aspect-video flex items-center justify-center text-xl font-semibold">
              🎥 {title}
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-300">⏱ {duration} • 👁 {views} views • 🎓 {level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCards;