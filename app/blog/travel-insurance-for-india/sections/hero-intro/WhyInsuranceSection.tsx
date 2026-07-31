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
          Why You Need Travel Insurance for India
        </h2>

        {/* Content */}
        <div className="space-y-2 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            India’s healthcare scene is kinda a real strong point for the country - private hospitals are 
            among the most respected in Asia, and international patients often travel here just for care, 
            more or less on purpose. Still, that level of quality comes with a private-sector price tag, 
            and your home health insurance almost certainly stops working the moment you step outside your 
            home country.
          </p>
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            None of these events are apt to happen on one single trip, but, India’s scale sort of makes it 
            easy for an itinerary to shuffle around, like from a five-star heritage haveli, to some mountain 
            homestay, and then a jungle lodge within the same week. And each place has its own different kind 
            of risk profile. Insurance is the thing that lets you go between them, more or less without a 
            second thought.
          </p>
        </div>
      </div>
    </section>
  );
}