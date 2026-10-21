"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural Significance
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-1">
            The city of Murshidabad was the meeting point of Mughal administration, Bengali culture, Jain 
            business, and European commerce. The celebration of Muharram lends vitality to the Imambara, 
            Bengali festivals like Durga Puja dictate the time schedule, and farming centered on the production 
            of silk and mangoes forms the backbone of the village’s economic activities. For visitors, it is the 
            chance to explore Bengal outside of Kolkata.
          </p>
        </div>
      </div>
    </section>
  );
}