"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function WomenSeeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "-100px 0px -100px 0px",
  });

  // Left content animation - slow and smooth
  const contentVariants = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Mobile collage - slow fade up
  const mobileCollageVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.3,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Slower stagger for mobile grid images
  const mobileGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const mobileImageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.92,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Desktop collage - slower stagger
  const desktopImagesVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.4,
      },
    },
  };

  const desktopImageVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.15,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Text paragraph animations - slower stagger
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Heading animation
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 30,
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

  // Label animation
  const labelVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full bg-[#f8f6f2] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-20 xl:gap-24">
          
          {/* LEFT SIDE - CONTENT */}
          <motion.div
            variants={contentVariants}
            className="max-w-xl w-full"
          >
            <motion.p
              variants={labelVariants}
              className="text-[11px]
                tracking-[0.2em]
                uppercase

                text-[#8b7355]

                text-center

                mb-2"
            >
              What I Really Want Women To See
            </motion.p>

            <motion.h2
              variants={headingVariants}
              className="
                text-[16px] font-medium text-gray-800 mb-6 leading-relaxed
              "
            >
              There’s another side of India I want you to experience
            </motion.h2>

            <motion.div variants={textContainerVariants}>
              <motion.p
                variants={textVariants}
                className="
                  text-[13px]
                  md:text-[14px]
                  leading-[2]
                  tracking-[0.01em]
                  text-[#4d4d4d]
                  font-[300]
                "
              >
                The quiet mornings.
              </motion.p>

              <motion.p
                variants={textVariants}
                className="
                  text-[13px]
                  md:text-[14px]
                  leading-[2]
                  tracking-[0.01em]
                  text-[#4d4d4d]
                  font-[300]
                "
              >
                The warmth of people.
              </motion.p>

              <motion.p
                variants={textVariants}
                className="
                  text-[13px]
                  md:text-[14px]
                  leading-[2]
                  tracking-[0.01em]
                  text-[#4d4d4d]
                  font-[300]
                "
              >
                The stories hidden in old streets.
              </motion.p>

              <motion.p
                variants={textVariants}
                className="
                  text-[13px]
                  md:text-[14px]
                  leading-[2]
                  tracking-[0.01em]
                  text-[#4d4d4d]
                  font-[300]
                "
              >
                The feeling of sitting somewhere unfamiliar… and somehow
                feeling completely present there.
              </motion.p>

              <motion.p
                variants={textVariants}
                className="
                  text-[13px]
                  md:text-[14px]
                  leading-[2]
                  tracking-[0.01em]
                  text-[#4d4d4d]
                  font-[300]
                "
              >
                India is intense sometimes, yes.
              </motion.p>

              <motion.p
                variants={textVariants}
                className="
                  text-[13px]
                  md:text-[14px]
                  leading-[2]
                  tracking-[0.01em]
                  text-[#4d4d4d]
                  font-[300]
                "
              >
                But it's also deeply beautiful.
              </motion.p>

              <motion.p
                variants={textVariants}
                className="
                  text-[13px]
                  md:text-[14px]
                  leading-[2]
                  tracking-[0.01em]
                  text-[#4d4d4d]
                  font-[300]
                "
              >
                And I truly believe women deserve to experience that side
                of it too - comfortably, confidently, and in their own way.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* RIGHT COLLAGE */}

          {/* MOBILE / TABLET collage */}
          <motion.div
            variants={mobileCollageVariants}
            className="block lg:hidden mt-10 w-full"
          >
            <div className="relative">
              <motion.div
                variants={mobileGridVariants}
                className="relative z-10 grid grid-cols-2 gap-3"
              >
                <motion.div
                  variants={mobileImageVariants}
                  className="col-span-1 row-span-2"
                >
                  <Image
                    src="/solo-trip/women-wall.jpeg"
                    alt="women"
                    width={300}
                    height={380}
                    className="w-full h-[280px] sm:h-[340px] object-cover rounded-sm"
                  />
                </motion.div>

                <motion.div
                  variants={mobileImageVariants}
                  className="col-span-1"
                >
                  <Image
                    src="/solo-trip/night-lights.jpeg"
                    alt="lights"
                    width={300}
                    height={200}
                    className="w-full h-[280px] sm:h-[220px] object-cover rounded-sm"
                  />
                </motion.div>

                <motion.div
                  variants={mobileImageVariants}
                  className="col-span-2 -mt-3"
                >
                  <Image
                    src="/solo-trip/taj-mahal.jpeg"
                    alt="taj"
                    width={600}
                    height={220}
                    className="w-full h-[160px] sm:h-[200px] object-cover rounded-sm"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* DESKTOP collage */}
          <motion.div
            variants={desktopImagesVariants}
            className="hidden lg:block relative w-[560px] h-[560px] flex-shrink-0"
          >
            {/* RANGOLI BACKGROUND */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <Image
                src="/solo-trip/rangoli.png"
                alt="rangoli"
                width={100}
                height={100}
                className="opacity-25 -ml-20 mb-8"
              />
            </div>

            {/* TOP LEFT */}
            <motion.div
              variants={desktopImageVariants}
              className="absolute top-0 left-0 w-[47%] z-10"
            >
              <Image
                src="/solo-trip/elephant.jpeg"
                alt="elephant"
                width={300}
                height={220}
                className="w-full h-[200px] object-cover rounded-sm"
              />
            </motion.div>

            {/* TOP RIGHT */}
            <motion.div
              variants={desktopImageVariants}
              className="absolute top-0 right-5 w-[46%] z-10"
            >
              <Image
                src="/solo-trip/women-wall.jpeg"
                alt="women"
                width={300}
                height={360}
                className="w-full h-[320px] object-cover rounded-sm"
              />
            </motion.div>

            {/* BOTTOM LEFT */}
            <motion.div
              variants={desktopImageVariants}
              className="absolute bottom-5 left-[-60px] w-[46%] z-10"
            >
              <Image
                src="/solo-trip/night-lights.jpeg"
                alt="lights"
                width={300}
                height={320}
                className="w-full h-[325px] object-cover rounded-sm"
              />
            </motion.div>

            {/* BOTTOM RIGHT */}
            <motion.div
              variants={desktopImageVariants}
              className="absolute bottom-0 right-[18px] w-[58%] z-10"
            >
              <Image
                src="/solo-trip/taj-mahal.jpeg"
                alt="taj"
                width={340}
                height={250}
                className="w-full h-[220px] mb-2 object-cover rounded-sm"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}