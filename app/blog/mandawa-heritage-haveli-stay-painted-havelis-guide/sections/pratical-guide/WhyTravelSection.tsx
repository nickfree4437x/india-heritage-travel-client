"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:mt-0 -mt-2 md:py-1">
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
           Booking a Mandawa haveli stay on your own often means navigating unauthorised guides and restricted 
           access. India Heritage Travel simplifies it with private transfers between Jaipur, Delhi, and 
           Shekhawati; tailored itineraries across Mandawa, Nawalgarh, Fatehpur, and Dundlod; handpicked heritage 
           havelis; skilled local guides; women-safe travel planning; and seamless end-to-end luxury service.
          </p>
        </div>
      </div>
    </section>
  );
}