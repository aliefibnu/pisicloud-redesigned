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
      UNIVERSAL: {
        FAQ: {
          TITLE_LINE_1: 'Frequently',
          TITLE_LINE_2: 'Asked',
          TITLE_HIGHLIGHT: 'Questions',
          ITEMS: {
            Q1: { QUESTION: 'Q1', ANSWER: 'A1' },
            Q2: { QUESTION: 'Q2', ANSWER: 'A2' },
            Q3: { QUESTION: 'Q3', ANSWER: 'A3' },
            Q4: { QUESTION: 'Q4', ANSWER: 'A4' },
            Q5: { QUESTION: 'Q5', ANSWER: 'A5' },
          },
        },
      },
      OUR_CUSTOMERS: {
        HERO: {
          TITLE_PREFIX: 'For more than 24 years we help customers grow ',
          TITLE_HIGHLIGHT: 'and develop',
          DESCRIPTION:
            'Software is a long-term and very important investment that is at the center of enterprise activities.',
          IMAGE_ALT: 'Modern 3D isometric dashboard',
        },
        LOGO_GRID: {
          TITLE_PREFIX: 'PISICloud ',
          TITLE_HIGHLIGHT: 'Customer',
          TITLE_SUFFIX: ' Ecosystem',
          SUBTITLE: 'Trusted by industry leaders across manufacturing, hospitality, engineering.',
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

  it('should render the hero, logo-grid, and universal-faq sections in order', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const hero = compiled.querySelector('customers-hero');
    const logoGrid = compiled.querySelector('customers-logo-grid');
    const faq = compiled.querySelector('universal-faq');

    expect(hero).toBeTruthy();
    expect(logoGrid).toBeTruthy();
    expect(faq).toBeTruthy();
  });
});
