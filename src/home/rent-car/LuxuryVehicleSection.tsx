"use client";

import Image from "next/image";

const vehicles = [
  {
    name: "Maruti Suzuki Dzire",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1780277635/download_sb7kbs.png",
    desc: "Travel comfortably across cities with this popular sedan, known for its smooth ride, spacious interiors, and reliability.",
    capacity: "3 + 1 Seater",
  },
  {
    name: "Hyundai Verna",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1780286231/verna-exterior-left-front-three-quarter_k47jxh.avif",
    desc: "A premium sedan built for smooth journeys, superior comfort, and stylish travel.",
    capacity: "3 + 1 Seater",
  },
  {
    name: "BMW 5 Series",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1780278386/bmw-5-series_m7pwjs.jpg",
    desc: "A premium sedan crafted for business travel, VIP transfers, and refined road journeys.",
    capacity: "4 + 1 Seater",
  },
  {
    name: "Toyota Camry",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1780279018/front-left-side-47_alh5ut.avif",
    desc: "A premium sedan offering exceptional comfort and a smooth ride for long-distance journeys.",
    capacity: "3 + 1 Seater",
  },
  {
    name: "BMW 7 Series",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1780279156/cosySec_swrzwj.webp",
    desc: "A flagship luxury sedan designed for VIP transfers and executive journeys.",
    capacity: "4 + 1 Seater",
  },
  {
    name: "Mercedes-Benz S-Class",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1780286856/sclasssclassrightfrontthreequarter_o294gh.webp",
    desc: "The ultimate luxury sedan, delivering unparalleled comfort, prestige, and refinement.",
    capacity: "4 + 1 Seater",
  },
  {
    name: "Mercedes-Benz E-Class",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1780279409/1757087195601_rnxpdg.avif",
    desc: "A sophisticated executive sedan offering premium comfort and a refined travel experience.",
    capacity: "4 + 1 Seater",
  },
];

export default function VehicleSection() {

  const handleScrollToForm = () => {
    const formSection = document.getElementById("booking-form");

    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="w-full bg-white pt-6 sm:pt-6 pb-12 sm:pb-14 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        {/* 🏷 HEADING */}
        <div className="text-center max-w-6xl mx-auto mb-10 sm:mb-14">

          <h2
            className="
              text-[20px] sm:text-[24px] md:text-[26px]
              font-semibold
              text-[#8b6a3d]
              tracking-wide
              mb-3
            "
          >
            Premium Chauffeur-Driven Sedans
          </h2>

          <p
            className="
              text-[12px] sm:text-[13px] md:text-[13.5px]
              leading-relaxed
              text-[#5c5c5c]
              font-light
              max-w-5xl
              mx-auto
            "
          >
            Experience effortless travel with our premium chauffeur-driven sedans, designed for comfort, 
            convenience, and reliability. Perfect for airport transfers, business travel, city tours, 
            and long-distance journeys, our vehicles combine modern amenities with professional service 
            to ensure a smooth and enjoyable ride throughout India.
          </p>

        </div>

        {/* 🎯 VEHICLES */}
        <div
          className="
            flex flex-wrap justify-center
            gap-y-10 sm:gap-y-10
            gap-x-6 sm:gap-x-6
          "
        >

          {vehicles.map((v, i) => (
            <div
              key={i}
              className="
                group
                w-full sm:w-[47%] lg:w-[33%]
                max-w-[370px]

                bg-white/80
                backdrop-blur-sm

                border border-[#eadfce]

                rounded-md
                overflow-hidden

                transition-all duration-500

                hover:-translate-y-1
                shadow-sm
                hover:shadow-md
              "
            >

              {/* 🖼 IMAGE */}
              <div className="relative w-full h-[250px] rounded-md overflow-hidden">

                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  className="
                    object-cover
                    transition-transform duration-700 p-2
                  "
                />

              </div>

              {/* 📄 CONTENT */}
              <div className="px-5 sm:px-6 py-5 sm:py-6 text-center">

                {/* TITLE */}
                <h3
                  className="
                    text-[14px] sm:text-[15px]
                    font-medium
                    text-[#8b6a45]
                    tracking-wide
                    mb-3
                  "
                >
                  {v.name}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-[11px] sm:text-[12px]
                    text-[#5f5f5f]
                    leading-[1.8]
                    font-light
                    mb-4
                  "
                >
                  {v.desc}
                </p>

                {/* CAPACITY */}
                <p
                  className="
                    text-[11px] sm:text-[12px]
                    text-[#9A7A58]
                    font-light
                    tracking-wide
                    mb-5
                  "
                >
                  {v.capacity}
                </p>

                {/* BUTTON */}
                <button
                 onClick={handleScrollToForm}
                  className="
                    text-[11px] sm:text-[11.2px]
                    tracking-wide font-[300]
 
                    bg-[#AF956C]
                    text-white

                    px-5 sm:px-6
                    py-2.5

                    rounded-full

                    transition-all duration-300

                    hover:bg-[#8f7654]
                  "
                >
                  Book Now
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}