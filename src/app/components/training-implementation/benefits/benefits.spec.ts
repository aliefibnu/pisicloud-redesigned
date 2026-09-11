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

  it('should render all 5 benefits inside a single shared container with divider lines', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const container = compiled.querySelector('.max-w-4xl');
    expect(container).toBeTruthy();
    expect(container?.classList.contains('divide-y')).toBe(true);

    const rows = container?.querySelectorAll(':scope > div') ?? [];
    expect(rows.length).toBe(5);

    // Verify all 5 benefits content and badges
    const expectedBenefits = [
      { num: '01', title: 'Improved Efficiency & Productivity' },
      { num: '02', title: 'Enhanced User Adoption & Satisfaction' },
      { num: '03', title: 'Reduced Errors & System Downtime' },
      { num: '04', title: 'Increased Return on Investment (ROI)' },
      { num: '05', title: 'Streamlined Processes & Cross-Collaboration' },
    ];

    expectedBenefits.forEach((expected, idx) => {
      const row = rows[idx];
      expect(row.textContent).toContain(expected.title);
      expect(row.textContent).not.toContain(expected.num);
      // Verify no alternating zigzag classes
      expect(row.classList.contains('md:flex-row-reverse')).toBe(false);
    });
  });

  it('should render the closing callout card with CTA button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const ctaButton = compiled.querySelector('a[mat-flat-button]');
    expect(ctaButton).toBeTruthy();
    expect(ctaButton?.textContent).toContain('Talk to an Implementation Specialist');
    expect(compiled.textContent).toContain("Ready to Unlock Your Software's Full Potential?");
  });

  it('should not render eyebrow text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).not.toContain('Measurable Impact');
  });
});
