"use client";

export default function StickyNav() {
  const sections = [
    { id: "about", label: "About" },
    { id: "inclusions", label: "Inclusions" },
    { id: "pricing", label: "Pricing" },
    { id: "special", label: "What makes this trip Special?" },
    { id: "itinerary", label: "Itinerary" },
    { id: "faq", label: "FAQ" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-[#9b7a50] text-white py-3 px-6 flex gap-6 justify-center text-sm font-medium shadow-md">
      {sections.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="hover:underline"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}