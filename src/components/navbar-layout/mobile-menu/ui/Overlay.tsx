"use client";

import { motion } from "framer-motion";
import {
  ANIMATION_DURATIONS,
  ANIMATION_EASING,
} from "../config/constants";

type Props = {
  onClose: () => void;
};

export default function Overlay({ onClose }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: ANIMATION_DURATIONS.OVERLAY,
        ease: ANIMATION_EASING,
      }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm"
      style={{ zIndex: 9998 }}
    />
  );
}