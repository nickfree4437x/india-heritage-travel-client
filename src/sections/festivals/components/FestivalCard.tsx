"use client";

// ============================================================
// 1. IMPORTS
// ============================================================
import Image from "next/image";
import Link from "next/link";
import { SunMedium, Lamp, Mountain, Flower } from "lucide-react";
import { FestivalType } from "../data/festivalData";

// ============================================================
// 2. COMPONENT
// ============================================================
export default function FestivalCard({
  title,
  days,
  image,
  desc,
  slug,
}: FestivalType) {
  // ===== HELPERS =====
  const renderIcon = (size: number) => {
    switch (slug) {
      case "holi":
        return <SunMedium size={size} strokeWidth={1} />;
      case "diwali":
        return <Lamp size={size} strokeWidth={1} />;
      case "pushkar":
        return <Mountain size={size} strokeWidth={1} />;
      case "kumbh":
        return <Flower size={size} strokeWidth={1} />;
      default:
        return <SunMedium size={size} strokeWidth={1} />;
    }
  };

  return (
    <Link href={`/festivals/${slug}`} className="block w-full">
      <div
        className="
          relative w-full max-w-[420px] mx-auto rounded-sm overflow-hidden group cursor-pointer 
          h-[190px] sm:h-[430px] md:h-[450px]
          shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
          hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        "
      >
        {/* ===== IMAGE ===== */}
        <Image
          src={image}
          alt={`${title} | India Heritage Travel`}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="
            object-cover object-center
            transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          "
        />

        {/* ===== GRADIENT OVERLAY ===== */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

        {/* ===== HOVER OVERLAY (Desktop Only) ===== */}
        <div
          className="
            absolute inset-0 bg-black/50 opacity-0 
            sm:group-hover:opacity-100 
            transition-opacity duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          "
        />

        {/* ===== DEFAULT CONTENT (Mobile & Initial) ===== */}
        <div
          className="
            absolute inset-0 flex flex-col justify-end items-center text-white pb-4 pt-6 sm:p-6
            transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
            sm:group-hover:opacity-0 sm:group-hover:translate-y-10
          "
        >
          {/* Icon */}
          <div className="mb-1 opacity-90 sm:mb-2">
            {renderIcon(26)}
          </div>

          {/* Title */}
          <h3 
            className="
              font-heading text-[13px] sm:text-[15px] md:text-[15px] 
              font-semibold tracking-wide text-center text-[#f5f5f5] leading-snug
            "
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
          >
            {title}
          </h3>

          {/* Mobile CTA */}
          <span className="mt-1 text-[11.5px] sm:hidden inline-block relative">
            Know Festival
            <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-white"></span>
          </span>
        </div>

        {/* ===== HOVER CONTENT (Desktop Only) ===== */}
        <div
          className="
            hidden sm:flex absolute inset-0 flex-col justify-between p-6 text-white text-center
            translate-y-[110%] group-hover:translate-y-0
            transition-transform duration-[2000ms]
          "
        >
          {/* Top Section - Icon + Title */}
          <div
            className="
              opacity-0 translate-y-6 
              group-hover:opacity-100 group-hover:translate-y-0 
              transition-all duration-[1200ms] delay-200 
              flex flex-col items-center
            "
          >
            <div className="mb-3 text-white opacity-95">
              {renderIcon(34)}
            </div>
            <h3 className="font-heading text-[15px] sm:text-[16px] md:text-[16px] font-semibold tracking-wide">
              {title}
            </h3>
          </div>

          {/* Middle Section - Description + Days */}
          <div
            className="
              opacity-0 translate-y-6 
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-[1200ms] delay-400
            "
          >
            <p className="text-[12.5px] sm:text-[13px] md:text-[13px] font-light text-gray-200 leading-relaxed">
              {desc}
            </p>
            <p className="mt-2 text-[12.5px] sm:text-[13px] font-medium">
              Days : {days}
            </p>
          </div>

          {/* Bottom Section - CTA Link */}
          <div
            className="
              opacity-0 translate-y-6 
              group-hover:opacity-90 group-hover:translate-y-0
              transition-all duration-[1200ms] delay-600
            "
          >
            <span
              onClick={(e) => e.stopPropagation()}
              className="mt-4 inline-block text-[11px] text-white cursor-pointer relative"
            >
              Know Festival
              <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-white"></span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}