"use client";

import Link from "next/link";

import { getCtaButtonClassName } from "../helper/utils";

type Props = {
  handleNavigationClick: () => void;
};

export default function CTAButton({
  handleNavigationClick,
}: Props) {
  return (
    <div className="pt-4">
      <Link href="/customize-your-journey">
        <button
          onClick={handleNavigationClick}
          className={getCtaButtonClassName()}
        >
          Customize Your Journey
        </button>
      </Link>
    </div>
  );
}