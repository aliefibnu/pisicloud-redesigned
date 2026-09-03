import { inject, PLATFORM_ID, Service, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

export type Language = 'en' | 'id' | 'zh' | 'ja' | 'ko';

@Service()
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly translate = inject(TranslateService);
  private readonly storageKey = 'app-lang';
  private readonly supportedLangs: Language[] = ['en', 'id', 'zh', 'ja', 'ko'];

  readonly currentLanguage = signal<Language>('en');

  init() {
    let language = 'en';

    if (isPlatformBrowser(this.platformId) && typeof localStorage !== 'undefined') {
      const savedLang = localStorage.getItem(this.storageKey);
      const browserLang = this.translate.getBrowserLang();
      language = savedLang ?? browserLang ?? 'en';
    }

    const selected = this.supportedLangs.includes(language as Language)
      ? (language as Language)
      : 'en';

    this.currentLanguage.set(selected);
    return this.translate.use(selected);
  }

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
    this.translate.use(language);
    if (isPlatformBrowser(this.platformId) && typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, language);
    }
  }

  getLanguage(): Language {
    return this.currentLanguage();
  }
}
