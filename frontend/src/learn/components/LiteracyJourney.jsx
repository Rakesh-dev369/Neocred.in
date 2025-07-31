// ✅ LiteracyJourney.jsx
import React from "react";

const steps = [
  { step: 1, title: "Learn Basics", description: "Start with fundamental concepts" },
  { step: 2, title: "Practice Tools", description: "Use our calculators and planners" },
  { step: 3, title: "Apply Knowledge", description: "Make informed financial decisions" },
  { step: 4, title: "Track Progress", description: "Monitor your financial growth" },
];

const LiteracyJourney = () => {
  return (
    <div className="mt-20" data-section="journey">
      <h2 className="text-3xl font-bold text-white mb-6">Your Financial Literacy Journey</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map(({ step, title, description }) => (
          <div
            key={step}
            className="bg-[#111] p-5 rounded-xl border border-gray-800 hover:border-white transition-all text-white"
          >
            <div className="text-4xl font-bold text-white mb-2">{step}</div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiteracyJourney;