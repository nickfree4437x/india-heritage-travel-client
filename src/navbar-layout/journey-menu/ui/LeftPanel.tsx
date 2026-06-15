"use client";

import { journeyCategories } from "../../data/journeysData";
import { MenuData } from "../config/types";
import CategoryButton from "./CategoryButton";

type Props = {
  active: keyof MenuData | null;

  setActive: (
    value: keyof MenuData
  ) => void;
};

export default function LeftPanel({
  active,
  setActive,
}: Props) {
  return (
    <div
      className="
        w-48 flex-shrink-0 py-3
      "
    >
      <div className="space-y-1 px-2">

        {journeyCategories.map((item) => (
          <CategoryButton
            key={item.id}
            item={item}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
    </div>
  );
}