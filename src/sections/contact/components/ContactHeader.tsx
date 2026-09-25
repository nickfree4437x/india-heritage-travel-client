"use client";

// ============================================================
// IMPORTS
// ============================================================
import { motion } from "framer-motion";

// ============================================================
// COMPONENT
// ============================================================
export function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      {/* Heading */}
      <h2 className="font-heading text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-wide text-white mb-2 leading-snug md:whitespace-nowrap">
        Plan Your India Heritage Journey
      </h2>

      {/* Subtitle */}
      <p className="text-[12px] sm:text-[13px] md:text-[13px] font-light leading-relaxed text-white/90 tracking-wide max-w-[580px] mx-auto">
        <span className="text-white">Be our guest!</span> Tell us about your dream India heritage 
        journey, and we'll craft a personalized travel experience around you.
      </p>
    </motion.div>
  );
}