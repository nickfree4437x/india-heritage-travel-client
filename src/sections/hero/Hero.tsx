"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {
  // ============================================================================
  // STATE DECLARATIONS
  // ============================================================================
  const [videoProgress, setVideoProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ============================================================================
  // EFFECTS
  // ============================================================================

  // Mount check effect
  useEffect(() => {
    setMounted(true);
  }, []);

  // Video progress animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setVideoProgress((prev) => (prev + 0.003) % 1);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================

  // Smooth scroll to destination section
  const scrollToDestination = () => {
    const destinationSection = document.getElementById("welcome-destination");

    if (destinationSection) {
      destinationSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // ============================================================================
  // RENDER HELPERS
  // ============================================================================

  // SSR fallback render
  if (!mounted) {
    return (
      <section className="relative min-h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black" />
      </section>
    );
  }

  // ============================================================================
  // MAIN RENDER
  // ============================================================================

  return (
    <section
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* BACKGROUND */}
      <HeroBackground
        videoProgress={videoProgress}
        isHovering={isHovering}
      />

      {/* CONTENT */}
      <HeroContent scrollToDestination={scrollToDestination} />

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center"
        >
          <motion.span
            animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[8px] sm:text-[9px] tracking-[3px] text-white/40 uppercase mb-1"
          >
            Discover More
          </motion.span>

          <div className="w-[18px] sm:w-[20px] h-[30px] sm:h-[34px] rounded-full border border-white/20 flex items-start justify-center p-[2px] backdrop-blur-sm bg-white/5">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1.5px] h-[6px] rounded-full bg-[#CBB299] shadow-[0_0_6px_rgba(203,178,153,0.6)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}