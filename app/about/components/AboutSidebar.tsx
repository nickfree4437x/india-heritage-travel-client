"use client";

import { useEffect, useState } from "react";
import { 
  Compass, 
  Settings, 
  Users,
  ChevronRight
} from "lucide-react";

const sections = [
  { id: "journey", title: "Our Journey", icon: Compass },
  { id: "work", title: "How We Work", icon: Settings },
  { id: "team", title: "Meet Our Team", icon: Users },
];

export default function AboutSidebar() {
  const [active, setActive] = useState("journey");

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id;
      let closestDistance = Infinity;

      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top - 140);
          if (distance < closestDistance) {
            closestDistance = distance;
            current = sec.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="hidden md:block md:sticky top-28">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 w-64">
        <div className="p-1">
          {sections.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
                  transition-all duration-200
                  ${isActive
                    ? "bg-[#A67C3D] text-white"
                    : "text-gray-600 hover:bg-gray-50"
                  }
                `}
              >
                <Icon size={16} className={isActive ? "text-white" : "text-gray-400"} />
                <span className="text-sm font-medium">{item.title}</span>
                {isActive && <ChevronRight size={14} className="ml-auto" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}