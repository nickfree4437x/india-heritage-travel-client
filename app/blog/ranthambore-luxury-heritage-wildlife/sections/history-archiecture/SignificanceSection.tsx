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
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-1">
            The location of Ranthambore National Park has its roots in history, devotion, and conservation. 
            Pilgrims from different parts of India visit Trinetra Ganesh and invitation cards are also sent 
            to Ganesh for his marriage from distant lands. The villages surrounding the park have co-existed 
            with the forest since centuries past and locals also act as guides, drivers and hotel attendants. 
            It offers a wonderful opportunity to understand coexistence of heritage and conservation.
          </p>
        </div>
      </div>
    </section>
  );
}