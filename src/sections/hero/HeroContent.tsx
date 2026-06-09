"use client";

import { motion } from "framer-motion";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

type Props = {
  scrollToDestination: () => void;
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function HeroContent({ scrollToDestination }: Props) {
  // ==========================================================================
  // MAIN RENDER
  // ==========================================================================

  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 text-center">
      <div className="w-full max-w-3xl text-white flex flex-col items-center">
        {/* ====================================================================
            HEADING SECTION
        ==================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.21, 1.11, 0.38, 0.99],
          }}
        >
          <motion.h1 className="font-semibold font-heading leading-tight">
            {/* First line */}
            <motion.span
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.77, 0, 0.18, 1],
              }}
              className="block text-xl sm:text-3xl md:text-4xl text-white"
            >
              Explore India Beyond Landmarks
            </motion.span>

            {/* Second line with glow effect */}
            <motion.span
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.77, 0, 0.18, 1],
              }}
              className="block text-xl sm:text-3xl md:text-4xl mt-2 sm:mt-3"
            >
              <span className="relative inline-block">
                <span className="absolute inset-0 blur-md animate-pulse" />
                Curated Heritage Journeys
              </span>
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* ====================================================================
            DESCRIPTION SECTION
        ==================================================================== */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 1,
            ease: "easeOut",
          }}
          className="mt-2 sm:mt-3 text-[11px] sm:text-xs md:text-[13.5px] text-gray-200 font-light leading-relaxed tracking-wide max-w-md sm:max-w-lg px-4"
        >
          Discover India's hidden cultures,
          ancient traditions, and untouched
          landscapes thoughtfully curated
          for a truly immersive journey.
        </motion.p>

        {/* ====================================================================
            CTA BUTTON SECTION
        ==================================================================== */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToDestination}
          className="
            relative group
            mt-6 sm:mt-8
            px-6 sm:px-8
            py-2.5 sm:py-3
            border border-[#CBB299]/40
            bg-black/20
            backdrop-blur-md
            text-[#CBB299]
            text-[10px] sm:text-xs
            tracking-[2px]
            uppercase
            transition-all duration-500
            overflow-hidden
            rounded-md
            cursor-pointer
          "
        >
          <span className="relative z-10">
            Begin Your Journey
          </span>

          {/* Shimmer effect on button */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#CBB299]/0 via-[#CBB299]/15 to-[#CBB299]/0"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        </motion.button>
      </div>
    </div>
  );
}