import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { DetailedRoadmap } from './detailed-roadmap';

describe('DetailedRoadmap', () => {
  let component: DetailedRoadmap;
  let fixture: ComponentFixture<DetailedRoadmap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedRoadmap],
      providers: [provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedRoadmap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create the detailed roadmap component', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 detailed roadmap stages', () => {
    expect(component.steps.length).toBe(5);
    expect(component.currentStep().id).toBe('preparation');
  });

  it('should update active step when setActiveStep is called', () => {
    component.setActiveStep(2);
    fixture.detectChanges();

    expect(component.activeIndex()).toBe(2);
    expect(component.currentStep().id).toBe('realization');
  });

  it('should navigate with nextStep and prevStep', () => {
    component.nextStep();
    expect(component.activeIndex()).toBe(1);
    expect(component.currentStep().id).toBe('blueprint');

    component.prevStep();
    expect(component.activeIndex()).toBe(0);
    expect(component.currentStep().id).toBe('preparation');
  });

  it('should handle arrow keyboard navigation', () => {
    const rightEvent = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    component.onKeydown(rightEvent, 0);
    expect(component.activeIndex()).toBe(1);

    const leftEvent = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
    component.onKeydown(leftEvent, 1);
    expect(component.activeIndex()).toBe(0);

    const endEvent = new KeyboardEvent('keydown', { key: 'End' });
    component.onKeydown(endEvent, 0);
    expect(component.activeIndex()).toBe(4);

    const homeEvent = new KeyboardEvent('keydown', { key: 'Home' });
    component.onKeydown(homeEvent, 4);
    expect(component.activeIndex()).toBe(0);
  });

  it('should render section with aria-labelledby and heading', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const section = compiled.querySelector('section#detailed-roadmap');
    expect(section).toBeTruthy();
    expect(section?.getAttribute('aria-labelledby')).toBe(
      'detailed-roadmap-heading',
    );

    const heading = compiled.querySelector('h2#detailed-roadmap-heading');
    expect(heading).toBeTruthy();
  });
});
