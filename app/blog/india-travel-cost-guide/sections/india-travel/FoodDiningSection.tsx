"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Food & Dining Costs
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            India’s food spend for tourists stays surprisingly low even while other prices creep up. You can 
            grab street snacks and quick local meals for about $1–3 per dish, and then if you go for a full 
            vegetarian or non-vegetarian thali in a mid-range restaurant it’s roughly $4–8. A sit down dinner 
            for two at a solid multi-cuisine spot usually lands around $15–30, while a tasting style menu at a 
            five star hotel restaurant can hit $40–90 per person. Bottled water and soft drinks tack on about 
            $0.50–1.50 per bottle too. So, a sensible everyday food budget often looks like $8–15 for budget 
            tourists, $20–35 for mid range comfort, and $60–120+ if someone is focused on fine dining plus 
            hotel restaurants.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786423284/abhishek-sanwa-limbu-5Q-7kgG7xbo-unsplash_tkccnp.jpg"
              alt="Food and dining costs in India - street food to fine dining price guide"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}