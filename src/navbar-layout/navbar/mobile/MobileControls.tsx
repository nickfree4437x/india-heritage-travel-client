"use client";

import dynamic from "next/dynamic";
import { Menu, X } from "lucide-react";

const LanguageSwitcher = dynamic(
  () =>
    import(
      "../../language-switcher/LanguageSwitcher"
    ),
  {
    ssr: false,
  }
);

type Props = {
  scrolled: boolean;
  isOpen: boolean;
  setIsOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
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
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={
          isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className={`
          p-1.5 rounded-lg transition-all duration-300
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#9c6b2f]
          focus-visible:ring-offset-2
          ${
            scrolled
              ? "text-gray-800 hover:bg-gray-200/50"
              : "text-white hover:bg-white/20"
          }
        `}
      >
        {isOpen ? (
          <X
            size={22}
            aria-hidden="true"
          />
        ) : (
          <Menu
            size={22}
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
}