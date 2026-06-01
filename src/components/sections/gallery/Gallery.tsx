"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import GallerySlider from "./GallerySlider";

type GalleryImage = {
  src: string;
  alt: string;
};

const images: GalleryImage[] = [
  {
    src: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779578209/memory1_gayuz8.jpg",
    alt: "Traveler experiencing traditional Indian cultural attire with local women",
  },
  {
    src: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779578248/memory2_tykxtt.jpg",
    alt: "Solo traveler exploring the Blue City of Jodhpur Rajasthan",
  },
  {
    src: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779578270/memory3_aosj1s.jpg",
    alt: "Couple visiting Hawa Mahal in Jaipur Rajasthan",
  },
  {
    src: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779578292/memory4_hdwx8y.jpg",
    alt: "India Heritage Travel guest with local guide and private vehicle",
  },
  {
    src: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779578316/memory5_iwim1u.jpg",
    alt: "Cultural interaction with local women during a Rajasthan village experience",
  },
  {
    src: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779578435/memory6_gyayff.jpg",
    alt: "Traveler enjoying a camel safari in the Rajasthan desert",
  },
  {
    src: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779578458/memory7_wgto6n.jpg",
    alt: "Traveler admiring the iconic Hawa Mahal in Jaipur",
  },
  {
    src: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779578481/memory8_y68gce.jpg",
    alt: "Traveler visiting the Taj Mahal in Agra India",
  },
  {
    src: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779578511/memory9_wnggxy.jpg",
    alt: "Luxury heritage travel experience in Rajasthan India",
  },
  {
    src: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779578573/memory10_sdffzl.jpg",
    alt: "Cultural travel experience across historic destinations in India",
  },
  {
    src: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779578639/memory11_cv2rlx.jpg",
    alt: "Travelers exploring India's architectural heritage and culture",
  },
  {
    src: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779578694/memory12_pqqhd0.jpg",
    alt: "Authentic luxury travel experience with India Heritage Travel",
  },
  {
    src: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779578772/memory13_bwdkam.jpg",
    alt: "Discovering India's rich culture and local traditions",
  },
  {
    src: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779578796/memory14_uagzen.jpg",
    alt: "Heritage tourism experience across iconic Indian landmarks",
  },
  {
    src: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779578817/memory15_gvzrqf.jpg",
    alt: "Personalized India travel experiences and cultural exploration",
  },
];

export default function GallerySection() {
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

  // Slider animation
  const sliderVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.3,
        delay: 0.35,
        ease: [0.16, 1, 0.3, 1.01] as const,
      },
    },
  };

  // Light effects animation
  const lightEffectVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: [0.16, 1, 0.3, 1.01] as const,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-8 sm:py-8 md:py-10 bg-white relative overflow-hidden"
      id="gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mb-6">
        {/* HEADER */}
        <motion.div
          variants={headingVariants}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-wide mb-2 leading-snug md:whitespace-nowrap text-[#8b6a3d]">
            Our Gallery
          </h2>

          <p className="text-[12.5px] sm:text-[13.5px] md:text-[14px] font-light leading-relaxed tracking-wide max-w-[580px] mx-auto text-[#8b6a3d]">
            Explore beautiful moments from our curated travel experiences
          </p>
        </motion.div>

        {/* SLIDER */}
        <motion.div variants={sliderVariants}>
          <GallerySlider images={images} />
        </motion.div>
      </div>

      {/* LIGHT EFFECTS */}
      <motion.div
        variants={lightEffectVariants}
        className="absolute top-10 left-10 w-32 sm:w-40 h-32 sm:h-40 bg-[#A07008]/10 blur-3xl rounded-full animate-pulse"
      />

      <motion.div
        variants={lightEffectVariants}
        className="absolute bottom-10 right-10 w-40 sm:w-52 h-40 sm:h-52 bg-[#A07008]/10 blur-3xl rounded-full animate-pulse"
      />
    </motion.section>
  );
}