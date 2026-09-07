import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { Navbar } from './navbar';
import { LanguageService } from '../../../core/language.service';
import { NAVBAR_FEATURES, NAVBAR_RESOURCES } from '../../../data/navbar';

describe('UniversalNavbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;
  let languageService: LanguageService;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [
        provideRouter([]),
        provideTranslateService({
          fallbackLang: 'en',
        }),
        LanguageService,
      ],
    }).compileComponents();

    languageService = TestBed.inject(LanguageService);
    translateService = TestBed.inject(TranslateService);

    translateService.setTranslation('en', {
      UNIVERSAL: {
        NAVBAR: {
          FEATURES_LABEL: 'Features',
          RESOURCES_LABEL: 'Resources',
          CONTACT_US: 'Contact Us',
          LANGUAGES_LABEL: 'Languages',
          ARIA: {
            FEATURES_MENU: 'Features navigation menu',
            RESOURCES_MENU: 'Resources navigation menu',
            LANGUAGE_MENU: 'Select Language',
            MOBILE_NAV: 'Mobile Navigation Menu',
            TOGGLE_NAV: 'Toggle navigation menu',
            CLOSE_NAV: 'Close navigation menu',
          },
          FEATURES_MENU: {
            TITLE: 'Features',
            ITEMS: {
              RECRUITMENT: {
                TITLE: 'Recruitment',
                DESC: 'New employee recruitment process',
              },
            },
          },
          RESOURCES_MENU: {
            TITLE: 'Resources',
            ITEMS: {
              ABOUT: {
                TITLE: 'About PISICloud',
                DESC: 'Get to know PISICloud in depth.',
              },
            },
          },
        },
      },
    });
    translateService.setTranslation('id', {
      UNIVERSAL: {
        NAVBAR: {
          FEATURES_LABEL: 'Fitur',
          RESOURCES_LABEL: 'Sumber Daya',
          CONTACT_US: 'Hubungi Kami',
          LANGUAGES_LABEL: 'Bahasa',
        },
      },
    });
    translateService.use('en');

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create navbar successfully', () => {
    expect(component).toBeTruthy();
  });

  it('should have 12 features and 3 resources configured in navbar data', () => {
    expect(NAVBAR_FEATURES.length).toBe(12);
    expect(NAVBAR_RESOURCES.length).toBe(3);
  });

  it('should render translated contact button text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const contactBtn = compiled.querySelector('a[href="#contact"]');
    expect(contactBtn?.textContent).toContain('Contact Us');
  });

  it('should toggle mobile menu', () => {
    expect(component.isMobileMenuOpen()).toBe(false);
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen()).toBe(true);
    component.closeMobileMenu();
    expect(component.isMobileMenuOpen()).toBe(false);
  });

  it('should toggle and close navigation menus', () => {
    expect(component.activeMenu()).toBeNull();
    component.toggleMenu('features');
    expect(component.activeMenu()).toBe('features');
    component.toggleMenu('features');
    expect(component.activeMenu()).toBeNull();

    component.toggleMenu('resources');
    expect(component.activeMenu()).toBe('resources');
    component.closeMenus();
    expect(component.activeMenu()).toBeNull();
  });

  it('should update language and sync with LanguageService when onLanguageSelected is called', () => {
    const idOption = { code: 'id', name: 'Indonesia', flag: '🇮🇩' };
    component.onLanguageSelected(idOption);
    fixture.detectChanges();

    expect(languageService.getLanguage()).toBe('id');
    expect(component.selectedLanguage().code).toBe('id');
    expect(component.activeMenu()).toBeNull();

    const compiled = fixture.nativeElement as HTMLElement;
    const contactBtn = compiled.querySelector('a[href="#contact"]');
    expect(contactBtn?.textContent).toContain('Hubungi Kami');
  });

  it('should close mobile menu and active dropdown on Escape key', () => {
    component.isMobileMenuOpen.set(true);
    component.activeMenu.set('features');

    component.onEscape();

    expect(component.isMobileMenuOpen()).toBe(false);
    expect(component.activeMenu()).toBeNull();
  });

  it('should keep mobile sidebar outside of header to prevent backdrop-filter containing block trap', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const sidebarInsideHeader = compiled.querySelector('header aside#mobile-sidebar');
    const sidebar = compiled.querySelector('aside#mobile-sidebar');

    expect(sidebarInsideHeader).toBeNull();
    expect(sidebar).toBeTruthy();
  });

  it('should toggle backdrop-blur-md and translucent background on header when scrolled past viewport', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('header');

    // Default: not scrolled past viewport
    expect(header?.classList.contains('bg-[#eef4f8]')).toBe(true);
    expect(header?.classList.contains('backdrop-blur-md')).toBe(false);

    // Scrolled past viewport
    component.isScrolledPastViewport.set(true);
    fixture.detectChanges();

    expect(header?.classList.contains('backdrop-blur-md')).toBe(true);
    expect(header?.classList.contains('bg-[#eef4f8]/80')).toBe(true);

    // Back to top
    component.isScrolledPastViewport.set(false);
    fixture.detectChanges();

    expect(header?.classList.contains('bg-[#eef4f8]')).toBe(true);
    expect(header?.classList.contains('backdrop-blur-md')).toBe(false);
  });

  it('should toggle inert and aria-hidden attributes on mobile sidebar based on isMobileMenuOpen', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const sidebar = compiled.querySelector('aside#mobile-sidebar');

    // Closed by default
    expect(sidebar?.hasAttribute('inert')).toBe(true);
    expect(sidebar?.getAttribute('aria-hidden')).toBe('true');

    // Open menu
    component.toggleMobileMenu();
    fixture.detectChanges();

    expect(sidebar?.hasAttribute('inert')).toBe(false);
    expect(sidebar?.getAttribute('aria-hidden')).toBe('false');

    // Close menu
    component.closeMobileMenu();
    fixture.detectChanges();

    expect(sidebar?.hasAttribute('inert')).toBe(true);
    expect(sidebar?.getAttribute('aria-hidden')).toBe('true');
  });
});
