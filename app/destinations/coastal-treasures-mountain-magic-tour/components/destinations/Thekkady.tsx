"use client";

import Image from "next/image";

export default function Thekkady() {
  return (
    <div id="thekkady" className="max-w-5xl">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Thekkady – Where Nature Rules
      </h2>

      {/* Description */}
      <div className="text-gray-700 mb-6 leading-relaxed text-[15px] space-y-4 text-justify">

        <p>
          Located in the Idukki district of Kerela, Thekkady is a beautiful hill station adorned with lush greenery, amazing landscapes & diverse wildlife. Here is the{" "}
          <span className="font-semibold text-black">
            famous Periyar National Park
          </span>, 
           which is a sanctuary that has variety of animals which are even exotic in their natural habitat. The beautiful Periyar lake which is located within the park have the facilities of boat cruises which offers travellers unique experience to watch wildlife along the water edges.
        </p>

        <p>
          The spice plantation of Thekkady is another famous spot where one can explore & learn more about cultivation of spices such as pepper, vanilla & cardamom. Along with these it has variety of outdoor activity too like trekking, nature walks, bamboo rafting. Thekaddy is a heaven for adventure enthusiast as well as nature lover.
        </p>

      </div>

      {/* Image */}
      <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/coastal-tour/thekkady.jpg"
          alt="Thekkady Periyar Lake"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}