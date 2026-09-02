import { Component, computed, input, output } from '@angular/core';

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
  selector: 'navbar-language-menu',
  imports: [],
  templateUrl: './language-menu.html',
  styles: ``,
  host: {
    class: 'block',
  },
})
export class LanguageMenu {
  readonly isOpen = input(false);
  readonly variant = input<'desktop' | 'mobile'>('desktop');
  readonly selectedLanguage = input<LanguageOption>(
    SUPPORTED_LANGUAGES.find((l) => l.code === 'en') ?? SUPPORTED_LANGUAGES[0],
  );

  readonly menuToggled = output<void>();
  readonly menuClosed = output<void>();
  readonly languageChanged = output<LanguageOption>();

  readonly languages = SUPPORTED_LANGUAGES;
  readonly otherLanguages = computed(() =>
    this.languages.filter((lang) => lang.code !== this.selectedLanguage().code),
  );

  toggleMenu(): void {
    this.menuToggled.emit();
  }

  selectLanguage(lang: LanguageOption): void {
    this.languageChanged.emit(lang);
    this.menuClosed.emit();
  }
}
