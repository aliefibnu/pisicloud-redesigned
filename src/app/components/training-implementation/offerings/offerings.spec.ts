import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { Offerings } from './offerings';

describe('TrainingImplementation Offerings', () => {
  let component: Offerings;
  let fixture: ComponentFixture<Offerings>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Offerings],
      providers: [
        provideTranslateService({
          fallbackLang: 'en',
        }),
      ],
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);

    translateService.setTranslation('en', {
      TRAINING_IMPLEMENTATION: {
        OFFERINGS: {
          EYEBROW: 'Core Programs',
          TITLE_PREFIX: 'End-to-End ',
          TITLE_HIGHLIGHT: 'Implementation Excellence',
          DESCRIPTION: 'Designed to empower your workforce.',
          ITEMS: {
            TRAINING: {
              TITLE: 'Comprehensive Training Sessions',
              DESCRIPTION: 'Hands-on, role-based training tailored to your workflows to ensure your team masters every feature with confidence.',
            },
            REIMPLEMENTATION: {
              TITLE: 'Re-Implementation Support',
              DESCRIPTION: 'Re-evaluate and fine-tune your software configuration to eliminate bottlenecks and optimize operational efficiency.',
            },
            MATERIALS: {
              TITLE: 'Customized Learning Materials',
              DESCRIPTION: 'Tailored user guides, video walkthroughs, and reference documentation built specifically for your team.',
            },
            SUPPORT: {
              TITLE: 'Ongoing Support and Assistance',
              DESCRIPTION: 'Dedicated post-implementation guidance and continuous technical assistance to keep operations running smoothly.',
            },
          },
        },
      },
    });
    translateService.use('en');

    fixture = TestBed.createComponent(Offerings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the two-tone heading formula', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h2#offerings-heading');
    expect(heading).toBeTruthy();
    expect(heading?.textContent).toContain('End-to-End');
    expect(heading?.textContent).toContain('Implementation Excellence');

    const highlightSpan = heading?.querySelector('span.text-\\[\\#066b5b\\]');
    expect(highlightSpan?.textContent?.trim()).toBe('Implementation Excellence');
  });

  it('should render all 4 offering pillar cards with shortened descriptions', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('h3');
    expect(cards.length).toBe(4);
    expect(compiled.textContent).toContain('Comprehensive Training Sessions');
    expect(compiled.textContent).toContain('Re-Implementation Support');
    expect(compiled.textContent).toContain('Customized Learning Materials');
    expect(compiled.textContent).toContain('Ongoing Support and Assistance');

    expect(compiled.textContent).toContain('Hands-on, role-based training tailored to your workflows');
    expect(compiled.textContent).toContain('Re-evaluate and fine-tune your software configuration');
  });

  it('should not render pillar badges or tags', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).not.toContain('Team Enablement');
    expect(compiled.textContent).not.toContain('System Tuning');
    expect(compiled.textContent).not.toContain('Knowledge Base');
    expect(compiled.textContent).not.toContain('Long-Term Partnership');
  });

  it('should not render specialized consultant delivery footer or arrow', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).not.toContain('Specialized Consultant Delivery');
    expect(compiled.querySelector('.border-t')).toBeNull();
  });

  it('should not render eyebrow text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).not.toContain('Core Programs');
  });
});
