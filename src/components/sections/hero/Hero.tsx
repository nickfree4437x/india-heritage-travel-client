"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import HeroParticles from "./HeroParticles";

const images = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
  "/hero/hero4.jpg",
  "/hero/hero5.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.02 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt="India Travel"
            fill
            priority
            className="object-cover object-[center_25%]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

      {/* Particles */}
      <HeroParticles />

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-10 text-center">

        <div className="w-full max-w-4xl text-white flex flex-col items-center">

          {/* 🔥 HEADING (FIXED 2 LINE STRUCTURE) */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-semibold leading-tight text-white"
          >
            {/* Line 1 */}
            <span className="block text-[26px] sm:text-3xl md:text-5xl">
              Explore India Beyond Landmarks:
            </span>

            {/* Line 2 */}
            <span className="block text-[#CBB299] text-[26px] sm:text-3xl md:text-5xl mt-1">
              Curated Heritage Journeys
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-sm md:text-base leading-relaxed text-gray-200 max-w-xl"
          >
            Discover India’s hidden cultures, ancient traditions, and untouched
            landscapes, personalised just for you.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex gap-4 flex-wrap justify-center"
          >
            <button className="px-6 py-3 rounded-full bg-[#A38664] text-white text-xs md:text-sm shadow-md hover:scale-105 transition">
              Explore Destinations
            </button>

            <button className="px-6 py-3 rounded-full border border-white/30 text-white text-xs md:text-sm hover:scale-105 hover:bg-white/10 transition">
              Customize Journey
            </button>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] tracking-widest text-white/60 uppercase">
          Scroll
        </span>

        <div className="w-[2px] h-10 bg-white/20 mt-2 overflow-hidden relative">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute w-full h-5 bg-gradient-to-b from-[#c9a45c] to-transparent"
          />
        </div>
      </motion.div>

    </section>
  );
}