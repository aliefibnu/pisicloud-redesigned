import { inject, Service } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Language = 'en' | 'id' | 'zh' | 'ja' | 'ko';

@Service()
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly storageKey = 'app-lang';
  private readonly supportedLangs: Language[] = ['en', 'id', 'zh', 'ja', 'ko'];

  init() {
    const savedLang = localStorage.getItem(this.storageKey);
    const browserLang = this.translate.getBrowserLang();

    const language = savedLang ?? browserLang ?? 'en';

    if (this.supportedLangs.includes(language as Language)) return this.translate.use(language);

    return this.translate.use('en');
  }

  setLanguage(language: Language): void {
    this.translate.use(language);
    localStorage.setItem(this.storageKey, language);
  }

  getLanguage(): Language {
    return (this.translate.currentLang || 'en') as unknown as Language;
  }
}
