"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Why Choose India Heritage Travel
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
           Orchha rewards travellers who see it properly - on foot, at sunrise, with someone who knows 
           where to stand when light hits the domes. That's what India Heritage Travel is built for. We 
           offer private chauffeur-conducted heritage tours across Madhya Pradesh, paced around light, 
           crowds and your comfort rather than a fixed group schedule. Itineraries are fully tailored - 
           Orchha, Khajuraho, Gwalior and beyond - with curated luxury and heritage boutique stays, fort-
           facing or riverside. Our expert local guides share insider stories no guidebook can, with 
           exclusive arrangements for women travellers. All-inclusive service from start to finish - the 
           only choice left is which palace to photograph first.
          </p>
        </div>
      </div>
    </section>
  );
}