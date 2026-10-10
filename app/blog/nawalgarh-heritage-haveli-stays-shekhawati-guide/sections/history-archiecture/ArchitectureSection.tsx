"use client";
import Image from "next/image";


export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-0 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           Architecture and Artistic Legacy
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           What distinguishes Nawalgarh from other fortified cities of Rajasthan is the compactness and 
           creativity of its domestic architecture. The haveli was created as a closed world for the 
           extended family – typically a group of brothers with their own families – with the help of 
           one or more courtyards, which divided the spaces of privacy and public, of men and women, and 
           of everyday life and festivity.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789031407/360_F_190348700_6XXv727f7M5wCVvf1DeaIUtPi6ckz3Hw_n2y4sv.jpg"
              alt="Nawalgarh architecture and artistic legacy - painted havelis and frescoes"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via t4.ftcdn.net
          </p>
        </div>

          {/* Heading */}
          <div className="mb-1">
            <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
              The Fresco Tradition: A Desert Canvas
            </h2>
          </div>
  
          {/* Content */}
          <div className="max-w-6xl">
            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
              The most characteristic element of Shekhawati frescoes lies in the technique of creating 
              frescoes with the help of the true fresco and fresco-secco processes wherein local craftsmen 
              called chiteras applied the pigments of natural origin onto wet or semi-wet lime plaster. In 
              that way, the color was embedded in the walls. That is why such many paintings have been 
              preserved for over one hundred years despite the harsh desert climate. The topics of these 
              paintings include the Ramayana, life of Krishna, hunting scenes, procession of royalty as well 
              as the most unusual topic – the pictures of steam trains, ocean liners, hot air balloons, 
              gramophones and men wearing top hats – created by artists, who had never even seen those 
              objects in reality but had some description of them or printed picture.
            </p>
          </div>

          {/* Heading */}
          <div className="mb-1">
            <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
              Haveli Layout and Design Elements
            </h2>
          </div>
  
          {/* Content */}
          <div className="max-w-6xl">
            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              The family used the entrance gateways (deodhis) as their main decorative area to display 
              their financial status through elaborate architectural designs. The courtyard area known 
              as chowks created a barrier which separated the reception space from the family privacy 
              areas. The house received wooden door and window jharokhas which served two purposes by 
              bringing in sunlight and fresh air while maintaining female privacy within the home. The 
              ceiling artwork included painted surfaces and dome structures which featured aerial views 
              of nearby cities including Jaipur. The vocabulary contained mixed elements which combined 
              courtly Rajput architectural features with Mughal decorative elements and colonial European 
              design elements from later times.
            </p>
          </div>
        </div>
    </section>
  );
}