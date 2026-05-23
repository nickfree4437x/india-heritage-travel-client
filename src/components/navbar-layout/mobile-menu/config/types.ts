export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrolled: boolean;
  handleScroll: (sectionId: string) => void;
}

export interface CuratedItem {
  name: string;
  sectionId: string;
}