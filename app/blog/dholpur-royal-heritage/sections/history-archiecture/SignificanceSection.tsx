"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural Significance
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Dholpur lies at the intersection of Rajasthan, Braj, and the Chambal valley - a region 
            shaped by its princely Jat origins, ancient Mughal sites, and temples that remain active 
            today. Teej, Holi, and Diwali are celebrated with particular fervour.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-1">
            Folk songs and riverside occupations remain central to rural life here. When visiting, be respectful and always ask permission before taking photographs.
          </p>
        </div>
      </div>
    </section>
  );
}