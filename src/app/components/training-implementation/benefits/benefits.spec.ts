import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { Benefits } from './benefits';

describe('TrainingImplementation Benefits', () => {
  let component: Benefits;
  let fixture: ComponentFixture<Benefits>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Benefits],
      providers: [
        provideRouter([]),
        provideTranslateService({
          fallbackLang: 'en',
        }),
      ],
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);

    translateService.setTranslation('en', {
      TRAINING_IMPLEMENTATION: {
        BENEFITS: {
          EYEBROW: 'Measurable Impact',
          TITLE_PREFIX: 'Key Benefits of ',
          TITLE_HIGHLIGHT: 'Training & Re-Implementation',
          DESCRIPTION: 'Achieve higher adoption and reduced operating friction.',
          ITEMS: {
            B1: { NUMBER: '01', TITLE: 'Improved Efficiency & Productivity', DESCRIPTION: 'Optimize daily workflows.' },
            B2: { NUMBER: '02', TITLE: 'Enhanced User Adoption & Satisfaction', DESCRIPTION: 'Foster confidence across departments.' },
            B3: { NUMBER: '03', TITLE: 'Reduced Errors & System Downtime', DESCRIPTION: 'Minimize operational bottlenecks.' },
            B4: { NUMBER: '04', TITLE: 'Increased Return on Investment (ROI)', DESCRIPTION: 'Unlock advanced features.' },
            B5: { NUMBER: '05', TITLE: 'Streamlined Processes & Cross-Collaboration', DESCRIPTION: 'Standardize operational workflows.' },
          },
          CALLOUT: {
            TITLE: "Ready to Unlock Your Software's Full Potential?",
            DESCRIPTION: 'Our Program will ensure your team is equipped for success.',
            CTA_BUTTON: 'Talk to an Implementation Specialist',
          },
        },
      },
    });
    translateService.use('en');

    fixture = TestBed.createComponent(Benefits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the two-tone heading formula', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h2#benefits-heading');
    expect(heading).toBeTruthy();
    expect(heading?.textContent).toContain('Key Benefits of');
    expect(heading?.textContent).toContain('Training & Re-Implementation');

    const highlightSpan = heading?.querySelector('span.text-\\[\\#066b5b\\]');
    expect(highlightSpan?.textContent?.trim()).toBe('Training & Re-Implementation');
  });

  it('should render all 5 benefits cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Improved Efficiency & Productivity');
    expect(compiled.textContent).toContain('Enhanced User Adoption & Satisfaction');
    expect(compiled.textContent).toContain('Reduced Errors & System Downtime');
    expect(compiled.textContent).toContain('Increased Return on Investment (ROI)');
    expect(compiled.textContent).toContain('Streamlined Processes & Cross-Collaboration');
  });

  it('should render the closing callout card with CTA button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const ctaButton = compiled.querySelector('a[mat-flat-button]');
    expect(ctaButton).toBeTruthy();
    expect(ctaButton?.textContent).toContain('Talk to an Implementation Specialist');
    expect(compiled.textContent).toContain("Ready to Unlock Your Software's Full Potential?");
  });
});
