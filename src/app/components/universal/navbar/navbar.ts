import {
  Component,
  computed,
  DestroyRef,
  DOCUMENT,
  effect,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

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
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'zh', name: '中国', flag: '🇨🇳' },
  { code: 'ja', name: '日本', flag: '🇯🇵' },
  { code: 'ko', name: '한국', flag: '🇰🇷' },
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
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

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

  constructor() {
    effect(() => {
      const isOpen = this.isMobileMenuOpen();
      if (isPlatformBrowser(this.platformId)) {
        if (isOpen) {
          this.document.body.style.overflow = 'hidden';
          this.document.documentElement.style.overflow = 'hidden';
        } else {
          this.document.body.style.overflow = '';
          this.document.documentElement.style.overflow = '';
        }
      }
    });

    this.destroyRef.onDestroy(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.document.body.style.overflow = '';
        this.document.documentElement.style.overflow = '';
      }
    });
  }

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
