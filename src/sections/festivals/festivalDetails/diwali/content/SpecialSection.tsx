"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Special section data
const data = [
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779549089/diwali1_ofiii9.jpg",
    title: "Celebrate Diwali",
    desc: "Light diyas, join home rituals, and experience the warmth of India's biggest festival from the inside.",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779549133/diwali2_ux9jos.jpg",
    title: "Taste the Flavours of Diwali",
    desc: "Celebrate with handmade sweets like gujiya and laddoo, and festive snacks straight from local kitchens.",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779549176/diwali3_uzxcna.jpg",
    title: "Diwali Traditions Up Close",
    desc: "Join in as families light diyas, decorate with rangoli, and offer prayers for new beginnings.",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779549225/diwali4_m5epli.png",
    title: "Experience Delhi's Rich Heritage",
    desc: "Visit iconic sites like the Red Fort and Humayun's Tomb, and explore the soul of Old Delhi.",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779549279/diwali5_cuvsxd.png",
    title: "Camel Rides & Desert Nights in Jaisalmer",
    desc: "Ride through the dunes at sunset and end the day with a bonfire, folk music, and dinner under the stars.",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779549448/diwali6_rwagam.jpg",
    title: "Experience Spiritual Varanasi",
    desc: "Take a boat ride at sunrise, walk the ghats, and see daily rituals unfold along the Ganges.",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779549686/diwali7_fsmjgx.jpg",
    title: "Witness the Ganga Aarti in Varanasi",
    desc: "Experience the magic of Varanasi at dusk, as bells ring and flames rise in devotion by the sacred river.",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779549751/taj_hnq7kj.jpg",
    title: "Timeless Beauty of the Taj",
    desc: "Visit the Taj Mahal — a white marble wonder and symbol of eternal love, glowing at sunrise.",
  },
];

export default function SpecialSection() {
  const [active, setActive] = useState(0);
  const [mobileActive, setMobileActive] = useState<number | null>(0);
  const [isPaused, setIsPaused] = useState(false);

  // Desktop auto-play
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="bg-white py-2 sm:py-4 md:py-4 scroll-mt-20 md:scroll-mt-24"
      id="special"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="
          text-[20px] sm:text-[24px] md:text-[26px]
          font-semibold
          text-center
          text-[#2c2c2c]
          tracking-wide
          mb-4 sm:mb-8
        ">
          What makes this trip Special?
        </h2>

        {/* Mobile View - Accordion */}
        <div className="flex md:hidden flex-col overflow-hidden rounded-sm">
          {data.map((item, i) => (
            <div
              key={i}
              onClick={() => setMobileActive(mobileActive === i ? null : i)}
              className={`
                relative overflow-hidden cursor-pointer rounded-sm
                transition-all duration-700 ease-out
                ${mobileActive === i ? "h-[280px]" : "h-[70px]"}
              `}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={i === 0}
                className={`
                  object-cover
                  transition-all duration-1000 ease-out
                  ${mobileActive === i ? "scale-110" : "scale-100"}
                `}
                sizes="100vw"
              />

              <div
                className={`
                  absolute inset-0
                  transition-all duration-700 ease-out
                  ${mobileActive === i
                    ? "bg-gradient-to-t from-black/85 via-black/50 to-black/20"
                    : "bg-black/40"
                  }
                `}
              />

              <div
                className={`
                  absolute bottom-0 left-0 right-0 p-5
                  transition-all duration-700 delay-100 ease-out
                  ${mobileActive === i
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 pointer-events-none"
                  }
                `}
              >
                <h3 className="text-white text-[15px] font-semibold tracking-wide leading-relaxed mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-[12px] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Carousel */}
        <div
          className="
            hidden md:flex
            h-[480px] lg:h-[520px] xl:h-[560px]
            overflow-hidden
            rounded-sm
            shadow-lg
          "
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {data.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              className={`
                relative overflow-hidden cursor-pointer group
                transition-all duration-1000 ease-out
                ${active === i ? "w-[55%]" : "w-[8%] hover:w-[12%]"}
              `}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={i === 0}
                className={`
                  object-cover
                  transition-all duration-1200 ease-out
                  ${active === i ? "scale-105" : "scale-100 group-hover:scale-105"}
                `}
                sizes="100vw"
              />

              <div
                className={`
                  absolute inset-0
                  transition-all duration-800 ease-out
                  ${active === i
                    ? "bg-gradient-to-t from-black/80 via-black/40 to-black/10"
                    : "bg-black/20 group-hover:bg-black/30"
                  }
                `}
              />

              <div
                className={`
                  absolute bottom-0 left-0 right-0 p-5 lg:p-6 xl:p-8
                  transition-all duration-800 delay-150 ease-out
                  ${active === i
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12 pointer-events-none"
                  }
                `}
              >
                <h3 className="text-white text-[15px] lg:text-[17px] font-semibold tracking-wide leading-relaxed mb-2 max-w-xl">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-[13px] lg:text-[14px] font-light leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}