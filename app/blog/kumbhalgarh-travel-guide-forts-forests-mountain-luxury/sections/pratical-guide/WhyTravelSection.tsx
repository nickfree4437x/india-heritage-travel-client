"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-3">
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
            Kumbhalgarh deserves more than a rushed day trip - it's for travellers willing to go beyond 
            the usual routes. India Heritage Travel plans it with a private driver from Udaipur, curated 
            heritage or boutique stays near the sanctuary, and local guides who bring the fort's 500-year 
            history to life. For solo women travellers, every stay and guide is vetted for safety, with 
            support extending from airport pickup to private sunset dining by the fort walls.
          </p>
        </div>
      </div>
    </section>
  );
}