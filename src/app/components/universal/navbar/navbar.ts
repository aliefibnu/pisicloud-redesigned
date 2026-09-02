import {
  Component,
  DestroyRef,
  DOCUMENT,
  effect,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FeaturesMenu } from './features-menu/features-menu';
import { ResourcesMenu } from './resources-menu/resources-menu';
import {
  LanguageMenu,
  type LanguageOption,
  SUPPORTED_LANGUAGES,
} from './language-menu/language-menu';

export { type LanguageOption, SUPPORTED_LANGUAGES };

export type ActiveNavMenu = 'features' | 'resources' | 'language' | null;

@Component({
  selector: 'universal-navbar',
  imports: [RouterLink, NgOptimizedImage, FeaturesMenu, ResourcesMenu, LanguageMenu],
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
  readonly activeMenu = signal<ActiveNavMenu>(null);

  readonly selectedLanguage = signal<LanguageOption>(
    SUPPORTED_LANGUAGES.find((l) => l.code === 'en') ?? SUPPORTED_LANGUAGES[0],
  );

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

  toggleMenu(menu: 'features' | 'resources' | 'language'): void {
    this.activeMenu.update((curr) => (curr === menu ? null : menu));
  }

  closeMenus(): void {
    this.activeMenu.set(null);
  }

  onLanguageSelected(lang: LanguageOption): void {
    this.selectedLanguage.set(lang);
    this.closeMenus();
  }

  onEscape(): void {
    this.closeMobileMenu();
    this.closeMenus();
  }

  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    if (!target?.closest('[data-nav-dropdown]')) {
      this.closeMenus();
    }
  }
}
