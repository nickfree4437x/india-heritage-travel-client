"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS } from "../config/constants";
import { getNavLinkClass } from "../helper/utils";

type Props = {
  handleNavigationClick: () => void;
};

export default function RegularNavLinks({
  handleNavigationClick,
}: Props) {
  const pathname = usePathname();

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
}