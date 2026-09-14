"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
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
             Mandu Ind Monuments are on the NESCO Tentative World Heritage List since 1998 because of 
             their exceptional architecture and well-preserved town planning that has been recognized 
             by the Archaeological Survey of India. In addition to their status as monuments, the Ind 
             Monuments of Mandu hold great cultural importance in the realm of poetry and folk tales, 
             such as the story of Baz Bahadur and Roopmati.
          </p>
        </div>
      </div>
    </section>
  );
}