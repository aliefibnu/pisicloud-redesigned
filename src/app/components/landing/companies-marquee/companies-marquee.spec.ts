import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { CompaniesMarquee } from './companies-marquee';

describe('CompaniesMarquee', () => {
  let component: CompaniesMarquee;
  let fixture: ComponentFixture<CompaniesMarquee>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompaniesMarquee],
      providers: [
        provideTranslateService({
          fallbackLang: 'en',
        }),
      ],
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);
    translateService.setTranslation('en', {
      LANDING: {
        TRUSTED: {
          BRAND: 'PISICloud',
          TITLE_LINE_1_SUFFIX: 'Has',
          TITLE_LINE_2_PREFIX: 'Been Trusted By 100+ Leading',
          TITLE_LINE_2_HIGHLIGHT: 'Companies',
        },
      },
    });
    translateService.use('en');

    fixture = TestBed.createComponent(CompaniesMarquee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the heading with brand and highlight styling', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h2 = compiled.querySelector('h2');
    expect(h2).toBeTruthy();
    expect(h2?.textContent).toContain('PISICloud');
    expect(h2?.textContent).toContain('Has');
    expect(h2?.textContent).toContain('Been Trusted By 100+ Leading');
    expect(h2?.textContent).toContain('Companies');
  });

  it('should render 46 client company logos in the primary list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const primaryTrack = compiled.querySelector('[role="list"]');
    expect(primaryTrack).toBeTruthy();

    const items = primaryTrack?.querySelectorAll('[role="listitem"]');
    expect(items?.length).toBe(46);

    const firstImg = items?.[0]?.querySelector('img');
    expect(firstImg?.getAttribute('src')).toBe('/images/companies/1.png');
    expect(firstImg?.getAttribute('alt')).toBe('Client company 1 logo');
  });

  it('should render a duplicate track with aria-hidden="true" for continuous loop', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const duplicateTrack = compiled.querySelector('.marquee-container [aria-hidden="true"]');
    expect(duplicateTrack).toBeTruthy();

    const duplicateImgs = duplicateTrack?.querySelectorAll('img');
    expect(duplicateImgs?.length).toBe(46);
  });
});
