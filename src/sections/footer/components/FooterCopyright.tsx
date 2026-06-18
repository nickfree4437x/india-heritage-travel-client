"use client";

// ============================================================
// 1. IMPORTS
// ============================================================
// No external imports

// ============================================================
// 2. COMPONENT
// ============================================================
export default function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative mt-16 sm:mt-20">
      {/* Divider */}
      <div className="mt-10 sm:mt-14 -mx-4 sm:-mx-6 md:-mx-10 lg:-mx-20 border-t border-white/5" />

      {/* Copyright Text */}
      <p className="text-center text-[9px] sm:text-[10px] font-extralight tracking-[0.15em] sm:tracking-[0.18em] text-gray-200 mt-6 sm:mt-8 px-4 sm:px-6 md:px-10 leading-relaxed">
        © {currentYear} India Heritage Travel - Crafted with{" "}
        <span className="text-[#a88b63]">❤️</span> for unforgettable journeys.
      </p>
    </div>
  );
}