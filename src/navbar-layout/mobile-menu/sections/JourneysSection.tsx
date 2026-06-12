"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import JourneyDropdown from "../journey/JourneyDropdown";

import {
  ANIMATION_EASING,
} from "../config/constants";

import {
  getChevronClassName,
  getJourneysButtonClassName,
  getJourneysTextClassName,
} from "../helper/utils";

type Props = {
  journeyOpen: boolean;

  setJourneyOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  journeysData: any;

  journeyCategories: any[];

  handleCuratedItemClick: (
    sectionId: string
  ) => void;

  handleNavigationClick: () => void;
};

export default function JourneysSection({
  journeyOpen,
  setJourneyOpen,
  journeysData,
  journeyCategories,
  handleCuratedItemClick,
  handleNavigationClick,
}: Props) {

  const handleJourneysToggle = () => {
    setJourneyOpen(!journeyOpen);
  };

  return (
    <div className="space-y-4">

      {/* Button */}
      <button
        type="button"
        onClick={handleJourneysToggle}
        aria-expanded={journeyOpen}
        aria-controls="journeys-dropdown"
        className={getJourneysButtonClassName()}
      >
        <span
          className={getJourneysTextClassName()}
        >
          Journeys
        </span>

        <motion.div
          aria-hidden="true"
          animate={{
            rotate: journeyOpen ? 180 : 0,
          }}
          transition={{
            duration: 0.45,
            ease: ANIMATION_EASING,
          }}
        >
          <ChevronDown
            aria-hidden="true"
            className={getChevronClassName()}
          />
        </motion.div>
      </button>

      {/* Dropdown */}
      <JourneyDropdown
        journeyOpen={journeyOpen}
        journeysData={journeysData}
        journeyCategories={journeyCategories}
        handleCuratedItemClick={
          handleCuratedItemClick
        }
        handleNavigationClick={
          handleNavigationClick
        }
      />
    </div>
  );
}