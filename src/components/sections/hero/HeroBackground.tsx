"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

type Props = {
  videoProgress: number;
  isHovering: boolean;
};

// ============================================================================
// COMPONENT
// ============================================================================

export default function HeroBackground({
  videoProgress,
  isHovering,
}: Props) {

  // ==========================================================================
  // REFS
  // ==========================================================================

  const desktopVideoRef =
    useRef<HTMLVideoElement | null>(null);

  const mobileVideoRef =
    useRef<HTMLVideoElement | null>(null);

  // ==========================================================================
  // STATES
  // ==========================================================================

  const [isMobile, setIsMobile] =
    useState(false);

  // ==========================================================================
  // DETECT MOBILE
  // ==========================================================================

  useEffect(() => {

    const checkDevice = () => {

      setIsMobile(
        window.innerWidth < 768
      );

    };

    checkDevice();

    window.addEventListener(
      "resize",
      checkDevice
    );

    return () => {

      window.removeEventListener(
        "resize",
        checkDevice
      );

    };

  }, []);

  // ==========================================================================
  // FORCE AUTOPLAY
  // ==========================================================================

  useEffect(() => {

    const playVideos = async () => {

      try {

        // DESKTOP
        if (
          desktopVideoRef.current &&
          !isMobile
        ) {

          desktopVideoRef.current.muted = true;

          await desktopVideoRef.current.play();

        }

        // MOBILE
        if (
          mobileVideoRef.current &&
          isMobile
        ) {

          mobileVideoRef.current.muted = true;

          await mobileVideoRef.current.play();

        }

      } catch (error) {

        console.log(
          "Autoplay blocked:",
          error
        );

      }

    };

    playVideos();

  }, [isMobile]);

  // ==========================================================================
  // VIDEO FILTER
  // ==========================================================================

  // REMOVE FILTERS ON MOBILE
  // IOS SAFARI + FILTERS = PLAY BUTTON ISSUE

  const getVideoFilter = (
    progress: number
  ) => {

    if (isMobile) {

      return {};

    }

    return {

      filter: `
        brightness(${0.88 + progress * 0.08})
        contrast(${1.03})
      `,

    };

  };

  // ==========================================================================
  // RENDER
  // ==========================================================================

  return (
    <>

      {/* ====================================================================
          VIDEO WRAPPER
      ==================================================================== */}

      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{
          scale: isHovering
            ? 1.01
            : 1.03,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >

        {/* ================================================================
            DESKTOP VIDEO
        ================================================================ */}

        <video
          ref={desktopVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          {...({
            "webkit-playsinline": "true",
          } as any)}
          className="
            hidden md:block
            w-full h-full
            object-cover
          "
          style={getVideoFilter(videoProgress)}
        >

          <source
            src="https://res.cloudinary.com/dhfsyt4x9/video/upload/q_auto:good,vc_h264,w_1920/hero-small_q95bzf.mp4"
            type="video/mp4"
          />

        </video>

        {/* ================================================================
            MOBILE VIDEO
        ================================================================ */}

        <video
          ref={mobileVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          {...({
            "webkit-playsinline": "true",
          } as any)}
          className="
            block md:hidden
            w-full h-full
            object-cover
          "
        >

          <source
            src="https://res.cloudinary.com/dhfsyt4x9/video/upload/q_auto:good,vc_h264,w_720/hero-mobile_z58h4d.mp4"
            type="video/mp4"
          />

        </video>

      </motion.div>

      {/* ====================================================================
          DARK OVERLAY
      ==================================================================== */}

      <motion.div
        className="absolute inset-0"
        animate={{
          background: [

            "linear-gradient(145deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.06) 50%, rgba(0,0,0,0.18) 100%)",

            "linear-gradient(125deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.22) 100%)",

            "linear-gradient(145deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.06) 50%, rgba(0,0,0,0.18) 100%)",

          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ====================================================================
          SOFT RADIAL GLOW
      ==================================================================== */}

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [

            "radial-gradient(circle at 30% 50%, rgba(203,178,153,0.10) 0%, transparent 60%)",

            "radial-gradient(circle at 70% 50%, rgba(203,178,153,0.13) 0%, transparent 60%)",

            "radial-gradient(circle at 50% 50%, rgba(203,178,153,0.08) 0%, transparent 60%)",

            "radial-gradient(circle at 30% 50%, rgba(203,178,153,0.10) 0%, transparent 60%)",

          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ====================================================================
          PULSING GLOW
      ==================================================================== */}

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(203,178,153,0.12),transparent_70%)]" />

      </motion.div>

      {/* ====================================================================
          LIGHT BEAM
      ==================================================================== */}

      <motion.div className="absolute inset-0 pointer-events-none overflow-hidden">

        <motion.div
          className="
            absolute top-0
            h-full w-[20%]
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            blur-xl
            hidden md:block
          "
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

      </motion.div>

      {/* ====================================================================
          TOP AURORA
      ==================================================================== */}

      <motion.div
        className="
          absolute top-0 left-0
          w-full h-[50%]
          pointer-events-none
        "
        animate={{
          opacity: [0.06, 0.16, 0.06],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        <div className="w-full h-full bg-gradient-to-b from-[#CBB299]/10 via-white/5 to-transparent" />

      </motion.div>

      {/* ====================================================================
          BOTTOM GLOW
      ==================================================================== */}

      <motion.div
        className="
          absolute bottom-0 left-0
          w-full h-[30%]
          pointer-events-none
        "
        animate={{
          opacity: [0.06, 0.14, 0.06],
          y: [0, 6, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >

        <div className="w-full h-full bg-gradient-to-t from-[#CBB299]/10 to-transparent" />

      </motion.div>

    </>
  );
}