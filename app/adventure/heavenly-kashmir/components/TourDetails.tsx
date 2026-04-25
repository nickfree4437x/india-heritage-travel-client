"use client";

import Image from "next/image";
import HighlightsInclusions from "./HighlightsInclusions";
import Itinerary from "./Itinerary";
import ExcludedServices from "@/app/destinations/majestic-golden-triangle-tour/components/ExcludedServices";

export default function TourDetails() {
  const cities = [
    {
      id: "srinagar",
      title: "Srinagar - Heaven On Earth",
      desc: "Famous as the summer capital of Jammu & Kashmir, Srinagar lies in the Kashmir Valley & on the banks of Jhelum River which is a tributary of Indus River. It has lush green gardens, lakes & houseboats which makes it more beautiful.  It has amazing Kashmiri handicrafts & famous dried fruits.",
      img: "/adventure/heaven-kashmir/srinagar.jpg",
    },
    {
      id: "gulmarg",
      title: "Gulmarg - Meadow Of Flowers",
      desc: "Gulmarg is a picturesque town in Jammu & Kashmir which is famous for its natural beauty & one spot destination for winters. It is often known as “Meadow of flowers” because of its vibrant summer meadows. It is Asia’s top skiing destination which offers pristine slope & also one of the highest cable cars in the world Gulmarg Gondola. It also has highest green golf course in the world which transforms it into golfing paradise.",
      img: "/adventure/heaven-kashmir/gulmarg.jpg",
    },
    {
      id: "pahalgam",
      title: "Pahalgam - The Valley Of Shepherds",
      desc: "Pahalgam, also known as ‘The Valley of Shephards’ is a popular hill station. This town is situated on the banks of Lidder River at an altitude of 7,200 ft. Phalgam is a beautiful valley which is located at the streams flowing from Sheshnag Lake & the Lidder River. The area of Pahalgam is surrounded by thick wooded pine forests, snow-clad-Himalayan Mountains & amazing vistas of meadows.",
      img: "/adventure/heaven-kashmir/pahalgam.jpg",
    },
  ];

  return (
    <div className="space-y-20">

      {cities.map((city) => (
        <div
          key={city.id}
          id={city.id}
          className="w-full scroll-mt-28"
        >

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#2c2c2c]">
            {city.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-700 mb-8 leading-relaxed text-[15px] text-justify">
            {city.desc}
          </p>

          {/* IMAGE */}
          <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md group">
            <Image
              src={city.img}
              alt={city.title}
              fill
              className="object-cover transition-transform duration-700"
            />
          </div>

        </div>
      ))}

      {/* EXTRA SECTIONS */}
      <HighlightsInclusions />
      <Itinerary />
      <ExcludedServices/>

    </div>
  );
}