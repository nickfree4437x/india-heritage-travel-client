// src/components/common/BlogBreadcrumb.tsx

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BlogBreadcrumbProps {
  title: string;
}

export default function BlogBreadcrumb({
  title,
}: BlogBreadcrumbProps) {
  return (
    <div className="border-b border-[#ece6de] bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
            <div className="flex items-center md:ml-4 flex-wrap gap-2 text-[11px] font-[350] md:text-[13px]">

                <Link
                href="/"
                className="
                    text-[#666]
                    hover:text-[#9A7A58]
                    transition-colors hover:underline
                "
                >
                Home
                </Link>

                <ChevronRight
                size={14}
                className="text-[#999]"
                />

                <Link
                href="/blog"
                className="
                    text-[#666]
                    hover:text-[#9A7A58]
                    transition-colors hover:underline
                "
                >
                Blogs
                </Link>

                <ChevronRight
                size={14}
                className="text-[#999]"
                />

                <span className="text-[#9A7A58]">
                {title}
                </span>

            </div>
            </div>
    </div>
  );
}