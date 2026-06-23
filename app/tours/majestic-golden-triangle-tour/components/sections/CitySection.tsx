"use client";

import Image from "next/image";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

type Props = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function CitySection({ id, title, description, image, alt }: Props) {
  // ==========================================================================
  // MAIN RENDER
  // ==========================================================================

  return (
    <div id={id} className="max-w-5xl scroll-mt-24 md:scroll-mt-28 mt-8">

      {/* ====================================================================
          SECTION HEADING
      ==================================================================== */}
      <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
        {title}
      </h3>

      {/* ====================================================================
          SECTION DESCRIPTION
      ==================================================================== */}
      <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-[300] text-justify">
        {description}
      </p>

      {/* ====================================================================
          SECTION IMAGE
      ==================================================================== */}
      <div className="w-full rounded-md overflow-hidden shadow-md -mb-6 md:mb-0">
        <Image
          src={image}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
}