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
      <div className="absolute inset-0 bg-black/50"></div>
      <HeroParticles />

      {/* CONTENT (BOTTOM LEFT) */}
      <div className="absolute bottom-0 left-0 w-full px-6 md:px-16 pb-14 md:pb-10 z-10">

        <div className="max-w-xl text-white">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-3xl font-bold"
          >
            <span className="whitespace-nowrap">
              Explore India Beyond Landmarks: Curated
            </span>

            <br />

            <span className="text-[#CBB299]">
              Heritage Journeys
            </span>
          </motion.h1>

          {/* Description */}
            <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-[15px] leading-relaxed text-gray-200 text-justify"
          >
            Discover India’s hidden cultures, ancient traditions, and untouched
            landscapes, personalised just for you.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex gap-4 flex-wrap"
          >
            <button className="px-6 py-2.5 rounded-full bg-[#A38664] text-white text-xs shadow-md hover:scale-105 transition">
              Explore Destinations
            </button>

            <button className="px-6 py-3 rounded-full border border-white/30 text-white text-xs hover:scale-105 hover:bg-white/10 transition">
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