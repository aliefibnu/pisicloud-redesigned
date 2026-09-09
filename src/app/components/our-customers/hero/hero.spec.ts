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
          BADGE: 'ENTERPRISE TRUSTED PARTNER',
          TITLE_PREFIX: 'For more than 24 years we help customers grow ',
          TITLE_HIGHLIGHT: 'and develop',
          DESCRIPTION:
            'Software is a long-term and very important investment that is at the center of enterprise activities.',
          CTA_PRIMARY: 'Explore Client Directory',
          CTA_SECONDARY: 'Consult With Our Team',
          STATS: {
            YEARS_VALUE: '24+',
            YEARS_LABEL: 'Years of Proven Experience',
            CLIENTS_VALUE: '100+',
            CLIENTS_LABEL: 'Enterprise Clients Empowered',
            RETENTION_VALUE: '99.8%',
            RETENTION_LABEL: 'Client Retention Rate',
          },
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

  it('should render the CTA buttons with valid href links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const primaryBtn = compiled.querySelector('a[href="#client-directory"]');
    const secondaryBtn = compiled.querySelector('a[href="#contact"]');

    expect(primaryBtn).toBeTruthy();
    expect(primaryBtn?.textContent).toContain('Explore Client Directory');

    expect(secondaryBtn).toBeTruthy();
    expect(secondaryBtn?.textContent).toContain('Consult With Our Team');
  });

  it('should render all 3 trust metric items in the stats strip', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const statsContainer = compiled.querySelector('.grid-cols-3');
    expect(statsContainer).toBeTruthy();
    expect(statsContainer?.textContent).toContain('24+');
    expect(statsContainer?.textContent).toContain('Years of Proven Experience');
    expect(statsContainer?.textContent).toContain('100+');
    expect(statsContainer?.textContent).toContain('Enterprise Clients Empowered');
    expect(statsContainer?.textContent).toContain('99.8%');
    expect(statsContainer?.textContent).toContain('Client Retention Rate');
  });

  it('should render the 3D isometric dashboard illustration with correct attributes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('/images/our-customers/hero-illustration.webp');
    expect(img?.getAttribute('width')).toBe('1200');
    expect(img?.getAttribute('height')).toBe('896');
    expect(img?.hasAttribute('priority')).toBe(true);
    expect(img?.getAttribute('draggable')).toBe('false');
  });
});
