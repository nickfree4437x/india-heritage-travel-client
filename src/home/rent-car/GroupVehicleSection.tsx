"use client";

import Image from "next/image";

const vehicles = [
  {
    name: "Force Urbania (Luxury Edition)",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1780283955/exterior-4-1_vtpahv.jpg",
    desc: "A premium luxury coach offering exceptional comfort, spacious seating, and a refined group travel experience.",
    capacity: "9 to 17 Seater",
  },
  {
    name: "Luxury Volvo Buses & Coaches",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1780287501/2326x800-volvo-9700-CGI_v1f98u.avif",
    desc: "Premium luxury coaches offering spacious seating, superior comfort, and a smooth travel experience for large groups.",
    capacity: "40 to 55 Seater",
  },
  {
    name: "Tempo Travellers",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1780284385/ssc04qnamouiwycd9yob-1_elvngd.webp",
    desc: "Spacious and reliable transportation for family trips, tours, and group travel.",
    capacity: "9 to 16 Seater",
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
            Luxury Coaches for Group Travel
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
            Experience seamless group travel with our luxury coaches, offering exceptional comfort, ample 
            space, and reliable performance. Ideal for large families, tour groups, corporate outings, 
            and events, our professionally maintained vehicles ensure a relaxed and memorable journey 
            across India.
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
                w-full sm:w-[47%] lg:w-[31%]
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