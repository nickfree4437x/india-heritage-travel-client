"use client";

import Image from "next/image";
import HighlightsInclusions from "../hightlights/HighlightsInclusions";
import Itinerary from "../itinerary/Itinerary";
import ExcludedServices from "@/app/tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";

export default function TourDetails() {
  const cities = [
    {
      id: "srinagar",
      title: "Srinagar - Heaven On Earth",
      desc: "Famous as the summer capital of Jammu & Kashmir, Srinagar lies in the Kashmir Valley & on the banks of Jhelum River which is a tributary of Indus River. It has lush green gardens, lakes & houseboats which makes it more beautiful.  It has amazing Kashmiri handicrafts & famous dried fruits.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779541846/srinagar_ihyux4.jpg",
      alt: "Srinagar Kashmir featuring Dal Lake houseboats Mughal gardens and scenic mountain views",
    },
    {
      id: "gulmarg",
      title: "Gulmarg - Meadow Of Flowers",
      desc: "Gulmarg is a picturesque town in Jammu & Kashmir which is famous for its natural beauty & one spot destination for winters. It is often known as “Meadow of flowers” because of its vibrant summer meadows. It is Asia’s top skiing destination which offers pristine slope & also one of the highest cable cars in the world Gulmarg Gondola. It also has highest green golf course in the world which transforms it into golfing paradise.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779541884/gulmarg_oe2swx.jpg",
      alt: "Gulmarg Kashmir with snow-covered mountains gondola rides and alpine meadows",
    },
    {
      id: "pahalgam",
      title: "Pahalgam - The Valley Of Shepherds",
      desc: "Pahalgam, also known as ‘The Valley of Shephards’ is a popular hill station. This town is situated on the banks of Lidder River at an altitude of 7,200 ft. Phalgam is a beautiful valley which is located at the streams flowing from Sheshnag Lake & the Lidder River. The area of Pahalgam is surrounded by thick wooded pine forests, snow-clad-Himalayan Mountains & amazing vistas of meadows.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779541920/pahalgam_uwgrf7.jpg",
      alt: "Pahalgam Kashmir featuring Lidder Valley pine forests and breathtaking Himalayan landscapes",
    },
  ];

  return (
    <div className="space-y-12">

      <div className="max-w-5xl mx-auto">
        <h2
          className="
            text-[16px] sm:text-[20px] md:text-[24px]
            font-semibold
            text-center
            mb-4
            text-[#2c2c2c]
            tracking-wide
          "
        >
          Why Choose This Kashmir Tour Package
        </h2>
        <div className="text-gray-700 text-[12px] md:text-[13px] font-[300] leading-relaxed text-justify space-y-4">
          <p>
            Discover the breathtaking beauty of Kashmir through a thoughtfully designed Kashmir Tour Package 
            that takes you to some of the region’s most iconic destinations. From the tranquil waters of Dal 
            Lake in Srinagar to the snow-covered landscapes of Gulmarg and the scenic valleys of Pahalgam, 
            every destination offers a unique blend of natural beauty, culture, and unforgettable experiences.
          </p>
          <p>
            Experience charming houseboats, lush meadows, pine forests, traditional Kashmiri culture, and 
            spectacular Himalayan views throughout your journey. This tour allows you to explore the very 
            best of Kashmir while enjoying its rich heritage, warm hospitality, and world-famous landscapes.
          </p>
          <p>
            Whether you are seeking a peaceful mountain retreat, a romantic getaway, a family holiday, or an 
            immersive cultural experience, this Kashmir Tour Package provides the perfect balance of relaxation, 
            sightseeing, and authentic local experiences in one of India’s most beautiful destinations.
          </p>
        </div>
      </div>

      {cities.map((city) => (
        <div
          key={city.id}
          id={city.id}
          className="w-full scroll-mt-24 md:scroll-mt-28"
        >

          {/* TITLE */}
          <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            {city.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] font-[300] md:text-[14px] text-justify">
            {city.desc}
          </p>

          {/* IMAGE */}
          <div className="relative w-full rounded-md overflow-hidden shadow-md -mb-6 md:mb-0">
            <Image
              src={city.img}
              alt={city.alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        </div>
      ))}

      {/* EXTRA SECTIONS */}
      <HighlightsInclusions />
      <Itinerary />
      <div className="space-y-6">
        <ExcludedServices/>
        <DetailedItineraryIntro/>
      </div>
    </div>
  );
}