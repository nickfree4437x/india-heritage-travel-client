"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

type Props = {
  isHovering: boolean;
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function HeroBackground({
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
  // EFFECTS
  // ==========================================================================

  useEffect(() => {

    const setupVideo = async (
      video: HTMLVideoElement | null
    ) => {

      if (!video) return;

      try {

        video.muted = true;

        video.defaultMuted = true;

        video.setAttribute(
          "muted",
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

        const playPromise =
          video.play();

        if (playPromise !== undefined) {

          await playPromise;

        }

      } catch (error) {

        console.log(
          "Autoplay blocked:",
          error
        );

      }

    };

    setupVideo(
      desktopVideoRef.current
    );

    setupVideo(
      mobileVideoRef.current
    );

  }, []);

  // ==========================================================================
  // MAIN RENDER
  // ==========================================================================

  return (
    <>

      {/* ====================================================================
          VIDEO BACKGROUND
      ==================================================================== */}

      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{
          scale: isHovering
            ? 1.02
            : 1.05,
        }}
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
          preload="metadata"
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="
            hidden md:block
            w-full h-full
            object-cover
            pointer-events-none
          "
          style={{
            filter:
              "brightness(0.9) contrast(1.05)",
          }}
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
          preload="metadata"
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="
            block md:hidden
            w-full h-full
            object-cover
            pointer-events-none
          "
          style={{
            filter:
              "brightness(0.9) contrast(1.05)",
          }}
        >

          <source
            src="https://res.cloudinary.com/dhfsyt4x9/video/upload/v1781066920/hero-mobile_z58h4d_oypsli.mp4"
            type="video/mp4"
          />

        </video>

      </motion.div>

      {/* ====================================================================
          DARK OVERLAY
      ==================================================================== */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(145deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.20) 100%)",
        }}
      />

    </>
  );
}