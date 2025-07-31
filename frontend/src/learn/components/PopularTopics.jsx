// ✅ PopularTopics.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const topics = [
  "How to start investing with ₹1000",
  "Understanding SIP and compound interest",
  "Tax-saving investments under 80C",
  "Emergency fund planning",
  "Credit score improvement tips",
];

const PopularTopics = () => {
  const handleTopicClick = (topic) => {
    // Store the topic in localStorage for the chatbot to use
    localStorage.setItem('chatbotQuery', `Tell me about: ${topic}`);
    // Navigate to chatbot
    window.location.href = ROUTES.CHATBOT;
  };

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-4 text-white">Popular Topics</h2>
      <p className="text-gray-400 mb-6">Click on any topic to get detailed guidance from our AI assistant</p>
      <ul className="grid sm:grid-cols-2 gap-4 text-left">
        {topics.map((topic, index) => (
          <li
            key={index}
            onClick={() => handleTopicClick(topic)}
            className="bg-[#111] p-4 rounded-xl border border-gray-800 hover:border-blue-500 hover:bg-blue-500/10 transition-all text-gray-300 hover:text-white cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span>• {topic}</span>
              <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularTopics;
