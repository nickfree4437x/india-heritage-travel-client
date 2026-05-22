"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface Language {
  code: string;
  flag: string;
  name: string;
  nativeName: string;
}

interface LanguageSwitcherProps {
  scrolled?: boolean;
}

// ============================================================================
// CONSTANTS
// ============================================================================

const LANGUAGES: Language[] = [
  { code: "en", flag: "/flags/uk.png", name: "English", nativeName: "English" },
  { code: "es", flag: "/flags/spain.png", name: "Spanish", nativeName: "Español" },
  { code: "it", flag: "/flags/italy.png", name: "Italian", nativeName: "Italiano" },
  { code: "pt", flag: "/flags/portugal.png", name: "Portuguese", nativeName: "Português" },
];

const DEFAULT_LANGUAGE: Language = {
  code: "en",
  flag: "/flags/uk.png",
  name: "English",
  nativeName: "English",
};

const ANIMATION_CONFIGS = {
  SPRING: {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
    mass: 0.8,
  },
  CHECKMARK: {
    type: "spring" as const,
    stiffness: 500,
    damping: 30,
  },
  CHEVRON: {
    duration: 0.2,
    ease: "easeInOut" as const,
  },
  DROPDOWN_ITEM_DELAY: 0.03,
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function LanguageSwitcher({ scrolled }: LanguageSwitcherProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] = useState<Language>(DEFAULT_LANGUAGE);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // --------------------------------------------------------------------------
  // EFFECTS
  // --------------------------------------------------------------------------

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  // --------------------------------------------------------------------------
  // HANDLERS
  // --------------------------------------------------------------------------

  const changeLanguage = (lang: Language) => {
    setSelectedLang(lang);
    setOpen(false);

    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = lang.code;
      select.dispatchEvent(new Event("change"));
    }
  };

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const closeDropdown = () => {
    setOpen(false);
  };

  // --------------------------------------------------------------------------
  // HELPER FUNCTIONS
  // --------------------------------------------------------------------------

  const getButtonClassName = () => {
    const baseClasses = `
      group relative flex items-center gap-2.5 px-4 rounded-xl
      transition-all duration-300 ease-out
    `;

    const scrolledClasses = scrolled
      ? "py-2 bg-white/90 border border-gray-200/80 shadow-sm"
      : "py-2.5 bg-white/5 border border-white/20 backdrop-blur-sm hover:bg-white/10";

    return `${baseClasses} ${scrolledClasses}`;
  };

  const getLanguageTextClassName = () => {
    const baseClasses = "hidden sm:inline text-xs tracking-wide transition-colors duration-300";
    const colorClass = scrolled ? "text-gray-700" : "text-white";

    return `${baseClasses} ${colorClass}`;
  };

  const getChevronClassName = () => {
    const colorClass = scrolled ? "text-gray-500" : "text-white/80";

    return `transition-colors duration-300 ${colorClass}`;
  };

  const getDropdownClassName = () => {
    const baseClasses = `
      absolute right-0 mt-2 z-50 min-w-[200px] sm:min-w-[240px]
      rounded-xl overflow-hidden shadow-md backdrop-blur-xl
    `;

    const scrolledClasses = scrolled
      ? "bg-white/95 border border-gray-200/50"
      : "bg-white/10 border border-white/10";

    return `${baseClasses} ${scrolledClasses}`;
  };

  const getDropdownHeaderClassName = () => {
    const baseClasses = "px-4 py-3 border-b text-xs tracking-wider uppercase";
    const borderColorClass = scrolled ? "border-gray-100 text-gray-600" : "border-white/10 text-gray-200";

    return `${baseClasses} ${borderColorClass}`;
  };

  const getLanguageButtonClassName = (isSelected: boolean) => {
    const baseClasses = `
      w-full flex items-center gap-3 px-4 py-3
      transition-all duration-200
    `;

    const selectedClass = isSelected ? "bg-blue-500/10" : "";

    return `${baseClasses} ${selectedClass}`;
  };

  const getLanguageNameClassName = () => {
    return scrolled ? "text-gray-800" : "text-white";
  };

  const getHoverBackground = () => {
    return scrolled ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)";
  };

  // --------------------------------------------------------------------------
  // RENDER HELPERS
  // --------------------------------------------------------------------------

  const renderChevronIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={getChevronClassName()}
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    );
  };

  const renderCheckmarkIcon = () => {
    return (
      <svg
        className="w-5 h-5 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M5 13l4 4L19 7"
        />
      </svg>
    );
  };

  const renderLanguageOptions = () => {
    return (
      <div className="py-1">
        {LANGUAGES.map((lang, index) => {
          const isSelected = selectedLang.code === lang.code;

          return (
            <motion.button
              key={lang.code}
              onClick={() => changeLanguage(lang)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * ANIMATION_CONFIGS.DROPDOWN_ITEM_DELAY, duration: 0.2 }}
              whileHover={{
                backgroundColor: getHoverBackground(),
                x: 5,
              }}
              whileTap={{ scale: 0.98 }}
              className={getLanguageButtonClassName(isSelected)}
            >
              {/* Flag with indicator */}
              <div className="relative">
                <Image
                  src={lang.flag}
                  alt={lang.name}
                  width={28}
                  height={28}
                  className="rounded-full ring-2 ring-white/20 object-cover"
                />
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 right-1 w-2 h-2 bg-green-500 rounded-full ring-2 ring-white"
                  />
                )}
              </div>

              {/* Language Info */}
              <div className="flex-1 text-left">
                <div className={`text-sm ${getLanguageNameClassName()}`}>
                  {lang.name}
                </div>
                <div className="text-xs text-gray-400">{lang.nativeName}</div>
              </div>

              {/* Checkmark for selected */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={ANIMATION_CONFIGS.CHECKMARK}
                >
                  {renderCheckmarkIcon()}
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    );
  };

  const renderDropdown = () => {
    return (
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={closeDropdown}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={ANIMATION_CONFIGS.SPRING}
              className={getDropdownClassName()}
            >
              {/* Header */}
              <div className={getDropdownHeaderClassName()}>Select Language</div>

              {/* Language Options */}
              {renderLanguageOptions()}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };

  // --------------------------------------------------------------------------
  // RENDER
  // --------------------------------------------------------------------------

  return (
    <div className="relative" ref={dropdownRef}>
      {/* iOS Style Button */}
      <motion.button
        onClick={toggleDropdown}
        whileTap={{ scale: 0.97 }}
        className={getButtonClassName()}
      >
        {/* Language Icon with Ring */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          <Image
            src={selectedLang.flag}
            alt={selectedLang.name}
            width={22}
            height={22}
            className="rounded-full ring-2 ring-white/10 object-cover"
            priority
          />
        </div>

        {/* Language Name (hidden on mobile) */}
        <span className={getLanguageTextClassName()}>
          {selectedLang.code.toUpperCase()}
        </span>

        {/* iOS Style Chevron */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={ANIMATION_CONFIGS.CHEVRON}
        >
          {renderChevronIcon()}
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      {renderDropdown()}

      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden" />
    </div>
  );
}