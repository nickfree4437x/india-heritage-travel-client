"use client";

import Link from "next/link";

import JourneysMegaMenu from "../../journey-mega-menu/JourneysMegaMenu";
import { NAV_LINKS } from "../config/constants";

type Props = {
  pathname: string;
  scrolled: boolean;
  getNavLinkClasses: (
    scrolled: boolean,
    isActive: boolean
  ) => string;
  getJourneysMegaMenuClasses: (
    pathname: string
  ) => string;
};

export default function DesktopNav({
  pathname,
  scrolled,
  getNavLinkClasses,
  getJourneysMegaMenuClasses,
}: Props) {
  return (
    <nav
      aria-label="Main Navigation"
      className="hidden lg:flex items-center gap-1 xl:gap-2 ml-6 xl:ml-10"
      style={{ overflow: "visible" }}
    >
      <div
        className={getJourneysMegaMenuClasses(pathname)}
        style={{ overflow: "visible", zIndex: 99999 }}
      >
        <JourneysMegaMenu />
      </div>

      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={getNavLinkClasses(scrolled, isActive)}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}