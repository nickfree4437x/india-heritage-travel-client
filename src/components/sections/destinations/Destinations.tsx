"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import DestinationCard from "./DestinationCard";
import { destinations } from "./data";

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function PopularDestinations() {
  // ==========================================================================
  // REFS
  // ==========================================================================

  const sectionRef = useRef<HTMLElement | null>(null);

  // ==========================================================================
  // VIEWPORT INTERSECTION
  // ==========================================================================

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
    margin: "-100px 0px -100px 0px",
  });

  // ==========================================================================
  // ANIMATION VARIANTS
  // ==========================================================================

  // Heading animation
  const headingVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        delay: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Container for stagger effect on cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.35,
      },
    },
  };

  // Individual card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // ==========================================================================
  // MAIN RENDER
  // ==========================================================================

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-[#CBB299] py-4 sm:py-12 md:py-8 px-4 sm:px-6 md:px-10 lg:px-16 scroll-mt-24"
      id="welcome-destination"
    >
      <div className="max-w-6xl mx-auto">
        {/* ====================================================================
            HEADING SECTION
        ==================================================================== */}
        <motion.div
          variants={headingVariants}
          className="text-center mb-10 sm:mb-12 md:mb-14 max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-wide text-white mb-2 leading-snug md:whitespace-nowrap">
            Begin Your Journey With Popular Destinations
          </h2>

          <p className="text-[12.5px] sm:text-[13.5px] md:text-[14px] font-light leading-relaxed text-white/90 tracking-wide max-w-[580px] mx-auto">
            Our Best-Loved Routes Across India's Cultural Landscape.
          </p>
        </motion.div>

        {/* ====================================================================
            DESTINATIONS GRID
        ==================================================================== */}
        <motion.div
          variants={containerVariants}
          className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-6 mb-10"
        >
          {destinations.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <DestinationCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}