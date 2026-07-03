"use client";

import Link from "next/link";

export default function ReachSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight mb-2">
          How to Reach the Taj Mahal
        </h2>

        <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-4">
          As there are no direct flights from Agra airport and most people tour around Agra to see the
          Taj Mahal; here we will learn about different means of traveling from Delhi to Agra. The quickest
          railway option for reaching Agra from Delhi would be Gatimaan Express that reaches Agra from
          Delhi within a period of two hours covering a distance of around 200 kilometers. There are also
          some other trains available to travel from Delhi to Agra but they take a relatively longer time
          to reach. On the contrary, if you decide to travel by road then Yamuna Expressway would take
          3-4 hours to cover the distance.
        </p>

        <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-10">
          Since Agra lies at the same distance from Delhi as well as from Jaipur, Agra becomes an
          integral part of tourism in the case of India's Golden Triangle Route. In case you plan to
          visit both Taj Mahal and Rajasthan in one go then check out{" "}
          <Link
            href="/blog/golden-triangle-tour-india-guide"
            className="font-[400] hover:underline text-[#8b6a3d]"
          >
            Golden Triangle Tour Guide
          </Link>
        </p>
      </div>
    </section>
  );
}