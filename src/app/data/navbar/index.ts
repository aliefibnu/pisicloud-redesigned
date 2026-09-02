import { NavbarContent, SupportedLanguageCode } from './navbar.model';
import { enNavbar } from './en';
import { idNavbar } from './id';
import { zhNavbar } from './zh';
import { jaNavbar } from './ja';
import { koNavbar } from './ko';

export * from './navbar.model';
export { enNavbar, idNavbar, zhNavbar, jaNavbar, koNavbar };

export const NAVBAR_CONTENT: Record<SupportedLanguageCode, NavbarContent> = {
  en: enNavbar,
  id: idNavbar,
  zh: zhNavbar,
  ja: jaNavbar,
  ko: koNavbar,
};
