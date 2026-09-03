"use client";

import Image from "next/image";

export default function Thekkady() {
  return (
    <div id="thekkady" className="w-full max-w-5xl mx-auto scroll-mt-24 md:scroll-mt-28">

      {/* Heading */}
      <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold sm:mb-3 mb-4">
        Thekkady – Where Nature Rules
      </h3>

      {/* Description */}
      <div className="text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed font-[300] text-[12px] sm:text-[13px] md:text-[14px] text-justify space-y-3 sm:space-y-4">
        <p>
          Located in the Idukki district of Kerela, Thekkady is a beautiful hill station adorned with lush greenery, amazing landscapes & diverse wildlife. Here is the <span className="font-medium">famous Periyar National Park</span>, which is a sanctuary that has variety of animals which are even exotic in their natural habitat. The beautiful Periyar lake which is located within the park have the facilities of boat cruises which offers travellers unique experience to watch wildlife along the water edges.
        </p>

        <p>
          The spice plantation of Thekkady is another famous spot where one can explore & learn more about cultivation of spices such as pepper, vanilla & cardamom. Along with these it has variety of outdoor activity too like trekking, nature walks, bamboo rafting. Thekkady is a heaven for adventure enthusiast as well as nature lover.
        </p>
      </div>

      {/* Image */}
      <div className="w-full rounded-md overflow-hidden shadow-md -mb-2 md:mb-0">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779529388/thekkady_u69qcl.jpg"
          alt="Thekkady Kerala featuring Periyar Lake wildlife sanctuary and lush green landscapes"
          width={1200}
          height={800}
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>

    </div>
  );
}