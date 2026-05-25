"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function SoloTravelSection() {
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

  // Button animation
  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.8,
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

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full bg-white py-14 relative overflow-hidden"
    >
      {/* MAIN WRAPPER */}
      <div className="w-full px-6 md:px-20 lg:px-28 xl:px-36">
        {/*
          Mobile/Tablet: flex-col (stack karo)
          Desktop (lg+): flex-row side by side — UNTOUCHED
        */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            variants={contentVariants}
            className="max-w-xl w-full"
          >
            <motion.h3
              variants={headingVariants}
              className="text-[16px] font-medium text-gray-800 mb-6 leading-relaxed"
            >
              Thinking of coming to India... but not sure how it will feel
              doing it alone?
            </motion.h3>

            <motion.div variants={textContainerVariants}>
              <motion.p
                variants={textVariants}
                className="text-gray-500 text-[12px] font-[350] mb-4 leading-[1.7]"
                style={{
                  fontFamily:
                    '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
                }}
              >
                I get it.
                <br />
                India is beautiful... but it can also feel overwhelming when
                you're on your own.
                <br />
                That's exactly why I do what I do.
              </motion.p>

              <motion.p
                variants={textVariants}
                className="text-[13px] leading-[1.8] text-gray-600 mb-6"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  fontStyle: "italic",
                  letterSpacing: "0.3px",
                }}
              >
                Traveling as a solo women through India...
                <br />
                but always knowing someone has your back :)
              </motion.p>

              <motion.p
                variants={textVariants}
                className="text-gray-500 text-[12px] mb-4 font-[350] leading-[1.7]"
                style={{
                  fontFamily:
                    '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
                }}
              >
                <span className="font-semibold text-gray-800">
                  Hi, I'm Isha.
                </span>
                <br />
                And I help women experience India in a way that feels safe,
                calm, and deeply personal without taking away the magic of
                discovering it.
                <br />
              </motion.p>

              <motion.p
                variants={textVariants}
                className="text-gray-500 text-[12px] mb-4 font-[350] leading-[1.7]"
                style={{
                  fontFamily:
                    '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
                }}
              >
                So you can travel solo…
                <br />
                but never feel alone.
              </motion.p>
            </motion.div>

            <Link href="/solo-trip">
              <motion.button
                variants={buttonVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto md:-ml-2 bg-transparent text-[#a67c52] text-xs px-7 py-3 rounded-full border border-[#a67c52] hover:bg-[#a67c52] hover:text-white transition-all duration-300" >
                Come travel with me
              </motion.button>
            </Link>
          </motion.div>

          {/* RIGHT COLLAGE */}

          {/* MOBILE / TABLET collage — lg pe hide */}
          <motion.div
            variants={mobileCollageVariants}
            className="block lg:hidden mt-10 w-full"
          >
            {/* Rangoli background */}
            <div className="relative">
              {/* 2-col grid layout for mobile */}
              <motion.div
                variants={mobileGridVariants}
                className="relative z-10 grid grid-cols-2 gap-3"
              >
                {/* TOP RIGHT — women wall (taller) */}
                <motion.div
                  variants={mobileImageVariants}
                  className="col-span-1 row-span-2"
                >
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531020/women-wall_ftanbo.jpg"
                    alt="women"
                    width={300}
                    height={380}
                    className="w-full h-[280px] sm:h-[340px] object-cover rounded-sm"
                  />
                </motion.div>

                {/* BOTTOM LEFT — night lights */}
                <motion.div
                  variants={mobileImageVariants}
                  className="col-span-1"
                >
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531130/night-lights_ncz5ue.jpg"
                    alt="lights"
                    width={300}
                    height={200}
                    className="w-full h-[280px] sm:h-[220px] object-cover rounded-sm"
                  />
                </motion.div>

                {/* BOTTOM FULL WIDTH — taj mahal */}
                <motion.div
                  variants={mobileImageVariants}
                  className="col-span-2 -mt-3"
                >
                  <Image
                    src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531181/taj-mahal_hln96e.jpg"
                    alt="taj"
                    width={600}
                    height={220}
                    className="w-full h-[160px] sm:h-[200px] object-cover rounded-sm"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* DESKTOP collage — mobile pe hide, ORIGINAL CODE UNTOUCHED */}
          <motion.div
            variants={desktopImagesVariants}
            className="hidden lg:block relative w-[560px] h-[560px] flex-shrink-0"
          >
            {/* RANGOLI (PERFECT CENTER - BACKGROUND) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531215/rangoli_gkxrux.png"
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
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531252/elephant_wfliyn.jpg"
                alt="elephant"
                width={300}
                height={220}
                className="w-full h-[200px] object-cover rounded-sm"
              />
            </motion.div>

            {/* TOP RIGHT (TALL IMAGE) */}
            <motion.div
              variants={desktopImageVariants}
              className="absolute top-0 right-5 w-[46%] z-10"
            >
              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531020/women-wall_ftanbo.jpg"
                alt="women"
                width={300}
                height={360}
                className="w-full h-[320px] object-cover rounded-sm"
              />
            </motion.div>

            {/* BOTTOM LEFT (SHIFT LEFT + OVERLAP) */}
            <motion.div
              variants={desktopImageVariants}
              className="absolute bottom-5 left-[-60px] w-[46%] z-10"
            >
              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531130/night-lights_ncz5ue.jpg"
                alt="lights"
                width={300}
                height={320}
                className="w-full h-[325px] object-cover rounded-sm"
              />
            </motion.div>

            {/* BOTTOM RIGHT (EXPAND LEFT) */}
            <motion.div
              variants={desktopImageVariants}
              className="absolute bottom-0 right-[18px] w-[58%] z-10"
            >
              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531181/taj-mahal_hln96e.jpg"
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