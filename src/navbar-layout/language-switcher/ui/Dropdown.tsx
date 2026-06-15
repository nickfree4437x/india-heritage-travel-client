"use client";

import { motion } from "framer-motion";
import { ANIMATION_CONFIGS } from "../config/constants";
import { getDropdownClassName } from "../helpers/utils";

export default function Dropdown({
  children,
  scrolled,
}: {
  children: React.ReactNode;
  scrolled?: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -10,
        scale: 0.95,
      }}
      transition={ANIMATION_CONFIGS.SPRING}
      className={getDropdownClassName(scrolled)}
    >
      {children}
    </motion.div>
  );
}