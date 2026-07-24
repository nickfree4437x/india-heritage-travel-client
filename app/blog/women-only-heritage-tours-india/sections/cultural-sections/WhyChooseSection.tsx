"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Why Choose India Heritage Travel
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Every women-only itinerary from India Heritage Travel, is built around the little details that 
            make or break a first trip to India: you get a private chauffeur assigned for your entire journey, 
            and yes it stays that way the whole time, not just for a day or two. The plan itself is customized 
            around your pace and interests, rather than following some fixed template. You’ll also find curated 
            stays in genuine heritage palaces and havelis, the kind that feel lived-in, not staged. Plus expert 
            local guides , many of them women, show up at every major site so you’re never left figuring things 
            out on your own.
          </p>
        </div>
      </div>
    </section>
  );
}