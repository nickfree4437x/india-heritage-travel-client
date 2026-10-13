"use client";

import Image from "next/image";

// Romantic escapes data
const escapes = [
  {
    title: "Golden Triangle Honeymoon: Delhi, Agra & Jaipur",
    description:
      "Begin with Delhi and the hum of its energy, take a tour and stroll across Agra with the splendor of the Taj Mahal - a legend of love and then into the magnificent palaces and the luxurious bazaars of Jaipur. Cap it off with a splurging retreat in a centuries-old fort, complete with romantic vistas under starry nights.",
    image:
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779650944/pexels-sudipta-1603650-scaled_wzzi6y.jpg",
  },
  {
    title: "Kerala Honeymoon: Backwaters & Scenic Retreats",
    description:
      "Gliding down serene waterways on a luxury houseboat. Indulge in Ayurvedic wellness therapies for two, and cuddle up together under swaying palms and soft breezes. A rejuvenating, romantic retreat into serene calm and togetherness.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779651061/Untitled-design-2_jmd22u.webp",
  },
  {
    title: "Himachal Pradesh Honeymoon: Mountain Escapes",
    description:
      "Snuggled amidst the mountains of Himachal Pradesh, find a serene retreat amidst pine groves and fresh mountain air. Snuggle into quaint cottage accommodations, hike on scenic trails, and indulge in tranquil moments by a roaring fire-your own Himalayan retreat.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779651158/sajal-das-vuS2cYllXB4-unsplash_bljuej.jpg",
  },
  {
    title: "Goa Honeymoon: Beaches, Heritage & Local Culture",
    description:
      "Indulge in lazy beach holidays, swaying sunsets, and colorful Goan lifestyle in this seaside heaven. Delve into sizzling seafood by the beach, relax to warm breezes, and discover cozy churches, spice farms, and local art forms all in finest cohesion.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779651278/alexey-turenkov-bWJiSZjIgTM-unsplash_da97lc.jpg",
  },
];

export default function RomanticEscapesSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="space-y-4 sm:space-y-5">
          {escapes.map((item, index) => (
            <div key={index}>
              {/* Content */}
              <div className="max-w-6xl">
                <h3 className="
                  text-[16px] sm:text-[20px] md:text-[22px]
                  tracking-wide
                  text-[#2c2c2c]
                  font-semibold
                  mb-2
                ">
                  {item.title}
                </h3>

                <p className="
                  mt-2
                  text-gray-700
                  text-[13px] sm:text-[14px] md:text-[14.5px]
                  font-[300]
                  leading-relaxed
                  text-justify
                  mb-4
                ">
                  {item.description}
                </p>
              </div>

              {/* Image */}
              <div className="mt-2 sm:mt-4">
                <div className="
                  relative
                  w-full
                  h-[280px] sm:h-[420px] lg:h-[580px]
                  rounded-sm
                  overflow-hidden
                  shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>

                {/* Credit */}
                <p className="mt-2 text-[11px] sm:text-[12px] font-light text-gray-700">
                  Image via unsplash.com
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}