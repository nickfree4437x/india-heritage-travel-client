"use client";

import { Briefcase, Leaf, Users, User } from "lucide-react";

export default function SuitableFor() {
  const navLinks = [
    { name: "Cochin", id: "cochin" },
    { name: "Alleppey", id: "alleppey" },
    { name: "Thekkady", id: "thekkady" },
    { name: "Munnar", id: "munnar" },
    { name: "Mumbai", id: "mumbai" },
  ];

  const items = [
    {
      icon: <Briefcase size={40} />,
      text: "Corporate Travel",
      id: "corporate",
    },
    {
      icon: <Leaf size={40} />,
      text: "Spiritual, Cultural, Artistic & Gastronomic",
      id: "spiritual",
    },
    {
      icon: <Users size={40} />,
      text: "Friends & Family Travel",
      id: "family",
    },
    {
      icon: <User size={40} />,
      text: "Solo Travel",
      id: "solo",
    },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 🔥 TOP NAV LINKS */}
      <div className="bg-[#9b7a50] text-white py-3">
        <div className="max-w-6xl mx-auto flex justify-center items-center gap-4 text-sm md:text-base">
          {navLinks.map((link, i) => (
            <div key={i} className="flex items-center gap-4">
              <span
                onClick={() => handleScroll(link.id)}
                className="cursor-pointer hover:underline"
              >
                {link.name}
              </span>
              {i !== navLinks.length - 1 && <span>|</span>}
            </div>
          ))}
        </div>
      </div>

      {/* ✅ SUITABLE FOR SECTION */}
      <section className="bg-white py-12 border-b">
        <h2 className="text-center text-3xl font-semibold mb-10">
          Suitable For
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => handleScroll(item.id)}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="text-[#9b7a50] mb-3 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <p className="text-sm font-medium group-hover:text-[#9b7a50] transition">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}