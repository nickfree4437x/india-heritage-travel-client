"use client";

import Image from "next/image";
import HighlightsInclusions from "../Highlight/HighlightsInclusions";
import Itinerary from "../itinerary/Itinerary";
import WhyChooseSection from "@/src/tours/why-choose/WhyChooseSection";

export default function TourDetails() {
  const cities = [
    {
      id: "srinagar",
      title: "Srinagar - Heaven On Earth",
      desc: "Famous as the summer capital of Jammu & Kashmir, Srinagar lies in the Kashmir Valley & on the banks of Jhelum River which is a tributary of Indus River. It has lush green gardens, lakes & houseboats which makes it more beautiful.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779540914/srinagar_zafajb.jpg",
      alt: "Srinagar Kashmir featuring Dal Lake houseboats Mughal gardens and scenic mountain views"
    },
    {
      id: "gulmarg",
      title: "Gulmarg - Meadow Of Flowers",
      desc: "Gulmarg is a picturesque town in Jammu & Kashmir which is famous for its natural beauty & one spot destination for winters. It is often known as “Meadow of flowers” because of its vibrant summer meadows. It is Asia’s top skiing destination which offers pristine slope & also one of the highest cable cars in the world Gulmarg Gondola. It also has highest green golf course in the world which transforms it into golfing paradise.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779540951/gulmarg_w3f0qc.jpg",
      alt: "Gulmarg Kashmir with snow-covered mountains gondola rides and alpine meadows"
    },
    {
      id: "pahalgam",
      title: "Pahalgam - The Valley Of Shepherds",
      desc: "Pahalgam, also known as ‘The Valley of Shephards’ is a popular hill station. This town is situated on the banks of Lidder River at an altitude of 7,200 ft. Phalgam is a beautiful valley which is located at the streams flowing from Sheshnag Lake & the Lidder River. The area of Pahalgam is surrounded by thick wooded pine forests, snow-clad-Himalayan Mountains & amazing vistas of meadows.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779540993/pahalgam_gjz3oe.jpg",
      alt: "Pahalgam Kashmir featuring Lidder Valley pine forests and Himalayan landscapes"
    },
    {
      id: "kargil",
      title: "Kargil - Strategic Importance With Scenic Beauty",
      desc: "It is located near the Line of Control with Pakistan. It is famous for its strategic importance & site of 1999 Kargil war. It is also surrounded by picturesque mountains & valleys. It connects Leh & Srinagar & has a rich cultural heritage & history with adventure & trekking activities.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779541031/kargil_ksszyf.jpg",
      alt: "Kargil Ladakh mountain landscapes historic valleys and Himalayan scenery"
    },
    {
      id: "leh",
      title: "Leh - A Historic Town",
      desc: "Situated on an altitude of 3,500 meters (11,500 ft) above sea level, Leh is famous for its stunning landscapes, vibrant monasteries & rich cultural heritage. Leh is also a gateway to the breathtaking beauty of Himalayas which offers attraction such as Leh Palace, Leh market & Shanti Stupa. It is also a hub for adventure activities like river rafting , mountain biking & trekking.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779541070/leh_z68bqk.jpg",
      alt: "Leh Ladakh featuring Buddhist monasteries rugged mountains and high-altitude landscapes"
    },
    {
      id: "nubra",
      title: "Nubra Valley - A Cold Desert In High Altitude",
      desc: "Nubra valley is famous for its sand dunes, vibrant monasteries & stunning landscapes. It is located 10,000ft above sea level & is accessible via the Khardung La Pass which is one of the highest motorable roads in the world. This valley is famous for its double-humped Bacrian camels, confluence of the Shyok & picturesque village & Nubra rivers.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779541110/nubra_pwgdy3.jpg",
      alt: "Nubra Valley Ladakh with sand dunes double-humped camels and mountain views"
    },
    {
      id: "pangong",
      title: "Pangong Lake - Blue Water Lake",
      desc: "Pangong Lake is a stunning high-altitude lake in Ladakh. It is stretched over 134 kilometers & extends from India to Tibet. It is famous for its mesmerizing blue waters that change shades throughout the day. It has breathtaking scenaries & serene atmosphere.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779541151/pangong_xocvmb.jpg",
      alt: "Pangong Lake Ladakh with crystal-clear blue waters and dramatic Himalayan mountains"
    },
  ];

  return (
    <div className="space-y-12">

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

    </div>
  );
}