"use client";

import { getChevronClassName } from "../helpers/utils";

type Props = {
  scrolled?: boolean;
};

export default function ChevronIcon({
  scrolled,
}: Props) {
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
      className={getChevronClassName(scrolled)}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}