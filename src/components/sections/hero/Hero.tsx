"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {

  // 🔥 PARALLAX STATE
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [videoProgress, setVideoProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMouse({ x, y });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoProgress(prev => (prev + 0.003) % 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black" />
      </section>
    );
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >

      {/* 🔥 VIDEO BACKGROUND */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{
          scale: isHovering ? 1.02 : 1.05,
          x: mouse.x * 1.5,
          y: mouse.y * 1.5,
        }}
        transition={{
          scale: { duration: 0.8, ease: "easeOut" },
          x: { type: "spring", stiffness: 30, damping: 25, mass: 0.5 },
          y: { type: "spring", stiffness: 30, damping: 25, mass: 0.5 },
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            filter: `
              brightness(${0.7 + videoProgress * 0.1}) 
              contrast(${1.05 + Math.sin(videoProgress * Math.PI * 2) * 0.03})
            `,
          }}
        >
          <source src="/hero/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* 🔥 DARK OVERLAY */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(145deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)",
            "linear-gradient(125deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.75) 100%)",
            "linear-gradient(145deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)",
          ]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔥 SOFT RADIAL GLOW */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(203,178,153,0.06) 0%, transparent 60%)",
            "radial-gradient(circle at 70% 50%, rgba(203,178,153,0.08) 0%, transparent 60%)",
            "radial-gradient(circle at 50% 50%, rgba(203,178,153,0.05) 0%, transparent 60%)",
            "radial-gradient(circle at 30% 50%, rgba(203,178,153,0.06) 0%, transparent 60%)",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔥 PULSING GLOW */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(203,178,153,0.1),transparent_70%)]" />
      </motion.div>

      {/* 🔥 MOVING LIGHT BEAM */}
      <motion.div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 h-full w-[25%] bg-gradient-to-r from-transparent via-white/6 to-transparent blur-2xl"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* 🔥 TOP AURORA EFFECT */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[50%] pointer-events-none"
        animate={{ 
          opacity: [0.05, 0.15, 0.05],
          y: [0, -10, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-gradient-to-b from-[#CBB299]/10 via-white/5 to-transparent" />
      </motion.div>

      {/* 🔥 BOTTOM GLOW */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[30%] pointer-events-none"
        animate={{ 
          opacity: [0.05, 0.12, 0.05],
          y: [0, 8, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="w-full h-full bg-gradient-to-t from-[#CBB299]/10 to-transparent" />
      </motion.div>

      {/* 🔥 SPARKLE PARTICLES */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[1.5px] h-[1.5px] rounded-full bg-white/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30 - Math.random() * 20, 0],
            x: [0, (Math.random() - 0.5) * 30, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 🔥 CONTENT */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 text-center">
        <div className="w-full max-w-3xl text-white flex flex-col items-center">

          {/* 🔥 HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.21, 1.11, 0.38, 0.99] }}
          >
            <motion.h1 className="font-semibold font-heading leading-tight">
              <motion.span
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={{ clipPath: "inset(0 0 0% 0)" }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.77, 0, 0.18, 1] }}
                className="block text-xl sm:text-3xl md:text-4xl text-white"
              >
                Explore India Beyond Landmarks
              </motion.span>

              <motion.span
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={{ clipPath: "inset(0 0 0% 0)" }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.77, 0, 0.18, 1] }}
                className="block text-xl sm:text-3xl md:text-4xl mt-2 sm:mt-3"
              >
                <span className="relative inline-block">
                  <span className="absolute inset-0 blur-md animate-pulse" />
                    Curated Heritage Journeys
                </span>
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* 🔥 DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1, ease: "easeOut" }}
            className="mt-2 sm:mt-3 text-[11px] sm:text-xs md:text-sm text-gray-300 font-light leading-relaxed tracking-wide max-w-md sm:max-w-lg px-4"
          >
            Discover India's hidden cultures, ancient traditions, and untouched
            landscapes thoughtfully curated for a truly immersive journey.
          </motion.p>

          {/* 🔥 CTA BUTTON */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileTap={{ scale: 0.98 }}
            className="relative group mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 border border-[#CBB299]/40 
            bg-black/20 backdrop-blur-md text-[#CBB299] text-[10px] sm:text-xs tracking-[2px] uppercase 
            transition-all duration-500 overflow-hidden rounded-none"
          >
            <span className="relative z-10">Begin Your Journey</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#CBB299]/0 via-[#CBB299]/15 to-[#CBB299]/0"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
            />
          </motion.button>
        </div>
      </div>

      {/* 🔥 SCROLL INDICATOR - PERFECTLY CENTERED */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 text-center"
        >
        <motion.span
          animate={{ 
            opacity: [0.2, 0.8, 0.2],
            y: [0, -3, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[8px] sm:text-[9px] tracking-[3px] text-white/40 uppercase mb-1"
        >
          Discover More
        </motion.span>

        <div className="w-[18px] sm:w-[20px] h-[30px] sm:h-[34px] rounded-full border border-white/20 flex items-start justify-center p-[2px] backdrop-blur-sm bg-white/5">
          <motion.div
            animate={{ 
              y: [0, 12, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[1.5px] h-[6px] rounded-full bg-[#CBB299] shadow-[0_0_6px_rgba(203,178,153,0.6)]"
          />
        </div>
      </motion.div>

    </section>
  );
}