export interface QuickLinkItem {
  name: string;
  href: string;
  isSection?: boolean;
  sectionId?: string;
}

export interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  hoverClass: string;
}