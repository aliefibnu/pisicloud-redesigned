import { TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideTranslateService(), LanguageService],
    });
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with default language en and return observable', () => {
    const init$ = service.init();
    expect(init$).toBeTruthy();
    expect(service.getLanguage()).toBe('en');
    expect(service.currentLanguage()).toBe('en');
  });

  it('should update currentLanguage on setLanguage', () => {
    service.setLanguage('id');
    expect(service.getLanguage()).toBe('id');
    expect(service.currentLanguage()).toBe('id');
  });
});
