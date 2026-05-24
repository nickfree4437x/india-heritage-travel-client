"use client";

import Image from "next/image";

const vehicles = [
  {
    name: "Toyota Innova Crysta",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779607460/innova_ia4wad.webp",
    desc: "The Toyota Innova is a fantastic choice, combining good looks, comfortable interiors, and top-notch safety features for your travels.",
    capacity: "4 Guests + Driver + Guide",
  },
  {
    name: "Toyota Etios",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779607501/etios-interior_eiy57s.webp",
    desc: "Big on space, safety, and value for your money – a go-to pick for travelers.",
    capacity: "3 Guests + Driver + Guide",
  },
  {
    name: "Swift Dzire",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779607521/dzire-interior_jfr8uo.webp",
    desc: "Spacious, safe, and budget-friendly – the go-to choice for travelers.",
    capacity: "3 Guests + Driver + Guide",
  },
  {
    name: "Bigger Vehicle - Tempo Traveller",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779607543/tempo-interior_e8ccfb.webp",
    desc: "The perfect choice for extended trips, offering comfort and amenities.",
    capacity: "10 Guests + Driver + Guide",
  },
  {
    name: "Luxury Bus",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779607571/bus-interior_vv02ty.webp",
    desc: "Perfect for families and groups with supreme comfort.",
    capacity: "15 Guests + Driver + Guide",
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
            Explore Our Range Of Vehicles
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
            We provide a one-stop solution for your family, friends, business, or corporate travel needs, 
            customised to suit you. Our cars are always in top-notch condition, and we regularly check 
            them for safety. Our drivers are carefully selected, well-trained, polite, and thoroughly 
            familiar with the cities and destinations they serve. We’re ready to greet you with a warm 
            welcome.
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
                max-w-[360px]

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