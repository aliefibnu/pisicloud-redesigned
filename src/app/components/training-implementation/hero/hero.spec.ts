import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { Hero } from './hero';

describe('TrainingImplementation Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
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
          TITLE_PREFIX: 'Training & ',
          TITLE_HIGHLIGHT: 'Re-Implementation',
          DESCRIPTION:
            'Empower your workforce and maximize your software investment with tailored training programs and expert system re-implementation.',
          CTA_PRIMARY: 'Schedule a Consultation',
          IMAGE_ALT: 'PisiCloud collaborative software training workshop',
          UI_BADGE_1: '100% Customized Curriculum',
          UI_BADGE_2: 'System Performance Optimized',
        },
      },
    });
    translateService.use('en');

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render eyebrow pill badge', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const badge = compiled.querySelector('.inline-flex.items-center.gap-2.rounded-full');
    expect(badge).toBeNull();
  });

  it('should render the two-tone heading formula', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h1#training-hero-heading');
    expect(heading).toBeTruthy();
    expect(heading?.textContent).toContain('Training &');
    expect(heading?.textContent).toContain('Re-Implementation');

    const highlightSpan = heading?.querySelector('span.text-\\[\\#066b5b\\]');
    expect(highlightSpan?.textContent?.trim()).toBe('Re-Implementation');
  });

  it('should render the description text below the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const desc = compiled.querySelector('p');
    expect(desc?.textContent).toContain(
      'Empower your workforce and maximize your software investment'
    );
  });

  it('should render primary CTA button and not render secondary CTA button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const primaryBtn = compiled.querySelector('a[mat-flat-button]');
    const secondaryBtn = compiled.querySelector('a[mat-stroked-button]');

    expect(primaryBtn).toBeTruthy();
    expect(primaryBtn?.textContent).toContain('Schedule a Consultation');
    expect(secondaryBtn).toBeNull();
  });

  it('should render the 3D visual asset with NgOptimizedImage attributes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('/images/training-implementation/hero-3d.webp');
    expect(img?.getAttribute('width')).toBe('1376');
    expect(img?.getAttribute('height')).toBe('768');
    expect(img?.hasAttribute('priority')).toBe(true);
    expect(img?.getAttribute('draggable')).toBe('false');
  });

  it('should render the floating UI micro-badges', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('100% Customized Curriculum');
    expect(compiled.textContent).toContain('System Performance Optimized');
  });
});
