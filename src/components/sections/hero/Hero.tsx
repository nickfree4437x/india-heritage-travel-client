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
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt="India Travel"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

      {/* Particles */}
      <HeroParticles />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-6">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] max-w-4xl"
        >
          Experience the{" "}
          <span className="bg-[#A38664] bg-clip-text text-transparent">
            True Beauty
          </span>{" "}
          of India
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-gray-300 leading-relaxed"
        >
          From majestic palaces and vibrant cultures to serene landscapes and
          spiritual journeys, discover India through thoughtfully curated travel
          experiences designed to inspire and elevate every moment.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-5"
        >
          {/* Primary */}
          <button className="group relative text-[0.9rem] overflow-hidden bg-[#A38664] text-white px-7 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-2xl hover:scale-105 active:scale-95">
            
            {/* Gradient hover */}
          <span className="absolute inset-0 bg-[#CBB299] opacity-0 group-hover:opacity-100 transition duration-500"></span>
            
            {/* Shine */}
            <span className="absolute left-[-100%] text-[0.9rem] top-0 h-full w-[50%] bg-white/20 skew-x-12 group-hover:left-[120%] transition-all duration-700"></span>

            <span className="relative z-10 tracking-wide">
              Explore Tours
            </span>
          </button>

          {/* Secondary */}
          <button className="group relative text-[0.9rem] overflow-hidden border border-white/30 text-white px-7 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-md">
            
            {/* Glow bg */}
            <span className="absolute inset-0 bg-[#c9a45c]/15 opacity-0 group-hover:opacity-100 transition duration-500"></span>

            {/* Ring */}
            <span className="absolute inset-0 rounded-full ring-1 ring-transparent group-hover:ring-[#c9a45c]/40 transition duration-300"></span>

            <span className="relative z-10 tracking-wide group-hover:text-white transition">
              Customize Journey
            </span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-white/60 uppercase">
            Scroll
          </span>

          <div className="relative w-[2px] h-12 bg-white/20 overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-full h-6 bg-gradient-to-b from-[#c9a45c] to-transparent"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}