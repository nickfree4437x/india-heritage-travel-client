"use client";

import { useEffect, useState } from "react";
import { Crown } from "lucide-react";

const sections = [
  { id: "welcome", title: "Welcome Letter!" },
  { id: "work", title: "How we work?" },
  { id: "journey", title: "My Journey" },
  { id: "team", title: "Our Team" },
  { id: "testimonials", title: "Testimonials" },
  { id: "live", title: "See us live" },
];

export default function AboutSidebar() {
  const [active, setActive] = useState("welcome");

  // 🔥 Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      let current = "welcome";

      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop - 150;
          if (window.scrollY >= top) {
            current = sec.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Scroll Function
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="md:sticky top-28 h-fit">
      <ul className="space-y-5">
        {sections.map((item) => (
          <li
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex items-center gap-3 cursor-pointer text-lg transition ${
              active === item.id
                ? "text-[#C2A985] font-semibold"
                : "text-gray-600 hover:text-black"
            }`}
          >
            <Crown size={18} className="text-[#C2A985]" />
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}