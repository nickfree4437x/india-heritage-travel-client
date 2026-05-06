"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function WelcomeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "-100px 0px -100px 0px",
  });

  // Container animation - sabko ek saath lane ke liye (slower)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.25,
      },
    },
  };

  // Har individual item ke liye animation (slower)
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
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

  // Video ke liye alag animation (slower)
  const videoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.93,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.35,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Heading ke liye extra slow animation
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        delay: 0.15,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-4 sm:py-20 md:py-16 px-4 sm:px-6 bg-[#f8f6f2] overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-center"
      >
        {/* 🔥 LEFT CONTENT */}
        <div className="flex flex-col items-center text-center max-w-[720px] mx-auto md:ml-12 md:pr-6">
          {/* Namaste */}
          <motion.h3
            variants={headingVariants}
            className="text-[#9b7a50] text-[16px] sm:text-[20px] md:text-[22px] font-medium tracking-wide mb-3 sm:mb-4"
          >
            Namaste!
          </motion.h3>

          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-[18px] sm:text-[24px] md:text-[22px] font-[600] text-[#8b6b47] tracking-wide leading-snug mb-3"
          >
            Welcome To India Heritage Travel
          </motion.h2>

          {/* Intro */}
          <motion.p
            variants={itemVariants}
            className="text-gray-800 text-[11px] sm:text-[13px] md:text-[13px] font-light tracking-wide leading-relaxed mb-3 max-w-[600px]"
          >
            Step into a land where every journey tells a story and every sight
            leaves you in awe.
          </motion.p>

          {/* Sections */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 text-gray-800 text-[13px] sm:text-[14px] md:text-[15px] font-light tracking-wide leading-relaxed max-w-[620px]">
            <motion.div variants={itemVariants}>
              <h4 className="text-[#8b6b47] font-medium text-[13px] sm:text-[15px] md:text-[15px] mb-1">
                Feel the essence
              </h4>

              <p className="text-gray-800 text-[11px] sm:text-[13px] md:text-[13px] font-light tracking-wide leading-relaxed mb-3 max-w-[600px]">
                With vibrant festivals, colorful landscapes, and the unique
                charm of India’s rich traditions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-[#8b6b47] font-medium text-[13px] sm:text-[15px] md:text-[15px] mb-1 -mt-5">
                Discover yourself
              </h4>

              <p className="text-gray-800 text-[11px] sm:text-[13px] md:text-[13px] font-light tracking-wide leading-relaxed mb-3 max-w-[600px]">
                In serene yoga retreats, spiritual journeys, and the peaceful
                rhythm of ancient practices.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-[#8b6b47] font-medium text-[13px] sm:text-[15px] md:text-[15px] mb-1 -mt-5">
                Explore with us
              </h4>

              <p className="text-gray-800 text-[11px] sm:text-[13px] md:text-[13px] font-light tracking-wide leading-relaxed mb-3 max-w-[600px]">
                From the towering peaks of the Himalayas to the tranquil
                backwaters of Kerala, majestic forts, palaces, and ancient
                temples that showcase India’s rich history and culture.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 🔥 RIGHT SIDE */}
        <motion.div
          variants={videoVariants}
          className="flex justify-center md:justify-start md:pl-6"
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] h-[350px] sm:h-[360px] md:h-[350px] overflow-hidden rounded-sm">
            <video
              src="/welcome-section/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}