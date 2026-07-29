"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-1 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Why Cultural Etiquette Matters for Women Travellers
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            India’s customs are not really uniform , like, a rule that works in a Kerala temple might not 
            work in a Delhi market, and manners that feel normal in a five-star hotel lobby can suddenly 
            feel strangely stiff in a rural village. What seems to stay the same, though , is the main 
            idea underneath it all: modesty, quiet respect in places that are sacred , and a kind warmth 
            in daily interactions. People read these things the same way in almost every part of the 
            country, even if the surface details shift. When you get that right, you usually do more for 
            how at ease you’re treated, than any one safety precaution ever could.
          </p>
        </div>
      </div>
    </section>
  );
}