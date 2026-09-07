import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { Solution } from './solution';

describe('Solution', () => {
  let component: Solution;
  let fixture: ComponentFixture<Solution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solution],
      providers: [provideTranslateService()],
    }).compileComponents();

    const translate = TestBed.inject(TranslateService);
    translate.setTranslation('en', {
      LANDING: {
        SOLUTION: {
          HEADING_HIGHLIGHT: 'PISICloud',
          HEADING_PART1: 'Can be a solution for',
          HEADING_PART2: 'various business sectors',
          HEADING_PART3: 'among them',
          PREV_BUTTON_LABEL: 'Previous business sector',
          NEXT_BUTTON_LABEL: 'Next business sector',
          PAGINATION_LABEL: 'Sector slides pagination',
          SLIDE_PAGINATION_PREFIX: 'Go to slide',
          SLIDES: {
            LOGISTICS: {
              LABEL: 'Logistics & Transportation',
              SUPPORTING_TEXT: 'Optimizing fleet management, driver route shift scheduling, and automated overtime formulas.',
              ALT: 'Commercial freight trucks logistics and distribution fleet',
            },
            MANUFACTURING: {
              LABEL: 'Manufacturing & Industrial',
              SUPPORTING_TEXT: 'Direct machine attendance connectivity, 24/7 complex shift rotations, and automated payroll formulas.',
              ALT: 'Smart factory manufacturing automation and robotics plant',
            },
            CORPORATE: {
              LABEL: 'Corporate & Technology',
              SUPPORTING_TEXT: 'Flexible working hours, app-based mobile attendance, and seamless multi-level leave approvals.',
              ALT: 'Corporate professional working on laptop with headset and coffee',
            },
            CONSTRUCTION: {
              LABEL: 'Construction & Infrastructure',
              SUPPORTING_TEXT: 'On-site daily attendance monitoring, project-based labor allocation, and compliant tax calculations.',
              ALT: 'City skyscraper construction crane illuminated at twilight',
            },
          },
        },
      },
    });
    translate.use('en');

    fixture = TestBed.createComponent(Solution);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 base slides and 60 virtual slides for smooth infinite scroll', () => {
    expect(component.baseSlides.length).toBe(4);
    expect(component.virtualSlides.length).toBe(60);

    for (const slide of component.baseSlides) {
      expect(slide.label.length).toBeGreaterThan(0);
      expect(slide.supportingText.length).toBeGreaterThan(0);
    }
  });

  it('should initially have slide 3 (index 2) active matching the screenshot', () => {
    expect(component.activeSlideIndex()).toBe(2);
  });

  it('should navigate forward and backward on next() and prev()', () => {
    const initialVirtual = component.virtualIndex();
    component.next();
    expect(component.virtualIndex()).toBe(initialVirtual + 1);
    expect(component.activeSlideIndex()).toBe(3);

    component.prev();
    expect(component.virtualIndex()).toBe(initialVirtual);
    expect(component.activeSlideIndex()).toBe(2);
  });

  it('should navigate to specific slide index via goToSlideIndex()', () => {
    component.goToSlideIndex(0);
    expect(component.activeSlideIndex()).toBe(0);

    component.goToSlideIndex(3);
    expect(component.activeSlideIndex()).toBe(3);
  });

  it('should support pause and resume for infinite auto-scroll', () => {
    component.pauseAutoScroll();
    expect(component.isAutoScrolling()).toBe(false);
    component.resumeAutoScroll();
    expect(component.isAutoScrolling()).toBe(true);
  });

  it('should render section heading with PISICloud highlight', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('#solution-heading');
    expect(heading?.textContent).toContain('PISICloud');
    expect(heading?.textContent).toContain('business sectors');
  });

  it('should render 4 pagination dots with 3rd dot active', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const paginationButtons = compiled.querySelectorAll('[role="tab"]');
    expect(paginationButtons.length).toBe(4);
    expect(paginationButtons[2].getAttribute('aria-selected')).toBe('true');
  });

  it('should render left and right navigation arrow buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const prevBtn = compiled.querySelector('button[aria-label="Previous business sector"]');
    const nextBtn = compiled.querySelector('button[aria-label="Next business sector"]');
    expect(prevBtn).toBeTruthy();
    expect(nextBtn).toBeTruthy();
  });

  it('should NOT render the upward scroll-to-top button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const scrollBtn = compiled.querySelector('button[aria-label="Scroll to top of page"]');
    expect(scrollBtn).toBeNull();
  });
});
