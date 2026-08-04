"use client";

import {  Heart } from "lucide-react";

export default function WorkSection() {

  return (
    <section className="py-0 md:py-0 bg-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-[18px] sm:text-[20px] md:text-[26px] font-semibold tracking-wide text-[#8b6a3d] mb-2">
            How We Create Meaningful Journeys Across India 
            
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-2 md:space-y-3 text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            <p>
              Our team comprises individuals who were born in India and are well-versed in the intricacies 
              of history, art, architecture, philosophy, religion, and gastronomy, bringing their unique 
              backgrounds to enrich your trip and turn it into a truly personal adventure.
            </p>
            <p>
              We specialize in a variety of travel experiences, including trips for Friends & Family, Solo 
              female travellers, and those seeking an educational adventure, corporate getaways, Tailor-Made 
              Journeys. Additionally, we offer the convenience of renting a car with a personal driver, ensuring 
              safe and worry-free travel throughout India.
            </p>
            <p>
              Our team is a harmonious blend of multilingual tour guides, art historians, skilled drivers, and western 
              travel cultural curators. From the moment you contact us, our friendly, respectful, and supportive staff 
              is at your service, ensuring your every need is met. Hospitality and open heartedness define our 
              approach.
            </p>
            <p>
              supportive staff is at your service, ensuring your every need is met. Hospitality and open 
              heartedness define our approach.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center mt-6 md:mt-10">
          <p className="font-serif text-[#8b6a3d] text-xl md:text-2xl italic">
            "We're your gateway to an unforgettable Indian experience."
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="w-8 h-px bg-[#8b6a3d]/20" />
            <Heart className="w-4 h-4 text-[#8b6a3d]/30" />
            <span className="w-8 h-px bg-[#8b6a3d]/20" />
          </div>
        </div>

      </div>
    </section>
  );
}