"use client";

import Image from "next/image";
import HighlightsInclusions from "../Highlight/HighlightsInclusions";
import Itinerary from "../itinerary/Itinerary";
import WhyChooseSection from "@/src/tours/why-choose/WhyChooseSection";

export default function TourDetails() {
  const cities = [
    {
      id: "srinagar",
      title: "Srinagar - Heaven on Earth",
      desc: "Famous as the summer capital of Jammu & Kashmir, Srinagar lies in the Kashmir Valley on the banks of the Jhelum River, a tributary of the Indus River. Its lush green gardens, scenic lakes, and traditional houseboats make it one of the most beautiful destinations in Kashmir.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779540914/srinagar_zafajb.jpg",
      alt: "Srinagar Kashmir featuring Dal Lake houseboats Mughal gardens and scenic mountain views"
    },
    {
      id: "gulmarg",
      title: "Gulmarg - Meadow of Flowers",
      desc: "Gulmarg is a picturesque town in Jammu & Kashmir, famous for its natural beauty, winter activities, and vibrant summer meadows. Known as the 'Meadow of Flowers', it offers skiing, scenic mountain landscapes, and the famous Gulmarg Gondola. The destination is also home to one of the world's highest green golf courses.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779540951/gulmarg_w3f0qc.jpg",
      alt: "Gulmarg Kashmir with snow-covered mountains gondola rides and alpine meadows"
    },
    {
      id: "pahalgam",
      title: "Pahalgam - The Valley of Shepherds",
      desc: "Pahalgam, also known as the 'Valley of Shepherds', is a popular hill station in Kashmir. Situated along the Lidder River, it is surrounded by pine forests, snow-capped Himalayan mountains, scenic meadows, and beautiful valleys.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779540993/pahalgam_gjz3oe.jpg",
      alt: "Pahalgam Kashmir featuring Lidder Valley pine forests and Himalayan landscapes"
    },
    {
      id: "kargil",
      title: "Kargil - Himalayan Scenery & Cultural Heritage",
      desc: "Located near the Line of Control with Pakistan, Kargil is known for its strategic importance and its role in the 1999 Kargil War. Surrounded by picturesque mountains and valleys, it connects Srinagar and Leh and offers a rich blend of history, culture, and Himalayan landscapes.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779541031/kargil_ksszyf.jpg",
      alt: "Kargil Ladakh mountain landscapes historic valleys and Himalayan scenery"
    },
    {
      id: "leh",
      title: "Leh – Historic Town of Ladakh",
      desc: "Situated on an altitude of 3,500 meters (11,500 ft) above sea level, Leh is famous for its stunning landscapes, vibrant monasteries & rich cultural heritage. Leh is also a gateway to the breathtaking beauty of Himalayas which offers attraction such as Leh Palace, Leh market & Shanti Stupa. It is also a hub for adventure activities like river rafting , mountain biking & trekking.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779541070/leh_z68bqk.jpg",
      alt: "Leh Ladakh featuring Buddhist monasteries rugged mountains and high-altitude landscapes"
    },
    {
      id: "nubra",
      title: "Nubra Valley – High-Altitude Cold Desert",
      desc: "Nubra Valley is famous for its sand dunes, monasteries, scenic landscapes, and traditional villages. Accessible via the Khardung La region, the valley is known for its double-humped Bactrian camels and the dramatic landscapes around the Shyok and Nubra rivers.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779541110/nubra_pwgdy3.jpg",
      alt: "Nubra Valley Ladakh with sand dunes double-humped camels and mountain views"
    },
    {
      id: "pangong",
      title: "Pangong Lake – Blue Waters of Ladakh",
      desc: "Pangong Lake is a stunning high-altitude lake in Ladakh, famous for its mesmerizing blue waters and dramatic Himalayan surroundings. Its changing shades throughout the day and serene mountain setting make it one of the most memorable highlights of a Ladakh tour.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779541151/pangong_xocvmb.jpg",
      alt: "Pangong Lake Ladakh with crystal-clear blue waters and dramatic Himalayan mountains"
    },
  ];

  return (
    <div className="space-y-8 md:space-y-12">

      <WhyChooseSection/>

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
          <div className="relative w-full rounded-md overflow-hidden shadow-md -mb-2 md:mb-0">
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

    </div>
  );
}