"use client";

// ============================================================
// 1. IMPORTS
// ============================================================
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { FaPinterestP } from "react-icons/fa";

// ============================================================
// 2. DATA
// ============================================================
const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61559592375914",
    label: "Facebook",
    icon: Facebook,
    hoverClass: "hover:bg-[#1877F2] hover:border-[#1877F2]",
  },
  {
    href: "https://www.instagram.com/indiaheritagetravel",
    label: "Instagram",
    icon: Instagram,
    hoverClass:
      "hover:bg-gradient-to-tr hover:from-yellow-400 hover:Image via-pink-500 hover:to-purple-600",
  },
  {
    href: "https://youtube.com/@indiaheritagetravel?si=vFEfLrYnv_1DWHqM",
    label: "YouTube",
    icon: Youtube,
    hoverClass: "hover:bg-[#FF0000] hover:border-[#FF0000]",
  },
  {
    href: "https://www.linkedin.com/company/india-heritage-travel/",
    label: "LinkedIn",
    icon: Linkedin,
    hoverClass: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
  },
  {
    href: "https://pin.it/3kPXLj6Jk",
    label: "Pinterest",
    icon: FaPinterestP,
    hoverClass: "hover:bg-[#E60023] hover:border-[#E60023]",
    iconSize: 12,
  },
] as const;

// ============================================================
// 3. TYPES
// ============================================================
type SocialLink = typeof SOCIAL_LINKS[number];

// ============================================================
// 4. COMPONENT
// ============================================================
export default function FooterSocialIcons() {
  return (
    <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 mt-2 md:ml-4">
      {SOCIAL_LINKS.map((social) => (
        <SocialIcon key={social.label} social={social} />
      ))}
    </div>
  );
}

// ============================================================
// 5. SUB-COMPONENT
// ============================================================
function SocialIcon({ social }: { social: SocialLink }) {
  const Icon = social.icon;
  const iconSize = "iconSize" in social ? social.iconSize : 13;

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit India Heritage Travel ${social.label} page`}
      title={social.label}
      className={`
        w-9 h-9 sm:w-8 sm:h-8
        flex items-center justify-center
        rounded-full
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-md
        ${social.hoverClass}
        hover:-translate-y-1
        transition-all duration-500
        group
      `}
    >
      <Icon
        aria-hidden="true"
        size={iconSize}
        className="
          text-[#d8d0c5]
          group-hover:text-white
          transition-all duration-300
        "
      />
    </a>
  );
}