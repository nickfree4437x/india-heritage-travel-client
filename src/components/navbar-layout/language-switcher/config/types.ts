export interface Language {
  code: string;
  flag: string;
  name: string;
  nativeName: string;
}

export interface LanguageSwitcherProps {
  scrolled?: boolean;
}