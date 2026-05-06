"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import Accordion from "./Accordion";
import {
  rajasthan,
  triangle,
  south,
  kashmir,
  ladakh,
} from "./adventureData";

type SectionKey = "r1" | "r2" | "r3" | "r4" | "r5";

type OpenState = {
  r1: number | null;
  r2: number | null;
  r3: number | null;
  r4: number | null;
  r5: number | null;
};

export default function ChooseAdventure() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
    margin: "-100px 0px -100px 0px",
  });

  const [open, setOpen] = useState<OpenState>({
    r1: 0,
    r2: 0,
    r3: 0,
    r4: 0,
    r5: 0,
  });

  const toggle = (section: SectionKey, index: number) => {
    setOpen((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

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

  // Section heading animation
  const sectionHeadingVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.15,
        ease: [0.16, 1, 0.3, 1.01] as const,
      },
    },
  };

  // Container for top grid cards
  const topGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Container for bottom grid cards
  const bottomGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  // Individual card animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
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
      className="bg-gradient-to-b from-[#f3efe8] to-[#f1ede6] py-4 sm:py-6"
      id="adventure"
    >
      {/* 🔥 PROPER CONTAINER (FIXED SPACING) */}
      <div className="max-w-[1200px] xl:max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-10">
        <div className="space-y-16">
          {/* HEADING */}
          <motion.div
            variants={headingVariants}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-wide mb-2 leading-snug md:whitespace-nowrap text-[#8b6a3d]">
              Choose Your Adventure
            </h2>

            <p className="text-[12.5px] sm:text-[13.5px] md:text-[14px] font-light leading-relaxed tracking-wide max-w-[580px] mx-auto text-[#8b6a3d]">
              Experience The Beauty and Diversity of India with Our
              Unforgettable Tours!
            </p>
          </motion.div>

          {/* TOP GRID */}
          <motion.div
            variants={topGridVariants}
            className="grid lg:grid-cols-3 gap-6"
          >
            <motion.div variants={cardVariants}>
              <motion.h3
                variants={sectionHeadingVariants}
                className="text-gray-700 text-center text-[20px] sm:text-[21px] md:text-[22px] font-medium tracking-wide leading-snug mb-5"
              >
                The Royal Rajasthan
              </motion.h3>

              <Accordion
                items={rajasthan}
                open={open}
                toggle={toggle}
                section="r1"
              />
            </motion.div>

            <motion.div variants={cardVariants}>
              <motion.h3
                variants={sectionHeadingVariants}
                className="text-gray-700 text-center text-[20px] sm:text-[21px] md:text-[22px] font-medium tracking-wide leading-snug mb-5"
              >
                Golden Triangle Splendor
              </motion.h3>

              <Accordion
                items={triangle}
                open={open}
                toggle={toggle}
                section="r2"
              />
            </motion.div>

            <motion.div variants={cardVariants}>
              <motion.h3
                variants={sectionHeadingVariants}
                className="text-gray-700 text-center text-[20px] sm:text-[21px] md:text-[22px] font-medium tracking-wide leading-snug mb-5"
              >
                South India Gateways
              </motion.h3>

              <Accordion
                items={south}
                open={open}
                toggle={toggle}
                section="r3"
              />
            </motion.div>
          </motion.div>

          {/* BOTTOM GRID */}
          <motion.div
            variants={bottomGridVariants}
            className="flex justify-center"
            id="east-west"
          >
            <div className="grid lg:grid-cols-2 gap-10 w-full lg:w-2/3">
              <motion.div variants={cardVariants}>
                <motion.h3
                  variants={sectionHeadingVariants}
                  className="text-gray-700 text-center text-[20px] sm:text-[21px] md:text-[22px] font-medium tracking-wide leading-snug mb-5 lg:text-center"
                >
                  Serene Kashmir Journeys
                </motion.h3>

                <Accordion
                  items={kashmir}
                  open={open}
                  toggle={toggle}
                  section="r4"
                />
              </motion.div>

              <motion.div variants={cardVariants}>
                <motion.h3
                  variants={sectionHeadingVariants}
                  className="text-gray-700 text-[20px] sm:text-[21px] md:text-[22px] font-medium tracking-wide leading-snug mb-5 text-center lg:text-center"
                >
                  Ladakh & Spiti Escapes
                </motion.h3>

                <Accordion
                  items={ladakh}
                  open={open}
                  toggle={toggle}
                  section="r5"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}