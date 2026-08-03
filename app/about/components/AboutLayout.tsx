"use client";

// import AboutSidebar from "./AboutSidebar";
import AboutContent from "../sections/content/AboutContent";

export default function AboutLayout() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Sidebar (Temporarily Disabled) */}

        {/*
        <div className="relative grid grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-10 md:gap-24">

          <div className="relative z-10">
            <AboutSidebar />
          </div>

          <div className="relative z-10 min-w-0">
            <AboutContent />
          </div>

          <div className="hidden md:block absolute top-0 bottom-0 left-[275px] w-[1.5px] bg-[#c9ab7d]/40" />

        </div>
        */}

        {/* Main Content */}

        <div className="mx-auto w-full">
          <AboutContent />
        </div>
      </div>
    </section>
  );
}