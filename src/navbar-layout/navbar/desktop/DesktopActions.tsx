"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

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
  getCustomizeButtonClasses: (
    scrolled: boolean
  ) => string;
};

export default function DesktopActions({
  scrolled,
  getCustomizeButtonClasses,
}: Props) {
  return (
    <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
      <Link href="/customize-your-journey">
        <button
          className={`
            rounded-lg whitespace-nowrap border border-white/20
            font-extralight tracking-[0.15em]
            transition-all duration-300
            ${getCustomizeButtonClasses(scrolled)}
          `}
        >
          Customize Your Journey
        </button>
      </Link>

      <LanguageSwitcher scrolled={scrolled} />
    </div>
  );
}