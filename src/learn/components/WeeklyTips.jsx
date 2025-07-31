// components/learn/WeeklyTips.jsx

import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";

const tips = [
  {
    week: "This Week",
    topic: "Budgeting",
    tip: "Start tracking your expenses daily to understand your spending patterns.",
    details: "Use expense-tracking apps like Walnut, CRED, or simply maintain a spreadsheet. Categorize your spends weekly."
  },
  {
    week: "Last Week",
    topic: "Investing",
    tip: "Increase your SIP amount by 10% every year to beat inflation.",
    details: "This is called a step-up SIP. It helps you build wealth faster without much impact on monthly cash flow."
  },
  {
    week: "2 Weeks Ago",
    topic: "Insurance",
    tip: "Review your insurance coverage annually to ensure protection.",
    details: "Make sure your health and life insurance are up to date and reflect your current lifestyle and income."
  }
];

const WeeklyTips = () => {
  return (
    <section className="bg-black text-white py-14 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Weekly Financial Tips
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {tips.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="border border-gray-700 bg-gray-900 p-6 rounded-2xl hover:shadow-xl transition duration-300"
            >
              <Tooltip.Provider delayDuration={200}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <div className="cursor-help">
                      <p className="text-sm uppercase text-gray-400 mb-2">{item.week}</p>
                      <h3 className="text-xl font-semibold text-white mb-1">{item.topic}</h3>
                      <p className="text-gray-300">{item.tip}</p>
                    </div>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content className="bg-white text-black px-3 py-2 rounded shadow-lg text-sm max-w-xs z-50">
                      {item.details}
                      <Tooltip.Arrow className="fill-white" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyTips;
