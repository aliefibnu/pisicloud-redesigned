import { inject, PLATFORM_ID, Service } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

export type Language = 'en' | 'id' | 'zh' | 'ja' | 'ko';

@Service()
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly translate = inject(TranslateService);
  private readonly storageKey = 'app-lang';
  private readonly supportedLangs: Language[] = ['en', 'id', 'zh', 'ja', 'ko'];

  init() {
    let language = 'en';

    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem(this.storageKey);
      const browserLang = this.translate.getBrowserLang();
      language = savedLang ?? browserLang ?? 'en';
    }

    if (this.supportedLangs.includes(language as Language)) {
      return this.translate.use(language);
    }

    return this.translate.use('en');
  }

  setLanguage(language: Language): void {
    this.translate.use(language);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, language);
    }
  }

  getLanguage(): Language {
    return (this.translate.currentLang || 'en') as unknown as Language;
  }
}
