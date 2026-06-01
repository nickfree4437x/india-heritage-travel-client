// app/blogs/safe-luxury-destinations/components/DestinationsSection.tsx

"use client";

import Image from "next/image";

export default function DestinationsSection() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-12">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* UDAIPUR */}
        <div className="max-w-5xl">

          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            Udaipur, Rajasthan
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Udaipur is surprisingly peaceful in a way that
            surprises many of its first-time visitors.
            The lakes soften the city and the traffic is
            slower than in larger capitals. The tourism is
            well managed, too, which increases the sense
            of order.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Luxury stay can be at Taj Lake Palace or
            Oberoi Udaivilas. Evening boat ride on Lake
            Pichola is calm and lazy. Dining by the water,
            with the palaces’ lights reflected in the lake,
            feels safe and unpressured.
          </p>
        </div>

        {/* JAIPUR SECTION */}
        <div className="mt-8 sm:mt-10">

          {/* HEADING */}
          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            Jaipur, Rajasthan
          </h2>

          {/* CONTENT */}
          <div className="max-w-5xl">

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              Jaipur is vibrant but it’s also ordered.
              Sufficient sightseeing areas, trustworthy
              guides and a constant stream of tourists
              will make you feel safe. This is a city
              that is very well-versed in hospitality.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              Some luxurious places to stay are Rambagh
              Palace and Samode Haveli. Explore the culture
              without getting lost with a guided tour
              through Amber Fort and craft markets.
              It is a reason why Jaipur feature early in
              many{" "}
              <span className="font-semibold">
                India tour packages
              </span>.
            </p>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative

              mt-10
              sm:mt-12

              w-full

              h-[280px]
              sm:h-[420px]
              lg:h-[680px]

              rounded-sm

              overflow-hidden
            "
          >

            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779637787/jaipur_yiv98y.webp"
              alt="Historic landmarks and vibrant cityscape of Jaipur Rajasthan India"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}