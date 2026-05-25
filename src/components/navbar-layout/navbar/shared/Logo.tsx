"use client";

import Link from "next/link";
import Image from "next/image";

type Props = {
  scrolled: boolean;
  getLogoSizeClass: (scrolled: boolean) => string;
};

export default function Logo({
  scrolled,
  getLogoSizeClass,
}: Props) {
  return (
    <div className="flex-shrink-0">
      <Link href="/" className="block">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779742768/logo-white_r1ecll.png"
          alt="Logo"
          width={160}
          height={40}
          className={`
            h-auto object-contain transition-all duration-500 ease-out
            ${getLogoSizeClass(scrolled)}
          `}
          priority
        />
      </Link>
    </div>
  );
}