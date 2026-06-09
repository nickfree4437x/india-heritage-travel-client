"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Compass, Headphones, Route } from "lucide-react";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

type ItemType = {
  icon: React.ReactNode;
  text: string;
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Difference() {
  // ==========================================================================
  // REFS
  // ==========================================================================

  const sectionRef = useRef<HTMLElement | null>(null);

  // ==========================================================================
  // VIEWPORT INTERSECTION
  // ==========================================================================

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "-100px 0px -100px 0px",
  });

  // ==========================================================================
  // DATA - FEATURE ITEMS
  // ==========================================================================

  const items: ItemType[] = [
    {
      icon: <ShieldCheck size={55} />,
      text: "Safe And Secure Women Travel",
    },
    {
      icon: <Compass size={55} />,
      text: "100+ handpicked destinations ",
    },
    {
      icon: <Headphones size={55} />,
      text: "24×7 Round The Clock Support",
    },
    {
      icon: <Route size={55} />,
      text: "Traveler Friendly Curated Itineraries",
    },
  ];

  // ==========================================================================
  // ANIMATION VARIANTS
  // ==========================================================================

  // Container animation for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22,
        delayChildren: 0.35,
      },
    },
  };

  // Individual item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

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

  // ==========================================================================
  // MAIN RENDER
  // ==========================================================================

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative py-8 sm:py-6 px-4 sm:px-6 bg-[#f8f6f2] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* ====================================================================
            HEADING SECTION
        ==================================================================== */}
        <motion.div
          variants={headingVariants}
          className="text-center mb-8 sm:mb-10 md:mb-10"
        >
          <h2 className="text-[20px] sm:text-[24px] md:text-[22px] font-[550] text-[#8b6b47] tracking-wide leading-snug">
            How We Make a Difference
          </h2>
        </motion.div>

        {/* ====================================================================
            FEATURES GRID
        ==================================================================== */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
                     gap-y-16 sm:gap-y-16 md:gap-y-20 
                     gap-x-16 md:gap-x-24 lg:gap-x-32 text-center md:mb-14"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col items-center px-4"
            >
              {/* Icon with hover animation */}
              <motion.div
                className="text-[#8F6E4B] mb-4 transition duration-300"
                whileHover={{
                  scale: 1.08,
                  transition: { duration: 0.3 },
                }}
              >
                {item.icon}
              </motion.div>

              {/* Feature text */}
              <p
                className="text-gray-800 text-[12px] font-light sm:text-[13px] md:text-[13px] 
                           leading-relaxed tracking-wide whitespace-nowrap"
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}