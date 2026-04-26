"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Language {
  code: string;
  flag: string;
  name: string;
  nativeName: string;
}

export default function LanguageSwitcher({ scrolled }: { scrolled?: boolean }) {
  const [open, setOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>({
    code: "en",
    flag: "/flags/uk.png",
    name: "English",
    nativeName: "English",
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = [
    { code: "en", flag: "/flags/uk.png", name: "English", nativeName: "English" },
    { code: "es", flag: "/flags/spain.png", name: "Spanish", nativeName: "Español" },
    { code: "it", flag: "/flags/italy.png", name: "Italian", nativeName: "Italiano" },
    { code: "pt", flag: "/flags/portugal.png", name: "Portuguese", nativeName: "Português" },
  ];

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

  const changeLanguage = (lang: Language) => {
    setSelectedLang(lang);
    setOpen(false);

    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = lang.code;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* iOS Style Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.97 }}
        className={`
          group relative flex items-center gap-2.5 px-4 py-2.5 rounded-2xl
          transition-all duration-300 ease-out
          ${scrolled 
            ? "bg-white/90 border border-gray-200/80 shadow-sm" 
            : "bg-white/5 border border-white/20 backdrop-blur-sm hover:bg-white/10"
          }
        `}
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

        {/* Language Name (Optional - hidden on mobile) */}
        <span className={`
          hidden sm:inline text-sm tracking-wide
          transition-colors duration-300
          ${scrolled ? "text-gray-700" : "text-white"}
        `}>
          {selectedLang.code.toUpperCase()}
        </span>

        {/* iOS Style Chevron */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
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
            className={`
              transition-colors duration-300
              ${scrolled ? "text-gray-500" : "text-white/80"}
            `}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.div>
      </motion.button>

      {/* iOS Style Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30,
                mass: 0.8
              }}
              className={`
                absolute right-0 mt-2 z-50 min-w-[200px] sm:min-w-[240px]
                rounded-xl overflow-hidden
                shadow-md
                backdrop-blur-xl
                ${scrolled 
                  ? "bg-white/95 border border-gray-200/50" 
                  : "bg-white/10 border border-white/10"
                }
              `}
            >
              {/* Header with blur effect */}
              <div className={`
                px-4 py-3 border-b text-xs tracking-wider uppercase
                ${scrolled 
                  ? "border-gray-100 text-gray-600" 
                  : "border-white/10 text-gray-200"
                }
              `}>
                Select Language
              </div>

              {/* Language Options */}
              <div className="py-1">
                {languages.map((lang, index) => (
                  <motion.button
                    key={lang.code}
                    onClick={() => changeLanguage(lang)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03, duration: 0.2 }}
                    whileHover={{ 
                      backgroundColor: scrolled ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)",
                      x: 5 
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3
                      transition-all duration-200
                      ${selectedLang.code === lang.code ? "bg-blue-500/10" : ""}
                    `}
                  >
                    {/* Flag with subtle animation on hover */}
                    <div className="relative">
                      <Image
                        src={lang.flag}
                        alt={lang.name}
                        width={28}
                        height={28}
                        className="rounded-full ring-2 ring-white/20 object-cover"
                      />
                      {selectedLang.code === lang.code && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 right-1 w-2 h-2 bg-green-500 rounded-full ring-2 ring-white"
                        />
                      )}
                    </div>

                    {/* Language Info */}
                    <div className="flex-1 text-left">
                      <div className={`
                        text-sm
                        ${scrolled ? "text-gray-800" : "text-white"}
                      `}>
                        {lang.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {lang.nativeName}
                      </div>
                    </div>

                    {/* Checkmark for selected */}
                    {selectedLang.code === lang.code && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      >
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
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden" />
    </div>
  );
}