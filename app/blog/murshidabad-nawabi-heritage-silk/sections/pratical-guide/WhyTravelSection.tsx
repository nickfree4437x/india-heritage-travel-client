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
          Why Choose India Heritage Travel
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
           Murshidabad rewards careful planning, since facilities are limited and opening rules vary - 
           and India Heritage Travel builds journeys around that reality. We arrange chauffeur-driven 
           tours through long stretches of Bengal, tailored itineraries blending history, silk, and 
           rivers at your own pace, well-screened comfortable stays with honest advice on limited luxury 
           options, historian guides who explain the Nawabs, Plassey, and the architecture, women-safe 
           drivers and stays for solo and all-woman groups, and top-class assistance from enquiry to 
           departure, including visits to the looms.
          </p>
        </div>
      </div>
    </section>
  );
}