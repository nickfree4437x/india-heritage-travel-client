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

export default function HeroContent({
  scrollToDestination,
}: Props) {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 text-center">
      <div className="w-full max-w-3xl text-white flex flex-col items-center">

        {/* ====================================================================
            HEADING SECTION
        ==================================================================== */}

        <div>
          <h1 className="font-semibold font-heading leading-tight">

            <span className="block text-xl sm:text-3xl md:text-4xl text-white">
              Explore India Beyond Landmarks
            </span>

            <span className="block text-xl sm:text-3xl md:text-4xl mt-2 sm:mt-3">
              Curated Heritage Journeys
            </span>

          </h1>
        </div>

        {/* ====================================================================
            DESCRIPTION SECTION
        ==================================================================== */}

        <p
          className="
            mt-2 sm:mt-3
            text-[11px] sm:text-xs md:text-[13.5px]
            text-gray-200
            font-light
            leading-relaxed
            tracking-wide
            max-w-md sm:max-w-lg
            px-4
          "
        >
          Discover India's hidden cultures,
          ancient traditions, and untouched
          landscapes thoughtfully curated
          for a truly immersive journey.
        </p>

        {/* ====================================================================
            CTA BUTTON SECTION
        ==================================================================== */}

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
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