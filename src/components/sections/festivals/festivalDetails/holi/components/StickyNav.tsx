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
    <div className="sticky top-0 z-50 bg-[#9A7A58] shadow-sm">

      {/* 🔥 MOBILE HORIZONTAL SCROLL */}
      <div className="overflow-x-auto scrollbar-hide">

        <div
          className="
            min-w-max
            max-w-7xl mx-auto

            flex items-center
            justify-start sm:justify-center

            px-3 sm:px-5 lg:px-6
            py-3 sm:py-4

            gap-3 sm:gap-5 md:gap-6
          "
        >

          {sections.map((item, index) => (

            <div
              key={item.id}
              className="
                flex items-center
                gap-3 sm:gap-5 md:gap-6
                shrink-0
              "
            >

              {/* 🔥 NAV BUTTON */}
              <button
                onClick={() => scrollToSection(item.id)}
                className="
                  whitespace-nowrap

                  text-[11px]
                  sm:text-[12px]
                  md:text-[13px]

                  font-[400]
                  tracking-[0.02em]

                  text-white/95
                  hover:text-white hover:underline

                  transition-all duration-300
                "
              >
                {item.label}
              </button>

              {/* 🔥 DIVIDER */}
              {index !== sections.length - 1 && (
                <span className="text-white/40 shrink-0">
                  |
                </span>
              )}

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}