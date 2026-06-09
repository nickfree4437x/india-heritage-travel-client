"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import FestivalCard from "./FestivalCard";
import { festivals } from "./festivalData";

export default function Festivals() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
    margin: "-100px 0px -100px 0px",
  });

  // Heading animation
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
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1.01] as const,
      },
    },
  };

  // Container for grid cards - stagger effect
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.3,
      },
    },
  };

  // Individual card animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 55,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1.01] as const,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-[#CBB299] py-6 md:py-6 px-6"
      id="festivals"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <motion.div
          variants={headingVariants}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-wide text-white mb-2 leading-snug md:whitespace-nowrap">
            Immerse In Festive Celebrations
          </h2>

          <p className="text-[12.5px] sm:text-[13.5px] md:text-[14px] font-light leading-relaxed text-white/90 tracking-wide max-w-[580px] mx-auto">
            Discover India’s most vibrant festivals, rich in culture,
            tradition, and celebration.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={gridVariants}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:mb-16"
        >
          {festivals.map((festival) => (
            <motion.div
              key={festival.slug}
              variants={cardVariants}
            >
              <FestivalCard {...festival} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}