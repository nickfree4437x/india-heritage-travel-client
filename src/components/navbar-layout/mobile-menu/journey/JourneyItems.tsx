"use client";

import Link from "next/link";

import { CuratedItem } from "../config/types";

import {
  getMenuItemClassName,
  getArrowClassName,
} from "../helper/utils";

type Props = {
  items: Array<{
    name: string;
    link?: string;
    sectionId?: string;
  }>;

  categoryId: string;

  handleCuratedItemClick: (
    sectionId: string
  ) => void;

  handleNavigationClick: () => void;
};

export default function JourneyItems({
  items,
  categoryId,
  handleCuratedItemClick,
  handleNavigationClick,
}: Props) {
  return (
    <>
      {items.map((item, idx) => {

        // Curated Items
        if (
          categoryId === "curated" &&
          "sectionId" in item
        ) {
          return (
            <button
              key={idx}
              onClick={() =>
                handleCuratedItemClick(
                  (item as CuratedItem).sectionId
                )
              }
              className={getMenuItemClassName()}
            >
              <span>{item.name}</span>

              <span className={getArrowClassName()}>
                →
              </span>
            </button>
          );
        }

        // Regular Links
        return (
          <Link
            key={idx}
            href={item.link || "#"}
            onClick={handleNavigationClick}
            className={getMenuItemClassName()}
          >
            <span>{item.name}</span>

            <span className={getArrowClassName()}>
              →
            </span>
          </Link>
        );
      })}
    </>
  );
}