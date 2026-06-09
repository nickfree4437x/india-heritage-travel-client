"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { MenuData } from "../config/types";

import { EASE } from "../config/constants";

type Props = {
  active: keyof MenuData;

  journeysData: MenuData;

  handleScroll: (
    sectionId: string
  ) => void;

  setOpen: (value: boolean) => void;
};

export default function MenuItems({
  active,
  journeysData,
  handleScroll,
  setOpen,
}: Props) {

  return (
    <>
      {journeysData[active].map(
        (item, idx) => {

          const content = (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                x: -12,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.1 + idx * 0.08,
                duration: 0.45,
                ease: EASE,
              }}
              className="
                group rounded-lg
                transition-all duration-300 ease-out
                hover:bg-white/10
              "
            >
              <div className="px-4 py-2 cursor-pointer">
                <span
                  className="
                    text-[11px] xl:text-[11px]
                    text-white font-[300]
                    tracking-[0.1em]
                    whitespace-nowrap
                    transition-all duration-300 ease-out
                  "
                >
                  {item.name}
                </span>
              </div>
            </motion.div>
          );

          // Curated
          if (active === "curated") {
            return (
              <button
                key={idx}
                onClick={() => {

                  if (
                    "sectionId" in item
                  ) {
                    handleScroll(
                      item.sectionId
                    );
                  }
                }}
                className="
                  w-full text-left
                "
              >
                {content}
              </button>
            );
          }

          // Regular
          return (
            <Link
              key={idx}
              href={item.link}
              onClick={() =>
                setOpen(false)
              }
              className="block"
            >
              {content}
            </Link>
          );
        }
      )}
    </>
  );
}