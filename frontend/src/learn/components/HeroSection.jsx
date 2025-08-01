// components/learn/HeroSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 dark:bg-black text-gray-100 dark:text-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-purple-500 opacity-30 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
        >
          Master Financial Literacy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 dark:text-gray-300 mb-8"
        >
          Build your financial knowledge from basics to advanced concepts.<br />
          Start your journey to financial freedom today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={() => {
              const pillarsSection = document.getElementById('pillars');
              if (pillarsSection) {
                pillarsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-2xl hover:bg-gray-200 transition duration-300"
          >
            Start Learning
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
