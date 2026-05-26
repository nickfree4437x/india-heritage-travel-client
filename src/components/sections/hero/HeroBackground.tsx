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

    const setupVideo = async (
      video: HTMLVideoElement | null
    ) => {

      if (!video) return;

      try {

        // IOS SAFARI FIXES
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;

        video.setAttribute(
          "muted",
          ""
        );

        video.setAttribute(
          "autoplay",
          ""
        );

        video.setAttribute(
          "playsinline",
          ""
        );

        video.setAttribute(
          "webkit-playsinline",
          "true"
        );

        video.setAttribute(
          "x5-playsinline",
          "true"
        );

        video.setAttribute(
          "x-webkit-airplay",
          "deny"
        );

        // FORCE LOAD
        video.load();

        // FORCE PLAY
        const promise = video.play();

        if (promise !== undefined) {

          await promise;

        }

      } catch (error) {

        console.log(
          "Autoplay blocked:",
          error
        );

      }

    };

    if (isMobile) {

      setupVideo(
        mobileVideoRef.current
      );

    } else {

      setupVideo(
        desktopVideoRef.current
      );

    }

  }, [isMobile]);

  // ==========================================================================
  // VIDEO FILTER
  // ==========================================================================

  const getVideoFilter = (
    progress: number
  ) => {

    // REMOVE FILTERS ON MOBILE
    if (isMobile) {

      return {
        WebkitTransform:
          "translate3d(0,0,0)",
      };

    }

    return {

      filter: `
        brightness(${0.9 + progress * 0.05})
      `,

      WebkitTransform:
        "translate3d(0,0,0)",

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
        className="
          absolute inset-0
          overflow-hidden
          bg-black
        "
        initial={{ scale: 1.03 }}
        animate={{
          scale: isHovering
            ? 1.01
            : 1.02,
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
          disableRemotePlayback
          controlsList="nodownload nofullscreen noremoteplayback"
          tabIndex={-1}
          aria-hidden="true"
          {...({
            "webkit-playsinline":
              "true",
          } as any)}
          className="
            hidden md:block
            absolute inset-0
            w-full h-full
            object-cover
            pointer-events-none
            select-none
            transform-gpu
            [backface-visibility:hidden]
            [-webkit-backface-visibility:hidden]
          "
          style={getVideoFilter(
            videoProgress
          )}
        >

          <source
            src="https://res.cloudinary.com/dhfsyt4x9/video/upload/q_auto:good,vc_h264,so_0,w_1920/hero-small_q95bzf.mp4"
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
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload nofullscreen noremoteplayback"
          tabIndex={-1}
          aria-hidden="true"
          {...({
            "webkit-playsinline":
              "true",
          } as any)}
          className="
            block md:hidden
            absolute inset-0
            w-full h-full
            object-cover
            pointer-events-none
            select-none
            transform-gpu
            [backface-visibility:hidden]
            [-webkit-backface-visibility:hidden]
          "
          style={{
            WebkitTransform:
              "translate3d(0,0,0)",
          }}
        >

          <source
            src="https://res.cloudinary.com/dhfsyt4x9/video/upload/q_auto:good,vc_h264,so_0,w_720/hero-mobile_z58h4d.mp4"
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

            "linear-gradient(145deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.07) 50%, rgba(0,0,0,0.20) 100%)",

            "linear-gradient(125deg, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.24) 100%)",

            "linear-gradient(145deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.07) 50%, rgba(0,0,0,0.20) 100%)",

          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ====================================================================
          RADIAL GLOW
      ==================================================================== */}

      <motion.div
        className="
          absolute inset-0
          pointer-events-none
        "
        animate={{
          background: [

            "radial-gradient(circle at 30% 50%, rgba(203,178,153,0.08) 0%, transparent 60%)",

            "radial-gradient(circle at 70% 50%, rgba(203,178,153,0.10) 0%, transparent 60%)",

            "radial-gradient(circle at 50% 50%, rgba(203,178,153,0.07) 0%, transparent 60%)",

            "radial-gradient(circle at 30% 50%, rgba(203,178,153,0.08) 0%, transparent 60%)",

          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ====================================================================
          PULSE GLOW
      ==================================================================== */}

      <motion.div
        className="
          absolute inset-0
          pointer-events-none
        "
        animate={{
          opacity: [0.10, 0.22, 0.10],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(203,178,153,0.10),transparent_70%)]" />

      </motion.div>

      {/* ====================================================================
          LIGHT BEAM
      ==================================================================== */}

      <motion.div
        className="
          absolute inset-0
          pointer-events-none
          overflow-hidden
          hidden md:block
        "
      >

        <motion.div
          className="
            absolute top-0
            h-full w-[18%]
            bg-gradient-to-r
            from-transparent
            via-white/8
            to-transparent
            blur-lg
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
          opacity: [0.05, 0.12, 0.05],
          y: [0, -6, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        <div className="w-full h-full bg-gradient-to-b from-[#CBB299]/8 via-white/4 to-transparent" />

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
          opacity: [0.05, 0.12, 0.05],
          y: [0, 4, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >

        <div className="w-full h-full bg-gradient-to-t from-[#CBB299]/8 to-transparent" />

      </motion.div>

    </>
  );
}