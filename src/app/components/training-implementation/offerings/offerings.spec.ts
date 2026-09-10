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
              TAG: 'Team Enablement',
              TITLE: 'Comprehensive Training Sessions',
              DESCRIPTION: 'Hands-on training sessions tailored to your needs.',
            },
            REIMPLEMENTATION: {
              TAG: 'System Tuning',
              TITLE: 'Re-Implementation Support',
              DESCRIPTION: 'Revisiting your current setup to fine-tune configuration.',
            },
            MATERIALS: {
              TAG: 'Knowledge Base',
              TITLE: 'Customized Learning Materials',
              DESCRIPTION: 'Customized learning materials including guides and videos.',
            },
            SUPPORT: {
              TAG: 'Long-Term Partnership',
              TITLE: 'Ongoing Support and Assistance',
              DESCRIPTION: 'Continuous support to address questions or issues.',
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

  it('should render all 4 offering pillar cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('h3');
    expect(cards.length).toBe(4);
    expect(compiled.textContent).toContain('Comprehensive Training Sessions');
    expect(compiled.textContent).toContain('Re-Implementation Support');
    expect(compiled.textContent).toContain('Customized Learning Materials');
    expect(compiled.textContent).toContain('Ongoing Support and Assistance');
  });

  it('should render pillar tags', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Team Enablement');
    expect(compiled.textContent).toContain('System Tuning');
    expect(compiled.textContent).toContain('Knowledge Base');
    expect(compiled.textContent).toContain('Long-Term Partnership');
  });
});
