"use client";

import { useEffect, useState } from "react";
import { Crown } from "lucide-react";

const sections = [
  { id: "welcome", title: "Welcome Letter!" },
  { id: "work", title: "How we work?" },
  { id: "journey", title: "My Journey" },
  { id: "team", title: "Our Team" },
  // { id: "testimonials", title: "Testimonials" },
  // { id: "live", title: "See us live" },
];

export default function AboutSidebar() {
  const [active, setActive] = useState("welcome");

  // 🔥 Scroll Spy
  useEffect(() => {
  const handleScroll = () => {
    let current = sections[0].id;
    let closestDistance = Infinity;

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);

      if (el) {
        const rect = el.getBoundingClientRect();

        // viewport ke top se distance
        const distance = Math.abs(rect.top - 140);

        // jo section closest hoga wahi active hoga
        if (distance < closestDistance) {
          closestDistance = distance;
          current = sec.id;
        }
      }
    });

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);

  // initial check
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // 🔥 Smooth Scroll
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        120;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="md:sticky top-28 h-fit md:-ml-5">
      <ul className="space-y-4">
        {sections.map((item) => (
          <li
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group flex items-center gap-4 cursor-pointer text-lg rounded-2xl px-4 py-3 transition-all duration-300 ${
              active === item.id
                ? "bg-[#ebe4d9] text-[#A67C3D]"
                : "text-gray-600 hover:bg-[#efe6da]"
            }`}
          >
            {/* ICON */}
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                active === item.id
                  ? "bg-[#c8b08b]"
                  : "bg-[#f3eee7] group-hover:bg-[#ebe1d3]"
              }`}
            >
              <Crown
                size={13}
                fill="currentColor"
                className={`transition-all duration-300 ${
                  active === item.id
                    ? "text-white"
                    : "text-[#c8b08b]"
                }`}
              />
            </div>

            {/* TITLE */}
            <span className="text-[16px] leading-none">
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}