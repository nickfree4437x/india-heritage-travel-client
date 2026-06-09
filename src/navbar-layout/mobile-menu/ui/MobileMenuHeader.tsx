"use client";

import { X } from "lucide-react";

type Props = {
  onClose: () => void;
};

export default function MobileMenuHeader({
  onClose,
}: Props) {
  return (
    <div className="px-7 py-5 border-b border-[#eee7dc]">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[20px] font-light tracking-[0.08em] text-[#2d2d2d]">
            Menu
          </h2>

          <p className="text-[10px] text-[#9f978c] tracking-[0.16em] mt-1 uppercase">
            Discover your journey
          </p>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Menu"
          className="
            w-10 h-10 flex items-center justify-center rounded-full
            bg-white border border-[#ece5da] hover:bg-[#f7f2ea]
            transition-all duration-300
          "
        >
          <X size={17} className="text-[#7c7468]" />
        </button>
      </div>
    </div>
  );
}