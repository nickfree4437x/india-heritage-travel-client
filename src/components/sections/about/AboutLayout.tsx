"use client";

import AboutSidebar from "./AboutSidebar";
import AboutContent from "./AboutContent";

export default function AboutLayout() {
  return (
    <section className="bg-[#f8f6f2] py-16">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* LEFT */}
          <AboutSidebar />

          {/* RIGHT */}
          <AboutContent />

        </div>

        {/* 🔥 VERTICAL DIVIDER (PERFECT CENTER) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-[25%] w-[2px] bg-[#9c6b2f] opacity-60" />

      </div>
    </section>
  );
}