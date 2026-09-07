import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { Features } from './features';

describe('Features', () => {
  let component: Features;
  let fixture: ComponentFixture<Features>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Features],
      providers: [provideTranslateService()],
    }).compileComponents();

    const translate = TestBed.inject(TranslateService);
    translate.setTranslation('en', {
      LANDING: {
        FEATURES: {
          HEADING_PREFIX: 'PISICloud,',
          HEADING_BODY: 'Reliable HR Software',
          HEADING_SUFFIX: 'With Various Excellent Features',
          LEARN_MORE: 'Learn More',
        },
      },
    });
    translate.use('en');

    fixture = TestBed.createComponent(Features);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 12 features loaded with both full and short descriptions', () => {
    expect(component.features.length).toBe(12);
    for (const feature of component.features) {
      expect(feature.title.length).toBeGreaterThan(0);
      expect(feature.description.length).toBeGreaterThan(0);
      expect(feature.shortDescription.length).toBeGreaterThan(0);
      expect(feature.image.length).toBeGreaterThan(0);
    }
  });

  it('should render the heading with PISICloud highlight', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('#features-heading');
    expect(heading?.textContent).toContain('PISICloud');
    expect(heading?.textContent).toContain('Reliable HR Software');
    expect(heading?.textContent).toContain('With Various Excellent Features');
  });

  it('should render both mobile list and desktop grid for responsiveness', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const articles = compiled.querySelectorAll('article');
    // 12 for mobile list view + 12 for desktop grid view
    expect(articles.length).toBe(24);

    const learnMoreButtons = compiled.querySelectorAll('a[aria-label^="Learn More"]');
    expect(learnMoreButtons.length).toBe(12);
  });
});
