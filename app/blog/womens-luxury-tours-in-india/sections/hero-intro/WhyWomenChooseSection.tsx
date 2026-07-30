"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Why Women Are Choosing Luxury Tours in India Right Now
        </h2>

        {/* Content */}
        <div className="space-y-2 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            The shift is measurable, not anecdotal. Women-only departures, solo female itineraries, and 
            mother-daughter or friend group private tours have grown steadily over the past two travel 
            seasons - with India sitting near the top of the wish list alongside Morocco, Jordan, and 
            Japan. Some of this is cultural: women want to reset and reconnect at their own pace, instead 
            of bending a trip around someone else's itinerary. Some of it is practical: India's luxury 
            travel backbone - heritage palace hotels, private guiding networks, and dedicated women's 
            travel desks - has matured significantly.
          </p>
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            The draw for India Heritage Travel's guests is rarely only the monuments. It's the mix of exceptional 
            architecture, living culture, and the quiet reassurance that the entire trip is designed end-to-end 
            around comfort and safety.
          </p>
        </div>
      </div>
    </section>
  );
}