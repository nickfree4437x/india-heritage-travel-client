"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import JourneysMegaMenu from "../journey-mega-menu/JourneysMegaMenu";
import LanguageSwitcher from "../language-switcher/LanguageSwitcher";
import MobileMenu from "../mobile-menu/MobileMenu";

// ============================================================================
// CONSTANTS
// ============================================================================

const NAV_LINKS = [
  { name: "Solo-Women-Travel", href: "/solo-trip" },
  { name: "Blogs", href: "/blogs" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Rent-A-Car", href: "/rent-car" },
];

const SCROLL_THRESHOLD = 50;
const SCROLL_OFFSET_DEFAULT = 80;
const SCROLL_OFFSET_SCROLLED = 60;

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  // --------------------------------------------------------------------------
  // EFFECTS
  // --------------------------------------------------------------------------

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  // --------------------------------------------------------------------------
  // HANDLERS
  // --------------------------------------------------------------------------

  const handleScroll = (sectionId: string) => {
    if (!sectionId) return;

    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = scrolled ? SCROLL_OFFSET_SCROLLED : SCROLL_OFFSET_DEFAULT;
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  // --------------------------------------------------------------------------
  // HELPER FUNCTIONS
  // --------------------------------------------------------------------------

  const getHeaderClassName = () => {
    const baseClasses = "fixed top-0 left-0 right-0 transition-all duration-500 ease-out";
    const backgroundClass = scrolled
      ? "bg-[#C2A985]/95 backdrop-blur-md shadow-sm"
      : "bg-gradient-to-b from-black/30 to-transparent";

    return `${baseClasses} ${backgroundClass}`;
  };

  const getLogoSizeClass = () => {
    return scrolled
      ? "w-[90px] sm:w-[110px] md:w-[120px]"
      : "w-[110px] sm:w-[130px] md:w-[150px] lg:w-[160px]";
  };

  const getNavLinkClasses = (isActive: boolean) => {
    const baseClasses = `
      px-3 xl:px-4 rounded-full font-[300] tracking-[0.1em] whitespace-nowrap
      transition-all duration-300
    `;

    const sizeClasses = scrolled
      ? "py-1 xl:py-2.5 text-[12px] xl:text-[11px] text-white hover:bg-black/10"
      : "py-1.5 xl:py-2 text-[11px] xl:text-[12px] text-white hover:bg-white/15";

    const activeClass = isActive ? "bg-white/20 backdrop-blur-md" : "";

    return `${baseClasses} ${sizeClasses} ${activeClass}`;
  };

  const getJourneysMegaMenuClasses = () => {
    return `
      relative px-3 py-1.5 text-white rounded-full transition-all duration-300
      ${pathname === "/" ? "bg-white/10 backdrop-blur-md" : "bg-transparent"}
      hover:bg-white/20 hover:backdrop-blur-md
    `;
  };

  const getCustomizeButtonClasses = () => {
    if (scrolled) {
      return "px-4 xl:px-5 py-2 xl:py-2.5 text-[10px] xl:text-[11px] bg-white text-black hover:bg-white/90";
    }
    return "px-4 xl:px-6 py-2 xl:py-3 text-[10px] xl:text-[11px] bg-transparent text-white hover:bg-white/10 backdrop-blur-md";
  };

  const getContainerHeightClass = () => {
    return scrolled
      ? "h-[60px] md:h-[65px] lg:h-[70px]"
      : "h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px]";
  };

  // --------------------------------------------------------------------------
  // RENDER
  // --------------------------------------------------------------------------

  return (
    <>
      {/* Header */}
      <header
        className={getHeaderClassName()}
        style={{ zIndex: 9999, overflow: "visible" }}
      >
        <div className="w-full px-4 sm:px-6 md:px-8" style={{ overflow: "visible" }}>
          <div className="w-full" style={{ overflow: "visible" }}>
            {/* Navbar Container */}
            <div
              className={`
                flex items-center justify-between
                transition-all duration-500 ease-out
                ${getContainerHeightClass()}
              `}
              style={{ overflow: "visible" }}
            >
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="block">
                  <Image
                    src="/logos/logo-white.png"
                    alt="Logo"
                    width={160}
                    height={40}
                    className={`
                      h-auto object-contain transition-all duration-500 ease-out
                      ${getLogoSizeClass()}
                    `}
                    priority
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav
                className="hidden lg:flex items-center gap-1 xl:gap-2 ml-6 xl:ml-10"
                style={{ overflow: "visible" }}
              >
                {/* Journeys Mega Menu */}
                <div
                  className={getJourneysMegaMenuClasses()}
                  style={{ overflow: "visible", zIndex: 99999 }}
                >
                  <JourneysMegaMenu />
                </div>

                {/* Regular Nav Links */}
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={getNavLinkClasses(isActive)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Desktop Right Actions */}
              <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
                <Link href="/customize-your-journey">
                  <button
                    className={`
                      rounded-lg whitespace-nowrap border border-white/20
                      font-extralight tracking-[0.15em]
                      transition-all duration-300
                      ${getCustomizeButtonClasses()}
                    `}
                  >
                    Customize Your Journey
                  </button>
                </Link>
                <LanguageSwitcher scrolled={scrolled} />
              </div>

              {/* Mobile Controls */}
              <div className="flex lg:hidden items-center gap-3 flex-shrink-0">
                <LanguageSwitcher scrolled={scrolled} />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`
                    p-1.5 rounded-lg transition-all duration-300
                    ${scrolled
                      ? "text-gray-800 hover:bg-gray-200/50"
                      : "text-white hover:bg-white/20"
                    }
                  `}
                  aria-label="Toggle Menu"
                >
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        scrolled={scrolled}
        handleScroll={handleScroll}
      />
    </>
  );
}