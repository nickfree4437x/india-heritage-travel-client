"use client";

import { motion, AnimatePresence } from "framer-motion";

import { journeyCategories } from "../../data/journeysData";

import { MenuData } from "../config/types";
import { EASE } from "../config/constants";
import MenuItems from "../sections/MenuItems";

type Props = {
  active: keyof MenuData | null;

  journeysData: MenuData;

  handleScroll: (
    sectionId: string
  ) => void;

  setOpen: (value: boolean) => void;
};

export default function RightPanel({
  active,
  journeysData,
  handleScroll,
  setOpen,
}: Props) {
  return (
    <div
      className="
        w-56 flex-shrink-0
        bg-black/10 py-3
      "
    >
      <AnimatePresence mode="wait">

        {active && (
          <motion.div
            key={active}
            initial={{
              opacity: 0,
              x: -15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -15,
            }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: EASE,
            }}
            className="px-3 space-y-1"
          >
            {/* Header */}
            <div
              className="
                px-4 pb-3 mb-2
                border-b border-white/15
              "
            >
              <p
                className="
                  text-[10px]
                  uppercase tracking-[0.2em]
                  text-white/50 font-light
                "
              >
                {
                  journeyCategories.find(
                    (c) =>
                      c.id === active
                  )?.title
                }
              </p>
            </div>

            {/* Items */}
            <MenuItems
              active={active}
              journeysData={journeysData}
              handleScroll={
                handleScroll
              }
              setOpen={setOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}