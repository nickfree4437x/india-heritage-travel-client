"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2.5 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural Significance of Khejarla
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Khejarla is more than a fort and a nearby settlement. It still feels like Rajput heritage that 
            has not moved far from its starting point. The fort has been there for about four hundred 
            years, watching the changes of Marwar. The village around it has kept customs that link back 
            to the same estate.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          Close to the walls, you can find the old Durga temple. It is still used today. People keep 
          worship there, and local accounts say some idols and artefacts are several hundred years old. 
          Just past the village, the land turns into Bishnoi country. In this area, the Bishnoi way of 
          life centers on care for trees and animals. That long habit is part of why blackbuck and 
          chinkara are seen in the open near Khejarla, without much disturbance.  
        </p>
      </div>
    </section>
  );
}