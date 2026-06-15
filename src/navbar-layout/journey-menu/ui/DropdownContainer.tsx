"use client";

import { motion } from "framer-motion";
import { EASE } from "../config/constants";

export default function DropdownContainer({
  children,
  dropdownPos,
  menuRef,
  handleMenuMouseEnter,
  handleMenuMouseLeave,
}: any) {
  return (
    <motion.div
      ref={menuRef}
      initial={{
        opacity: 0,
        y: -15,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -15,
        scale: 0.95,
      }}
      transition={{
        duration: 0.6,
        delay: 0.05,
        ease: EASE,
      }}
      onMouseEnter={
        handleMenuMouseEnter
      }
      onMouseLeave={
        handleMenuMouseLeave
      }
      style={{
        position: "fixed",
        top: dropdownPos.top,
        left: dropdownPos.left,
        zIndex: 9999999,
      }}
    >
      <div
        className="
          flex bg-[#C2A985]/95
          backdrop-blur-sm rounded-sm
          shadow-md overflow-hidden
        "
      >
        {children}
      </div>
    </motion.div>
  );
}