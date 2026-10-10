"use client";
import Image from "next/image";


export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           Haveli Architecture and the Art of the Fresco
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           The havelis have a courtyard surrounded by various winged rooms, with tall wooden doors decorated 
           with iron nails and jaali, which is carved wood or stone latticework. Not only was this a method 
           of providing ventilation, but also enabled the women of the household to observe life outside 
           without being seen by anyone else. This is a common form of architecture found in Mandawa’s 
           havelis; what sets them apart is their fresco painting.
          </p>
        </div>

        {/* Image */}
        <div className="mb-1">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788954498/vikram-chouhan-udaipur-web-designer-N-3yaHfspfo-unsplash_kq76qe.jpg"
              alt="Mandawa haveli architecture - fresco art and painted walls in Shekhawati"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>

       <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
        The paintings were done on damp lime plaster, using natural pigments which would combine with the 
        wall during the process of drying. Those done before the 1818 treaty between Jaipur and the British 
        were fairly simple designs, either floral patterns or arched designs. In the period after 1830, 
        when the merchants became wealthy, the paintings became more elaborate – decorating the courtyards 
        and façades with subjects derived from Hindu mythology, princes and huntsmen, and even having 
        European influences – steam trains, hot air balloons, gramophones and portraits of British 
        officials according to verbal descriptions. Notice the trompe l’oeil – painted windows, shadows and 
        architectural designs in three-dimensional perspective.
       </p>
      </div>
    </section>
  );
}