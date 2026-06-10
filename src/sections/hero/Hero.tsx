"use client";

import { useState } from "react";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {
  // ============================================================================
  // STATE DECLARATIONS
  // ============================================================================

  const [isHovering, setIsHovering] = useState(false);

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================

  const scrollToDestination = () => {
    const destinationSection =
      document.getElementById("welcome-destination");

    if (destinationSection) {
      destinationSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
        isHovering={isHovering}
      />

      {/* CONTENT */}
      <HeroContent
        scrollToDestination={scrollToDestination}
      />

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center">

          <span
            className="
              text-[8px]
              sm:text-[9px]
              tracking-[3px]
              text-white/40
              uppercase
              mb-1
            "
          >
            Discover More
          </span>

          <div
            className="
              w-[18px]
              sm:w-[20px]
              h-[30px]
              sm:h-[34px]
              rounded-full
              border
              border-white/20
              flex
              items-start
              justify-center
              p-[2px]
              backdrop-blur-sm
              bg-white/5
            "
          >
            <div
              className="
                w-[1.5px]
                h-[6px]
                rounded-full
                bg-[#CBB299]
                shadow-[0_0_6px_rgba(203,178,153,0.6)]
                animate-bounce
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}