"use client";

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

  return (
    <>
      {/* ====================================================================
          VIDEO BACKGROUND
      ==================================================================== */}

      <div
        className="absolute inset-0"
        style={{
          transform: isHovering
            ? "scale(1.02)"
            : "scale(1.05)",
          transition:
            "transform 0.8s ease-out",
        }}
      >
        {/* DESKTOP VIDEO */}

        <video
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
      </div>

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