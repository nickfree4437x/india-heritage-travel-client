"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

import { journeysData } from "../data/journeysData";
import { MenuData } from "./config/types";
import {
  OPEN_DELAY,
  CLOSE_DELAY,
  SCROLL_OFFSET,
} from "./config/constants";
import { getDropdownPosition } from "./helpers/utils";

import TriggerButton from "./ui/TriggerButton";
import DropdownContainer from "./ui/DropdownContainer";
import LeftPanel from "./ui/LeftPanel";
import RightPanel from "./ui/RightPanel";

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function JourneysMegaMenu() {
  // --------------------------------------------------------------------------
  // STATE
  // --------------------------------------------------------------------------
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<keyof MenuData | null>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // --------------------------------------------------------------------------
  // REFS
  // --------------------------------------------------------------------------
  const enterTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // --------------------------------------------------------------------------
  // ROUTER
  // --------------------------------------------------------------------------
  const router = useRouter();
  const pathname = usePathname();

  // ==========================================================================
  // EFFECTS
  // ==========================================================================

  // Mount effect
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll/resize events when dropdown is open
  useEffect(() => {
    if (open) {
      updatePosition();

      window.addEventListener("scroll", updatePosition, { passive: true });
      window.addEventListener("resize", updatePosition, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (enterTimeoutRef.current) {
        clearTimeout(enterTimeoutRef.current);
      }
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
    };
  }, []);

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  const updatePosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPos(getDropdownPosition(rect));
    }
  };

  // ==========================================================================
  // HANDLERS
  // ==========================================================================

  const handleMouseEnter = () => {
    // Clear any pending leave timeout
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }

    // Clear any pending enter timeout
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
    }

    // Set new enter timeout
    enterTimeoutRef.current = setTimeout(() => {
      updatePosition();
      setOpen(true);
      setActive("curated");
      enterTimeoutRef.current = null;
    }, OPEN_DELAY);
  };

  const handleMouseLeave = () => {
    // Clear any pending enter timeout
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = null;
    }

    // Clear any pending leave timeout
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }

    // Set new leave timeout
    leaveTimeoutRef.current = setTimeout(() => {
      setOpen(false);
      setActive(null);
      leaveTimeoutRef.current = null;
    }, CLOSE_DELAY);
  };

  const handleMenuMouseEnter = () => {
    // Clear leave timeout when mouse enters the menu
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  };

  const handleMenuMouseLeave = () => {
    // Clear any pending leave timeout
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }

    // Set new leave timeout
    leaveTimeoutRef.current = setTimeout(() => {
      setOpen(false);
      setActive(null);
      leaveTimeoutRef.current = null;
    }, CLOSE_DELAY);
  };

  const handleScroll = (sectionId: string) => {
    if (!sectionId) return;

    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      router.push(`/#${sectionId}`);
    }

    setOpen(false);
  };

  // ==========================================================================
  // DROPDOWN CONTENT
  // ==========================================================================

  const dropdownContent = (
    <AnimatePresence mode="wait">
      {open && (
        <DropdownContainer
          dropdownPos={dropdownPos}
          menuRef={menuRef}
          handleMenuMouseEnter={handleMenuMouseEnter}
          handleMenuMouseLeave={handleMenuMouseLeave}
        >
          <LeftPanel active={active} setActive={setActive} />
          <RightPanel
            active={active}
            journeysData={journeysData}
            handleScroll={handleScroll}
            setOpen={setOpen}
          />
        </DropdownContainer>
      )}
    </AnimatePresence>
  );

  // ==========================================================================
  // RENDER
  // ==========================================================================

  return (
    <div
      ref={triggerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TriggerButton open={open} />

      {isMounted && createPortal(dropdownContent, document.body)}
    </div>
  );
}