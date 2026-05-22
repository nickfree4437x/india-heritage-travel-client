"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { journeysData, journeyCategories } from "./nav/data/journeysData";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrolled: boolean;
  handleScroll: (sectionId: string) => void;
}

interface CuratedItem {
  name: string;
  sectionId: string;
}

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

const ANIMATION_DURATIONS = {
  OVERLAY: 0.6,
  SIDEBAR: 0.7,
  DROPDOWN: 0.55,
  CLOSE_DELAY: 120,
  SCROLL_DELAY: 350,
} as const;

const ANIMATION_EASING = [0.22, 1, 0.36, 1] as const;

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function MobileMenu({
  isOpen,
  onClose,
  scrolled,
  handleScroll,
}: MobileMenuProps) {
  const [journeyOpen, setJourneyOpen] = useState<boolean>(false);
  const pathname = usePathname();

  // --------------------------------------------------------------------------
  // HANDLERS
  // --------------------------------------------------------------------------

  const handleCuratedItemClick = (sectionId: string) => {
    onClose();
    setJourneyOpen(false);

    setTimeout(() => {
      handleScroll(sectionId);
    }, ANIMATION_DURATIONS.SCROLL_DELAY);
  };

  const handleNavigationClick = () => {
    setTimeout(() => onClose(), ANIMATION_DURATIONS.CLOSE_DELAY);
  };

  const handleJourneysToggle = () => {
    setJourneyOpen(!journeyOpen);
  };

  // --------------------------------------------------------------------------
  // HELPER FUNCTIONS
  // --------------------------------------------------------------------------

  const getNavLinkClass = (isActive: boolean) => {
    const baseClasses = `
      block text-[11px] font-extralight tracking-[0.14em] transition-all duration-300
    `;
    const activeClass = isActive ? "text-[#a88b63]" : "text-[#5e5a54] hover:text-[#a88b63]";

    return `${baseClasses} ${activeClass}`;
  };

  const getChevronClassName = () => {
    return `
      w-4 h-4 text-[#9d9487] group-hover:text-[#a88b63] transition-all duration-300
    `;
  };

  const getJourneysButtonClassName = () => {
    return `
      flex justify-between items-center w-full group
    `;
  };

  const getJourneysTextClassName = () => {
    return `
      text-[11px] font-light tracking-[0.14em] text-[#2f2f2f]
      group-hover:text-[#a88b63] transition-all duration-300
    `;
  };

  const getCategoryTitleClassName = () => {
    return `
      text-[9px] font-semibold uppercase tracking-[0.28em] text-[#b89a74] pl-4
    `;
  };

  const getMenuItemClassName = () => {
    return `
      group relative w-full flex items-center justify-between
      px-4 py-2 rounded-xl
      text-[10px] font-extralight tracking-[0.14em]
      text-[#6f6a63] hover:text-[#a88b63] hover:bg-[#f8f3eb]
      transition-all duration-500
    `;
  };

  const getArrowClassName = () => {
    return `
      opacity-0 translate-x-[-6px]
      group-hover:opacity-100 group-hover:translate-x-0
      text-[#a88b63] transition-all duration-300
    `;
  };

  const getCtaButtonClassName = () => {
    return `
      w-full rounded-xl border border-[#d9c3a4]
      bg-gradient-to-r from-[#c4a57d] to-[#a88b63]
      py-4 text-[11px] font-extralight tracking-[0.22em] text-white
      hover:shadow-[0_10px_30px_rgba(168,139,99,0.28)]
      transition-all duration-500
    `;
  };

  // --------------------------------------------------------------------------
  // RENDER HELPER: JOURNEY ITEMS
  // --------------------------------------------------------------------------

  const renderJourneyItems = (
    items: Array<{ name: string; link?: string; sectionId?: string }>,
    categoryId: string
  ) => {
    return items.map((item, idx) => {
      // Curated Sections (with sectionId for smooth scroll)
      if (categoryId === "curated" && "sectionId" in item) {
        return (
          <button
            key={idx}
            onClick={() => handleCuratedItemClick((item as CuratedItem).sectionId)}
            className={getMenuItemClassName()}
          >
            <span>{item.name}</span>
            <span className={getArrowClassName()}>→</span>
          </button>
        );
      }

      // Regular Links
      return (
        <Link
          key={idx}
          href={item.link || "#"}
          onClick={handleNavigationClick}
          className={getMenuItemClassName()}
        >
          <span>{item.name}</span>
          <span className={getArrowClassName()}>→</span>
        </Link>
      );
    });
  };

  // --------------------------------------------------------------------------
  // RENDER HELPER: JOURNEYS DROPDOWN
  // --------------------------------------------------------------------------

  const renderJourneysDropdown = () => {
    return (
      <AnimatePresence>
        {journeyOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: ANIMATION_DURATIONS.DROPDOWN,
              ease: ANIMATION_EASING,
            }}
            className="overflow-hidden"
          >
            <div className="mt-2 space-y-4 border-l border-[#ece4d8] pl-2">
              {journeyCategories.map((category) => {
                const items = journeysData[category.id as keyof typeof journeysData];

                return (
                  <div key={category.id} className="space-y-4">
                    {/* Category Title */}
                    <p className={getCategoryTitleClassName()}>{category.title}</p>

                    {/* Category Items */}
                    <div className="space-y-1">
                      {renderJourneyItems(items, category.id)}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  // --------------------------------------------------------------------------
  // RENDER HELPER: REGULAR NAV LINKS
  // --------------------------------------------------------------------------

  const renderRegularNavLinks = () => {
    return (
      <div className="space-y-4">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleNavigationClick}
              className={getNavLinkClass(isActive)}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // RENDER
  // --------------------------------------------------------------------------

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: ANIMATION_DURATIONS.OVERLAY,
              ease: ANIMATION_EASING,
            }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            style={{ zIndex: 9998 }}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: ANIMATION_DURATIONS.SIDEBAR,
              ease: ANIMATION_EASING,
            }}
            className="
              fixed right-0 top-0 bottom-0
              w-full sm:w-[400px]
              bg-[#fcfaf7]
              shadow-[0_10px_60px_rgba(0,0,0,0.18)]
              flex flex-col
            "
            style={{ zIndex: 9999 }}
          >
            {/* Header */}
            <div className="px-7 py-5 border-b border-[#eee7dc]">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[20px] font-light tracking-[0.08em] text-[#2d2d2d]">
                    Menu
                  </h2>
                  <p className="text-[10px] text-[#9f978c] tracking-[0.16em] mt-1 uppercase">
                    Discover your journey
                  </p>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close Menu"
                  className="
                    w-10 h-10 flex items-center justify-center rounded-full
                    bg-white border border-[#ece5da] hover:bg-[#f7f2ea]
                    transition-all duration-300
                  "
                >
                  <X size={17} className="text-[#7c7468]" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-7 py-8">
              <div className="space-y-4">
                {/* Journeys Section */}
                <div className="space-y-4">
                  <button
                    onClick={handleJourneysToggle}
                    className={getJourneysButtonClassName()}
                  >
                    <span className={getJourneysTextClassName()}>Journeys</span>
                    <motion.div
                      animate={{ rotate: journeyOpen ? 180 : 0 }}
                      transition={{
                        duration: 0.45,
                        ease: ANIMATION_EASING,
                      }}
                    >
                      <ChevronDown className={getChevronClassName()} />
                    </motion.div>
                  </button>

                  {renderJourneysDropdown()}
                </div>

                {/* Regular Nav Links */}
                {renderRegularNavLinks()}

                {/* CTA Button */}
                <div className="pt-4">
                  <Link href="/customize-your-journey">
                    <button onClick={handleNavigationClick} className={getCtaButtonClassName()}>
                      Customize Your Journey
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}