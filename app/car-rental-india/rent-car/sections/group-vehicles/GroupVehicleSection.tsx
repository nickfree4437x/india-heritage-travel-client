"use client";

import Image from "next/image";

// Vehicle data - static collection for group travel vehicles
const vehicles = [
  {
    name: "Force Urbania (Luxury Edition)",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1781244308/exterior-4-1_vtpahv.avif",
    desc: "A premium luxury coach offering exceptional comfort, spacious seating, and a refined group travel experience.",
    capacity: "8 to 17 Seater",
  },
  {
    name: "Luxury Volvo Buses & Coaches",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1781244587/9600_15m_sleeper_FR_01a_hires-nbg_c50vrw.png",
    desc: "Premium luxury coaches offering spacious seating, superior comfort, and a smooth travel experience for large groups.",
    capacity: "14 to 55 Seater",
  },
  {
    name: "Tempo Travellers",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1780284385/ssc04qnamouiwycd9yob-1_elvngd.webp",
    desc: "Spacious and reliable transportation for family trips, tours, and group travel.",
    capacity: "9 to 16 Seater",
  },
  {
    name: "Mini Coach",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1781245494/stock-vector-van-bus-mini-art-d-realistic-design-template-car-vector-2280748025_cslp5u.jpg",
    desc: "Perfect for small group journeys, offering comfort, ample space, and a smooth travel experience.",
    capacity: "14 to 27 Seater",
  },
];

export default function VehicleSection() {
  // Scroll to booking form when "Book Now" is clicked
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
        {/* Section Header */}
        <div className="text-center max-w-6xl mx-auto mb-10 sm:mb-14">
          <h2 className="
            text-[20px] sm:text-[24px] md:text-[26px]
            font-semibold
            text-[#8b6a3d]
            tracking-wide
            mb-3
          ">
            Luxury Coaches & Group Travel Vehicles
          </h2>
          <p className="
            text-[12px] sm:text-[13px] md:text-[13.5px]
            leading-relaxed
            text-[#5c5c5c]
            font-light
            max-w-5xl
            mx-auto
          ">
            Travel across India with luxury coaches, tempo travellers, mini coaches, and chauffeur-driven group
            vehicles ideal for family tours, corporate travel, Rajasthan road trips, and group journeys.
          </p>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="
          flex flex-wrap justify-center
          gap-y-10 sm:gap-y-10
          gap-x-6 sm:gap-x-6
        ">
          {vehicles.map((v, i) => (
            <div
              key={i}
              className="
                group
                w-full sm:w-[47%] lg:w-[31%]
                max-w-[370px]
                bg-white/80 backdrop-blur-sm
                border border-[#eadfce]
                rounded-md overflow-hidden
                transition-all duration-500
                hover:-translate-y-1
                shadow-sm hover:shadow-md
              "
            >
              {/* Vehicle Image */}
              <div className="relative w-full h-[250px] rounded-md overflow-hidden">
                <Image
                  src={v.image}
                  alt={`${v.name} luxury coach for group travel in India`}
                  fill
                  className="object-cover transition-transform duration-700 p-2"
                />
              </div>

              {/* Vehicle Details */}
              <div className="px-5 sm:px-6 py-5 sm:py-6 text-center">
                <h3 className="
                  text-[14px] sm:text-[15px]
                  font-medium
                  text-[#8b6a45]
                  tracking-wide
                  mb-3
                ">
                  {v.name}
                </h3>

                <p className="
                  text-[11px] sm:text-[12px]
                  text-[#5f5f5f]
                  leading-[1.8]
                  font-light
                  mb-4
                ">
                  {v.desc}
                </p>

                <p className="
                  text-[11px] sm:text-[12px]
                  text-[#9A7A58]
                  font-light
                  tracking-wide
                  mb-5
                ">
                  {v.capacity}
                </p>

                {/* CTA Button - scrolls to booking form */}
                <button
                  onClick={handleScrollToForm}
                  className="
                    text-[11px] sm:text-[11.2px]
                    tracking-wide font-[300]
                    bg-[#AF956C] text-white
                    px-5 sm:px-6 py-2.5
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