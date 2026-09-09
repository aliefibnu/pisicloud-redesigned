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
          BADGE: 'CLIENT PORTFOLIO',
          TITLE_PREFIX: 'PISICloud ',
          TITLE_HIGHLIGHT: 'Customer',
          TITLE_SUFFIX: ' Ecosystem',
          SUBTITLE:
            'Trusted by industry leaders across manufacturing, hospitality, engineering, electronics, and commercial enterprises.',
          SEARCH_PLACEHOLDER: 'Search client company name...',
          COUNT_BADGE: 'Showing {{count}} of {{total}} Enterprise Partners',
          NO_RESULTS: 'No client companies match your search',
          RESET_SEARCH: 'Clear Search',
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
    expect(component.totalCount()).toBe(46);
    expect(component.filteredCount()).toBe(46);
  });

  it('should render the two-tone heading formula', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h2#client-directory-heading');
    expect(heading).toBeTruthy();
    expect(heading?.textContent).toContain('PISICloud');
    expect(heading?.textContent).toContain('Customer');
    expect(heading?.textContent).toContain('Ecosystem');

    const highlightSpan = heading?.querySelector('span.text-\\[\\#066b5b\\]');
    expect(highlightSpan?.textContent?.trim()).toBe('Customer');
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

  it('should filter logos dynamically when search query is entered', () => {
    component.searchQuery.set('KFI');
    fixture.detectChanges();

    expect(component.filteredCount()).toBeGreaterThan(0);
    expect(component.filteredCount()).toBeLessThan(46);

    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('div[role="listitem"]');
    expect(cards.length).toBe(component.filteredCount());
  });

  it('should display the empty state and allow clearing search when no companies match', () => {
    component.searchQuery.set('NonExistentCompanyNameXYZ123');
    fixture.detectChanges();

    expect(component.filteredCount()).toBe(0);

    const compiled = fixture.nativeElement as HTMLElement;
    const emptyState = compiled.querySelector('div.border-dashed');
    expect(emptyState).toBeTruthy();
    expect(emptyState?.textContent).toContain('No client companies match your search');

    component.clearSearch();
    fixture.detectChanges();

    expect(component.filteredCount()).toBe(46);
  });
});
