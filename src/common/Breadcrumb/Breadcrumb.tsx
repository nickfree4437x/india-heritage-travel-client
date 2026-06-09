// components/common/Breadcrumb.tsx

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  title: string;
}

export default function Breadcrumb({
  title,
}: BreadcrumbProps) {
  return (
    <div className="border-b border-[#ece6de] bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center gap-2 text-[11px] font-[350] md:text-[13px]">
          <Link
            href="/"
            className="
              text-gray-500
              hover:text-[#9A7A58]
              transition-colors hover:underline
            "
          >
            Home
          </Link>

          <ChevronRight
            size={15}
            className="text-gray-400"
          />

          <span className="text-[#9A7A58]">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}