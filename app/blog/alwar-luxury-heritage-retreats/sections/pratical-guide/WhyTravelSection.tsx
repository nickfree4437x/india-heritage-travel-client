"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2.5 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Why Choose India Heritage Travel
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
           Alwar rewards careful planning, since access, opening hours, and property quality all vary - 
           which is exactly where India Heritage Travel helps. We arrange private chauffeur tours from 
           Delhi or Jaipur, customised itineraries (heritage, wildlife, romantic, or photography-focused), 
           vetted luxury heritage stays, professional local storyteller guides, women-friendly travel with 
           safe transport and stays, and premium end-to-end service including safari bookings.
          </p>
        </div>
      </div>
    </section>
  );
}