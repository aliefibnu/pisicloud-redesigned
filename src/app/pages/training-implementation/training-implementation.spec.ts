import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { TrainingImplementation } from './training-implementation';

describe('TrainingImplementation', () => {
  let component: TrainingImplementation;
  let fixture: ComponentFixture<TrainingImplementation>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingImplementation],
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
        HERO: {
          BADGE: 'Software Adoption & Professional Services',
          TITLE_PREFIX: 'Training & ',
          TITLE_HIGHLIGHT: 'Re-Implementation',
          DESCRIPTION: 'We are committed to helping our clients get the most out of their software investments.',
          CTA_PRIMARY: 'Schedule a Consultation',
          CTA_SECONDARY: 'Explore Program Details',
          IMAGE_ALT: 'PisiCloud software training workshop',
          UI_BADGE_1: '100% Customized Curriculum',
          UI_BADGE_2: 'System Performance Optimized',
        },
        OFFERINGS: {
          EYEBROW: 'Core Programs',
          TITLE_PREFIX: 'End-to-End ',
          TITLE_HIGHLIGHT: 'Implementation Excellence',
          DESCRIPTION: 'Designed to empower your workforce.',
          ITEMS: {
            TRAINING: { TAG: 'Team Enablement', TITLE: 'Comprehensive Training Sessions', DESCRIPTION: 'Training desc.' },
            REIMPLEMENTATION: { TAG: 'System Tuning', TITLE: 'Re-Implementation Support', DESCRIPTION: 'Re-impl desc.' },
            MATERIALS: { TAG: 'Knowledge Base', TITLE: 'Customized Learning Materials', DESCRIPTION: 'Materials desc.' },
            SUPPORT: { TAG: 'Long-Term Partnership', TITLE: 'Ongoing Support and Assistance', DESCRIPTION: 'Support desc.' },
          },
        },
        BENEFITS: {
          EYEBROW: 'Measurable Impact',
          TITLE_PREFIX: 'Key Benefits of ',
          TITLE_HIGHLIGHT: 'Training & Re-Implementation',
          DESCRIPTION: 'Achieve higher adoption.',
          ITEMS: {
            B1: { NUMBER: '01', TITLE: 'Improved Efficiency & Productivity', DESCRIPTION: 'Desc 1.' },
            B2: { NUMBER: '02', TITLE: 'Enhanced User Adoption & Satisfaction', DESCRIPTION: 'Desc 2.' },
            B3: { NUMBER: '03', TITLE: 'Reduced Errors & System Downtime', DESCRIPTION: 'Desc 3.' },
            B4: { NUMBER: '04', TITLE: 'Increased Return on Investment (ROI)', DESCRIPTION: 'Desc 4.' },
            B5: { NUMBER: '05', TITLE: 'Streamlined Processes & Cross-Collaboration', DESCRIPTION: 'Desc 5.' },
          },
          CALLOUT: {
            TITLE: "Ready to Unlock Your Software's Full Potential?",
            DESCRIPTION: 'Callout desc.',
            CTA_BUTTON: 'Talk to an Implementation Specialist',
          },
        },
      },
      UNIVERSAL: {
        FAQ: {
          TITLE_LINE_1: 'Frequently',
          TITLE_LINE_2: 'Asked',
          TITLE_HIGHLIGHT: 'Questions',
          ITEMS: {},
        },
      },
      LANDING: {
        MARQUEE: {
          TITLE: 'Trusted by 100+ Companies',
        },
      },
    });
    translateService.use('en');

    fixture = TestBed.createComponent(TrainingImplementation);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render child sections including hero, offerings, benefits, and universal faq', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('training-hero')).toBeTruthy();
    expect(compiled.querySelector('training-offerings')).toBeTruthy();
    expect(compiled.querySelector('training-benefits')).toBeTruthy();
    expect(compiled.querySelector('universal-faq')).toBeTruthy();
    expect(compiled.querySelector('landing-companies-marquee')).toBeTruthy();
  });
});
