"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 sm:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Best Cultural and Heritage Experiences
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784448388/prashant-wvOt02mraNQ-unsplash_vm90vi.jpg"
              alt="Humayun's Tomb cultural experiences - heritage walk with guide and photography"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Watch the sunrise as light slowly slides across the tomb's red sandstone from the Charbagh's 
            central water channel. Take a guided walk linking Humayun's Tomb to the Taj Mahal, tracing the 
            evolution of Mughal garden-tomb design over eight decades. End your evening with centuries-old 
            qawwali at the nearby Nizamuddin Dargah, then take a quiet stroll through the adjoining Sunder 
            Nursery gardens - a perfect blend of architecture, landscape, and living tradition.
          </p>
        </div>
      </div>
    </section>
  );
}