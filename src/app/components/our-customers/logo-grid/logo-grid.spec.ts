import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { CustomersLogoGrid } from './logo-grid';

describe('CustomersLogoGrid', () => {
  let component: CustomersLogoGrid;
  let fixture: ComponentFixture<CustomersLogoGrid>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersLogoGrid],
      providers: [
        provideTranslateService({
          fallbackLang: 'en',
        }),
      ],
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);

    translateService.setTranslation('en', {
      OUR_CUSTOMERS: {
        LOGO_GRID: {
          TITLE_PREFIX: 'PISICloud ',
          TITLE_HIGHLIGHT: 'Customer',
          TITLE_SUFFIX: ' Ecosystem',
          SUBTITLE:
            'Trusted by industry leaders across manufacturing, hospitality, engineering, electronics, and commercial enterprises.',
        },
      },
    });
    translateService.use('en');

    fixture = TestBed.createComponent(CustomersLogoGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with all 46 partner logos', () => {
    expect(component.allLogos.length).toBe(46);
  });

  it('should render the two-tone heading formula and subtitle', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h2#client-directory-heading');
    expect(heading).toBeTruthy();
    expect(heading?.textContent).toContain('PISICloud');
    expect(heading?.textContent).toContain('Customer');
    expect(heading?.textContent).toContain('Ecosystem');

    const highlightSpan = heading?.querySelector('span.text-\\[\\#066b5b\\]');
    expect(highlightSpan?.textContent?.trim()).toBe('Customer');

    const subtitle = compiled.querySelector('p');
    expect(subtitle?.textContent).toContain('Trusted by industry leaders');
  });

  it('should not render client portfolio badge, search bar, or count badge', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('input[type="text"]')).toBeNull();
    expect(compiled.textContent).not.toContain('CLIENT PORTFOLIO');
    expect(compiled.textContent).not.toContain('Enterprise Partners');
  });

  it('should render framed logo cards for each company', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('div[role="listitem"]');
    expect(cards.length).toBe(46);

    const firstImg = cards[0].querySelector('img');
    expect(firstImg).toBeTruthy();
    expect(firstImg?.getAttribute('src')).toBe('/images/companies/1.webp');
    expect(firstImg?.getAttribute('draggable')).toBe('false');
  });
});
