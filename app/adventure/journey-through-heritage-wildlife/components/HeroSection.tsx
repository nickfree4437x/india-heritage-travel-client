"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[93vh] w-full overflow-hidden">

      {/* Background Image with Zoom Effect */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/adventure/wildlife/hero.jpg"
          alt="Heritage & Wildlife Tour"
          fill
          priority
          className="object-cover object-center will-change-transform"
        />
      </motion.div>

      {/* Gradient Overlay (Same as previous Hero) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 text-white h-full">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          A Journey through Heritage & Wildlife
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="max-w-2xl text-md md:text-md text-gray-200"
        >
          Explore India's rich heritage along with breathtaking wildlife experiences.
        </motion.p>

      </div>
    </section>
  );
}