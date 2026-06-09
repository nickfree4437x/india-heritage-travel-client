// components/mobile-menu/MobileMenu.tsx

"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { journeysData, journeyCategories } from "../data/journeysData";

import Overlay from "./ui/Overlay";
import Sidebar from "./ui/Sidebar";
import MobileMenuHeader from "./ui/MobileMenuHeader";

import JourneysSection from "./sections/JourneysSection";
import RegularNavLinks from "./sections/RegularNavLinks";
import CTAButton from "./sections/CTAButton";

import {
  ANIMATION_DURATIONS,
} from "./config/constants";

import { MobileMenuProps } from "./config/types";

export default function MobileMenu({
  isOpen,
  onClose,
  handleScroll,
}: MobileMenuProps) {
  const [journeyOpen, setJourneyOpen] =
    useState<boolean>(false);

  const handleCuratedItemClick = (
    sectionId: string
  ) => {
    onClose();

    setJourneyOpen(false);

    setTimeout(() => {
      handleScroll(sectionId);
    }, ANIMATION_DURATIONS.SCROLL_DELAY);
  };

  const handleNavigationClick = () => {
    setTimeout(
      () => onClose(),
      ANIMATION_DURATIONS.CLOSE_DELAY
    );
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <Overlay onClose={onClose} />

          <Sidebar>
            <MobileMenuHeader onClose={onClose} />

            <div className="flex-1 overflow-y-auto px-7 py-8">
              <div className="space-y-4">

                <JourneysSection
                  journeyOpen={journeyOpen}
                  setJourneyOpen={setJourneyOpen}
                  journeysData={journeysData}
                  journeyCategories={journeyCategories}
                  handleCuratedItemClick={
                    handleCuratedItemClick
                  }
                  handleNavigationClick={
                    handleNavigationClick
                  }
                />

                <RegularNavLinks
                  handleNavigationClick={
                    handleNavigationClick
                  }
                />

                <CTAButton
                  handleNavigationClick={
                    handleNavigationClick
                  }
                />
              </div>
            </div>
          </Sidebar>
        </>
      )}
    </AnimatePresence>
  );
}