import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { CustomersHero } from './hero';

describe('CustomersHero', () => {
  let component: CustomersHero;
  let fixture: ComponentFixture<CustomersHero>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersHero],
      providers: [
        provideTranslateService({
          fallbackLang: 'en',
        }),
      ],
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);

    translateService.setTranslation('en', {
      OUR_CUSTOMERS: {
        HERO: {
          TITLE_PREFIX: 'For more than 24 years we help customers grow ',
          TITLE_HIGHLIGHT: 'and develop',
          DESCRIPTION:
            'Software is a long-term and very important investment that is at the center of enterprise activities.',
          IMAGE_ALT:
            'Modern 3D isometric dashboard showing enterprise analytics, customer success index, and verified company metrics',
        },
      },
    });
    translateService.use('en');

    fixture = TestBed.createComponent(CustomersHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the two-tone heading formula', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h1#customers-hero-heading');
    expect(heading).toBeTruthy();
    expect(heading?.textContent).toContain('For more than 24 years we help customers grow');
    expect(heading?.textContent).toContain('and develop');

    const highlightSpan = heading?.querySelector('span.text-\\[\\#066b5b\\]');
    expect(highlightSpan?.textContent?.trim()).toBe('and develop');
  });

  it('should render the description paragraph', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const desc = compiled.querySelector('p');
    expect(desc?.textContent).toContain('Software is a long-term and very important investment');
  });

  it('should not render CTA buttons or trust metrics strip', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const ctaButton = compiled.querySelector('a[mat-flat-button]');
    const statsContainer = compiled.querySelector('.grid-cols-3');

    expect(ctaButton).toBeNull();
    expect(statsContainer).toBeNull();
  });

  it('should render the 3D isometric tablet illustration with correct attributes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('/images/our-customers/3D-Contact.webp');
    expect(img?.getAttribute('width')).toBe('1536');
    expect(img?.getAttribute('height')).toBe('1024');
    expect(img?.hasAttribute('priority')).toBe(true);
    expect(img?.getAttribute('draggable')).toBe('false');
  });

  it('should not render the card box container or verification pill badge', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cardBox = compiled.querySelector('.rounded-3xl.border-slate-200\\/80');
    const shieldIcon = compiled.querySelector('ng-icon');

    expect(cardBox).toBeNull();
    expect(shieldIcon).toBeNull();
  });
});
