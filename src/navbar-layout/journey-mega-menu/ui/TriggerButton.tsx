"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { EASE } from "../config/constants";

type Props = {
  open: boolean;
};

export default function TriggerButton({
  open,
}: Props) {
  return (
    <button
      className="
        group flex items-center gap-1.5
        text-[11px] tracking-[0.1em]
        text-white/90 hover:text-white
        transition-all duration-300 ease-out
      "
    >
      <span>Journeys</span>

      <motion.div
        animate={{
          rotate: open ? 180 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: EASE,
        }}
      >
        <ChevronDown
          size={13}
          className="
            opacity-60
            group-hover:opacity-100
            transition-opacity duration-300
          "
        />
      </motion.div>
    </button>
  );
}