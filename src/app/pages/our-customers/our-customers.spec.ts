import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { OurCustomers } from './our-customers';

describe('OurCustomers', () => {
  let component: OurCustomers;
  let fixture: ComponentFixture<OurCustomers>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCustomers],
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
          IMAGE_ALT: 'Modern 3D isometric dashboard',
        },
        LOGO_GRID: {
          BADGE: 'CLIENT PORTFOLIO',
          TITLE_PREFIX: 'PISICloud ',
          TITLE_HIGHLIGHT: 'Customer',
          TITLE_SUFFIX: ' Ecosystem',
          SUBTITLE: 'Trusted by industry leaders across manufacturing, hospitality, engineering.',
          SEARCH_PLACEHOLDER: 'Search client company name...',
          COUNT_BADGE: 'Showing {{count}} of {{total}} Enterprise Partners',
          NO_RESULTS: 'No client companies match your search',
          RESET_SEARCH: 'Clear Search',
        },
      },
    });
    translateService.use('en');

    fixture = TestBed.createComponent(OurCustomers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the OurCustomers page orchestrator', () => {
    expect(component).toBeTruthy();
  });

  it('should render both the hero and logo-grid sections', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const hero = compiled.querySelector('customers-hero');
    const logoGrid = compiled.querySelector('customers-logo-grid');

    expect(hero).toBeTruthy();
    expect(logoGrid).toBeTruthy();
  });
});
