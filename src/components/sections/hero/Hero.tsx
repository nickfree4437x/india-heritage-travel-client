"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
  "/hero/hero4.jpg",
  "/hero/hero5.jpg",
];

// 🔥 BADGE TEXTS (SYNC WITH IMAGES)
const badgeTexts = [
  "Authentic India Experiences",
  "Royal Heritage Journeys",
  "Spiritual & Cultural Trails",
  "Luxury & Royal Escapes",
  "Hidden Gems of India",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  ////////////////////////////////
  // 🔥 PRELOAD IMAGES
  ////////////////////////////////
  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  ////////////////////////////////
  // 🔥 SLIDER
  ////////////////////////////////
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <motion.div
            key={index}
            animate={{ opacity: current === index ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={img}
              alt="India Travel"
              fill
              priority={index === 0}
              quality={75}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        ))}
      </div>

      {/* 🔥 OVERLAY (UNCHANGED) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 text-center">
        <div className="w-full max-w-3xl text-white flex flex-col items-center">

          {/* 🔥 HEADING */}
          <motion.h1 className="font-semibold leading-tight">
            <span className="block text-[20px] sm:text-3xl md:text-4xl">
              Explore India Beyond Landmarks
            </span>

            <span className="block text-[#CBB299] text-[20px] sm:text-3xl md:text-4xl mt-1 sm:mt-2">
              Curated Heritage Journeys
            </span>
          </motion.h1>

          {/* 🔥 DESCRIPTION */}
          <p className="mt-3 sm:mt-4 text-[13px] sm:text-sm md:text-base text-gray-300 leading-relaxed max-w-md sm:max-w-lg">
            Discover India’s hidden cultures, ancient traditions, and untouched
            landscapes thoughtfully curated for a truly immersive journey.
          </p>
        </div>
      </div>

      {/* 🔥 SCROLL INDICATOR */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">

        <span className="text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-white/50 uppercase mb-1 sm:mb-2">
          Scroll
        </span>

        <div className="w-[20px] sm:w-[22px] h-[32px] sm:h-[36px] rounded-full border border-white/20 flex items-start justify-center p-[3px] backdrop-blur-sm bg-white/5">

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[3px] h-[6px] rounded-full bg-[#CBB299]"
          />

        </div>
      </div>

    </section>
  );
}