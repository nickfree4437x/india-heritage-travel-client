"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Rohet Travel Guide: Palace Life & Authentic Village Experiences
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Most travellers see Rajasthan's forts and palaces from behind a velvet rope. Rohet is different. 
            This Rohet travel guide is built around a small desert-lake village roughly 45 to 75 minutes 
            south of Jodhpur, where a nearly four-hundred-year-old fort called Rohet Garh still functions 
            as a family home, and where the neighbouring Bishnoi villages welcome guests the way they always 
            have - with tea, quiet conversation, and a landscape that hasn't been dressed up for anyone. If 
            you want Rajasthan without the tour-bus choreography, Rohet is where to find it.
          </p>
        </div>
      </div>
    </section>
  );
}