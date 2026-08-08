"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Luxury vs Budget Travel: Which Style Fits You
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Budget travel in India is honestly workable and quite popular with younger, adaptable travelers, 
            who can handle the logistics on their own without much fuss. On the other hand, luxury travel- a 
            private chauffeur, heritage stays that feel carefully selected, expert guides, all that-demand a 
            much higher daily budget, but it buys comfort, a safer rhythm, and some “access” that group itineraries 
            and independent, lower-cost routes can not really offer, like private palace hours, temple visits 
            during quiet off times, and even personal historians for context. Most first-time visitors, honeymooners, 
            and family groups seem to land best in the mid-range to luxury bracket, since it gives the best balance 
            between day-to-day ease and something genuinely authentic.
          </p>
        </div>
      </div>
    </section>
  );
}