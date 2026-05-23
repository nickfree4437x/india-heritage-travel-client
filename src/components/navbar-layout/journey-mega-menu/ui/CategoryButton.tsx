"use client";

import { motion } from "framer-motion";

import { MenuData } from "../config/types";

type Props = {
  item: {
    id: string;
    title: string;
  };

  active: keyof MenuData | null;

  setActive: (
    value: keyof MenuData
  ) => void;
};

export default function CategoryButton({
  item,
  active,
  setActive,
}: Props) {

  const isActive = active === item.id;

  return (
    <motion.button
      onMouseEnter={() =>
        setActive(item.id as keyof MenuData)
      }
      transition={{
        duration: 0.3,
      }}
      className={`
        relative w-full cursor-pointer
        rounded-lg transition-all duration-300 ease-out
        ${
          isActive
            ? "bg-white/20 shadow-sm"
            : "hover:bg-white/10"
        }
      `}
    >
      <div className="px-4 py-2">
        <span
          className={`
            text-[11px] xl:text-[11px]
            font-[300] tracking-[0.1em]
            whitespace-nowrap transition-all
            duration-300 ease-out
            ${
              isActive
                ? "text-white"
                : "text-white/80"
            }
          `}
        >
          {item.title}
        </span>
      </div>
    </motion.button>
  );
}