"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

type Props = {
  videoProgress: number;
  isHovering: boolean;
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function HeroBackground({ videoProgress, isHovering }: Props) {
  // ==========================================================================
  // REFS
  // ==========================================================================

  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  // ==========================================================================
  // EFFECTS
  // ==========================================================================

  // Force autoplay for all devices
  useEffect(() => {
    const playVideos = async () => {
      try {
        // Desktop video
        if (desktopVideoRef.current) {
          desktopVideoRef.current.muted = true;
          const desktopPlayPromise = desktopVideoRef.current.play();

          if (desktopPlayPromise !== undefined) {
            await desktopPlayPromise;
          }
        }

        // Mobile video
        if (mobileVideoRef.current) {
          mobileVideoRef.current.muted = true;
          const mobilePlayPromise = mobileVideoRef.current.play();

          if (mobilePlayPromise !== undefined) {
            await mobilePlayPromise;
          }
        }
      } catch (error) {
        console.log("Video autoplay blocked:", error);
      }
    };

    playVideos();
  }, []);

  // ==========================================================================
  // RENDER HELPERS
  // ==========================================================================

  // Shared video filter style
  const getVideoFilter = (progress: number) => ({
    filter: `
      brightness(${0.85 + progress * 0.1}) 
      contrast(${1.05 + Math.sin(progress * Math.PI * 2) * 0.03})
    `,
  });

  // ==========================================================================
  // MAIN RENDER
  // ==========================================================================

  return (
    <>
      {/* ======================================================================
          VIDEO BACKGROUND WITH SCALE ANIMATION
      ====================================================================== */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: isHovering ? 1.02 : 1.05 }}
        transition={{
          scale: {
            duration: 0.8,
            ease: "easeOut",
          },
        }}
      >
        {/* DESKTOP VIDEO */}
        <video
          ref={desktopVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="hidden md:block w-full h-full object-cover"
          style={getVideoFilter(videoProgress)}
        >
          <source
            src="https://res.cloudinary.com/dhfsyt4x9/video/upload/f_auto,q_auto,w_auto/hero-small_q95bzf.mp4"
            type="video/mp4"
          />
        </video>

        {/* MOBILE VIDEO */}
        <video
          ref={mobileVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="block md:hidden w-full h-full object-cover"
          style={getVideoFilter(videoProgress)}
        >
          <source
            src="https://res.cloudinary.com/dhfsyt4x9/video/upload/v1779522352/hero-mobile_z58h4d.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* ======================================================================
          DARK OVERLAY - ANIMATED GRADIENT
      ====================================================================== */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(145deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.15) 100%)",
            "linear-gradient(125deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.03) 50%, rgba(0,0,0,0.2) 100%)",
            "linear-gradient(145deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.15) 100%)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ======================================================================
          SOFT RADIAL GLOW - MOVING LIGHT SOURCE
      ====================================================================== */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(203,178,153,0.12) 0%, transparent 60%)",
            "radial-gradient(circle at 70% 50%, rgba(203,178,153,0.15) 0%, transparent 60%)",
            "radial-gradient(circle at 50% 50%, rgba(203,178,153,0.1) 0%, transparent 60%)",
            "radial-gradient(circle at 30% 50%, rgba(203,178,153,0.12) 0%, transparent 60%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ======================================================================
          PULSING GLOW OVERLAY
      ====================================================================== */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(203,178,153,0.15),transparent_70%)]" />
      </motion.div>

      {/* ======================================================================
          MOVING LIGHT BEAM - SCANNING EFFECT
      ====================================================================== */}
      <motion.div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 h-full w-[25%] bg-gradient-to-r from-transparent via-white/12 to-transparent blur-2xl"
          animate={{ x: ["-100%", "200%"] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* ======================================================================
          TOP AURORA EFFECT
      ====================================================================== */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[50%] pointer-events-none"
        animate={{
          opacity: [0.08, 0.22, 0.08],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-b from-[#CBB299]/15 via-white/8 to-transparent" />
      </motion.div>

      {/* ======================================================================
          BOTTOM GLOW EFFECT
      ====================================================================== */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[30%] pointer-events-none"
        animate={{
          opacity: [0.08, 0.18, 0.08],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="w-full h-full bg-gradient-to-t from-[#CBB299]/15 to-transparent" />
      </motion.div>
    </>
  );
}