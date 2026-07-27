"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          What Makes a Destination Great for Women Travellers
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            Before ranking places, it helps to say what actually makes a destination work for women travellers 
            - it's not just the absence of danger. The best spots share a few traits: established tourism 
            infrastructure, checked transport, accessible tourist police, a history of hosting solo and women's 
            groups, walkable town centres that stay lively after dark, and a good spread of stays - from 
            boutique heritage properties to five-star resorts.
          </p>
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            New 2026 travel data points to Assam, Goa, Uttarakhand, Karnataka, and Kerala as regions that 
            stand out on these measures. Not far behind are the long-running favourites - Rajasthan and the 
            Golden Triangle. It's interesting how those regions keep showing up.
          </p>
        </div>
      </div>
    </section>
  );
}