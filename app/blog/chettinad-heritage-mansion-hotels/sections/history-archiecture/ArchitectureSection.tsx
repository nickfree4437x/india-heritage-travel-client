"use client";
import Image from "next/image";


export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-2 md:py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           Chettinad Architecture Decoded
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           The key to the photographed Chettinad architecture is its combination. Expert masons with 
           knowledge of temple architecture used Tamil spatial arrangement, which is a progression of 
           courtyards from public to private, while the patrons sourced their decorative elements from 
           all the ports that their ships visited.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789119538/images_auguqg.jpg"
              alt="Chettinad architecture decoded - mansion design with courtyards and Athangudi tiles"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via elledecor.in
          </p>
        </div>

          {/* Heading */}
          <div className="mb-1">
            <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
              Athangudi Tiles
            </h2>
          </div>
  
          {/* Content */}
          <div className="max-w-6xl">
            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
              Called Athangudi tiles because of the place where they are still manufactured by hand, these tiles are made using cement and poured manually on top of glass molds, resulting in an irregular but beautifully designed floor that no other factory tile can replicate. Some workshops in Athangudi even manufacture these tiles the same way they did a hundred years ago.
            </p>
          </div>

          {/* Heading */}
          <div className="mb-1">
            <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
              Burma Teak and European Materials
            </h2>
          </div>
  
          {/* Content */}
          <div className="max-w-6xl">
            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              The ceiling beams and pillars were often crafted out of teak obtained from Burma, and floated down the Irrawaddy River and across the Bay of Bengal. The interiors consisted of stained glass from Belgium, marble from Italy, iron from England, and Japanese tiles – all encircling the uniquely Tamil courtyard interior.
            </p>
          </div>
        </div>
    </section>
  );
}