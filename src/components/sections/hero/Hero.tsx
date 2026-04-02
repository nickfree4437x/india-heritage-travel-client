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
          initial={{ opacity: 0, scale: 1.2, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 1.1 }}
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>

      {/* Particles */}
      <HeroParticles />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-6">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-7xl font-semibold leading-tight max-w-5xl"
        >
          Discover India’s Timeless Beauty
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200"
        >
          From royal palaces to spiritual journeys, explore India through
          handcrafted luxury experiences designed just for you.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <button className="bg-[#A07008] text-white px-10 py-3 rounded-full shadow-lg hover:scale-110 hover:bg-[#8a5f06] transition duration-300">
            Explore Tours
          </button>

          <button className="border border-white px-10 py-3 rounded-full hover:bg-white hover:text-black hover:scale-110 transition duration-300">
            Customize Journey
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10"
        >
          <div className="w-[2px] h-10 bg-white/70 mx-auto"></div>
        </motion.div>

      </div>
    </section>
  );
}