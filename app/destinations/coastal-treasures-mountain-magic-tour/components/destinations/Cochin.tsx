"use client";

import Image from "next/image";

export default function Cochin() {
  return (
    <div id="cochin" className="max-w-5xl">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Cochin – Where Commerce And History Meets
      </h2>

      {/* Description */}
      <div className="text-gray-700 mb-6 leading-relaxed text-[15px] space-y-4 text-justify">

        <p>
          Cochin, is former name of Kochi, popularly known as the Queen of the Arabian Sea, is a busy commercial hub rich in spice trading. It is the centre of world spice trade for many centuries. It is emerging cosmopolitan city with busy life on streets, on the other hand it is also financial , commercial & industrial capital of Kerela. Its great to see that Kochi is the only city ot have underwater metro system which is world’s largest electric boat metro transportation infrastructure.
        </p>

        <p>
          While you travel to{" "}
          <span className="font-semibold text-black">
            Fort Kochi
          </span>, 
          you’ll feel a different time period. The fort is settled into history & culture through ages. Kochi is a place with beautiful monuments & variety of linguistic & ethenic community such as Arabian, Dutch, Phoenician, Portuguese, Chinese, and British influences.
        </p>

      </div>

      {/* Image */}
      <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/coastal-tour/cochin.jpg"
          alt="Cochin Backwaters"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}