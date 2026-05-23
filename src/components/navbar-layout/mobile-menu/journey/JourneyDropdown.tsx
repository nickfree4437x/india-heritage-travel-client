"use client";

import { motion, AnimatePresence } from "framer-motion";

import JourneyItems from "./JourneyItems";

import {
  ANIMATION_DURATIONS,
  ANIMATION_EASING,
} from "../config/constants";

import {
  getCategoryTitleClassName,
} from "../helper/utils";

type Props = {
  journeyOpen: boolean;

  journeysData: any;

  journeyCategories: any[];

  handleCuratedItemClick: (
    sectionId: string
  ) => void;

  handleNavigationClick: () => void;
};

export default function JourneyDropdown({
  journeyOpen,
  journeysData,
  journeyCategories,
  handleCuratedItemClick,
  handleNavigationClick,
}: Props) {
  return (
    <AnimatePresence>
      {journeyOpen && (
        <motion.div
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: "auto",
            opacity: 1,
          }}
          exit={{
            height: 0,
            opacity: 0,
          }}
          transition={{
            duration:
              ANIMATION_DURATIONS.DROPDOWN,
            ease: ANIMATION_EASING,
          }}
          className="overflow-hidden"
        >
          <div className="mt-2 space-y-4 border-l border-[#ece4d8] pl-2">

            {journeyCategories.map((category) => {

              const items =
                journeysData[
                  category.id as keyof typeof journeysData
                ];

              return (
                <div
                  key={category.id}
                  className="space-y-4"
                >
                  {/* Category Title */}
                  <p
                    className={getCategoryTitleClassName()}
                  >
                    {category.title}
                  </p>

                  {/* Category Items */}
                  <div className="space-y-1">
                    <JourneyItems
                      items={items}
                      categoryId={category.id}
                      handleCuratedItemClick={
                        handleCuratedItemClick
                      }
                      handleNavigationClick={
                        handleNavigationClick
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}