"use client";

// ============================================================
// 1. IMPORTS
// ============================================================
import { useRouter, usePathname } from "next/navigation";
import { QuickLinkItem } from "../types/types";

// ============================================================
// 2. DATA
// ============================================================
const QUICK_LINKS: QuickLinkItem[] = [
  { name: "FAQ's", href: "/faq", isSection: false },
  {
    name: "Journeys",
    href: "/journeys",
    isSection: true,
    sectionId: "welcome-destination",
  },
  {
    name: "Festivals",
    href: "/festivals",
    isSection: true,
    sectionId: "festivals",
  },
  {
    name: "Travel Tips",
    href: "/travel-tips-for-india",
    isSection: false,
  },
  {
    name: "Visa Rules for India",
    href: "/visa-rules-for-india",
    isSection: false,
  },
] as const;

// ============================================================
// 3. COMPONENT
// ============================================================
export default function FooterQuickLinks() {
  const router = useRouter();
  const pathname = usePathname();

  // ===== HELPERS =====
  const handleScrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const handleQuickLinkClick = (item: QuickLinkItem) => {
    if (item.isSection && item.sectionId) {
      handleScrollToSection(item.sectionId);
    } else if (item.href) {
      router.push(item.href);
    }
  };

  return (
    <div>
      {/* Heading */}
      <h3 className="text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-white mb-5 sm:mb-6 text-center sm:text-left">
        Quick Links
      </h3>

      {/* Links List */}
      <ul className="flex flex-col text-[10px] font-extralight tracking-[0.15em] text-gray-200">
        {QUICK_LINKS.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => handleQuickLinkClick(item)}
              className="
                w-full
                text-left
                group
                flex
                items-center
                gap-3
                sm:gap-2
                min-h-[40px]
                cursor-pointer
                transition-all
                duration-500
              "
            >
              {/* Arrow Icon */}
              <span className="text-gray-200 text-[13px] group-hover:translate-x-1 transition-all duration-300">
                ›
              </span>

              {/* Link Text */}
              <span className="group-hover:text-gray-300 hover:underline transition-all duration-300">
                {item.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}