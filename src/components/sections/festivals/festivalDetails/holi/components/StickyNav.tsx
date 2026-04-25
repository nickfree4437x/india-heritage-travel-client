"use client";

export default function StickyNav() {
  const sections = [
    { id: "about", label: "About" },
    { id: "inclusions", label: "Inclusions" },
    { id: "excluded-services", label: "Excluded Services" },
    { id: "pricing", label: "Pricing" },
    { id: "special", label: "What makes this trip Special?" },
    { id: "itinerary", label: "Itinerary" },
    { id: "map", label: "Map" },
    { id: "faq", label: "FAQ" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" top-0 z-50 bg-[#9A7A58] text-white">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center gap-6 md:text-lg font-medium">

        {sections.map((item, index) => (
          <div key={item.id} className="flex items-center gap-6">

            {/* LINK */}
            <button
              onClick={() => scrollToSection(item.id)}
              className="hover:underline text-sm"
            >
              {item.label}
            </button>

            {/* SEPARATOR */}
            {index !== sections.length - 1 && (
              <span className="opacity-60">|</span>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}