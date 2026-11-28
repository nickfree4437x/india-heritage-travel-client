
"use client";

import Image from "next/image";
import Link from "next/link";

import type { LucideIcon } from "lucide-react";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

type DestinationCardProps = {
  title: string;
  days: string;
  image: string;
  desc: string;
  icon: LucideIcon;
  slug: string;
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function DestinationCard({
  title,
  days,
  image,
  desc,
  icon: Icon,
  slug,
}: DestinationCardProps) {
  return (
    <Link
      href={`/tours/${slug}`}
      aria-label={`${title} - Explore tour details`}
      className="block w-full rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b6b47] focus-visible:ring-offset-4"
    >
      <div
        className="relative w-full max-w-[420px] mx-auto rounded-sm overflow-hidden group
                   h-[240px] sm:h-[430px] md:h-[450px]
                   shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                   hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]
                   transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      >
        {/* BACKGROUND IMAGE */}
        <Image
          src={image}
          alt={`${title} - India Heritage Travel`}
          fill
          sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 40px), 420px"
          className="object-cover object-center scale-100 transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        />

        {/* DEFAULT GRADIENT OVERLAY */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"
        />

        {/* HOVER OVERLAY */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/50 opacity-0
                     sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100
                     transition-opacity duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        />

        {/* DEFAULT CONTENT */}
        <div
          className="absolute inset-0 flex flex-col justify-end items-center text-white p-4 sm:p-6
                     transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                     sm:group-hover:opacity-0 sm:group-hover:translate-y-10
                     sm:group-focus-visible:opacity-0 sm:group-focus-visible:translate-y-10"
        >
          <Icon
            size={28}
            strokeWidth={1}
            aria-hidden="true"
            className="mb-1 opacity-90 sm:mb-2 sm:size-[32px]"
          />

          <h3
            className="font-heading text-[13.5px] sm:text-[15px] md:text-[15px] font-semibold tracking-wide text-center text-[#f5f5f5] leading-snug"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
          >
            {title}
          </h3>

          {/* MOBILE CTA */}
          <span className="mt-2 text-[12px] sm:hidden inline-block relative">
            Know More
            <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-white" />
          </span>
        </div>

        {/* DESKTOP HOVER CONTENT */}
        <div
          className="hidden sm:flex absolute inset-0 flex-col justify-between p-6 text-white text-center
                     translate-y-[110%] group-hover:translate-y-0 group-focus-visible:translate-y-0
                     transition-transform duration-[2000ms]"
        >
          {/* TITLE */}
          <div
            className="opacity-0 translate-y-6
                       group-hover:opacity-100 group-hover:translate-y-0
                       group-focus-visible:opacity-100 group-focus-visible:translate-y-0
                       transition-all duration-[1200ms] delay-200"
          >
            <Icon
              size={34}
              strokeWidth={1}
              aria-hidden="true"
              className="mx-auto mb-2 opacity-95"
            />

            <h3 className="font-heading text-[15px] sm:text-[16px] md:text-[16px] font-semibold tracking-wide">
              {title}
            </h3>
          </div>

          {/* DESCRIPTION AND DURATION */}
          <div
            className="opacity-0 translate-y-6
                       group-hover:opacity-100 group-hover:translate-y-0
                       group-focus-visible:opacity-100 group-focus-visible:translate-y-0
                       transition-all duration-[1200ms] delay-400"
          >
            <p className="text-[12.5px] sm:text-[13px] md:text-[13px] font-light text-gray-200 leading-relaxed">
              {desc}
            </p>

            <p className="mt-2 text-[12.5px] sm:text-[13px] font-medium">
              Duration: {days} Days
            </p>
          </div>

          {/* CTA */}
          <div
            aria-hidden="true"
            className="opacity-0 translate-y-6
                       group-hover:opacity-90 group-hover:translate-y-0
                       group-focus-visible:opacity-90 group-focus-visible:translate-y-0
                       transition-all duration-[1200ms] delay-600"
          >
            <span className="mt-4 inline-block text-[11px] text-white relative">
              Know More
              <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-white" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
