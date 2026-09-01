import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

export interface NavItem {
  readonly label: string;
  readonly route?: string;
  readonly href?: string;
}

export interface LanguageOption {
  readonly code: string;
  readonly name: string;
  readonly flag: string;
}

export const SUPPORTED_LANGUAGES: readonly LanguageOption[] = [
  { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'zh', name: '中国', flag: '🇨🇳' },
  { code: 'ja', name: '日本', flag: '🇯🇵' },
  { code: 'ko', name: '한국', flag: '🇰🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
];

@Component({
  selector: 'universal-navbar',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './navbar.html',
  styles: ``,
  host: {
    class: 'block w-full sticky top-0 z-50',
    '(keydown.escape)': 'onEscape()',
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class Navbar {
  readonly isMobileMenuOpen = signal(false);
  readonly isLanguageMenuOpen = signal(false);

  readonly languages = SUPPORTED_LANGUAGES;
  readonly selectedLanguage = signal<LanguageOption>(
    SUPPORTED_LANGUAGES.find((l) => l.code === 'en') ?? SUPPORTED_LANGUAGES[0],
  );

  readonly otherLanguages = computed(() =>
    this.languages.filter((lang) => lang.code !== this.selectedLanguage().code),
  );

  readonly navItems: readonly NavItem[] = [
    { label: 'Features', route: '/feature' },
    { label: 'Resources', href: '#resources' },
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  toggleLanguageMenu(): void {
    this.isLanguageMenuOpen.update((open) => !open);
  }

  setLanguage(lang: LanguageOption): void {
    this.selectedLanguage.set(lang);
    this.isLanguageMenuOpen.set(false);
  }

  onEscape(): void {
    this.closeMobileMenu();
    this.isLanguageMenuOpen.set(false);
  }

  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    if (!target?.closest('[data-language-dropdown]')) {
      this.isLanguageMenuOpen.set(false);
    }
  }
}
