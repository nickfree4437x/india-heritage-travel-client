"use client";

import { motion } from "framer-motion";
import {
  ANIMATION_DURATIONS,
  ANIMATION_EASING,
} from "../config/constants";

export default function Sidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{
        type: "tween",
        duration: ANIMATION_DURATIONS.SIDEBAR,
        ease: ANIMATION_EASING,
      }}
      className="
        fixed right-0 top-0 bottom-0
        w-full sm:w-[400px]
        bg-[#fcfaf7]
        shadow-[0_10px_60px_rgba(0,0,0,0.18)]
        flex flex-col
      "
      style={{ zIndex: 9999 }}
    >
      {children}
    </motion.div>
  );
}