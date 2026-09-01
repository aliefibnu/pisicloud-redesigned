import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

export interface NavItem {
  readonly label: string;
  readonly route?: string;
  readonly href?: string;
}

@Component({
  selector: 'universal-navbar',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './navbar.html',
  styles: ``,
  host: {
    class: 'block w-full sticky top-0 z-50',
  },
})
export class Navbar {
  readonly isMobileMenuOpen = signal(false);
  readonly isLanguageMenuOpen = signal(false);
  readonly currentLanguage = signal<'English' | 'Bahasa Indonesia'>('English');

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

  setLanguage(lang: 'English' | 'Bahasa Indonesia'): void {
    this.currentLanguage.set(lang);
    this.isLanguageMenuOpen.set(false);
  }
}
