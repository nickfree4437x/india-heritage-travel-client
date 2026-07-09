"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const data = [
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779548059/holi1_fpibpz.jpg",
    title: "Join pre-Holi celebrations and rituals",
    desc: "Experience pre-Holi celebration filled with folk rituals, Gidad performances, and a deep sense of tradition.",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779548114/holi-female_wbsg5y.jpg",
    title: "Experience unique Holi traditions",
    desc: "Celebrate Holi the traditional way with village rituals, folk dress, and local rhythms.",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779548174/holi3_f4kfax.jpg",
    title: "Celebrate Holi like a Local",
    desc: "Dressed in white kurtas and colorful turbans, guests celebrate Holi the local way with joy, color, and community.",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779548218/camel-safari_j4fxr4.jpg",
    title: "Camel Riding & Bonfire at the desert",
    desc: "Ride through the Thar as the sun sets, then enjoy folk music, dancing, and a starlit bonfire in the dunes of Jaisalmer.",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779548289/udaipur_rnkqia.jpg",
    title: "Lakeside romance of Udaipur",
    desc: "Enjoy a peaceful boat ride on Lake Pichola with stunning views of palaces and cityscapes.",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779548350/jodhpur_t4gk4a.jpg",
    title: "Colours of the Blue City",
    desc: "Wander through Jodhpur's old town, past blue-washed homes, spice markets, and the towering Mehrangarh Fort above.",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779548394/jaipur_fzm98f.jpg",
    title: "Pink City's Royalty",
    desc: "Admire Hawa Mahal's unique windows, built to let in cool air and city views for the royal women.",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779548565/taj_lprg3e.jpg",
    title: "Timeless Beauty of the Taj",
    desc: "Visit the Taj Mahal — a white marble wonder and symbol of eternal love, glowing at sunrise.",
  },
];

export default function SpecialSection() {
  const [active, setActive] = useState(0);
  const [mobileActive, setMobileActive] = useState<number | null>(0);
  const [isPaused, setIsPaused] = useState(false);

  // DESKTOP AUTO PLAY
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="bg-white py-2 sm:py-4 md:py-4 scroll-mt-24 md:scroll-mt-28"
      id="special"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <h2 className="text-[20px] sm:text-[24px] md:text-[26px] font-semibold text-center mb-4 sm:mb-6 text-[#2c2c2c] tracking-wide">
          What makes this trip Special?
        </h2>

        {/* ================= MOBILE VIEW ================= */}
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
              {/* IMAGE */}
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

              {/* OVERLAY */}
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

              {/* CONTENT (Expanded) */}
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
                <p className="text-gray-200 text-[11px] md:text-[12px] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP VIEW ================= */}
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
              {/* IMAGE */}
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

              {/* OVERLAY */}
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

              {/* CONTENT (Expanded) */}
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