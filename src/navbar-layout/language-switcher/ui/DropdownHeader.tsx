"use client";

import { getDropdownHeaderClassName } from "../helpers/utils";

type Props = {
  scrolled?: boolean;
};

export default function DropdownHeader({
  scrolled,
}: Props) {
  return (
    <div className={getDropdownHeaderClassName(scrolled)}>
      Select Language
    </div>
  );
}