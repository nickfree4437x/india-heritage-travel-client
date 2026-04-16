"use client";

import { Briefcase, Leaf, Users, Mountain } from "lucide-react";
import { motion } from "framer-motion";

export default function SuitableFor() {
  const items = [
    {
      icon: <Briefcase size={40} />,
      title: "Corporate Travel",
    },
    {
      icon: <Leaf size={40} />,
      title: "Nature & Wildlife Enthusiasts",
    },
    {
      icon: <Users size={40} />,
      title: "Friends & Family Travel",
    },
    {
      icon: <Mountain size={40} />,
      title: "Adventure Seekers",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#f8f6f2] text-center">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-[#3e2f1c]"
      >
        Suitable For
      </motion.h2>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="text-[#9b7a50]">{item.icon}</div>
            <p className="text-md font-medium text-gray-800">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}