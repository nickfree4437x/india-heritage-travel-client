"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-3 sm:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Why Women-Only Travel Is Booming in India
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784867838/rachita-saxena-YB7fl-OKxxY-unsplash_uxdgug.jpg"
              alt="Women-only travel booming in India - female travelers with women guides exploring heritage"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
             Women-only trips have sorta moved from a niche idea into a well defined category in Indian 
             tourism, led by travelers across different age groups who are now picking companionship and 
             shared expectations rather than going fully solo on their own, or else, accepting some 
             mixed-group compromise. A bit of the momentum also comes from a wider shift, like women 
             are treating travel as a kind of agency and self-directed time, not just an extension of 
             family duty or couple travel. And yes, heritage heavy itineraries , they really pull in the 
             culturally curious crowd-especially folks in their thirties through sixties, who seem to want 
             meaning not just movement.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            The format also kind of solves a very practical concern for international visitors. Metro systems 
            in cities like Delhi run women-only train carriages, and at the same time many heritage hotels 
            now train staff specifically to host all female groups, social enterprises- like women-run rickshaw 
            collectives in Jaipur- have created whole new, safer ways to experience the old cities. A well 
            designed women-only heritage tour braids these resources together instead of letting a traveler 
            end up discovering everything solo, or without help.
          </p>
        </div>
      </div>
    </section>
  );
}