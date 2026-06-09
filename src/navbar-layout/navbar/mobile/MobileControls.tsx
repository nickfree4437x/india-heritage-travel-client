"use client";

import { Menu, X } from "lucide-react";

import LanguageSwitcher from "../../language-switcher/LanguageSwitcher";

type Props = {
  scrolled: boolean;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileControls({
  scrolled,
  isOpen,
  setIsOpen,
}: Props) {
  return (
    <div className="flex lg:hidden items-center gap-3 flex-shrink-0">
      <LanguageSwitcher scrolled={scrolled} />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          p-1.5 rounded-lg transition-all duration-300
          ${
            scrolled
              ? "text-gray-800 hover:bg-gray-200/50"
              : "text-white hover:bg-white/20"
          }
        `}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>
  );
}