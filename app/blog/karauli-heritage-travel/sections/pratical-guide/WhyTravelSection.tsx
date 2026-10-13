"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2.5 md:py-4">
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
           Karauli rewards careful planning, as access, timings, and facilities vary - which is where 
           India Heritage Travel steps in. We arrange chauffeur-guided tours for rural routes, customised 
           itineraries linking Karauli with Jaipur, Ranthambore, or Agra, personally inspected heritage 
           stays, local guides versed in palace and temple history, women-safe travel with vetted drivers 
           and accommodations, and first-class assistance from start to finish.
          </p>
        </div>
      </div>
    </section>
  );
}