"use client";

import Image from "next/image";

const escapes = [
  {
    title: "Golden Triangle Romance & Taj Mahal",
    description:
      "Begin with Delhi and the hum of its energy, take a tour and stroll across Agra with the splendor of the Taj Mahal—a legend of love—and then into the magnificent palaces and the luxurious bazaars of Jaipur. Cap it off with a splurging retreat in a centuries-old fort, complete with romantic vistas under starry nights.",
    image: "/blogs/blog-6/tajmahal.jpg",
    reverse: false,
  },
  {
    title: "Kerala Backwaters: Serene Seclusion",
    description:
      "Gliding down serene waterways on a luxury houseboat. Indulge in Ayurvedic wellness therapies for two, and cuddle up together under swaying palms and soft breezes. A rejuvenating, romantic retreat into serene calm and togetherness.",
    image: "/blogs/blog-6/kerala.jpg",
    reverse: true,
  },
  {
    title: "Himachal Hills & Himalayan Hideaway",
    description:
      "Snuggled amidst the mountains of Himachal Pradesh, find a serene retreat amidst pine groves and fresh mountain air. Snuggle into quaint cottage accommodations, hike on scenic trails, and indulge in tranquil moments by a roaring fire—your own Himalayan retreat.",
    image: "/blogs/blog-6/himachal.jpg",
    reverse: false,
  },
  {
    title: "Goa's Coastal Bliss & Culture",
    description:
      "Indulge in lazy beach holidays, swaying sunsets, and colorful Goan lifestyle in this seaside heaven. Delve into sizzling seafood by the beach, relax to warm breezes, and discover cozy churches, spice farms, and local art forms—all in finest cohesion.",
    image: "/blogs/blog-6/goa.jpg",
    reverse: true,
  },
];

export default function RomanticEscapesSection() {
  return (
    <section className="w-full bg-[#f7f4ef] py-10 sm:py-14 lg:py-20">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        <div className="space-y-16 sm:space-y-20">

          {escapes.map((item, index) => (
            <div
              key={index}
              className={`
                grid grid-cols-1 lg:grid-cols-2

                gap-10
                lg:gap-14

                items-center

                ${
                  item.reverse
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }
              `}
            >

              {/* CONTENT */}
              <div className="max-w-2xl">

                <h3
                  className="
                    text-[28px]
                    sm:text-[34px]
                    lg:text-[40px]

                    leading-[1.18]

                    text-[#111111]
                  "
                  style={{
                    fontFamily: "'Marcellus', serif",
                  }}
                >
                  {item.title}
                </h3>

                <p className="mt-6 text-[16px] sm:text-[17px] leading-8 text-[#666666] font-light">
                  {item.description}
                </p>

              </div>

              {/* IMAGE */}
              <div>

                <div
                  className="
                    relative

                    w-full

                    h-[280px]
                    sm:h-[380px]
                    lg:h-[500px]

                    rounded-[24px]
                    sm:rounded-[28px]

                    overflow-hidden

                    shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                  "
                >

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                </div>

                {/* CREDIT */}
                <p className="mt-3 text-[12px] sm:text-[13px] text-[#8d8d8d]">
                  via wikipedia
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}