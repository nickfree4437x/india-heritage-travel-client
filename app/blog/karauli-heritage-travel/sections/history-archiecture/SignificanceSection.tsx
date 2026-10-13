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
            Karauli lies in a region rich in cultural significance - the birthplace of Lord Krishna - so 
            its people venerate Krishna with deep devotion. The idol of Madan Mohan links the town to 
            Vrindavan, while Kaila Devi connects it to the goddess tradition.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-1">
            Festivals shape Karauli's year: Holi and Janmashtami at the temples, the Chaitra festival at 
            Kaila Devi, the February cattle fair at Mela Gate, and Maha Shivratri.
          </p>
        </div>
      </div>
    </section>
  );
}