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
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="
        sticky top-0 z-50
        bg-[#9A7A58]
        text-white
        overflow-x-auto
        shadow-sm
      "
    >

      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6
          py-4
          flex justify-center items-center
          gap-4 sm:gap-5 md:gap-6
          whitespace-nowrap
        "
      >

        {sections.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center gap-4 sm:gap-5 md:gap-6"
          >

            {/* 🔥 LINK */}
            <button
              onClick={() => scrollToSection(item.id)}
              className="
                text-[11px]
                sm:text-[12px]
                md:text-[13px]
                font-[400]
                tracking-[0.02em]
                hover:underline
                transition-all duration-300
              "
            >
              {item.label}
            </button>

            {/* 🔥 SEPARATOR */}
            {index !== sections.length - 1 && (
              <span className="opacity-50 text-[11px] sm:text-xs">
                |
              </span>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}